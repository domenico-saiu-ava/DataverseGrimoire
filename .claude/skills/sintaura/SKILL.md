---
name: sintaura
description: Generate a JUnit 5 + WireMock + Instancio + Datafaker Java stub project from a Dataverse REST endpoint produced by Grimoire. Activate when the user provides a Dataverse Web API URL (es. GET /api/data/v9.2/accounts?$select=...) and asks to scaffold stubs / mock the API / generate test fixtures in Java, or when they mention WireMock + Dataverse / stub Dataverse / mock Dynamics API in a Java context.
---

# Sintaura — Dataverse REST → Java stub generator

Sintaura takes a Dataverse Web API endpoint (typically produced by the `dataverse-grimoire` skill) and scaffolds a self-contained **Java 17 + JUnit 5** project that:

- exposes a **`{Entity}Provider`** (in `src/main/java`) that performs the HTTP call and maps the response to typed DTOs;
- supplies test data via **Instancio + Datafaker** factories (in `src/test/java`);
- stubs the endpoint with **WireMock** so the Provider is exercised against a deterministic response;
- includes an example `@WireMockTest` class that instantiates the Provider against the WireMock base URL and asserts on the first DTO returned;
- includes a **`{Entity}ProviderIntegrationTest`** that runs the Provider against a real Dataverse environment (baseUrl + bearer token from `application.properties`, env vars, or `-D` system properties); the test auto-skips via `Assumptions` when the config is absent so `mvn test` stays green by default.

## Prerequisites

Sintaura depends on the **Grimoire wiki** to look up entity attributes and types:

- `wiki/index.json` must exist (entity set name → logical name lookup).
- `wiki/entities/{logical}.md` (or `wiki/custom/{logical}.md` for live tenant data) must contain the attribute list for the entity referenced by the endpoint.

If the wiki is missing or empty, stop and tell the user to run `npm run build` from the project root (same message as Grimoire). Do not try to guess the schema.

## Inputs

The user provides, in this order:

1. **A Dataverse REST endpoint** as plain text — typically the `GET /api/data/v9.2/...` line that Grimoire emitted. Examples:
   - `GET /api/data/v9.2/accounts?$select=name,emailaddress1,telephone1&$top=10`
   - `GET /api/data/v9.2/contacts(<guid>)`
   - `GET /api/data/v9.2/appointments?$select=subject,scheduledstart&$expand=regardingobjectid_account_appointment($select=name,emailaddress1)&$top=50`
   - `POST /api/data/v9.2/opportunities`
2. Answers to the follow-up questions (output directory, build system, package name) — see **Step 3** below.

## Templates and mapping

Resources used during generation (paths relative to this skill folder):

- `domain-mapping.json` — ordered list of `{ pattern, datafaker }` rules. The first regex that matches an attribute's logical name wins. If no rule matches, fall back to the Java type default (Instancio handles it).
- `templates/pom.xml.template` and `templates/build.gradle.template` — build files with pinned dependency versions (Jackson is in **main** scope because the Provider uses it).
- `templates/Dto.java.template` — Jackson-annotated POJO.
- `templates/Provider.java.template` — HTTP client + Jackson mapping. Lives in `src/main/java`. Exposes `findAll()` and `find(String odataQuery)`.
- `templates/Factory.java.template` — Instancio + Datafaker generator (with optional preamble for paired date ranges).
- `templates/core/Provider.java.template` — interface `Provider<T>` with `List<T> fetch() throws Exception`. The generated `{Entity}Provider` implements it (alias for `findAll()`). Lives in `{package}.core` so the skill `mymithra` can wire its pipeline against the same interface.
- `templates/Stub.java.template` — WireMock stub configuration; references `{Entity}Provider.URL_PATH` so there's a single source of truth for the URL.
- `templates/StubTest.java.template` — example JUnit 5 test using `@WireMockTest`. Instantiates the Provider against the WireMock base URL and asserts on the first DTO returned by `findAll()`.
- `templates/ProviderIntegrationTest.java.template` — JUnit 5 test that instantiates the Provider against a real Dataverse via the `(URI, String accessToken)` constructor. Auto-skips via `Assumptions` when `dataverse.baseUrl` / `dataverse.accessToken` are not configured (sysprop, env var, or file).
- `templates/application.properties.template` — config file written to `src/test/resources/`, with `dataverse.baseUrl` and `dataverse.accessToken` keys empty by default. Read by `{Entity}ProviderIntegrationTest`.

All templates use `{{PLACEHOLDER}}` syntax. Substitution is purely textual.

