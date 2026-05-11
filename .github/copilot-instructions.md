# GitHub Copilot — Dataverse Skills

These instructions are read automatically by GitHub Copilot Chat when working in this repository. They cover three cooperating skills that form an end-to-end Dataverse → Java workflow:

- **Grimoire** — entity lookup (business term → logical name + Web API endpoint).
- **Sintaura** — Java stub scaffolding for the endpoints Grimoire emits (DTO + Provider + factories + WireMock + integration test).
- **Mymithra** — integration pipeline scaffold over a Sintaura project (`fetch → validate → convert → publish` + per-entity scaffolds + Mockito collaboration tests).

## Repo at a glance

This repo hosts a local wiki of Microsoft Dataverse / Dynamics 365 entity documentation, plus three skills that read it. The wiki lives under `wiki/`:

- `wiki/index.json` — searchable index of all entities (logical name, display, synonyms IT/EN, description, file path, optional `source: "custom"` marker for live tenant data).
- `wiki/entities/{logical}.md` — per-entity sheet from public Microsoft docs.
- `wiki/custom/{logical}.md` — per-entity sheet for entities pulled live from a Dataverse tenant (`source: "custom"` in the index).

## Style (shared)

- Reply in Italian for narrative text; keep code, logical names, and identifiers in English.
- The user is experienced — skip Dataverse / OData / Maven / JUnit / WireMock / Mockito basics, go straight to the answer.

## When the user asks about Dataverse entities

The user is an Italian-speaking Dataverse developer. When they ask about Dataverse / Dynamics 365 / Power Platform / CRM tables — especially when they describe a business concept in Italian (`clienti`, `fatture`, `opportunità`, `contratti`) and need a logical name for a Web API or FetchXML query — follow the workflow in `.github/prompts/dataverse-grimoire.prompt.md`.

You can also invoke that workflow explicitly with the `/dataverse-grimoire` slash command in Copilot Chat.

**Quick rules** (the prompt file has the full version):

1. Read `wiki/index.json` first to score candidates by logical / synonyms / display / description.
2. If both a `source: "custom"` entry and a public entry exist for the same logical name, **prefer the custom one** — the user's tenant is authoritative.
3. Read the file at the path in the index entry's `file` field (either `wiki/entities/X.md` or `wiki/custom/X.md`) and surface only the relevant info: logical name, entity set, primary attributes, a `GET /api/data/v9.2/...` example, and the attributes / relationships the user actually needs.
4. If the wiki is empty, suggest `npm run build`. If a custom entity is missing, suggest `npm run custom -- --url <env-url>`. Don't scrape or guess.

## When the user asks to stub / mock a Dataverse Web API in Java

Engage when the user provides a Dataverse REST endpoint (e.g. `GET /api/data/v9.2/accounts?$select=...`) and asks to **scaffold stubs / mock the API / generate Java test fixtures**, or mentions WireMock + Dataverse / stub Dataverse / mock Dynamics in a Java context. Follow the workflow in `.github/prompts/sintaura.prompt.md`, which can also be invoked explicitly with the `/sintaura` slash command.

**Quick rules** (the prompt file has the full version):

