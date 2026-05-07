#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseEntity } from './parse-entity.mjs';
import { renderEntityMd } from './render-entity.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CACHE = path.join(ROOT, '.cache');
const WIKI = path.join(ROOT, 'wiki');
const SYNONYMS_PATH = path.join(__dirname, 'synonyms.json');

const REPOS = {
  powerappsDocs: {
    url: 'https://github.com/MicrosoftDocs/powerapps-docs.git',
    dir: path.join(CACHE, 'powerapps-docs'),
    sparsePath: 'powerapps-docs/developer/data-platform/reference/entities',
    entitiesPath: 'powerapps-docs/developer/data-platform/reference/entities',
  },
  d365ce: {
    url: 'https://github.com/MicrosoftDocs/dynamics-365-customer-engagement.git',
    dir: path.join(CACHE, 'dynamics-365-customer-engagement'),
    sparsePath: 'ce/developer/reference/entities',
    entitiesPath: 'ce/developer/reference/entities',
  },
  samples: {
    url: 'https://github.com/microsoft/PowerApps-Samples.git',
    dir: path.join(CACHE, 'PowerApps-Samples'),
    sparsePath: 'dataverse',
  },
};

const args = new Set(process.argv.slice(2));
const FLAG_CLEAN = args.has('--clean');
const FLAG_UPDATE = args.has('--update');
const FLAG_SKIP_SAMPLES = args.has('--skip-samples');