## Workflow

### Step 1 — Parse the endpoint

From the input string extract:

- `httpMethod` — `GET` / `POST` / `PATCH` / `DELETE` (default `GET` if missing).
- `entitySetName` — the segment immediately after `/api/data/v9.2/`, stripping any `(<guid>)` suffix and query string.
- `urlPath` — the path (without scheme/host, without query string), e.g. `/api/data/v9.2/appointments`. The WireMock stub matches this with `urlPathEqualTo`.
- `defaultQuery` — everything after `?` in the original URL (without the leading `?`). Empty if absent. Stored verbatim in `{Entity}Provider.DEFAULT_QUERY` so `findAll()` reproduces the original call.
- `selectAttrs` — comma-separated values of `$select` if present; otherwise empty.
- `topCount` — integer value of `$top` if present; otherwise `5`.
- `expandClauses` — see **Handling `$expand`** below; an array of `{ navProp, selectAttrs }` parsed from the `$expand=...` parameter.

### Step 2 — Schema lookup (via Grimoire wiki)

1. Read `wiki/index.json`. Find the entry where `entitySetName` equals the value parsed in Step 1.
2. Apply the **prefer-custom rule**: if both a `source: "custom"` entry and a public docs entry exist for the same `logical`, use the custom one. Mention the source explicitly in the report.
3. Read the file at the index entry's `file` field (`wiki/entities/{logical}.md` or `wiki/custom/{logical}.md`). Extract the attribute list (the entity sheet has Writable / Read-only attribute lists; the Many-to-One relationships table provides lookup target entities for `$expand` resolution). The wiki sheet does **not** include per-attribute Dataverse types — infer types using the heuristics in **Type inference** below.
4. Build the **field set** for code generation:
   - if `selectAttrs` is non-empty → use exactly those attributes (in that order); add the primary id attribute if missing.
   - if `selectAttrs` is empty → use the primary id, the primary name, and the first 5 writable attributes from the entity sheet.
5. For each entry in `expandClauses`, repeat steps 1–4 against the target entity (see **Handling `$expand`**).

If the lookup fails (entity set not in `index.json`) and the entity has a publisher prefix (`xyz_*`), suggest `npm run custom -- --url https://<env>.crm4.dynamics.com` and stop.

### Step 3 — Collect user input

Use `AskUserQuestion` to ask three things in a single round:

- **Output directory** — absolute path. Sintaura must NOT default to writing inside `Dataverse.Skills`.
- **Build system** — `Maven` or `Gradle`.
- **Java package** — default suggestion: `com.example.sintaura.{logical}` (let the user override).

### Step 4 — Load mappings

1. Read `domain-mapping.json` from this skill folder (the in-skill defaults).
2. Optionally read `{output-dir}/.sintaura/mapping.json` if it exists (per-project override). Merge: an override entry whose `pattern` matches an in-skill entry replaces it; new patterns append at the end (after the in-skill list, so in-skill rules still win unless the override repeats the same pattern).
3. For each attribute in the field set (and in every nested expand field set), find the first matching pattern. Record `(attribute, datafakerExpr | null)`.
4. Detect **paired date ranges**: if the field set contains both `{prefix}start` and `{prefix}end` (e.g. `scheduledstart`+`scheduledend`, `actualstart`+`actualend`), mark them so the Factory generator emits the preamble described in **Paired date range fields** instead of independent overrides.

### Step 5 — Generate the project

Layout to create under `{output-dir}`:

```
{output-dir}/
├── pom.xml | build.gradle
└── src/
    ├── main/java/{packagePath}/
    │   ├── core/Provider.java                    (interface used by mymithra)
    │   ├── models/{Entity}.java                  (+ {Target}.java per each $expand)
    │   └── providers/{Entity}Provider.java       (implements Provider<{Entity}>)
    └── test/
        ├── java/{packagePath}/
        │   ├── factories/{Entity}Factory.java    (+ {Target}Factory.java per each $expand)
        │   ├── stubs/{Entity}Stub.java
        │   ├── {Entity}StubTest.java
        │   └── {Entity}ProviderIntegrationTest.java
        └── resources/
            └── application.properties
```

