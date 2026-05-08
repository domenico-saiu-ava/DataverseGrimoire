/**
 * build-wiki-from-docs.mjs
 *
 * Genera wiki_from_docs/ dai documenti di analisi funzionale:
 *   - Datamodel_D365 1.xlsx  → wiki_from_docs/entities/{logical}.md
 *   - AF *.docx              → wiki_from_docs/processes/{slug}.md
 *   - index.json + README.md
 *
 * Usage:
 *   node scripts/build-wiki-from-docs.mjs             # genera / aggiorna
 *   node scripts/build-wiki-from-docs.mjs --clean     # pulisce e rigenera
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import mammoth from 'mammoth';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DOCS_DIR = join(ROOT, 'Documentation');
const OUTPUT_DIR = join(ROOT, 'wiki_from_docs');

// ─── Constants ────────────────────────────────────────────────────────────────

const ENTITY_HEADER_LABELS = new Set([
  'Entity', 'Plural Display Name', 'Description', 'Schema Name',
  'Logical Name', 'Is Custom Entity', 'Ownership Type', 'Object Type Code',
]);

const STANDARD_D365_ENTITIES = new Set([
  'account', 'contact', 'lead', 'appointment', 'recurringappointmentmaster',
  'phonecall', 'systemuser', 'businessunit', 'opportunity', 'quote',
  'salesorder', 'invoice', 'task', 'email', 'activityparty',
]);

const SKIP_SHEETS = new Set(['Storico Documento']);

const WORD_DOCS = [
  '20251224 AF Servizio clienti- MVP0_Sprint2 _v0.4.docx',
  '20260323 AF Retail - MVP0_Sprint1 _v11.docx',
  '20260402 AF servizio clienti - MVP0_Sprint1 _v0.11.1_SC.docx',
  '20260424 AF Retail - MVP0_Sprint2 _v0.6.docx',
];

// Process definitions: manually curated seeds, enriched from Word content
const PROCESS_DEFS = [
  {
    slug: 'gestione-lead',
    title: 'Gestione Lead e Suggerimenti',
    keywords: ['gestione lead', 'vista lead', 'scheda lead', 'suggerimento', 'gestione lead e suggerimenti'],
    entities: ['lead', 'cai_leadoutcomeactivity', 'cai_leadoutcome', 'account', 'contact'],
  },
  {
    slug: 'esitazione',
    title: 'Esitazione Lead',
    keywords: ['esitazione', 'esito lead', 'sessione di esitazione', 'esito', 'obiettivo esito'],
    entities: ['cai_leadoutcomeactivity', 'lead', 'cai_leadoutcome', 'cai_leadoutcomesessionparams'],
  },
  {
    slug: 'appuntamenti',
    title: 'Gestione Appuntamenti',
    keywords: ['appuntamento', 'richiesta appuntamento', 'prenotazione', 'appuntamento ricorrente'],
    entities: ['appointment', 'recurringappointmentmaster', 'cai_appointmentrequest'],
  },
  {
    slug: 'retail',
    title: 'Retail CRM',
    keywords: ['retail', 'portafoglio', 'campagna', 'anagrafe campagna', 'smistamento lead'],
    entities: ['lead', 'account', 'cai_portfolio', 'cai_portfoliomember', 'cai_campaign'],
  },
  {
    slug: 'servizio-clienti',
    title: 'Servizio Clienti (SC)',
    keywords: ['servizio clienti', 'sc sessione', 'sessione di esitazione'],
    entities: ['cai_leadoutcomesession', 'cai_leadoutcomesessionparams', 'contact', 'lead'],
  },
  {
    slug: 'private-banking',
    title: 'Private Banking (PRV)',
    keywords: ['private', 'nucleo', 'coverage team', 'evento prv', 'prv', 'livello gerarchico'],
    entities: ['cai_familyunit', 'cai_familyunitmember', 'cai_coverageteam', 'cai_event'],
  },
  {
    slug: 'business-dev-intelligence',
    title: 'Business Dev Intelligence (BDI)',
    keywords: ['bdi', 'customer interview', 'account plan', 'opportunità bdi', 'gruppi bdi'],
    entities: ['cai_customerinterview', 'cai_accountplan', 'cai_group'],
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function inferBusinessArea(sheetName, logical) {
  if (sheetName.startsWith('PRV ')) return 'Private Banking';
  if (sheetName.startsWith('BDI ')) return 'Business Dev Intelligence';
  if (sheetName.startsWith('SC ')) return 'Servizio Clienti';
  if (STANDARD_D365_ENTITIES.has(logical)) return 'Standard D365';
  return 'Retail / CRM';
}

// ─── Excel Parsing ────────────────────────────────────────────────────────────

function parseExcelSheet(ws, sheetName) {
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
  if (rows.length < 5) return null;

  // Find attribute header row FIRST (row containing both "Attribute Type" and "Logical Name" as column headers)
  let attrHeaderIdx = -1;
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].map(c => String(c ?? '').trim());
    if (cells.includes('Attribute Type') && cells.includes('Logical Name') && cells.includes('Display Name')) {
      attrHeaderIdx = i;
      break;
    }
  }

  // Scan entity header ONLY in rows before the attribute header (or up to row 9 max)
  const headerScanLimit = attrHeaderIdx >= 0 ? attrHeaderIdx : Math.min(rows.length, 10);

  // Detect label/value column offset: scan first headerScanLimit rows
  let labelCol = 0;
  let valueCol = 1;
  const col0Labels = rows.slice(0, headerScanLimit).map(r => String(r[0] ?? '').trim());
  const col1Labels = rows.slice(0, headerScanLimit).map(r => String(r[1] ?? '').trim());
  const col0Hits = col0Labels.filter(l => ENTITY_HEADER_LABELS.has(l)).length;
  const col1Hits = col1Labels.filter(l => ENTITY_HEADER_LABELS.has(l)).length;
  if (col1Hits > col0Hits) { labelCol = 1; valueCol = 2; }

  // Extract entity header key-value pairs (only before attribute header row)
  const header = {};
  for (const row of rows.slice(0, headerScanLimit)) {
    const label = String(row[labelCol] ?? '').trim();
    const value = String(row[valueCol] ?? '').trim();
    if (ENTITY_HEADER_LABELS.has(label) && value) {
      header[label] = value;
    }
  }

  const rawLogical = (header['Logical Name'] || '').toLowerCase().trim();
  const rawSchema = (header['Schema Name'] || '').toLowerCase().trim();
  if (!rawLogical && !rawSchema) return null;

  const logical = rawLogical || slugify(rawSchema || sheetName);
  const display_it = header['Entity'] || sheetName;
  const displayPlural_it = header['Plural Display Name'] || display_it;
  const description = header['Description'] || '';
  const isCustom = header['Is Custom Entity'] === 'TRUE';
  const ownershipType = header['Ownership Type'] || '';

  const fields = [];
  if (attrHeaderIdx >= 0) {
    const attrHeaders = rows[attrHeaderIdx].map(c => String(c ?? '').trim());
    const col = (name) => attrHeaders.indexOf(name);
    const fieldTypeIdx   = col('Field Type');
    const logicalIdx     = col('Logical Name');
    const displayIdx     = col('Display Name');
    const attrTypeIdx    = col('Attribute Type');
    const descIdx        = col('Description');
    const customAttrIdx  = col('Custom Attribute');
    const requiredIdx    = col('Required Level');
    const additionalIdx  = col('Additional data');

    for (let i = attrHeaderIdx + 1; i < rows.length; i++) {
      const row = rows[i];
      if (row.every(c => c === '' || c === null || c === undefined)) continue;

      // Skip unused/system-owned standard fields when Field Type column is present
      if (fieldTypeIdx >= 0) {
        const ft = String(row[fieldTypeIdx] ?? '').trim();
        if (ft.includes('Not used')) continue;
      }

      const fieldLogical = logicalIdx >= 0 ? String(row[logicalIdx] ?? '').trim() : '';
      if (!fieldLogical) continue;

      const attrType = attrTypeIdx >= 0 ? String(row[attrTypeIdx] ?? '').trim() : '';
      if (attrType === 'Virtual') continue; // skip virtual name fields

      fields.push({
        logical: fieldLogical,
        display_it: displayIdx >= 0 ? String(row[displayIdx] ?? '').trim() : '',
        attrType,
        description: descIdx >= 0 ? String(row[descIdx] ?? '').trim() : '',
        isCustom: customAttrIdx >= 0 ? String(row[customAttrIdx] ?? '').toLowerCase() === 'true' : false,
        required: requiredIdx >= 0 ? String(row[requiredIdx] ?? '').trim() : '',
        additional: additionalIdx >= 0 ? String(row[additionalIdx] ?? '').replace(/\r?\n/g, ' ').trim() : '',
      });
    }
  }

  return {
    logical,
    schemaName: header['Schema Name'] || logical,
    display_it,
    displayPlural_it,
    description,
    isCustom,
    ownershipType,
    businessArea: inferBusinessArea(sheetName, logical),
    fields,
    sheetName,
    // enriched later:
    processes: [],
    processRefs: [],
    docSources: ['Datamodel_D365 1.xlsx'],
    synonyms_it: [display_it.toLowerCase()],
    synonyms_en: [],
  };
}

function parseExcel() {
  const filePath = join(DOCS_DIR, 'Datamodel_D365 1.xlsx');
  const wb = XLSX.readFile(filePath);
  const entities = [];
  for (const sheetName of wb.SheetNames) {
    if (SKIP_SHEETS.has(sheetName)) continue;
    const ws = wb.Sheets[sheetName];
    const entity = parseExcelSheet(ws, sheetName);
    if (entity) entities.push(entity);
  }
  return entities;
}

// ─── Word Doc Parsing ─────────────────────────────────────────────────────────

async function parseWordDocs() {
  const docs = [];
  for (const file of WORD_DOCS) {
    const filePath = join(DOCS_DIR, file);
    if (!existsSync(filePath)) {
      console.warn(`  ⚠️  File non trovato: ${file}`);
      continue;
    }

    const { value: html } = await mammoth.convertToHtml({ path: filePath });

    // Parse heading/paragraph structure from HTML
    const sections = [];
    let headings = ['', '', ''];
    let currentText = [];

    const flush = () => {
      if (currentText.length > 0) {
        sections.push({
          h1: headings[0], h2: headings[1], h3: headings[2],
          text: currentText.join(' ').trim(),
        });
        currentText = [];
      }
    };

    // Match block-level tags; mammoth uses <h1>-<h6> and <p>
    const tagRe = /<(h[1-6]|p|li)([^>]*)>([\s\S]*?)<\/\1>/gi;
    let m;
    while ((m = tagRe.exec(html)) !== null) {
      const tag = m[1].toLowerCase();
      const inner = m[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (!inner) continue;

      if (tag === 'h1') { flush(); headings = [inner, '', '']; }
      else if (tag === 'h2') { flush(); headings = [headings[0], inner, '']; }
      else if (tag === 'h3') { flush(); headings = [headings[0], headings[1], inner]; }
      else { currentText.push(inner); }
    }
    flush();

    // Derive a short label from file name (remove date prefix + version suffix)
    const label = file
      .replace(/^\d{8}\s*/, '')
      .replace(/\s*_v[\d.]+(?:_\w+)?\.docx$/i, '')
      .trim();

    docs.push({ file, label, sections });
    console.log(`   ✓ ${label} — ${sections.length} sezioni`);
  }
  return docs;
}