1. Parse the endpoint to extract `httpMethod`, `entitySetName`, `urlPath`, `defaultQuery` (everything after `?`), `$select`, `$top`, and `$expand` clauses.
2. Read `wiki/index.json` to map `entitySetName` → `logical`, then read `wiki/entities/{logical}.md` (or `wiki/custom/{logical}.md` — same prefer-custom rule) to obtain attributes (no type column in the wiki — infer types from naming). For each `$expand`, resolve the target via the M2O table.
3. Ask for: output directory (absolute, must NOT be inside this repo), build system (`Maven` or `Gradle`), Java package.
4. Read `.claude/skills/sintaura/domain-mapping.json` (and any `{output-dir}/.sintaura/mapping.json` override) to choose Datafaker providers per attribute. Detect paired date ranges (`{prefix}start`+`{prefix}end`) and emit a coupled preamble in the factory.
5. Generate the project from the templates in `.claude/skills/sintaura/templates/`:
   - `src/main/java/{pkg}/core/Provider.java` — interface used by Mymithra
   - `src/main/java/{pkg}/models/` — DTO per main entity + one per `$expand` target
   - `src/main/java/{pkg}/providers/{Entity}Provider.java` — HTTP + Jackson, two constructors (`(URI)` for stubs, `(URI, accessToken)` for real calls). Implements `core.Provider<{Entity}>`.
   - `src/test/java/{pkg}/factories/` — Instancio + Datafaker factories
   - `src/test/java/{pkg}/stubs/{Entity}Stub.java` — WireMock setup, references `{Entity}Provider.URL_PATH`
   - `src/test/java/{pkg}/{Entity}StubTest.java` — `@WireMockTest`
   - `src/test/java/{pkg}/{Entity}ProviderIntegrationTest.java` — calls real Dataverse, auto-skip via `Assumptions` when env not set
   - `src/test/resources/application.properties` — empty `dataverse.baseUrl` / `dataverse.accessToken` keys
   - Pinned: Java 17, JUnit Jupiter 5.10, WireMock 3.5, Instancio 3.7, Datafaker 2.2, Jackson 2.17, Mockito 5.11.
6. Report the files created, run command (`mvn test` / `./gradlew test`), applied overrides, paired-date detections, and `$expand` resolutions.

## When the user asks to scaffold an integration pipeline on a Sintaura project

Engage when the user has a Sintaura-scaffolded project (`models/{Entity}.java` + `providers/{Entity}Provider.java`) and asks to **scaffold the pipeline / orchestratore / Provider→Validator→Converter→Publisher** for a Dataverse entity. Follow the workflow in `.github/prompts/mymithra.prompt.md`, which can also be invoked explicitly with the `/mymithra` slash command.

**Quick rules** (the prompt file has the full version):

1. **Verify prerequisites**: `pom.xml` with Mockito 5.11+, `models/{Entity}.java`, `providers/{Entity}Provider.java` implementing `core.Provider<{Entity}>` (Sintaura v3 emits this automatically — if missing, ask the user to regenerate via Sintaura).
2. **Detect the entity tree** by parsing `@JsonProperty` fields in each `models/` class. A field whose declared type is another `models/` class is an expanded child (recursive for grandchildren).
3. **Generate `core/` idempotently** — skip if `{base}/core/Provider.java` already exists. Otherwise write 17 reusable classes (interfaces + Null Objects + AbstractLogging templates + `IntegrationPipeline` + `PipelineResult` + `ValidationResult` + `Logger`/`NullLogger`/`ConsoleLogger`) + 4 core tests.
4. **Generate per-entity scaffold** (recursive): `{Entity}Output` + `{Entity}Validator/Converter/Publisher` (extend `AbstractLogging*`, take children via constructor injection). Root only: `{Entity}Integration` with `buildPipeline(provider, logger)` static method + `main()` reading `DATAVERSE_BASE_URL/ACCESS_TOKEN`. Parent's Validator prefixes child errors with nav property name. Parent's Publisher has child as field but cascade call is commented out.
5. **Generate Mockito collaboration tests** for every component (root + children), plus `{Entity}IntegrationTest` smoke for the root (mocks Provider, asserts `processed/skipped/failed`).
6. Report files, `mvn test` command, expected test counts, orchestrator run (`mvn exec:java "-Dexec.mainClass=…"`), reminders about empty `{Entity}Output` and commented cascade.

## Implementation work on this repo

When asked to modify the pipeline (`scripts/build-wiki.mjs`, `scripts/build-custom.mjs`, etc.):

- Node.js 20+ ESM modules (`type: "module"`). Use native `fetch`, no extra HTTP deps.
- Single dep: `gray-matter` for parsing markdown frontmatter.
- Auth for the custom ingestor uses a device code flow against the well-known Microsoft Power Query public client (`51f81489-…`) — no App Registration needed.
- The shared rendering function lives in `scripts/render-entity.mjs` (`renderEntityMd`) and is consumed by both the public and custom build pipelines. Keep its signature stable.
