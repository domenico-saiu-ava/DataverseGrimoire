# GitHub Copilot — DataverseGrimoire

These instructions are read automatically by GitHub Copilot Chat when working in this repository.

## Repo at a glance

This repo is a local wiki of Microsoft Dataverse / Dynamics 365 entity documentation. The wiki lives under `wiki/`:

- `wiki/index.json` — searchable index of all entities (logical name, display, synonyms IT/EN, description, file path, optional `source: "custom"` marker for live tenant data).
- `wiki/entities/{logical}.md` — per-entity sheet from public Microsoft docs.
- `wiki/custom/{logical}.md` — per-entity sheet for entities pulled live from a Dataverse tenant (`source: "custom"` in the index).

## When the user asks about Dataverse entities

The user is an Italian-speaking Dataverse developer. When they ask about Dataverse / Dynamics 365 / Power Platform / CRM tables — especially when they describe a business concept in Italian (`clienti`, `fatture`, `opportunità`, `contratti`) and need a logical name for a Web API or FetchXML query — follow the workflow in `.github/prompts/dataverse-grimoire.prompt.md`.

You can also invoke that workflow explicitly with the `/dataverse-grimoire` slash command in Copilot Chat.

**Quick rules** (the prompt file has the full version):

1. Read `wiki/index.json` first (technical layer, **authoritative**) to score candidates by logical / synonyms / display / description.
2. If both a `source: "custom"` entry and a public entry exist for the same logical name, **prefer the custom one** — the user's tenant is authoritative.
3. Read the file at the path in the index entry's `file` field (either `wiki/entities/X.md` or `wiki/custom/X.md`) and surface only the relevant info: logical name, entity set, primary attributes, a `GET /api/data/v9.2/...` example, and the attributes / relationships the user actually needs.
4. **Then** check `wiki_from_docs/index.json` for the top candidate (functional layer, not authoritative). Match on `dataverse_logical`. Three outcomes:
   - ✅ Match → append "Contesto funzionale" section (business area, processes, AF references, generated date)
   - ⚠️ Match with potential staleness → discrepancy warning + ask user preference + draft message for Dataverse team
   - ❌ No match → inline note `_⚠️ Non documentata nelle AF. Schema tecnico disponibile._`
5. If the technical wiki is empty, suggest `npm run build`. If a custom entity is missing, suggest `npm run custom -- --url <env-url>`. If `wiki_from_docs/` is missing, suggest `npm run docs`. Don't scrape or guess.

## Style

- Reply in Italian for narrative text; keep code, logical names, and identifiers in English.
- The user is experienced — skip OData / Dataverse basics, go straight to the answer.

## Implementation work on this repo

When asked to modify the pipeline (`scripts/build-wiki.mjs`, `scripts/build-custom.mjs`, etc.):

- Node.js 20+ ESM modules (`type: "module"`). Use native `fetch`, no extra HTTP deps.
- Single dep: `gray-matter` for parsing markdown frontmatter.
- Auth for the custom ingestor uses a device code flow against the well-known Microsoft Power Query public client (`51f81489-…`) — no App Registration needed.
- The shared rendering function lives in `scripts/render-entity.mjs` (`renderEntityMd`) and is consumed by both the public and custom build pipelines. Keep its signature stable.