// ─── Enrichment: entity ↔ Word context ───────────────────────────────────────

function enrichWithContext(entities, docs) {
  for (const entity of entities) {
    // Build search terms from the entity (min length 4 to avoid noise)
    const searchTerms = [
      entity.display_it,
      entity.displayPlural_it,
      entity.logical,
      entity.schemaName,
    ]
      .filter(Boolean)
      .map(t => t.toLowerCase().trim())
      .filter(t => t.length >= 4);

    const matched = [];
    for (const doc of docs) {
      for (const section of doc.sections) {
        const haystack = [section.h1, section.h2, section.h3, section.text]
          .join(' ')
          .toLowerCase();
        if (searchTerms.some(t => haystack.includes(t))) {
          const heading = [section.h2 || section.h1, section.h3]
            .filter(Boolean)
            .join(' › ');
          const key = `${doc.label}||${heading}`;
          if (!matched.some(x => x.key === key)) {
            matched.push({ key, doc: doc.label, heading, snippet: section.text.slice(0, 250) });
          }
        }
      }
    }

    if (matched.length > 0) {
      entity.processes = [...new Set(matched.map(m => m.heading).filter(Boolean))].slice(0, 8);
      entity.processRefs = matched.slice(0, 10);
      entity.docSources = [
        'Datamodel_D365 1.xlsx',
        ...new Set(matched.map(m => m.doc)),
      ];
    }
  }
  return entities;
}

