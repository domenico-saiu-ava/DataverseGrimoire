# AGENTS.md — DataverseGrimoire

This file is read automatically by coding agents that follow the [AGENTS.md convention](https://agents.md) (Codex CLI, Cursor, Cline, Aider, and others).

## What this repo is

A local, queryable wiki of Microsoft Dataverse / Dynamics 365 entity documentation (~1350 entities) plus an optional live ingestor that pulls a tenant's custom entities. Designed to translate vague business terms (Italian or English) into the right entity logical name for Web API / FetchXML queries.

## When to engage

Whenever the user asks about Dataverse / Dynamics 365 / Power Platform / CRM tables or entities — especially when they describe a **business concept** in Italian or English (`clienti`, `fatture`, `opportunità`, `contratti`, `leads`) and need the corresponding **logical name**, **entity set**, **attributes**, or **relationships** to write Web API or FetchXML queries.

## Workflow (short form)

1. **Read `wiki/index.json` FIRST** (technical layer, authoritative). Score candidates: exact `logical`/`entitySetName` → synonyms → display → description. Present top 3 if ambiguous.
2. Read the matching `.md` at the `file` path (`wiki/entities/X.md` or `wiki/custom/X.md`). Surface: logical, entity set, primary attributes, `GET /api/data/v9.2/...` example, relevant fields/relationships.
3. **Then check `wiki_from_docs/index.json`** for the top candidate only (functional layer, not authoritative). Match on `dataverse_logical` first, fallback on `display_it`. Three outcomes:
   - ✅ Match found → append **"Contesto funzionale"** section (business area, processi, riferimenti AF, data generazione docs)
   - ⚠️ Match found but potential staleness (generated date older or user reveals gap) → explicit discrepancy warning + ask user preference + bozza messaggio per team Dataverse
   - ❌ No match → inline note `_⚠️ Entità non documentata nelle AF (wiki_from_docs). Schema tecnico disponibile._`
4. If ambiguous in step 1, fall back to `grep` over `wiki/entities/*.md` and `wiki/custom/*.md`.

### Prefer-custom rule

If both a `source: "custom"` entry and a public docs entry exist for the same `logical`, prefer the custom one — the user's tenant is authoritative for their work. Mention the source explicitly so the user knows which version you used.

### When the wiki is empty or stale

- No `wiki/` folder or empty `wiki/index.json` → tell the user to run `npm run build`. Don't scrape Microsoft Learn yourself.
- User asks about an entity that looks custom (e.g. `xyz_*` prefix) but no `source: "custom"` entries exist → suggest `npm run custom -- --url https://<env>.crm4.dynamics.com` to populate `wiki/custom/`. Don't guess the schema.
- `wiki_from_docs/` missing or empty → tell the user to run `npm run docs`. Run after publishing new analysis documents or after schema changes in the tenant.

## Style

- The user is an experienced Dataverse / Power Platform developer. Skip OData basics; go straight to the lookup answer.
- **Reply in Italian for narrative text**, keep code, logical names, and identifiers in English. (Strong user preference.)
- When matching on an Italian synonym, name it explicitly so the user can build their mental model: *"`account` matcha sul synonym IT 'cliente'"*.

## Reference

For the full workflow with worked examples, edge cases, and updating instructions, read **`.claude/skills/dataverse-grimoire/SKILL.md`** (the canonical version). This `AGENTS.md` is intentionally short to minimize context cost on every prompt; the skill file is the source of truth for any ambiguity.

Sibling references (kept in sync):
- `.claude/skills/dataverse-grimoire/SKILL.md` — Claude Code skill (auto-activated by description match)
- `.github/copilot-instructions.md` — GitHub Copilot ambient instructions
- `.github/prompts/dataverse-grimoire.prompt.md` — Copilot Chat slash command (`/dataverse-grimoire`)
