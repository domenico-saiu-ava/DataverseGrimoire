---
name: dataverse-grimoire
description: Look up Microsoft Dataverse / Dynamics 365 / Power Platform entity (table) logical names, schema, attributes, relationships, and Web API endpoints from a local Markdown wiki. Activate whenever the user asks about Dataverse/Dynamics tables or CRM entities — especially when they describe a business concept ("clienti", "fatture", "opportunità", "leads") and need the corresponding logical name to write Web API or FetchXML queries.
---

# DataverseGrimoire — Local Dataverse entity lookup

You have access to a local wiki with **~1350 Microsoft Dataverse / Dynamics 365 entities** parsed from the official Microsoft documentation repos. Your job is to translate vague business terms (Italian or English) into the right entity logical name and surface the schema details the user needs.

## Wiki layout

- `wiki/index.json` — array of all entities with `{logical, display, displayPlural, entitySetName, primaryIdAttribute, primaryNameAttribute, description, synonyms_it, synonyms_en, attributeCount, relationshipCount, file, source?, envHost?}`. **Read this first** for any lookup. The `file` field contains the relative path inside `wiki/` (either `entities/X.md` for public docs or `custom/X.md` for live tenant data).
- `wiki/entities/{logical}.md` — per-entity sheet from public Microsoft docs (Identity, Web API examples, attribute lists, relationships).
- `wiki/custom/{logical}.md` — per-entity sheet for entities pulled live from a Dataverse tenant (`source: "custom"` in the index, `envHost` identifies the source environment). Same format as `entities/`.
- `wiki/samples/{logical}.md` — links to PowerApps-Samples files that mention the entity (only present for entities with samples).
- `wiki/README.md` — human-browsable index of curated (synonym-rich) entities.

## Custom entities (live tenant data)

Some users populate `wiki/custom/` by running `npm run custom -- --url <env-url>` against their own Dataverse environment. When this has been done, the index contains entries with `source: "custom"` and `envHost: "<host>"`.

**Prefer-custom rule:** if both a `source: "custom"` entry and a public docs entry exist for the same logical name, prefer the custom one — the user's tenant is authoritative for their work, especially if they've added custom attributes or extended a standard entity. Mention the source explicitly in the candidates table so the user knows which one you're using.

**When custom entries are missing:** if the user asks about an entity that looks custom (e.g., starts with a publisher prefix like `xyz_`, or doesn't match any public docs entity even after Grep), and no `source: "custom"` entries exist in the index, suggest running `npm run custom -- --url https://<env>.crm4.dynamics.com` to populate them. Don't try to guess the schema.

## Workflow

### Step 1 — Identify candidates

When the user asks about an entity by business term:

1. **Always start by reading `wiki/index.json`**. This is the source of truth for what exists.
2. Score candidates against the user's term using these signals (in decreasing order of confidence):
   - Exact match on `logical` or `entitySetName` → confidence very high, skip ranking
   - Exact match on any item in `synonyms_it` or `synonyms_en` → confidence high
   - Substring match on `display` or `displayPlural` → confidence medium
   - Substring match on `description` (case-insensitive) → confidence low; only use as tie-breaker
3. If still ambiguous, fall back to a `Grep` over `wiki/entities/*.md` for the user's term — useful for attributes (e.g., "credit limit" → grep finds it inside `account.md`).

Present **top 3 candidates** as a compact table. Include a `Source` column when at least one candidate is custom:

```
| # | Logical | Display | Source | Why it matches |
| 1 | xyz_contract | Contract | custom (orgXXXX.crm4) | synonym IT: "contratto" |
| 2 | account      | Account  | docs                  | synonym IT: "cliente"   |
| 3 | contact      | Contact  | docs                  | synonym IT: "persona"   |
```

If only one candidate is clearly correct (exact match or single synonym hit), skip the table and go straight to step 2.

### Step 2 — Show the schema sheet

Once an entity is identified (either obvious from step 1 or after the user picks one), `Read` the file at the path indicated by the `file` field in the index entry — it can be `wiki/entities/{logical}.md` or `wiki/custom/{logical}.md`. Present the relevant info compactly:

- **Identity**: logical name, entity set name (Web API path), primary id, primary name attribute
- **Web API call** ready to copy: `GET /api/data/v9.2/{entitySetName}?$select=…`
- **Attribute count** (writable / read-only) and a short list of the most relevant attributes given the user's question
- **Key relationships** if relevant (e.g., user asked "where does account link to contact?" → highlight the `account_primary_contact` relationship)

Do not dump the entire entity file unless the user explicitly asks for "everything" or "all attributes" — these files can be hundreds of lines.

### Step 3 — Code samples (on request)

If the user asks for an example ("mostrami un esempio", "give me a sample", "how do I create"), check `wiki/samples/{logical}.md` first. If it exists, surface the linked sample files. If it doesn't, generate a minimal Web API or SDK snippet from the entity metadata in step 2.

## Style guidelines

- The user is a Dataverse/Power Platform developer; skip OData basics, focus on the lookup answer.
- Reply in Italian for narrative text (the user prefers it); keep code, logical names, and identifiers in English.
- When the user's term is in Italian, mention which Italian synonym matched so they can build their own mental model.
- If the wiki is missing or empty, tell the user to run `npm run build` from the project root — don't try to scrape the web yourself.

## Worked examples

**User:** "qual è l'entità Dataverse per i clienti aziendali?"
**You:**
1. Read `wiki/index.json`, score candidates: `account` matches synonym_it "cliente"/"azienda" (high); `contact` matches "persona" (lower, person not business); `lead` matches "potenziale cliente" (lower, not yet a customer).
2. Present top 3 with the table.
3. Recommend `account` as the answer, mention the entity set is `accounts`, primary name attribute is `name`.

**User:** "dammi lo schema di opportunity"
**You:**
1. Exact `logical` match → no need to rank.
2. Read `wiki/entities/opportunity.md`, summarize: entity set `opportunities`, 94 writable / 32 read-only attributes, key M2O to `account` (`parentaccountid`), `contact` (`parentcontactid`), `transactioncurrency`, sample Web API `GET /api/data/v9.2/opportunities?$select=name,estimatedvalue&$top=10`.

**User:** "esempio di creazione di un account via Web API"
**You:**
1. Identify `account` from the term.
2. Check `wiki/samples/account.md`; if present, list 1-3 of the sample files.
3. Show a minimal `POST /api/data/v9.2/accounts` with required fields (just `name` is mandatory in most orgs).

## Updating the wiki

- **Public docs**: `npm run update` from the project root pulls source repos and rebuilds. `npm run rebuild` wipes `.cache/` and rebuilds from scratch (also drops `wiki/custom/` — needs `npm run custom` again afterwards).
- **Custom tenant**: `npm run custom -- --url https://<env>.crm4.dynamics.com` (first run triggers a device-code login in browser, subsequent runs use the cached token). `npm run custom:logout -- --url <env-url>` invalidates the token.
