---
description: 'Generate the integration pipeline scaffold (Provider/Validator/Converter/Publisher + Logger + IntegrationPipeline) on top of a Sintaura-scaffolded Java project. Use when the user asks to scaffold/genera pipeline, integration, orchestratore for a Dataverse entity that already has Sintaura models + Provider, or wants to add validation/conversion/publish steps to a Sintaura project.'
mode: 'agent'
---

# Mymithra — Dataverse integration pipeline scaffold

You complete the trio **Grimoire (docs) → Sintaura (stub/test) → Mymithra (operational pipeline)**. Given a Java project already scaffolded by Sintaura (with `models/{Entity}.java` + `providers/{Entity}Provider.java`), you generate:

- a **`core/` package** with reusable interfaces, Null Objects, abstract logging templates, and an `IntegrationPipeline<TIn, TOut>` orchestrator;
- a **per-entity scaffold** (`{Entity}Output.java`, `{Entity}Validator.java`, `{Entity}Converter.java`, `{Entity}Publisher.java`, `{Entity}Integration.java`) where the user fills in the business logic;
- **collaboration unit tests** (Mockito + JUnit 5) for every component generated.

When the source endpoint uses `$expand` (the Sintaura DTO has nested entity fields), walk the tree recursively and generate a parent + child scaffold for each level. Composition is direct: the parent component receives the child as a constructor dependency.

## Prerequisites

- A Sintaura-generated Java project: `pom.xml` (or `build.gradle`), `src/main/java/{base}/models/{Entity}.java`, `src/main/java/{base}/providers/{Entity}Provider.java`.
- The `pom.xml` must include Mockito (`mockito-core` + `mockito-junit-jupiter`, version 5.11+). Sintaura adds these by default since v3.
- The `{Entity}Provider` class must implement `Provider<{Entity}>` from `{base}.core.Provider`. Sintaura templates v3 emit this automatically. If missing, instruct the user to regenerate via Sintaura instead of patching by hand.

## Workflow

### Step 1 — Detect the entity tree

For each entity in `models/`, parse its `@JsonProperty` fields. A field whose declared type is **another class of the `models/` package** is an **expanded child**: it represents a `$expand` clause in the original Sintaura endpoint. Build the tree starting from the root entity:

```
Appointment           (root, getRegardingObjectIdAccountAppointment → Account)
└── Account           (child, no further nested classes)
```

Children of children (grandchildren) are supported recursively.

### Step 2 — Generate the `core/` package (idempotent)

If `{base}/core/Provider.java` already exists, **skip** the entire core generation (Mymithra has already run, or Sintaura v3 has provided `Provider.java`). Otherwise, copy the 17 templates from `templates/core/` to `src/main/java/{base}/core/`, substituting `{{PACKAGE_BASE}}`. Same for the 4 templates in `templates/core/test/` → `src/test/java/{base}/core/`.

The 17 core files:

| File | Role |
|---|---|
| `Logger.java` | interface — `debug/info/warn/error(String)` |
| `NullLogger.java` | no-op implementation |
| `ConsoleLogger.java` | `System.out` / `System.err` |
| `Provider.java` | interface — `List<T> fetch() throws Exception` |
| `NullProvider.java` | returns `List.of()` |
| `AbstractLoggingProvider.java` | template method `doFetch()` |
| `Validator.java` | interface — `ValidationResult validate(T)` |
| `NullValidator.java` | returns `ValidationResult.ok()` |
| `AbstractLoggingValidator.java` | template method `doValidate()` |
| `ValidationResult.java` | `{ valid, errors }` + factories `ok()` / `fail()` |
| `Converter.java` | interface — `TOut convert(TIn)` |
| `AbstractLoggingConverter.java` | template method `doConvert()` |
| `Publisher.java` | interface — `void publish(T) throws Exception` |
| `AbstractLoggingPublisher.java` | logs `"publish: " + item` then delegates to `doPublish()` |
| `LoggingPublisher.java` | extends `AbstractLoggingPublisher`, `doPublish()` is no-op |
| `IntegrationPipeline.java` | orchestrator |
| `PipelineResult.java` | record-like `{ processed, skipped, failed }` |

The 4 core tests:

| File | Role |
|---|---|
| `IntegrationPipelineTest.java` | golden path, validator skip, converter throw, publisher throw, empty list |
| `AbstractLoggingValidatorTest.java` | logging order on valid/invalid input |
| `AbstractLoggingConverterTest.java` | logging order around `doConvert` |
| `AbstractLoggingPublisherTest.java` | `logger.info("publish: …")` + delegation |