// ─── Render: entity .md ───────────────────────────────────────────────────────

function renderEntityMdFromDocs(entity) {
  const fmFields = {
    logical: entity.logical,
    display_it: entity.display_it,
    source: 'docs_analysis',
    business_area: entity.businessArea,
    doc_sources: entity.docSources,
    synonyms_it: entity.synonyms_it,
    ...(entity.synonyms_en.length ? { synonyms_en: entity.synonyms_en } : {}),
    ...(entity.processes.length ? { processes: entity.processes } : {}),
    dataverse_logical: entity.logical,
    is_custom: entity.isCustom,
    schema_name: entity.schemaName,
    generated: new Date().toISOString().slice(0, 10),
  };

  const fmYaml = Object.entries(fmFields)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}: [${v.map(x => JSON.stringify(x)).join(', ')}]`;
      if (typeof v === 'boolean') return `${k}: ${v}`;
      return `${k}: ${JSON.stringify(v)}`;
    })
    .join('\n');

  const lines = [`---\n${fmYaml}\n---\n`];
  lines.push(`# ${entity.display_it} — Scheda funzionale\n`);
  lines.push(`**Business area:** ${entity.businessArea}  `);
  lines.push(`**Entità Dataverse:** \`${entity.logical}\`  `);
  lines.push(`**Custom:** ${entity.isCustom ? 'Sì' : 'No'}  `);
  if (entity.ownershipType) lines.push(`**Ownership:** ${entity.ownershipType}`);
  lines.push('');
  if (entity.description) lines.push(`${entity.description}\n`);

  // Fields table (exclude Virtual, show useful columns)
  const usedFields = entity.fields.filter(f => f.logical && f.attrType !== 'Virtual');
  if (usedFields.length > 0) {
    lines.push('## Campi documentati\n');
    lines.push('| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |');
    lines.push('| --- | --- | --- | --- | --- | --- |');
    for (const f of usedFields) {
      const isReq = f.required === 'ApplicationRequired' || f.required === 'SystemRequired';
      const req = isReq ? '**Sì**' : 'No';
      const desc = (f.description || '').replace(/\|/g, '/').slice(0, 150);
      lines.push(`| \`${f.logical}\` | ${f.display_it} | ${f.attrType} | ${req} | ${f.isCustom ? '✓' : ''} | ${desc} |`);
    }
    lines.push('');
  }

  // Relationships inferred from Lookup fields
  const lookups = usedFields.filter(f => f.attrType === 'Lookup' && f.additional);
  if (lookups.length > 0) {
    lines.push('## Relazioni (inferite da campi Lookup)\n');
    lines.push('| Campo | Display IT | Entità target |');
    lines.push('| --- | --- | --- |');
    for (const f of lookups) {
      const targets = f.additional.replace(/Targets?:/i, '').trim();
      lines.push(`| \`${f.logical}\` | ${f.display_it} | \`${targets}\` |`);
    }
    lines.push('');
  }

  // Process references from Word docs
  if (entity.processRefs && entity.processRefs.length > 0) {
    lines.push('## Processi correlati\n');
    for (const ref of entity.processRefs.slice(0, 8)) {
      lines.push(`- **${ref.doc}** — §${ref.heading}`);
      if (ref.snippet) lines.push(`  > ${ref.snippet.replace(/\n/g, ' ').slice(0, 200)}`);
    }
    lines.push('');
  }

  lines.push('## Fonte\n');
  lines.push(`Generato da: ${entity.docSources.join(', ')}  `);
  lines.push(`Data generazione: ${new Date().toISOString().slice(0, 10)}`);

  return lines.join('\n');
}

