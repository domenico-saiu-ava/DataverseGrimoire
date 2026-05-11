---
description: 'Generate a JUnit 5 + WireMock + Instancio + Datafaker Java stub project from a Dataverse REST endpoint produced by Grimoire. Use when the user provides a Dataverse Web API URL (es. GET /api/data/v9.2/accounts?$select=...) and asks to scaffold stubs / mock the API / generate test fixtures in Java.'
mode: 'agent'
---

# Sintaura — Dataverse REST → Java stub generator

You receive a Dataverse Web API endpoint (typically the line `dataverse-grimoire` emits as a copy-paste suggestion) and scaffold a self-contained **Java 17 + JUnit 5** project that:

- exposes a **`{Entity}Provider`** in `src/main/java` with HTTP + Jackson mapping (`URL_PATH`, `DEFAULT_QUERY`, `findAll()`, `find(String)`);
- generates test data via **Instancio + Datafaker** factories in `src/test/java`;
- stubs the endpoint with **WireMock** (the stub references `{Entity}Provider.URL_PATH`);
- includes an example `@WireMockTest` that instantiates the Provider against `wm.getHttpBaseUrl()` and asserts on the first DTO returned by `findAll()`.

## Prerequisites

Sintaura depends on the Grimoire wiki:

- `wiki/index.json` must exist (entity set → logical lookup).
- `wiki/entities/{logical}.md` (or `wiki/custom/{logical}.md`) must contain the attribute list.

If missing, stop and tell the user to run `npm run build`. Don't guess.

## Workflow

### Step 1 — Parse the endpoint

Extract:

- `httpMethod` — `GET` / `POST` / `PATCH` / `DELETE`.
- `entitySetName` — segment after `/api/data/v9.2/`, stripping `(<guid>)` and query string.
- `urlPath` — the path (no query string).
- `defaultQuery` — everything after `?` in the URL (verbatim, empty if absent).
- `selectAttrs` — `$select` values.
- `topCount` — `$top` value, default `5`.
- `expandClauses` — array of `{ navProp, selectAttrs }` from `$expand=navProp($select=...)`. Tokenize honoring nested parentheses (commas inside `(...)` are not top-level separators).

### Step 2 — Schema lookup (via Grimoire wiki)

1. Read `wiki/index.json`. Find the entry by `entitySetName`. Apply the **prefer-custom rule**.
2. Read the entity sheet. The wiki has Writable / Read-only attribute lists and a Many-to-One relationships table (used to resolve `$expand` targets).
3. Build the **field set**: if `selectAttrs` is non-empty, use those (+ primary id); else use primary id + primary name + first 5 writable.
4. For each entry in `expandClauses`, resolve the target entity via the parent's M2O table (row whose `Navigation property` equals `navProp` → `Target entity`), then recurse step 2/3 on it.

If the entity set isn't in `index.json` and the entity has a publisher prefix (`xyz_*`), suggest `npm run custom -- --url https://<env>.crm4.dynamics.com` and stop.

### Step 3 — Collect user input

Ask in one round:
- **Output directory** (absolute, must NOT be inside `Dataverse.Skills`).
- **Build system** — `Maven` or `Gradle`.
- **Java package** — default `com.example.sintaura.{logical}`.

### Step 4 — Load mappings

1. Read `.claude/skills/sintaura/domain-mapping.json`.
2. Optionally merge `{output-dir}/.sintaura/mapping.json` (override entries with the same `pattern` replace the in-skill rule).
3. Match each attribute against the rules; record `(attribute, datafakerExpr | null)`.
4. Detect **paired date ranges**: if both `{prefix}start` and `{prefix}end` are in the field set, mark them so the factory emits a coupled preamble (see below).

### Step 5 — Generate

Layout under `{output-dir}`:

```
src/
├── main/java/{packagePath}/
│   ├── models/{Entity}.java                  (+ {Target}.java per expand)
│   └── providers/{Entity}Provider.java
└── test/java/{packagePath}/
    ├── factories/{Entity}Factory.java        (+ {Target}Factory.java per expand)
    ├── stubs/{Entity}Stub.java
    └── {Entity}StubTest.java
```

Use the templates in `.claude/skills/sintaura/templates/`. Placeholders:

| Placeholder | Value |
|---|---|
| `{{GROUP_ID}}` | First two segments of `package` |
| `{{ARTIFACT_ID}}` | `sintaura-{logical}-stub` |
| `{{PACKAGE}}` | The Java package |
| `{{ENTITY_NAME}}` | PascalCase of `logical` |
| `{{URL_PATH}}` | The path; lives in `{Entity}Provider.URL_PATH` (single source) |
| `{{DEFAULT_QUERY}}` | Verbatim original query string; lives in `{Entity}Provider.DEFAULT_QUERY`, used by `findAll()` |
| `{{HTTP_METHOD_*}}` | HTTP method in lower / Pascal / upper casing |
| `{{FIELDS}}` | Block of `@JsonProperty` + private + getter + setter; nested `$expand` fields appended |
| `{{INSTANCIO_OVERRIDES}}` | One `.supply(...)` per matched attribute, plus `.supply(... , {Target}Factory::create)` per expand |
| `{{FACTORY_PREAMBLE}}` | Empty unless paired date ranges detected |
| `{{TEST_FIRST_DTO_ASSERTIONS}}` | One `assertNotNull(first.getX(), "...")` per main field + assertions on each expanded entity |