### Step 3 — Generate per-entity scaffold (recursive)

For the **root** entity, generate (in `src/main/java/{base}/`):

- `{Entity}Output.java` — POJO scaffold, empty fields except one `{Child}Output {childGetter}` per `$expand` child.
- `{Entity}Validator.java` — extends `AbstractLoggingValidator<{Entity}>`. Constructor takes `Logger` + one `Validator<{Child}>` per child. `doValidate()` aggregates errors, prefixing child errors with the navigation property name (e.g. `regardingobjectid_account_appointment.email is invalid`).
- `{Entity}Converter.java` — extends `AbstractLoggingConverter<{Entity}, {Entity}Output>`. Constructor takes `Logger` + one `Converter<{Child}, {Child}Output>` per child. `doConvert()` populates `out.set{Child}Output(childConverter.convert(in.get{ChildGetter}()))` when the child is non-null.
- `{Entity}Publisher.java` — extends `AbstractLoggingPublisher<{Entity}Output>`. Constructor takes `Logger` + one `Publisher<{Child}Output>` per child. `doPublish()` body has `// TODO: publish root` and a **commented-out** cascade block per child (`// childPublisher.publish(out.get{Child}Output());`).
- `{Entity}Integration.java` — only for the root. Exposes `public static IntegrationPipeline<{Entity}, {Entity}Output> buildPipeline(Provider<{Entity}>, Logger)` that wires the dependency tree **bottom-up** (children first, parent last). The `main(args)` reads `DATAVERSE_BASE_URL` / `DATAVERSE_ACCESS_TOKEN` env vars, builds an `{Entity}Provider` (or `NullProvider` if config is missing), then invokes `buildPipeline(...).run()`.

For each **child** entity, generate the 4 files above (no `Integration.java` — only the root has a `main`). For grandchildren, recurse.

The root `{Entity}Integration.buildPipeline()` instantiates the entire tree:

```java
public static IntegrationPipeline<Appointment, AppointmentOutput> buildPipeline(
        Provider<Appointment> provider, Logger logger) {
    AccountValidator   accountValidator   = new AccountValidator(logger);
    AccountConverter   accountConverter   = new AccountConverter(logger);
    AccountPublisher   accountPublisher   = new AccountPublisher(logger);

    AppointmentValidator validator = new AppointmentValidator(logger, accountValidator);
    AppointmentConverter converter = new AppointmentConverter(logger, accountConverter);
    AppointmentPublisher publisher = new AppointmentPublisher(logger, accountPublisher);

    return new IntegrationPipeline<>(provider, validator, converter, publisher, logger);
}
```

### Step 4 — Generate per-entity tests (collaboration tests)

For each entity (root and child), generate in `src/test/java/{base}/`:

- `{Entity}ValidatorTest.java` — `@ExtendWith(MockitoExtension.class)`, `@Mock` for each child `Validator<{Child}>` + `Logger`. Tests:
  - `shouldDelegateTo{Child}ValidatorWhenExpandedEntityPresent` — when child is non-null, `verify(childValidator).validate(child)`.
  - `shouldPrefixChildErrorsWithNavigationProperty` — when child returns `fail("X")`, root result errors start with `{navProp}.`.
  - `shouldSkip{Child}ValidatorWhenExpandedEntityIsNull` — `verify(childValidator, never()).validate(any())`.
- `{Entity}ConverterTest.java` — analogous for converter; `verify(childConverter).convert(child)` and `assertSame(convertedChild, out.get{Child}Output())`.
- `{Entity}PublisherTest.java` — verifies `logger.info("publish: …")` and `verify(childPublisher, never()).publish(any())` (cascade is commented).
- `{Entity}IntegrationTest.java` — only for the root. `@Mock Provider<{Entity}> provider`, `when(provider.fetch()).thenReturn(List.of(record))`, builds the pipeline via `{Entity}Integration.buildPipeline(provider, new NullLogger())`, asserts `processed/skipped/failed`.

For child entities (no nested `$expand`), the tests are simpler: one or two tests verifying the scaffold default behavior (`ok()`, returns non-null `{Child}Output`, logs `publish: …`).

### Step 5 — Report

After writing all files, output:

