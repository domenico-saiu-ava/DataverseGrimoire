/**
 * dataverse-query-test.mjs
 * 1. Parses Datamodel_D365.md → extracts all entities + fields
 * 2. Picks 10 random entities
 * 3. Looks up wiki/index.json for entitySetName and primary fields
 * 4. Generates REST queries
 * 5. Executes them against the Dataverse tenant
 * 6. Writes output to:
 *    - Canali Specialistici Output/dataverse-queries.md      (query list)
 *    - Canali Specialistici Output/dataverse-query-report.md (execution report)
 */

import { readFileSync, writeFileSync } from 'fs';
import { getAccessToken } from './dataverse-auth.mjs';

const ENV_URL = 'https://crmoperativodevevo.crm4.dynamics.com';
const MD_PATH = 'Canali Specialistici Output/Datamodel_D365.md';
const QUERIES_OUT = 'Canali Specialistici Output/dataverse-queries.md';
const REPORT_OUT  = 'Canali Specialistici Output/dataverse-query-report.md';
const TOP = 3; // records to retrieve per query

// ─── Parse Datamodel_D365.md ────────────────────────────────────────────────

const INVALID_LOGICALS = new Set(['cai_example', 'schema name', 'nome visualizzato']);

function parseMd(md) {
  const entities = [];
  const sections = md.split(/\n## \d+\. /);
  for (const section of sections.slice(1)) {
    const lines = section.split('\n');
    const title = lines[0].trim();

    const logical  = (section.match(/\*\*Logical Name\*\*\s*\|\s*`([^`]+)`/) || [])[1];
    const schema   = (section.match(/\*\*Schema Name\*\*\s*\|\s*`([^`]+)`/) || [])[1];
    const isCustom = /Is Custom Entity.*True/i.test(section);

    if (!logical || !schema) continue;
    // Skip placeholder / bad entries
    if (INVALID_LOGICALS.has(logical.toLowerCase()) || logical.includes(' ')) continue;

    const fields = [];
    let inTable = false;
    let hasFieldTypeCol = false;
    for (const line of lines) {
      if (line.startsWith('| Logical Name') || line.startsWith('| Field Type')) {
        inTable = true;
        hasFieldTypeCol = line.startsWith('| Field Type');
        continue;
      }
      if (inTable && line.startsWith('| ---')) continue;
      if (inTable && line.startsWith('| ')) {
        const cols = line.split('|').map(c => c.trim()).filter(Boolean);
        let logicalName, attrType;
        if (hasFieldTypeCol) {
          logicalName = cols[1];
          attrType = cols[4];
        } else {
          logicalName = cols[0];
          attrType = cols[3];
        }
        if (!logicalName || logicalName === 'Logical Name' || logicalName.startsWith('---')) continue;
        if (attrType === 'Uniqueidentifier') continue;
        fields.push(logicalName);
      }
      if (inTable && line.startsWith('---')) break;
    }

    entities.push({ title, logical, schema, isCustom, fields });
  }
  return entities;
}

// ─── Pick N random ──────────────────────────────────────────────────────────

function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// ─── Wiki lookup ────────────────────────────────────────────────────────────

function loadWikiIndex() {
  const idx = JSON.parse(readFileSync('wiki/index.json', 'utf8'));
  return Object.fromEntries(idx.map(e => [e.logical, e]));
}

function buildSelectFields(entity, wikiEntry) {
  const skip = new Set(['statecode', 'statuscode', 'overriddencreatedon', 'utcconversiontimezonecode', 'timezoneruleversionnumber']);
  const keyFields = entity.fields
    .filter(f => !skip.has(f.toLowerCase()))
    .slice(0, 6);
  // Guarantee at least createdon + primary name
  if (keyFields.length === 0) {
    keyFields.push('createdon');
    if (wikiEntry?.primaryNameAttribute) keyFields.push(wikiEntry.primaryNameAttribute);
  }
  return [...new Set(keyFields)].join(',');
}

// ─── Generate query objects ──────────────────────────────────────────────────

function generateQueries(selected, wikiMap) {
  return selected.map(entity => {
    const wiki = wikiMap[entity.logical] || wikiMap[entity.logical.toLowerCase()];
    // entitySetName: prefer wiki, fallback to schema name + 's' heuristic
    let entitySet = wiki?.entitySetName;
    if (!entitySet) {
      // common Dataverse convention: lowercase schema + 's'
      entitySet = entity.schema.charAt(0).toLowerCase() + entity.schema.slice(1) + 's';
    }
    const select = buildSelectFields(entity, wiki);
    const url = `${ENV_URL}/api/data/v9.2/${entitySet}?$select=${select}&$top=${TOP}`;
    return {
      title: entity.title,
      logical: entity.logical,
      schema: entity.schema,
      entitySet,
      select,
      url,
      wiki: wiki ? { display: wiki.display, source: wiki.source || 'docs' } : null,
    };
  });
}

// ─── Execute queries ─────────────────────────────────────────────────────────

async function fetchUrl(url, token) {
  const t0 = Date.now();
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
    },
  });
  const ms = Date.now() - t0;
  const json = await res.json().catch(() => null);
  return { res, ms, json };
}

