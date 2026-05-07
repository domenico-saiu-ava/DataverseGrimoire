#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAccessToken, logout } from './dataverse-auth.mjs';
import { mapEntityDefinition } from './map-metadata.mjs';
import { renderEntityMd } from './render-entity.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const WIKI = path.join(ROOT, 'wiki');
const CUSTOM_DIR = path.join(WIKI, 'custom');
const INDEX_PATH = path.join(WIKI, 'index.json');
const SYNONYMS_PATH = path.join(__dirname, 'synonyms.json');

const ATTRIBUTE_SELECT = [
  'LogicalName', 'DisplayName', 'Description', 'IsValidForCreate', 'IsValidForUpdate',
  'IsCustomAttribute', 'AttributeType', 'AttributeOf', 'RequiredLevel',
].join(',');

const ENTITY_SELECT = [
  'LogicalName', 'SchemaName', 'EntitySetName', 'LogicalCollectionName',
  'DisplayName', 'DisplayCollectionName', 'Description',
  'PrimaryIdAttribute', 'PrimaryNameAttribute',
  'OwnershipType', 'TableType', 'IsManaged',
].join(',');

function parseArgs(argv) {
  const args = { url: null, filter: null, logout: false, allEntities: false, concurrency: 5, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--url') args.url = argv[++i];
    else if (a === '--filter') args.filter = argv[++i];
    else if (a === '--logout') args.logout = true;
    else if (a === '--all') args.allEntities = true;
    else if (a === '--concurrency') args.concurrency = Number(argv[++i]) || 5;
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

function printHelp() {
  console.log(`Usage: node scripts/build-custom.mjs --url <env-url> [options]

Options:
  --url <env-url>      Dataverse environment URL (es. https://orgXXXX.crm4.dynamics.com)
  --filter <prefix*>   Limit to entities whose logical name starts with <prefix> (es. xyz_*)
  --all                Include all entities (default: only IsCustomEntity eq true)
  --concurrency <n>    Parallel detail fetches (default: 5)
  --logout             Remove cached token for the env and exit
  --help, -h           Show this help

First run triggers a device-code login in your browser. Subsequent runs use a cached token.
`);
}

function envHostFromUrl(envUrl) {
  return new URL(envUrl).host.toLowerCase();
}

function normalizeBaseUrl(envUrl) {
  const u = new URL(envUrl);
  return `${u.protocol}//${u.host}`;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function fetchJson(url, accessToken) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'OData-Version': '4.0',
      'OData-MaxVersion': '4.0',
      Prefer: 'odata.include-annotations="*"',
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${url} → ${res.status}: ${text.slice(0, 400)}`);
  }
  return res.json();
}

async function fetchAllPages(initialUrl, accessToken) {
  const all = [];
  let url = initialUrl;
  while (url) {
    const page = await fetchJson(url, accessToken);
    if (Array.isArray(page.value)) all.push(...page.value);
    url = page['@odata.nextLink'] || null;
  }
  return all;
}

async function listEntities(baseUrl, accessToken, { allEntities, filter }) {
  const filters = [];
  if (!allEntities) filters.push('IsCustomEntity eq true');
  if (filter) {
    const prefix = filter.replace(/\*$/, '');
    if (prefix) filters.push(`startswith(LogicalName,'${prefix.replace(/'/g, "''")}')`);
  }
  const filterParam = filters.length ? `&$filter=${encodeURIComponent(filters.join(' and '))}` : '';
  const url = `${baseUrl}/api/data/v9.2/EntityDefinitions?$select=${ENTITY_SELECT}${filterParam}`;
  return fetchAllPages(url, accessToken);
}

async function fetchEntityDetail(baseUrl, logical, accessToken) {
  const expand = [
    `Attributes($select=${ATTRIBUTE_SELECT})`,
    'ManyToOneRelationships',
    'OneToManyRelationships',
    'ManyToManyRelationships',
  ].join(',');
  const url = `${baseUrl}/api/data/v9.2/EntityDefinitions(LogicalName='${logical}')?$select=${ENTITY_SELECT}&$expand=${expand}`;
  return fetchJson(url, accessToken);
}

async function mapWithConcurrency(items, fn, limit) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const idx = cursor++;
      try {
        results[idx] = { ok: true, value: await fn(items[idx], idx) };
      } catch (err) {
        results[idx] = { ok: false, error: err };
      }
    }
  }
  const workers = Array.from({ length: Math.max(1, limit) }, worker);
  await Promise.all(workers);
  return results;
}