function run(cmd, cwd) {
  const r = spawnSync(cmd[0], cmd.slice(1), { cwd, stdio: 'inherit', shell: false });
  if (r.status !== 0) throw new Error(`Command failed (${r.status}): ${cmd.join(' ')}`);
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function syncRepo({ url, dir, sparsePath }, { update }) {
  const isInitialized = await exists(path.join(dir, '.git'));
  if (!isInitialized) {
    console.log(`[clone] ${url} → ${path.relative(ROOT, dir)}`);
    await ensureDir(path.dirname(dir));
    run(['git', 'clone', '--filter=blob:none', '--no-checkout', '--depth', '1', url, dir]);
    run(['git', 'sparse-checkout', 'init', '--cone'], dir);
    run(['git', 'sparse-checkout', 'set', sparsePath], dir);
    run(['git', 'checkout'], dir);
  } else if (update) {
    console.log(`[pull] ${path.relative(ROOT, dir)}`);
    run(['git', 'pull', '--ff-only', '--depth', '1'], dir);
  } else {
    console.log(`[cache] ${path.relative(ROOT, dir)} (already present)`);
  }
}

async function clean() {
  for (const target of [CACHE, WIKI]) {
    if (await exists(target)) {
      console.log(`[clean] removing ${path.relative(ROOT, target)}`);
      await fs.rm(target, { recursive: true, force: true });
    }
  }
}

function sourceUrl(repo, fileName) {
  const repoSlug = repo.url.replace(/^https:\/\/github\.com\//, '').replace(/\.git$/, '');
  return `https://github.com/${repoSlug}/blob/main/${repo.entitiesPath}/${fileName}`;
}

async function loadSynonyms() {
  const raw = await fs.readFile(SYNONYMS_PATH, 'utf8');
  const json = JSON.parse(raw);
  return json.entities || {};
}

async function listEntityFiles(repoDef) {
  const dir = path.join(repoDef.dir, repoDef.entitiesPath);
  if (!(await exists(dir))) return [];
  const files = await fs.readdir(dir);
  return files.filter((f) => f.endsWith('.md') && f !== 'index.md').map((f) => path.join(dir, f));
}

async function buildEntities(synonyms) {
  await ensureDir(path.join(WIKI, 'entities'));
  const sourcesInPriorityOrder = [REPOS.d365ce, REPOS.powerappsDocs];
  const collected = new Map();
  for (const repo of sourcesInPriorityOrder) {
    const files = await listEntityFiles(repo);
    console.log(`[parse] ${files.length} entity files in ${path.basename(repo.dir)}`);
    for (const file of files) collected.set(path.basename(file), { file, source: repo });
  }
  const files = [...collected.values()].map((v) => v.file);
  const sourceByFile = new Map([...collected.values()].map((v) => [v.file, v.source]));
  console.log(`[parse] ${files.length} unique entity files (last source wins on conflict)`);

  const indexEntries = [];
  let parseFailures = 0;

  for (const file of files) {
    const fileName = path.basename(file);
    const repo = sourceByFile.get(file);
    try {
      const raw = await fs.readFile(file, 'utf8');
      const entity = parseEntity(raw, fileName);
      const syn = synonyms[entity.logical];
      const md = renderEntityMd(entity, syn, { url: sourceUrl(repo, fileName) });
      await fs.writeFile(path.join(WIKI, 'entities', `${entity.logical}.md`), md, 'utf8');
      indexEntries.push({
        logical: entity.logical,
        display: entity.display,
        displayPlural: entity.displayPlural,
        entitySetName: entity.entitySetName,
        primaryIdAttribute: entity.primaryIdAttribute,
        primaryNameAttribute: entity.primaryNameAttribute,
        tableType: entity.tableType,
        ownership: entity.ownership,
        description: entity.description || entity.frontmatterDescription || '',
        synonyms_it: syn?.it || [],
        synonyms_en: syn?.en || [],
        attributeCount: entity.writableAttributes.length + entity.readonlyAttributes.length,
        relationshipCount: entity.manyToOne.length + entity.oneToMany.length + entity.manyToMany.length,
        file: `entities/${entity.logical}.md`,
      });
    } catch (err) {
      parseFailures += 1;
      console.warn(`[parse] failed: ${fileName} — ${err.message}`);
    }
  }

  const preservedCustom = await loadExistingCustomEntries();
  if (preservedCustom.length) {
    console.log(`[index] preserving ${preservedCustom.length} custom entries from existing index`);
  }
  const merged = [...indexEntries, ...preservedCustom];
  merged.sort((a, b) => a.logical.localeCompare(b.logical));
  await fs.writeFile(path.join(WIKI, 'index.json'), JSON.stringify(merged, null, 2), 'utf8');
  console.log(`[index] ${merged.length} entries written to wiki/index.json (docs failures: ${parseFailures})`);
  return merged;
}

async function loadExistingCustomEntries() {
  const indexPath = path.join(WIKI, 'index.json');
  if (!(await exists(indexPath))) return [];
  try {
    const raw = await fs.readFile(indexPath, 'utf8');
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((e) => e?.source === 'custom') : [];
  } catch {
    return [];
  }
}

async function buildWikiReadme(entries) {
  const withSyn = entries.filter((e) => e.synonyms_it.length || e.synonyms_en.length);
  const lines = [];
  lines.push('# Wiki Index');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Entities: **${entries.length}** · with curated synonyms: **${withSyn.length}**`);
  lines.push('');
  lines.push('Open `index.json` for the machine-readable lookup. Browse `entities/` for the per-entity schedule sheets.');
  lines.push('');
  lines.push('## Curated entities (with Italian/English business synonyms)');
  lines.push('');
  lines.push('| Logical | Display | Synonyms (IT) | Synonyms (EN) |');
  lines.push('| --- | --- | --- | --- |');
  for (const e of withSyn) {
    lines.push(`| [\`${e.logical}\`](entities/${e.logical}.md) | ${e.display} | ${e.synonyms_it.join(', ') || '—'} | ${e.synonyms_en.join(', ') || '—'} |`);
  }
  await fs.writeFile(path.join(WIKI, 'README.md'), lines.join('\n'), 'utf8');
  console.log(`[readme] wiki/README.md written (${withSyn.length} curated rows)`);
}

async function buildSampleIndex(entries) {
  const samplesRoot = path.join(REPOS.samples.dir, 'dataverse');
  if (!(await exists(samplesRoot))) {
    console.log('[samples] dataverse/ folder not present, skipping');
    return;
  }
  const samplesOut = path.join(WIKI, 'samples');
  await ensureDir(samplesOut);

  const fileList = [];
  async function walk(dir) {
    const ents = await fs.readdir(dir, { withFileTypes: true });
    for (const e of ents) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (['bin', 'obj', 'node_modules', '.git'].includes(e.name)) continue;
        await walk(full);
      } else if (/\.(cs|js|ts|ps1)$/i.test(e.name)) {
        fileList.push(full);
      }
    }
  }
  await walk(samplesRoot);
  console.log(`[samples] scanning ${fileList.length} source files in PowerApps-Samples/dataverse`);

  const byEntity = new Map();
  const tokenSet = new Map();
  for (const e of entries) {
    if (e.entitySetName) tokenSet.set(e.entitySetName.toLowerCase(), e.logical);
    if (e.logical) tokenSet.set(e.logical.toLowerCase(), e.logical);
  }

  for (const file of fileList) {
    let raw;
    try {
      raw = await fs.readFile(file, 'utf8');
    } catch {
      continue;
    }
    const lower = raw.toLowerCase();
    for (const [token, logical] of tokenSet) {
      if (token.length < 4) continue;
      if (!lower.includes(token)) continue;
      if (!byEntity.has(logical)) byEntity.set(logical, []);
      const list = byEntity.get(logical);
      if (list.length < 5 && !list.includes(file)) list.push(file);
    }
  }

  let written = 0;
  for (const [logical, files] of byEntity) {
    if (files.length === 0) continue;
    const lines = [`# Samples referencing \`${logical}\``, '', `_${files.length} file${files.length === 1 ? '' : 's'} in microsoft/PowerApps-Samples that mention this entity._`, ''];
    for (const f of files) {
      const rel = path.relative(REPOS.samples.dir, f).replace(/\\/g, '/');
      lines.push(`- [\`${rel}\`](https://github.com/microsoft/PowerApps-Samples/blob/main/${rel})`);
    }
    await fs.writeFile(path.join(samplesOut, `${logical}.md`), lines.join('\n'), 'utf8');
    written += 1;
  }
  console.log(`[samples] ${written} sample index files written`);
}

async function main() {
  if (FLAG_CLEAN) await clean();
  await ensureDir(CACHE);
  await ensureDir(WIKI);

  await syncRepo(REPOS.powerappsDocs, { update: FLAG_UPDATE });
  try {
    await syncRepo(REPOS.d365ce, { update: FLAG_UPDATE });
  } catch (err) {
    console.warn(`[d365ce] sync failed: ${err.message} — continuing without dynamics-365-customer-engagement`);
  }
  if (!FLAG_SKIP_SAMPLES) {
    try {
      await syncRepo(REPOS.samples, { update: FLAG_UPDATE });
    } catch (err) {
      console.warn(`[samples] sync failed: ${err.message} — continuing without samples`);
    }
  }

  const synonyms = await loadSynonyms();
  const entries = await buildEntities(synonyms);
  await buildWikiReadme(entries);
  if (!FLAG_SKIP_SAMPLES) await buildSampleIndex(entries);

  console.log('[done]');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