// ─── Render: process .md ──────────────────────────────────────────────────────

function renderProcessMd(procDef, docs) {
  const matchedSections = [];
  for (const doc of docs) {
    for (const section of doc.sections) {
      const haystack = [section.h1, section.h2, section.h3].join(' ').toLowerCase();
      if (procDef.keywords.some(k => haystack.includes(k))) {
        const heading = [section.h2 || section.h1, section.h3].filter(Boolean).join(' › ');
        const key = `${doc.label}||${heading}`;
        if (!matchedSections.some(x => x.key === key)) {
          matchedSections.push({ key, doc: doc.label, heading, section });
        }
      }
    }
  }

  const docSources = [...new Set(matchedSections.map(m => m.doc))];

  const fmYaml = [
    `slug: ${JSON.stringify(procDef.slug)}`,
    `title: ${JSON.stringify(procDef.title)}`,
    `source: "docs_analysis"`,
    `doc_sources: [${docSources.map(s => JSON.stringify(s)).join(', ')}]`,
    `entities_involved: [${procDef.entities.map(e => JSON.stringify(e)).join(', ')}]`,
    `generated: ${JSON.stringify(new Date().toISOString().slice(0, 10))}`,
  ].join('\n');

  const lines = [`---\n${fmYaml}\n---\n`];
  lines.push(`# ${procDef.title} — Processo funzionale\n`);

  if (procDef.entities.length > 0) {
    lines.push(`**Entità coinvolte:** ${procDef.entities.map(e => `\`${e}\``).join(', ')}\n`);
  }

  if (matchedSections.length > 0) {
    lines.push('## Sezioni AF di riferimento\n');
    for (const { doc, heading } of matchedSections.slice(0, 20)) {
      lines.push(`- **${doc}** — §${heading}`);
    }
    lines.push('');

    lines.push('## Estratti rilevanti\n');
    for (const { doc, heading, section } of matchedSections.slice(0, 6)) {
      if (!section.text?.trim()) continue;
      lines.push(`### ${doc} — ${heading}\n`);
      lines.push(`> ${section.text.slice(0, 500).replace(/\n/g, ' ')}\n`);
    }
  } else {
    lines.push('_Nessuna sezione trovata nei documenti AF per questo processo._\n');
  }

  lines.push('## Fonte\n');
  lines.push(`Generato da: ${docSources.join(', ') || '_nessun documento_'}  `);
  lines.push(`Data generazione: ${new Date().toISOString().slice(0, 10)}`);

  return lines.join('\n');
}

