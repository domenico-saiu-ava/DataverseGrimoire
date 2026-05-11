# AGENTS.md — Dataverse Skills

This file is read automatically by coding agents that follow the [AGENTS.md convention](https://agents.md) (Codex CLI, Cursor, Cline, Aider, and others). It documents three cooperating skills that form an end-to-end workflow:

- **Grimoire** — translates business terms into Dataverse entity logical names and emits Web API endpoints.
- **Sintaura** — takes a Dataverse Web API endpoint (typically produced by Grimoire) and scaffolds a Java 17 + JUnit 5 + WireMock + Instancio + Datafaker stub project.
- **Mymithra** — orchestrates a Sintaura-scaffolded Provider into a `fetch → validate → convert → publish` pipeline with Null Object + AbstractLogging + per-entity scaffold + Mockito collaboration tests.

Each skill is autonomous; the user can stop after any stage. The repo also hosts a local Markdown wiki of ~1350 Dataverse / Dynamics 365 entities (under `wiki/`) that Grimoire and Sintaura both read.

## Style (shared)

- The user is an experienced Dataverse / Java developer. Skip basics on OData, Maven, JUnit, WireMock, Mockito; go straight to the answer.
- **Reply in Italian for narrative text**, keep code, logical names, identifiers, file paths, and CLI commands in English. (Strong user preference.)
- When matching on an Italian synonym, name it explicitly: *"`account` matcha sul synonym IT 'cliente'"*.

---

## Skill 1: Grimoire — Dataverse entity lookup

### When to engage

Whenever the user asks about Dataverse / Dynamics 365 / Power Platform / CRM tables or entities — especially when they describe a **business concept** in Italian or English (`clienti`, `fatture`, `opportunità`, `contratti`, `leads`) and need the corresponding **logical name**, **entity set**, **attributes**, or **relationships** to write Web API or FetchXML queries.

### Workflow (short form)

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

---

## Skill 2: Sintaura — Java stub generation

### When to engage

When the user provides a Dataverse Web API URL (e.g. `GET /api/data/v9.2/accounts?$select=name,emailaddress1`) and asks to **scaffold stubs / mock the API / generate Java test fixtures**, or mentions WireMock + Dataverse / stub Dataverse / mock Dynamics API in a Java context.

### Workflow (short form)

1. **Parse the endpoint** — extract `httpMethod`, `entitySetName`, `urlPath`, `defaultQuery` (everything after `?`), `$select`, `$top`, and `expandClauses` (each `$expand=navProp($select=...)`).
2. **Schema lookup** — read `wiki/index.json`, find the entity by `entitySetName`, then read `wiki/entities/{logical}.md` (or `wiki/custom/{logical}.md`, applying the prefer-custom rule above) to obtain attributes (the wiki has no per-attribute type column — infer types from naming heuristics in SKILL.md). For each `$expand`, resolve the target via the M2O table in the parent's wiki sheet and recurse. If no match, suggest `npm run custom -- --url <env-url>` for custom entities and stop.
3. **Ask the user** for: output directory (absolute, must NOT be inside this repo), build system (`Maven` or `Gradle`), Java package (default `com.example.sintaura.{logical}`).
4. **Load mappings** — read `.claude/skills/sintaura/domain-mapping.json`. If `{output-dir}/.sintaura/mapping.json` exists, merge it (override entries replace in-skill ones with the same `pattern`). Detect paired date ranges (`{prefix}start`+`{prefix}end`).
5. **Generate** the Maven/Gradle project under `{output-dir}` using the templates in `.claude/skills/sintaura/templates/`. Layout:
   - `src/main/java/{pkg}/core/Provider.java` — interface used by Mymithra
   - `src/main/java/{pkg}/models/{Entity}.java` (+ one DTO per `$expand` target)
   - `src/main/java/{pkg}/providers/{Entity}Provider.java` — HTTP + Jackson, two constructors (`(URI)` for stubs, `(URI, accessToken)` for real calls). Implements `core.Provider<{Entity}>`.
   - `src/test/java/{pkg}/factories/{Entity}Factory.java` (+ one factory per expand target). Paired date ranges emit a preamble that ensures `end > start`.
   - `src/test/java/{pkg}/stubs/{Entity}Stub.java` — references `{Entity}Provider.URL_PATH`.
   - `src/test/java/{pkg}/{Entity}StubTest.java` — `@WireMockTest`.
   - `src/test/java/{pkg}/{Entity}ProviderIntegrationTest.java` — calls a real Dataverse, auto-skip via `Assumptions` when config is missing.
   - `src/test/resources/application.properties` — `dataverse.baseUrl` / `dataverse.accessToken` empty by default.
   - Pinned: Java 17, JUnit Jupiter 5.10, WireMock 3.5, Instancio 3.7, Datafaker 2.2, Jackson 2.17, Mockito 5.11.
6. **Report** the files created, the run command (`mvn test` or `./gradlew test`), applied Datafaker overrides, paired-date detections, and `$expand` resolutions.

### Integration test config (precedence, first non-blank wins)

`-Ddataverse.baseUrl=…` system property → `DATAVERSE_BASE_URL` env var → `application.properties` file. If absent, the test is silently skipped via `Assumptions.assumeTrue(...)`.

---

## Skill 3: Mymithra — integration pipeline scaffold

### When to engage

When the user has a Sintaura-scaffolded project (`models/{Entity}.java` + `providers/{Entity}Provider.java`) and asks to **scaffold the integration pipeline / orchestratore / Provider→Validator→Converter→Publisher** for a Dataverse entity. Trigger phrases: *"genera la pipeline / scaffold integration / orchestrator"*.

### Prerequisites

- Sintaura project layout present (`pom.xml`, `models/`, `providers/`).
- `pom.xml` includes Mockito 5.11+ (Sintaura emits this by default since v3).
- `{Entity}Provider implements {base}.core.Provider<{Entity}>` (Sintaura emits this automatically). If missing, ask the user to regenerate via Sintaura — don't patch by hand.

### Workflow (short form)

1. **Detect the entity tree.** For each `models/{Entity}.java`, parse `@JsonProperty` fields. A field whose declared type is **another class of `models/`** is an expanded child. Build the root + children tree (recursive for grandchildren).
2. **Generate `core/` (idempotent).** If `{base}/core/Provider.java` already exists, skip — Sintaura v3 or a previous Mymithra run has already emitted it. Otherwise, write 17 reusable classes (`Logger` + `NullLogger` + `ConsoleLogger`, `Provider/NullProvider/AbstractLoggingProvider`, `Validator/NullValidator/AbstractLoggingValidator`, `ValidationResult`, `Converter/AbstractLoggingConverter`, `Publisher/AbstractLoggingPublisher/LoggingPublisher`, `IntegrationPipeline`, `PipelineResult`) + 4 core tests (`IntegrationPipelineTest`, `AbstractLoggingValidator/Converter/PublisherTest`).
3. **Generate per-entity scaffold.** For the root: `{Entity}Output`, `{Entity}Validator/Converter/Publisher` (extend `AbstractLogging*`, take child components via constructor injection), `{Entity}Integration` (`buildPipeline(provider, logger)` static method + `main()` reading `DATAVERSE_BASE_URL/ACCESS_TOKEN`). For each child (recursive): same 4 files (no `Integration`). Parent's Validator prefixes child errors with the navigation property name. Parent's Publisher has the child publisher as a field but the cascade call is **commented out** by default.
4. **Generate collaboration tests** (Mockito + JUnit 5). For each entity: `ValidatorTest` (delegates to child mock, prefixes errors, skips when child is null), `ConverterTest` (verifies child convert + assigns to output), `PublisherTest` (verifies log + cascade NOT called by default). For the root, also `{Entity}IntegrationTest` (mocks Provider, asserts `processed/skipped/failed`).
5. **Report.** List of files, `mvn test` command, expected test counts, run command for the orchestrator (`mvn exec:java "-Dexec.mainClass=…"`), reminders that `{Entity}Output` is empty and the publisher cascade is commented.

### Style

- Same convention as Grimoire/Sintaura: narrative in Italian, code/identifiers/CLI in English.
- Mention the entity tree explicitly: *"detected root `Appointment` with 1 expanded child `Account` via `regardingobjectid_account_appointment`"*.
- Mention idempotent skips: *"`{base}/core/` already exists, skipping core generation."*

---

## Reference

For the full workflow with worked examples, edge cases, and updating instructions, read the canonical skill files. These `AGENTS.md` sections are intentionally short to minimize context cost; the skill files are the source of truth for any ambiguity.

Sibling references (kept in sync):
- `.claude/skills/dataverse-grimoire/SKILL.md` — Claude Code skill (auto-activated by description match)
- `.claude/skills/sintaura/SKILL.md` — Claude Code skill for Java stub generation
- `.claude/skills/mymithra/SKILL.md` — Claude Code skill for integration pipeline scaffold
- `.github/copilot-instructions.md` — GitHub Copilot ambient instructions
- `.github/prompts/dataverse-grimoire.prompt.md` — Copilot Chat slash command (`/dataverse-grimoire`)
- `.github/prompts/sintaura.prompt.md` — Copilot Chat slash command (`/sintaura`)
- `.github/prompts/mymithra.prompt.md` — Copilot Chat slash command (`/mymithra`)
