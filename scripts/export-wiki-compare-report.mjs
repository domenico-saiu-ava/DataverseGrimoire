/**
 * export-wiki-compare-report.mjs
 * Generates wiki_from_docs/comparison_report.md from compare_results.json.
 * Run: node scripts/export-wiki-compare-report.mjs
 * (Re-run compare-wikis.mjs first to refresh compare_results.json)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';

const RESULTS_PATH = 'compare_results.json';
const OUTPUT_PATH = 'wiki_from_docs/comparison_report.md';

if (!existsSync(RESULTS_PATH)) {
  console.error('compare_results.json not found. Run: node scripts/compare-wikis.mjs first.');
  process.exit(1);
}

const results = JSON.parse(readFileSync(RESULTS_PATH, 'utf8'));
const today = new Date().toISOString().slice(0, 10);

// Filter out placeholder entries
const valid = results.filter(r => r.logical !== '(non mappato)' && r.display_it !== 'Nome entità');

const aligned = valid.filter(r => r.inWiki && r.missingInWiki.length === 0).sort((a, b) => a.logical.localeCompare(b.logical));
const gaps = valid.filter(r => r.inWiki && r.missingInWiki.length > 0).sort((a, b) => b.missingInWiki.length - a.missingInWiki.length);
const absent = (() => {
  const seen = new Set();
  return valid.filter(r => {
    if (r.inWiki) return false;
    const k = r.logical;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).sort((a, b) => a.logical.localeCompare(b.logical));
})();

const totalGapFields = gaps.reduce((s, r) => s + r.missingInWiki.length, 0);

function fieldBadge(f) {
  if (f.endsWith('name') || f.endsWith('yominame') || f.endsWith('type') && !f.startsWith('cai_')) return '`' + f + '` *(virtual)*';
  return '`' + f + '`';
}

function classifyMissing(fields) {
  const custom = fields.filter(f => f.startsWith('cai_') || f.startsWith('msdyn_'));
  const virtual = fields.filter(f => !f.startsWith('cai_') && !f.startsWith('msdyn_') && (f.endsWith('name') || f.endsWith('yominame')));
  const other = fields.filter(f => !custom.includes(f) && !virtual.includes(f));
  return { custom, virtual, other };
}

const lines = [];

lines.push(`# Confronto wiki_from_docs ↔ wiki`);
lines.push(``);
lines.push(`> Generato il: **${today}** · Script: \`node scripts/compare-wikis.mjs && node scripts/export-wiki-compare-report.mjs\``);
lines.push(``);
lines.push(`## Riepilogo`);
lines.push(``);
lines.push(`| Categoria | N° entità | Note |`);
lines.push(`|-----------|-----------|------|`);
lines.push(`| ✅ Allineate (presenti in entrambi, nessun campo mancante) | ${aligned.length} | — |`);
lines.push(`| ⚠️ Con gap di campi (presenti in entrambi, campi AF assenti dal wiki tecnico) | ${gaps.length} | ${totalGapFields} campi totali mancanti |`);
lines.push(`| ❌ Assenti dal wiki tecnico (richiedono \`npm run custom\`) | ${absent.length} | Tutte \`cai_*\` custom |`);
lines.push(`| **Totale entità analizzate** | **${valid.length}** | |`);
lines.push(``);
lines.push(`> **Azione consigliata:** eseguire \`npm run custom -- --url https://<env>.crm4.dynamics.com\` per popolare \`wiki/custom/\`. Dopo l'ingestione la maggior parte dei gap di campi \`cai_*\` si chiuderà automaticamente.`);
lines.push(``);

// Section A — Aligned
lines.push(`---`);
lines.push(``);
lines.push(`## A — Entità allineate ✅`);
lines.push(``);
lines.push(`Presenti in entrambi i wiki, nessun campo documentato nelle AF risulta mancante nel wiki tecnico.`);
lines.push(``);
lines.push(`| Entità | Display IT | Business area | Campi AF | Campi wiki | Fonte wiki |`);
lines.push(`|--------|-----------|---------------|----------|------------|------------|`);
for (const r of aligned) {
  lines.push(`| \`${r.logical}\` | ${r.display_it} | ${r.business_area} | ${r.docFields} | ${r.wikiFields} | ${r.wikiSource} |`);
}
lines.push(``);

// Section B — Gaps
lines.push(`---`);
lines.push(``);
lines.push(`## B — Entità con campi mancanti nel wiki tecnico ⚠️`);
lines.push(``);
lines.push(`Ordinate per numero di campi mancanti (decrescente). I campi con prefisso \`cai_\` o \`msdyn_\` sono custom fields del tenant — si risolvono con \`npm run custom\`. I campi \`*name\` virtuali sono comportamento atteso (Dataverse non li espone come attributi schema).`);
lines.push(``);

for (const r of gaps) {
  const { custom, virtual, other } = classifyMissing(r.missingInWiki);
  lines.push(`### \`${r.logical}\` — ${r.display_it}`);
  lines.push(``);
  lines.push(`| Proprietà | Valore |`);
  lines.push(`|-----------|--------|`);
  lines.push(`| Business area | ${r.business_area} |`);
  lines.push(`| Campi documentati nelle AF | ${r.docFields} |`);
  lines.push(`| Campi nel wiki tecnico | ${r.wikiFields} |`);
  lines.push(`| Campi mancanti totali | **${r.missingInWiki.length}** |`);
  lines.push(`| Fonte wiki tecnico | ${r.wikiSource} |`);
  lines.push(``);
  if (custom.length > 0) {
    lines.push(`**Campi custom mancanti** (richiedono \`npm run custom\`):`);
    lines.push(``);
    lines.push(custom.map(f => `\`${f}\``).join(', '));
    lines.push(``);
  }
  if (other.length > 0) {
    lines.push(`**Campi standard mancanti** (verificare manualmente):`);
    lines.push(``);
    lines.push(other.map(f => `\`${f}\``).join(', '));
    lines.push(``);
  }
  if (virtual.length > 0) {
    lines.push(`**Campi virtuali** *(comportamento atteso — non in schema)*:`);
    lines.push(``);
    lines.push(virtual.map(f => `\`${f}\``).join(', '));
    lines.push(``);
  }
}

// Section C — Absent
lines.push(`---`);
lines.push(``);
lines.push(`## C — Entità assenti dal wiki tecnico ❌`);
lines.push(``);
lines.push(`Tutte entità custom (\`cai_*\`) presenti nelle AF ma non ancora in \`wiki/custom/\`. Richiedono \`npm run custom -- --url <env-url>\` per essere ingerite.`);
lines.push(``);
lines.push(`| Entità | Display IT | Business area |`);
lines.push(`|--------|-----------|---------------|`);
for (const r of absent) {
  lines.push(`| \`${r.logical}\` | ${r.display_it} | ${r.business_area} |`);
}
lines.push(``);
lines.push(`---`);
lines.push(``);
lines.push(`*Report generato automaticamente da \`scripts/export-wiki-compare-report.mjs\` · ${today}*`);

writeFileSync(OUTPUT_PATH, lines.join('\n'), 'utf8');
console.log(`✅ Report generato: ${OUTPUT_PATH}`);
console.log(`   Allineate: ${aligned.length} · Gap: ${gaps.length} (${totalGapFields} campi) · Assenti: ${absent.length}`);