// ─── Build Index ──────────────────────────────────────────────────────────────

function buildIndex(entities, docs) {
  const entries = [];

  // Entity entries
  for (const e of entities) {
    entries.push({
      type: 'entity',
      logical: e.logical,
      display_it: e.display_it,
      synonyms_it: e.synonyms_it,
      synonyms_en: e.synonyms_en,
      business_area: e.businessArea,
      processes: e.processes,
      dataverse_logical: e.logical,
      doc_sources: e.docSources,
      file: `entities/${e.logical}.md`,
      source: 'docs_analysis',
      is_custom: e.isCustom,
      generated: new Date().toISOString().slice(0, 10),
    });
  }

  // Process entries
  for (const p of PROCESS_DEFS) {
    const docSources = docs
      .filter(d => d.sections.some(s => {
        const t = [s.h1, s.h2, s.h3].join(' ').toLowerCase();
        return p.keywords.some(k => t.includes(k));
      }))
      .map(d => d.label);
    entries.push({
      type: 'process',
      slug: p.slug,
      title: p.title,
      synonyms_it: p.keywords.slice(0, 4),
      entities_involved: p.entities,
      doc_sources: docSources,
      file: `processes/${p.slug}.md`,
      source: 'docs_analysis',
      generated: new Date().toISOString().slice(0, 10),
    });
  }

  return entries;
}

// ─── README ───────────────────────────────────────────────────────────────────