async function loadSynonyms() {
  try {
    const raw = await fs.readFile(SYNONYMS_PATH, 'utf8');
    const json = JSON.parse(raw);
    return json.entities || {};
  } catch {
    return {};
  }
}

async function loadIndex() {
  if (!(await exists(INDEX_PATH))) return [];
  try {
    const raw = await fs.readFile(INDEX_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeIndex(entries) {
  entries.sort((a, b) => a.logical.localeCompare(b.logical));
  await fs.writeFile(INDEX_PATH, JSON.stringify(entries, null, 2), 'utf8');
}

async function writeCustomReadme(entries, host) {
  const lines = [];
  lines.push(`# Custom entities — ${host}`);
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Entities: **${entries.length}**`);
  lines.push('');
  lines.push('| Logical | Display | Entity set | Attributes | Relationships |');
  lines.push('| --- | --- | --- | --- | --- |');
  for (const e of entries) {
    lines.push(`| [\`${e.logical}\`](${e.logical}.md) | ${e.display} | ${e.entitySetName ? `\`${e.entitySetName}\`` : '_n/a_'} | ${e.attributeCount} | ${e.relationshipCount} |`);
  }
  await fs.mkdir(CUSTOM_DIR, { recursive: true });
  await fs.writeFile(path.join(CUSTOM_DIR, 'README.md'), lines.join('\n'), 'utf8');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  if (!args.url) {
    console.error('Errore: --url <env-url> è obbligatorio');
    printHelp();
    process.exit(1);
  }

  const baseUrl = normalizeBaseUrl(args.url);
  const host = envHostFromUrl(args.url);

  if (args.logout) {
    await logout(args.url);
    return;
  }

  console.log(`[env] ${host}`);
  const accessToken = await getAccessToken(args.url);

  console.log(`[fetch] elenco entità (${args.allEntities ? 'tutte' : 'IsCustomEntity eq true'}${args.filter ? `, filtro: ${args.filter}` : ''})…`);
  const list = await listEntities(baseUrl, accessToken, args);
  console.log(`[fetch] ${list.length} entità trovate`);

  if (list.length === 0) {
    console.warn('[fetch] nessuna entità custom trovata. Usa --all o --filter per allargare lo scope.');
    return;
  }

  console.log(`[fetch] dettaglio per ${list.length} entità (concorrenza ${args.concurrency})…`);
  const results = await mapWithConcurrency(
    list,
    (e) => fetchEntityDetail(baseUrl, e.LogicalName, accessToken),
    args.concurrency,
  );

  await fs.mkdir(CUSTOM_DIR, { recursive: true });
  const synonyms = await loadSynonyms();
  const newEntries = [];
  let writeFailures = 0;

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const logical = list[i].LogicalName;
    if (!r.ok) {
      writeFailures += 1;
      console.warn(`[parse] ${logical} — ${r.error.message}`);
      continue;
    }
    const entity = mapEntityDefinition(r.value);
    const md = renderEntityMd(entity, synonyms[entity.logical], {
      url: `${baseUrl}/api/data/v9.2/EntityDefinitions(LogicalName='${entity.logical}')`,
      label: `${entity.logical} (live)`,
      source: 'custom',
      envHost: host,
    });
    await fs.writeFile(path.join(CUSTOM_DIR, `${entity.logical}.md`), md, 'utf8');
    newEntries.push({
      logical: entity.logical,
      display: entity.display,
      displayPlural: entity.displayPlural,
      entitySetName: entity.entitySetName,
      primaryIdAttribute: entity.primaryIdAttribute,
      primaryNameAttribute: entity.primaryNameAttribute,
      tableType: entity.tableType,
      ownership: entity.ownership,
      description: entity.description || '',
      synonyms_it: synonyms[entity.logical]?.it || [],
      synonyms_en: synonyms[entity.logical]?.en || [],
      attributeCount: entity.writableAttributes.length + entity.readonlyAttributes.length,
      relationshipCount: entity.manyToOne.length + entity.oneToMany.length + entity.manyToMany.length,
      file: `custom/${entity.logical}.md`,
      source: 'custom',
      envHost: host,
    });
  }

  const existing = await loadIndex();
  const filtered = existing.filter((e) => !(e.source === 'custom' && e.envHost === host));
  const merged = [...filtered, ...newEntries];
  await writeIndex(merged);
  await writeCustomReadme(newEntries, host);

  console.log(`[done] ${newEntries.length} entità scritte in wiki/custom/ · failures: ${writeFailures}`);
  console.log(`[index] wiki/index.json aggiornato (totale: ${merged.length} voci)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