- A markdown list of every file created (with absolute paths).
- The exact command to run the tests: `cd "{output-dir}" && mvn test`.
- The expected test summary: total = N tests, all green, `{Entity}ProviderIntegrationTest` skipped if no env vars set.
- The command to run the orchestrator: `mvn exec:java "-Dexec.mainClass={pkg}.{Entity}Integration"`.
- A note that `{Entity}Output` is a scaffold POJO with empty fields — the user must add output fields before the converter does anything meaningful.
- A note that the **publisher cascade** is commented out by default; uncomment in `{Entity}Publisher.doPublish()` to publish children.

## Templates and placeholders

Resources used during generation (paths relative to `.claude/skills/mymithra/`):

- `templates/core/*.java.template` — 17 files, single placeholder `{{PACKAGE_BASE}}`.
- `templates/core/test/*.java.template` — 4 files, single placeholder `{{PACKAGE_BASE}}`.
- `templates/entity/*.java.template` — 5 files: `EntityOutput`, `EntityValidator`, `EntityConverter`, `EntityPublisher`, `EntityIntegration`. Single-child reference; replicate the per-child blocks for N children.
- `templates/entity/test/*.java.template` — 4 files: `EntityValidatorTest`, `EntityConverterTest`, `EntityPublisherTest`, `EntityIntegrationTest`. Same single-child pattern.

Per-child placeholders inside the entity templates:

| Placeholder | Meaning |
|---|---|
| `{{PACKAGE_BASE}}` | base package (e.g. `com.acme.dataverse`) |
| `{{ENTITY_NAME}}` | PascalCase root entity name (e.g. `Appointment`) |
| `{{ENTITY_MODEL_FQN}}` | fully-qualified Sintaura model (e.g. `com.acme.dataverse.models.Appointment`) |
| `{{ENTITY_PROVIDER_FQN}}` | fully-qualified Sintaura provider (only for `EntityIntegration`) |
| `{{CHILD_NAME}}` | PascalCase child name (e.g. `Account`) |
| `{{CHILD_MODEL_FQN}}` | child Sintaura model FQN |
| `{{CHILD_NAV_PROPERTY}}` | navigation property string (e.g. `regardingobjectid_account_appointment`) |
| `{{CHILD_NAV_PROPERTY_UPPER}}` | upper-snake-case used as constant name |
| `{{CHILD_GETTER}}` | parent-side getter (e.g. `getRegardingObjectIdAccountAppointment`) |
| `{{CHILD_SETTER}}` | parent-side setter |
| `{{CHILD_VAR}}` | camelCase prefix of the child (e.g. `account`); derives `accountValidator`, `accountConverter`, `accountPublisher`, `accountOutput` |

When N > 1 children, repeat the per-child block N times in the parent (constructor parameter, field, assignment, `if (in.get{Child}() != null) …` invocation in `doX()`, child instantiation in `buildPipeline()`).

## Style

- Reply in Italian for narrative text. Keep code, identifiers, file paths, CLI commands in English (same convention as Grimoire and Sintaura).
- When generating, mention the entity tree explicitly: *"detected root `Appointment` with 1 expanded child `Account` via `regardingobjectid_account_appointment` → generating 5+4 main files + 4+3 test files."*
- When skipping the core (idempotent), say so explicitly: *"`{base}/core/` already exists, skipping core generation."*
- Don't change the `{Entity}Provider` if it already implements `Provider<{Entity}>`. If it doesn't, ask the user to regenerate via Sintaura instead of patching by hand.

## Worked example

**User:** *"genera la pipeline Mymithra per Appointment in `C:\dev\mymithra-app`, package `com.acme.dataverse`"*

You:
1. Verify `C:\dev\mymithra-app\pom.xml` exists, has Mockito; `models/Appointment.java` and `providers/AppointmentProvider.java` exist; `AppointmentProvider implements Provider<Appointment>`.
2. Parse `Appointment.java`, find field `regardingObjectIdAccountAppointment: Account` → tree: `Appointment → Account`.
3. Check `core/`: not present → generate 17 + 4 core files.
4. Generate 5 root files (`AppointmentOutput`, `AppointmentValidator/Converter/Publisher`, `AppointmentIntegration`) and 4 child files (`AccountOutput`, `AccountValidator/Converter/Publisher`).
5. Generate 4 root tests + 3 child tests.
6. Report: list of 33 files, `mvn test` command, expected ~22 test results, activation hint for the orchestrator.