async function runQuery(query, token) {
  try {
    let { res, ms, json } = await fetchUrl(query.url, token);

    // If $select causes a 400, retry with a safe minimal $select
    if (!res.ok && res.status === 400 && query.url.includes('$select=')) {
      const fallbackUrl = `${ENV_URL}/api/data/v9.2/${query.entitySet}?$select=createdon,modifiedon&$top=${TOP}`;
      const r2 = await fetchUrl(fallbackUrl, token);
      if (r2.res.ok) {
        res = r2.res; ms = r2.ms; json = r2.json;
        query.url = fallbackUrl;
        query.select = 'createdon,modifiedon';
        query._selectFallback = true;
      }
    }

    const count = json?.value?.length ?? null;
    const sample = json?.value?.[0] ?? null;
    return {
      status: res.status,
      ok: res.ok,
      ms,
      count,
      sample: sample ? JSON.stringify(sample, null, 2).slice(0, 600) : null,
      error: res.ok ? null : (json?.error?.message || `HTTP ${res.status}`),
      selectFallback: query._selectFallback || false,
    };
  } catch (err) {
    return { status: 0, ok: false, ms: 0, count: null, sample: null, error: err.message, selectFallback: false };
  }
}

// ─── Render query list MD ────────────────────────────────────────────────────

function renderQueriesMd(queries, today) {
  const lines = [];
  lines.push(`# Query REST Dataverse — ${today}`);
  lines.push('');
  lines.push(`> Ambiente: \`${ENV_URL}\`  `);
  lines.push(`> Entità selezionate casualmente da \`Datamodel_D365.md\`  `);
  lines.push(`> \`$top=${TOP}\` record per query`);
  lines.push('');
  lines.push('## Elenco query');
  lines.push('');
  lines.push('| # | Entità | Logical Name | Entity Set | Wiki source |');
  lines.push('|---|--------|-------------|-----------|-------------|');
  queries.forEach((q, i) => {
    lines.push(`| ${i + 1} | ${q.title} | \`${q.logical}\` | \`${q.entitySet}\` | ${q.wiki?.source ?? '—'} |`);
  });
  lines.push('');
  queries.forEach((q, i) => {
    lines.push(`---`);
    lines.push('');
    lines.push(`## Query ${i + 1} — ${q.title}`);
    lines.push('');
    if (q.wiki) {
      lines.push(`| Proprietà | Valore |`);
      lines.push(`|-----------|--------|`);
      lines.push(`| Display (wiki) | ${q.wiki.display} |`);
      lines.push(`| Fonte wiki | ${q.wiki.source} |`);
      lines.push(`| Entity set | \`${q.entitySet}\` |`);
      lines.push(`| Logical name | \`${q.logical}\` |`);
      lines.push('');
    }
    lines.push('```http');
    lines.push(`GET ${q.url}`);
    lines.push('Authorization: Bearer <token>');
    lines.push('OData-MaxVersion: 4.0');
    lines.push('Accept: application/json');
    lines.push('```');
    lines.push('');
    lines.push(`**\$select:** \`${q.select}\``);
    lines.push('');
  });
  return lines.join('\n');
}

