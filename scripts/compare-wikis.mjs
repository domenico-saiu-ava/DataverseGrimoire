import { readFileSync, writeFileSync } from 'fs';

const docsIdx = JSON.parse(readFileSync('wiki_from_docs/index.json', 'utf8'));
const wikiIdx = JSON.parse(readFileSync('wiki/index.json', 'utf8'));
const wikiMap = Object.fromEntries(wikiIdx.map(e => [e.logical, e]));
const entities = docsIdx.filter(e => e.type === 'entity');

function extractDocsFields(relpath) {
  try {
    const md = readFileSync('wiki_from_docs/' + relpath, 'utf8');
    const fields = [];
    let inSection = false;
    for (const line of md.split('\n')) {
      if (line.startsWith('## Campi documentati')) { inSection = true; continue; }
      if (inSection && line.startsWith('## ')) break;
      if (inSection && line.includes('|')) {
        const m = line.match(/\|\s+`([^`]+)`/);
        if (m) fields.push(m[1].toLowerCase());
      }
    }
    return fields;
  } catch { return []; }
}

function extractWikiFields(relpath) {
  try {
    const md = readFileSync('wiki/' + relpath, 'utf8');
    const attrStart = md.indexOf('\n## Attributes\n');
    if (attrStart === -1) return [];
    const afterAttr = md.slice(attrStart + 14);
    const attrEnd = afterAttr.search(/\n## /);
    const section = attrEnd === -1 ? afterAttr : afterAttr.slice(0, attrEnd);
    // extract all backtick-quoted identifiers
    const fields = [];
    const re = /`([A-Za-z0-9_]+)`/g;
    let m;
    while ((m = re.exec(section)) !== null) {
      fields.push(m[1].toLowerCase());
    }
    return fields;
  } catch { return []; }
}

const results = [];
for (const docEnt of entities) {
  const logical = docEnt.dataverse_logical;
  const wikiEnt = logical ? wikiMap[logical] : null;
  const docFields = extractDocsFields(docEnt.file);
  const wikiFields = wikiEnt ? extractWikiFields(wikiEnt.file) : [];
  const wikiSet = new Set(wikiFields);
  const missingInWiki = docFields.filter(f => !wikiSet.has(f));
  results.push({
    display_it: docEnt.display_it,
    logical: logical || '(non mappato)',
    inWiki: !!wikiEnt,
    isCustom: docEnt.is_custom,
    wikiSource: wikiEnt ? (wikiEnt.source || 'docs') : '-',
    docFields: docFields.length,
    wikiFields: wikiFields.length,
    missingInWiki,
    business_area: docEnt.business_area || '',
  });
}

writeFileSync('compare_results.json', JSON.stringify(results, null, 2));

const matched = results.filter(r => r.inWiki);
const unmatched = results.filter(r => !r.inWiki);
const withGaps = matched.filter(r => r.missingInWiki.length > 0);

console.log(`Total: ${results.length} | In wiki: ${matched.length} | NOT in wiki: ${unmatched.length} | With field gaps: ${withGaps.length}`);
if (results.find(r => r.logical === 'lead')) {
  const l = results.find(r => r.logical === 'lead');
  console.log(`Sample lead: docFields=${l.docFields}, wikiFields=${l.wikiFields}`);
}
console.log('\n--- FIELD GAPS ---');
for (const r of withGaps) {
  console.log(`${r.logical} (${r.docFields}doc/${r.wikiFields}wiki): ${r.missingInWiki.join(', ')}`);
}