Where:
- `{packagePath}` = `package` with dots replaced by `/`.
- `{Entity}` = PascalCase of `logical` (e.g. `account` → `Account`, `xyz_contract` → `XyzContract`).
- For **POST** / **PATCH** endpoints, name the test method `shouldAcceptStubbed{Entity}Post` (or `Patch`) and use `WireMock.post(...)` / `WireMock.patch(...)` accordingly. The Provider should still expose `find` / `findAll` for GETs; for write methods, generate a different Provider method (e.g. `create(Entity body)` returning the response DTO).
- For **single-record** GET endpoints (`/accounts(<guid>)`), the stub returns a single object instead of a `{ "value": [...] }` envelope, and the Provider exposes `findOne()` instead of `findAll()`.

For each template, perform the placeholder substitutions documented in **Placeholder reference** below, then `Write` the file.

If a target file already exists, ask the user whether to overwrite it (default: skip).

### Pipeline interface (mymithra integration)

The generated `{Entity}Provider` implements `{package}.core.Provider<{Entity}>` from a small `core/Provider.java` interface that Sintaura always emits. This allows the **mymithra** skill (when run on the same project) to plug the Provider into a pipeline orchestrator without modifications. The `fetch()` method is a thin alias that returns `findAll()`. If the user is not using mymithra, the interface is a single-method file with negligible overhead.

### Provider authentication

The generated `{Entity}Provider` exposes two constructors:

- `{Entity}Provider(URI baseUri)` — anonymous, used by `{Entity}StubTest` against WireMock. No `Authorization` header.
- `{Entity}Provider(URI baseUri, String accessToken)` — used by `{Entity}ProviderIntegrationTest`. When `accessToken` is non-`null` and non-blank, the Provider adds an `Authorization: Bearer {accessToken}` header to every request.

The 1-arg constructor delegates to the 2-arg one passing `null` → backward compatible: existing stubs see no change in the requests WireMock matches.

### Integration test configuration

`{Entity}ProviderIntegrationTest` reads `dataverse.baseUrl` and `dataverse.accessToken` in this precedence order (first non-blank wins):

1. System properties: `-Ddataverse.baseUrl=… -Ddataverse.accessToken=…`
2. Environment variables: `DATAVERSE_BASE_URL`, `DATAVERSE_ACCESS_TOKEN`
3. File: `src/test/resources/application.properties`

If either value is blank or missing, the test is **silently skipped** via `Assumptions.assumeTrue(...)` — `mvn test` stays green. CI activates it by exporting the env vars.

The `application.properties` file is always generated with the keys present but empty (plus commented examples). **Never commit real tokens to the repo.**

### Step 6 — Report

After writing the files, output:

- A short markdown list of every file created (with absolute paths).
- The exact command to run the tests:
  - Maven: `cd "{output-dir}" && mvn test`
  - Gradle: `cd "{output-dir}" && ./gradlew test` (Windows: `gradlew.bat test`)
- A one-line summary of which Datafaker overrides were applied (e.g. `emailaddress1 → internet().emailAddress(); telephone1 → phoneNumber().phoneNumber()`).
- A note on any `$expand` entities that were generated (DTO + Factory in addition to the main entity).
- A note when paired date ranges were detected and a coupled preamble was emitted.
- A note that `{Entity}ProviderIntegrationTest` is **disabled by default**; activate it by exporting `DATAVERSE_BASE_URL` + `DATAVERSE_ACCESS_TOKEN` (or via `-Ddataverse.baseUrl=… -Ddataverse.accessToken=…`).

## Handling `$expand`

OData `$expand` causes the response to embed referenced entities inline. Sintaura mirrors this in Java with a **nested DTO + composed factory** pattern.

### Parsing

Inside `defaultQuery`, find `$expand=`. The value is a comma-separated list at top level of items shaped like:
- `navProp` — implicit full expand (no nested `$select`)
- `navProp($select=col1,col2,...)` — narrowed
- `navProp($expand=otherNav(...))` — recursive

Tokenize honoring nested parentheses (the comma inside `(...)` is **not** a top-level separator).

### Resolution of the target entity

For each `navProp`, resolve the target Dataverse entity:

1. Check the parent entity's Many-to-One relationships table in the wiki sheet — the row whose `Navigation property` column equals `navProp` gives the `Target entity`.
2. As a fallback, look up `wiki/index.json` for an entity whose `logical` is a substring of `navProp`.

### Generation

For each expand clause:

