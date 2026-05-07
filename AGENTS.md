# AGENTS.md — DataverseGrimoire

This file is read automatically by coding agents that follow the [AGENTS.md convention](https://agents.md) (Codex CLI, Cursor, Cline, Aider, and others).

## What this repo is

A local, queryable wiki of Microsoft Dataverse / Dynamics 365 entity documentation (~1350 entities) plus an optional live ingestor that pulls a tenant's custom entities. Designed to translate vague business terms (Italian or English) into the right entity logical name for Web API / FetchXML queries.

## When to engage

Whenever the user asks about Dataverse / Dynamics 365 / Power Platform / CRM tables or entities — especially when they describe a **business concept** in Italian or English (`clienti`, `fatture`, `opportunità`, `contratti`, `leads`) and need the corresponding **logical name**, **entity set**, **attributes**, or **relationships** to write Web API or FetchXML queries.

## Workflow (short form)

1. **Read `wiki/index.json` first.** It contains every known entity with display name, synonyms (IT/EN), description, file path, and (if present) a `source: "custom"` marker for live tenant data.
2. **Score candidates** by, in order: exact match on `logical` / `entitySetName` → exact match on `synonyms_it` / `synonyms_en` → substring on `display` / `displayPlural` → substring on `description`.
3. If ambiguous, fall back to `grep` over `wiki/entities/*.md` and `wiki/custom/*.md` (useful when the user names an attribute, e.g. `creditlimit`, instead of an entity).
4. **Read the matching `.md`** at the path stored in the index entry's `file` field. It can be `wiki/entities/{logical}.md` (public docs) or `wiki/custom/{logical}.md` (live tenant).
5. **Reply** with: logical name, entity set (Web API path), primary id and name attributes, a copy-pasteable `GET /api/data/v9.2/<set>?$select=…` line, and only the attributes / relationships relevant to the user's question. Don't dump the full schema unless asked.

### Prefer-custom rule

If both a `source: "custom"` entry and a public docs entry exist for the same `logical`, prefer the custom one — the user's tenant is authoritative for their work. Mention the source explicitly so the user knows which version you used.

### When the wiki is empty or stale

- No `wiki/` folder or empty `wiki/index.json` → tell the user to run `npm run build`. Don't scrape Microsoft Learn yourself.
- User asks about an entity that looks custom (e.g. `xyz_*` prefix) but no `source: "custom"` entries exist → suggest `npm run custom -- --url https://<env>.crm4.dynamics.com` to populate `wiki/custom/`. Don't guess the schema.

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