// ─── Render report MD ────────────────────────────────────────────────────────

function renderReportMd(results, today) {
  const ok = results.filter(r => r.result.ok);
  const fail = results.filter(r => !r.result.ok);
  const avgMs = Math.round(results.reduce((s, r) => s + r.result.ms, 0) / results.length);

  const lines = [];
  lines.push(`# Report Esecuzione Query Dataverse — ${today}`);
  lines.push('');
  lines.push(`> Ambiente: \`${ENV_URL}\`  `);
  lines.push(`> Eseguito il: **${new Date().toISOString()}**`);
  lines.push('');
  lines.push('## Riepilogo');
  lines.push('');
  lines.push('| Metrica | Valore |');
  lines.push('|---------|--------|');
  lines.push(`| Query totali | ${results.length} |`);
  lines.push(`| ✅ Successo | **${ok.length}** |`);
  lines.push(`| ❌ Errore | **${fail.length}** |`);
  lines.push(`| Tempo medio risposta | ${avgMs} ms |`);
  lines.push('');
  lines.push('## Risultati per query');
  lines.push('');
  lines.push('| # | Entità | Stato HTTP | Record | Tempo | Esito |');
  lines.push('|---|--------|-----------|--------|-------|-------|');
  results.forEach((r, i) => {
    const icon = r.result.ok ? '✅' : '❌';
    const rec = r.result.count !== null ? r.result.count : '—';
    lines.push(`| ${i + 1} | ${r.query.title} | ${r.result.status || '—'} | ${rec} | ${r.result.ms} ms | ${icon} |`);
  });
  lines.push('');

  results.forEach((r, i) => {
    lines.push('---');
    lines.push('');
    lines.push(`## ${i + 1}. ${r.query.title} (\`${r.query.logical}\`)`);
    lines.push('');
    lines.push(`**URL:** \`${r.query.url}\``);
    lines.push('');
    if (r.result.ok) {
      lines.push(`**Stato:** ✅ HTTP ${r.result.status} — ${r.result.count} record restituiti — ${r.result.ms} ms`);
      lines.push('');
      if (r.result.sample) {
        lines.push('**Primo record (troncato a 600 char):**');
        lines.push('');
        lines.push('```json');
        lines.push(r.result.sample);
        lines.push('```');
      } else {
        lines.push('_Nessun record trovato (entity set vuota o nessun dato in questo ambiente)._');
      }
    } else {
      lines.push(`**Stato:** ❌ HTTP ${r.result.status || 'N/A'} — ${r.result.ms} ms`);
      lines.push('');
      lines.push(`**Errore:** \`${r.result.error}\``);
    }
    lines.push('');
  });

  return lines.join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10);

console.log('[1/5] Parsing Datamodel_D365.md...');
const md = readFileSync(MD_PATH, 'utf8');
const allEntities = parseMd(md);
console.log(`      Found ${allEntities.length} entities`);

console.log('[2/5] Selecting 10 random entities...');
const selected = pickRandom(allEntities, 10);
selected.forEach((e, i) => console.log(`      ${i + 1}. ${e.logical} (${e.title})`));

console.log('[3/5] Looking up wiki/index.json...');
const wikiMap = loadWikiIndex();
const queries = generateQueries(selected, wikiMap);

console.log('[4/5] Writing query list...');
writeFileSync(QUERIES_OUT, renderQueriesMd(queries, today), 'utf8');
console.log(`      → ${QUERIES_OUT}`);

console.log('[5/5] Executing queries against Dataverse...');
const token = await getAccessToken(ENV_URL);
console.log('      Token obtained');

const results = [];
for (const query of queries) {
  process.stdout.write(`      GET ${query.entitySet}... `);
  const result = await runQuery(query, token);
  console.log(result.ok ? `✅ ${result.status} (${result.count} rec, ${result.ms}ms)` : `❌ ${result.status} — ${result.error}`);
  results.push({ query, result });
}

writeFileSync(REPORT_OUT, renderReportMd(results, today), 'utf8');
console.log(`\n      Report → ${REPORT_OUT}`);
console.log(`\nDone. OK: ${results.filter(r => r.result.ok).length}/${results.length}`);