1. Generate `{Target}.java` in `models/` using the `Dto.java.template` with the nested `$select` field set (plus the target's primary id when not selected explicitly).
2. Generate `{Target}Factory.java` in `factories/` using `Factory.java.template`.
3. On the **parent** DTO, append a field for the navigation property:
   ```java
       @JsonProperty("{navProp}")
       private {Target} {javaName};
       public {Target} get{Pascal}() { return {javaName}; }
       public void set{Pascal}({Target} v) { this.{javaName} = v; }
   ```
   where `{javaName}` is camelCase of `navProp`, `{Pascal}` is PascalCase.
4. On the **parent** Factory, append an override:
   ```java
               .supply(field({Parent}::get{Pascal}), {Target}Factory::create)
   ```
5. The Provider needs no extra code — Jackson auto-maps the nested object via the `@JsonProperty` annotation on the parent DTO field.
6. The example test asserts `assertNotNull(first.get{Pascal}())` and at least one field on the expanded entity.

Recursive expansions (`$expand=a($expand=b)`) repeat the same procedure on the target's DTO/Factory.

## Paired date range fields

When the field set contains both `{prefix}start` and `{prefix}end` (e.g. `scheduledstart`+`scheduledend`, `actualstart`+`actualend`):

- **Skip** the static mapping for those two attributes (the `^(scheduled|actual)(start|end)$` rule is the per-field default, but it cannot guarantee `end > start`).
- Emit a **preamble** in the factory's `create()` method via the `{{FACTORY_PREAMBLE}}` placeholder:
  ```java
          OffsetDateTime {prefix}Start = FAKER.date().future(60, java.util.concurrent.TimeUnit.DAYS).toInstant().atOffset(java.time.ZoneOffset.UTC);
          OffsetDateTime {prefix}End   = {prefix}Start.plusMinutes(FAKER.number().numberBetween(15L, 240L));
  ```
- And in `{{INSTANCIO_OVERRIDES}}` use the captured variables:
  ```java
              .supply(field({Entity}::get{Prefix}Start), () -> {prefix}Start)
              .supply(field({Entity}::get{Prefix}End),   () -> {prefix}End)
  ```

Required imports (`java.time.OffsetDateTime`, etc.) are added to the factory only when the preamble is emitted.

## Type inference

The wiki entity sheets do not include a per-attribute Dataverse type column. Infer the Java type from naming conventions:

| Attribute name pattern | Inferred Dataverse type | Java type |
|---|---|---|
| ends in `id` (`accountid`, `regardingobjectid`, …) | `Uniqueidentifier`/`Lookup` | `String` (UUID) |
| ends in `on` or in `date` | `DateTime` | `java.time.OffsetDateTime` |
| matches `^(scheduled\|actual)(start\|end)$` | `DateTime` | `java.time.OffsetDateTime` |
| matches `^(versionnumber\|importsequencenumber\|.*count\|numberof.*)$` | `Integer/BigInt` | `Long` |
| matches `^(creditlimit\|revenue\|estimatedvalue\|actualvalue\|totalamount\|amount\|price\|cost)$` | `Money/Decimal` | `java.math.BigDecimal` |
| starts with `is` | `Boolean` | `Boolean` |
| matches `^(statecode\|statuscode)$` | `State`/`Status` (int label) | `String` (kept as label for stub realism) |
| any field that is the target of an `$expand` | `Lookup` (resolved) | the target DTO type |
| anything else | `String` (safe fallback) | `String` |

## Placeholder reference

Common to all Java/build templates:

| Placeholder | Value |
|---|---|
| `{{GROUP_ID}}` | First two segments of `package` (e.g. `com.example`) |
| `{{ARTIFACT_ID}}` | `sintaura-{logical}-stub` (kebab-case) |
| `{{PACKAGE}}` | The Java package the user chose |
| `{{ENTITY_NAME}}` | PascalCase form of `logical` |
| `{{URL_PATH}}` | The path extracted in Step 1 (e.g. `/api/data/v9.2/accounts`). Lives in `{Entity}Provider.URL_PATH`; the Stub references it via `{Entity}Provider.URL_PATH` (no string duplication) |
| `{{DEFAULT_QUERY}}` | Verbatim contents of the original query string (everything after `?`). Lives in `{Entity}Provider.DEFAULT_QUERY` and is the default query for `findAll()` |
| `{{HTTP_METHOD_LOWER}}` | `get` / `post` / `patch` / `delete` |
| `{{HTTP_METHOD_PASCAL}}` | `Get` / `Post` / `Patch` / `Delete` |
| `{{HTTP_METHOD_UPPER}}` | `GET` / `POST` / `PATCH` / `DELETE` |
| `{{FIELDS}}` | Block of `@JsonProperty` + private field + getter + setter, one per field; nested `$expand` fields are appended at the end |
| `{{INSTANCIO_OVERRIDES}}` | One `.supply(field(Entity::getX), () -> FAKER.<expr>)` per matched attribute, plus `.supply(... , {Target}Factory::create)` for each `$expand` field |
| `{{FACTORY_PREAMBLE}}` | Empty for entities without paired date ranges; otherwise the `OffsetDateTime` declarations described in **Paired date range fields** |
| `{{TEST_FIRST_DTO_ASSERTIONS}}` | One `assertNotNull(first.getX(), "...")` per main field, plus assertions on each expanded entity |

`Dto.java.template` field block format:

```java
    @JsonProperty("{logicalAttr}")
    private {JavaType} {javaName};
    public {JavaType} get{Pascal}() { return {javaName}; }
    public void set{Pascal}({JavaType} v) { this.{javaName} = v; }
```

Attributes with no mapping rule emit no override line — Instancio populates them from the Java type default.

The `ProviderIntegrationTest.java.template` reuses `{{PACKAGE}}` and `{{ENTITY_NAME}}` only — no dedicated placeholder. The `application.properties.template` is fully static (no placeholder).

## Style guidelines

- The user is a Dataverse / Java developer — skip basics on Maven, JUnit, or WireMock.
- **Reply in Italian for narrative text**, keep code, identifiers, file paths, and CLI commands in English (same convention as Grimoire).
- When you apply a Datafaker override, mention which mapping rule matched: *"`emailaddress1` matcha `^emailaddress\\d*$` → `internet().emailAddress()`"*.
- When you emit a paired-date preamble, say so explicitly in the report: *"detected `scheduledstart`+`scheduledend` → emitted coupled preamble in factory"*.
- When you generate an expanded DTO, name the navigation property and the resolved target: *"`$expand=regardingobjectid_account_appointment` → target entity `account`, generated `Account.java` + `AccountFactory.java`"*.

## Worked example

**User:** *"stuba `GET /api/data/v9.2/appointments?$select=subject,scheduledstart,scheduledend,location,statecode&$expand=regardingobjectid_account_appointment($select=name,emailaddress1,telephone1,websiteurl)&$top=50` in `C:\dev\stub`, Maven, package com.acme.stub"*

You:
1. Parse: `httpMethod=GET`, `entitySetName=appointments`, `urlPath=/api/data/v9.2/appointments`, `selectAttrs=[subject,scheduledstart,scheduledend,location,statecode]`, `topCount=50`, `defaultQuery="$select=subject,scheduledstart,scheduledend,location,statecode&$expand=regardingobjectid_account_appointment($select=name,emailaddress1,telephone1,websiteurl)&$top=50"`, `expandClauses=[{ navProp: "regardingobjectid_account_appointment", selectAttrs: [name,emailaddress1,telephone1,websiteurl] }]`.
2. Read `wiki/index.json` → `appointments` → `logical: appointment`. Read `wiki/entities/appointment.md`. Resolve the expand: the M2O table row for `regardingobjectid_account_appointment` points to target `account`. Read `wiki/entities/account.md` for the nested field set.
3. (Skip user questions — already provided in the prompt.)
4. Load `domain-mapping.json`. Detect paired date range: `scheduledstart`+`scheduledend` → emit preamble. Match other rules per attribute.
5. Generate:
   - `models/Appointment.java` (5 main fields + 1 nested `Account` field for the expand)
   - `models/Account.java` (5 fields including `accountid`)
   - `providers/AppointmentProvider.java` with `URL_PATH="/api/data/v9.2/appointments"`, `DEFAULT_QUERY="$select=...&$expand=...&$top=50"`, `findAll()`, `find(String)`
   - `factories/AppointmentFactory.java` with paired-date preamble + `.supply(field(Appointment::getRegardingObjectIdAccountAppointment), AccountFactory::create)`
   - `factories/AccountFactory.java`
   - `stubs/AppointmentStub.java` referencing `AppointmentProvider.URL_PATH`
   - `AppointmentStubTest.java` that instantiates `AppointmentProvider` against `wm.getHttpBaseUrl()`, calls `findAll()`, asserts on the first DTO + the expanded `Account`
   - `AppointmentProviderIntegrationTest.java` that calls a real Dataverse via the 2-arg Provider constructor; auto-skips if `DATAVERSE_BASE_URL`/`DATAVERSE_ACCESS_TOKEN` (or `-Ddataverse.baseUrl/-Ddataverse.accessToken`) are not set
   - `src/test/resources/application.properties` with empty `dataverse.baseUrl` / `dataverse.accessToken` keys (override via env or `-D`)
6. Report files + `mvn test` + applied overrides + paired-date note + expand note + integration-test activation hint.