function renderReadme(entities) {
  const customCount = entities.filter(e => e.isCustom).length;
  const areas = [...new Set(entities.map(e => e.businessArea))].sort();
  const enrichedCount = entities.filter(e => e.processes.length > 0).length;
  const today = new Date().toISOString().slice(0, 10);

  return [
    '# wiki_from_docs — Wiki da Analisi Funzionali\n',
    'Strato di mapping funzionale generato automaticamente dai documenti di analisi funzionale del progetto CRM D365.\n',
    '## Contenuto\n',
    `| Metrica | Valore |`,
    `| --- | --- |`,
    `| Entità totali | **${entities.length}** |`,
    `| di cui custom | **${customCount}** |`,
    `| Standard D365 | **${entities.length - customCount}** |`,
    `| Entità con contesto Word | **${enrichedCount}** |`,
    `| Processi documentati | **${PROCESS_DEFS.length}** |`,
    `| Business area coperte | ${areas.join(', ')} |`,
    `| Data generazione | ${today} |`,
    '',
    '## Come viene usato dagli agent\n',
    'Il layer tecnico (`wiki/index.json`) è **sempre autoritativo** per lo schema.',
    'Questo wiki viene consultato **dopo** per validare/rafforzare la scelta tecnica:\n',
    '| Scenario | Comportamento |',
    '| --- | --- |',
    '| ✅ Match trovato, nessuna discrepanza | Sezione "Contesto funzionale" completa nell\'output |',
    '| ⚠️ Match trovato, discrepanza rilevata | Avviso esplicito + date aggiornamento + bozza messaggio al team Dataverse |',
    '| ❌ Nessun match in wiki_from_docs | Nota inline, schema tecnico disponibile comunque |',
    '',
    '## Aggiornamento\n',
    '```bash',
    'npm run docs          # genera / rigenera wiki_from_docs/',
    'npm run docs:rebuild  # pulisce e rigenera da zero',
    '```\n',
    `_Generato il: ${today}_`,
  ].join('\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const clean = args.includes('--clean');

  console.log('🔮 DataverseGrimoire — build-wiki-from-docs\n');

  if (clean && existsSync(OUTPUT_DIR)) {
    rmSync(OUTPUT_DIR, { recursive: true });
    console.log('🗑  Pulita directory wiki_from_docs/\n');
  }

  mkdirSync(join(OUTPUT_DIR, 'entities'), { recursive: true });
  mkdirSync(join(OUTPUT_DIR, 'processes'), { recursive: true });

  // Phase 1: Excel → entities
  console.log('📊 Fase 1 — Parsing Excel...');
  let entities = parseExcel();
  console.log(`   → ${entities.length} entità estratte\n`);

  // Phase 2: Word docs → sections
  console.log('📄 Fase 2 — Parsing Word docs...');
  const docs = await parseWordDocs();
  const totalSections = docs.reduce((s, d) => s + d.sections.length, 0);
  console.log(`   → ${docs.length} documenti, ${totalSections} sezioni totali\n`);

  // Phase 3: Enrichment
  console.log('🔗 Fase 3 — Enrichment entity ↔ Word context...');
  entities = enrichWithContext(entities, docs);
  const enriched = entities.filter(e => e.processes.length > 0).length;
  console.log(`   → ${enriched}/${entities.length} entità arricchite con contesto AF\n`);

  // Phase 4: Write entity files
  console.log('✍️  Fase 4 — Scrittura wiki_from_docs/entities/...');
  for (const entity of entities) {
    const md = renderEntityMdFromDocs(entity);
    writeFileSync(join(OUTPUT_DIR, 'entities', `${entity.logical}.md`), md, 'utf8');
  }
  console.log(`   → ${entities.length} file scritti\n`);

  // Phase 5: Write process files
  console.log('✍️  Fase 5 — Scrittura wiki_from_docs/processes/...');
  for (const proc of PROCESS_DEFS) {
    const md = renderProcessMd(proc, docs);
    writeFileSync(join(OUTPUT_DIR, 'processes', `${proc.slug}.md`), md, 'utf8');
  }
  console.log(`   → ${PROCESS_DEFS.length} pagine processo scritte\n`);

  // Phase 6: Index + README
  console.log('📑 Fase 6 — Generazione index.json + README...');
  const index = buildIndex(entities, docs);
  writeFileSync(join(OUTPUT_DIR, 'index.json'), JSON.stringify(index, null, 2), 'utf8');
  writeFileSync(join(OUTPUT_DIR, 'README.md'), renderReadme(entities), 'utf8');
  console.log(`   → ${index.length} entries nell'indice\n`);

  console.log('✅ wiki_from_docs/ generato con successo!');
  console.log(`   📁 ${OUTPUT_DIR}`);
}

main().catch(err => {
  console.error('❌ Errore fatale:', err.message);
  console.error(err.stack);
  process.exit(1);
});