**Type inference** (no type column in the wiki — infer from naming):
- ends `id` → `String` (UUID)
- ends `on` or `date`, or matches `^(scheduled|actual)(start|end)$` → `OffsetDateTime`
- matches `^(versionnumber|importsequencenumber|.*count|numberof.*)$` → `Long`
- matches `^(creditlimit|revenue|estimatedvalue|actualvalue|totalamount|amount|price|cost)$` → `BigDecimal`
- starts `is` → `Boolean`
- matches `^(statecode|statuscode)$` → `String` (label)
- target of an `$expand` → the target DTO type
- otherwise → `String`

### Handling `$expand`

For each parsed expand clause:

1. Generate `{Target}.java` (in `models/`) with the nested `$select` field set + primary id.
2. Generate `{Target}Factory.java` (in `factories/`).
3. On the **parent** DTO, append `@JsonProperty("{navProp}") private {Target} {javaName};` + getter/setter.
4. On the **parent** Factory, append `.supply(field({Parent}::get{Pascal}), {Target}Factory::create)`.
5. The Provider needs no extra code — Jackson auto-maps via `@JsonProperty`.
6. The example test asserts `assertNotNull(first.get{Pascal}())` and at least one nested field.

Recursive (`$expand=a($expand=b)`) handled the same way.

### Paired date range fields

When the field set contains both `{prefix}start` and `{prefix}end`:

- Skip the static mapping for those two attributes.
- Emit in `{{FACTORY_PREAMBLE}}`:
  ```java
          OffsetDateTime {prefix}Start = FAKER.date().future(60, java.util.concurrent.TimeUnit.DAYS).toInstant().atOffset(java.time.ZoneOffset.UTC);
          OffsetDateTime {prefix}End   = {prefix}Start.plusMinutes(FAKER.number().numberBetween(15L, 240L));
  ```
- In `{{INSTANCIO_OVERRIDES}}` use `() -> {prefix}Start` and `() -> {prefix}End`.

### Step 6 — Report

- Markdown list of every file created (absolute paths).
- Run command:
  - Maven: `cd "{output-dir}" && mvn test`
  - Gradle: `cd "{output-dir}" && ./gradlew test` (Windows: `gradlew.bat test`)
- Applied Datafaker overrides, paired-date detections, `$expand` resolutions.

## Style

- Skip basics on Maven, JUnit, WireMock — the user is a Dataverse / Java developer.
- **Reply in Italian for narrative text**, code/identifiers/CLI in English.
- Mention which mapping rule matched: *"`emailaddress1` matcha `^emailaddress\\d*$` → `internet().emailAddress()`"*.
- When you emit a paired-date preamble or generate an expanded DTO, name it explicitly in the report.

## Worked example

**User:** *"stuba `GET /api/data/v9.2/appointments?$select=subject,scheduledstart,scheduledend,location,statecode&$expand=regardingobjectid_account_appointment($select=name,emailaddress1,telephone1,websiteurl)&$top=50` in `C:\dev\stub`, Maven, package com.acme.stub"*

You:
1. Parse: `httpMethod=GET`, `entitySetName=appointments`, `urlPath=/api/data/v9.2/appointments`, `defaultQuery="$select=...&$expand=...&$top=50"`, `expandClauses=[{ navProp: "regardingobjectid_account_appointment", selectAttrs: [name,emailaddress1,telephone1,websiteurl] }]`.
2. Read `wiki/index.json` → `appointment`. Read `wiki/entities/appointment.md`. Resolve expand via M2O table → target `account`. Read `wiki/entities/account.md`.
3. Skip questions (already provided).
4. Load mapping. Detect paired date range `scheduledstart`+`scheduledend` → emit preamble.
5. Generate `models/Appointment.java` (5 fields + `Account` reference), `models/Account.java`, `providers/AppointmentProvider.java`, `factories/AppointmentFactory.java` (with paired-date preamble + `.supply(...AccountFactory::create)`), `factories/AccountFactory.java`, `stubs/AppointmentStub.java` (uses `AppointmentProvider.URL_PATH`), `AppointmentStubTest.java` (uses `AppointmentProvider.findAll()`, asserts on first DTO + expanded Account).
6. Report files + `mvn test` + overrides + paired-date note + expand note.
