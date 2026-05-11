# Dataverse Skills

Suite di skill per il workflow **end-to-end Dataverse → Java**, esposta a **Claude Code, OpenAI Codex / Cursor / Cline e GitHub Copilot** tramite file di istruzione paritari. Le skill sono tre stadi di un percorso unico: dalla domanda di business in italiano fino a una pipeline di integrazione operativa che gira contro il tenant reale.

## Il percorso

```
[concetto di business IT/EN]
        │
        ▼  (1) Grimoire
[logical name + endpoint Web API]
        │
        ▼  (2) Sintaura
[progetto Java: DTO + Provider + factories + stub WireMock + integration test]
        │
        ▼  (3) Mymithra
[pipeline operativa: fetch → validate → convert → publish + scaffold per-entità + test]
```

| # | Skill | Cosa fa | Input | Output |
|---|---|---|---|---|
| 1 | **Grimoire** | Risolve concetto di business → entità Dataverse + endpoint | "ho bisogno dei preventivi aperti" | `GET /api/data/v9.2/quotes?$filter=…` |
| 2 | **Sintaura** | Trasforma l'endpoint in un progetto Java testabile | URL Web API + cartella destinazione | progetto Maven/Gradle con stub WireMock + integration test |
| 3 | **Mymithra** | Aggiunge l'orchestrazione operativa al progetto Sintaura | progetto Sintaura esistente + entità root | pipeline `fetch → validate → convert → publish` con scaffold + test |

Ogni skill è autonoma — puoi fermarti dopo Grimoire (se ti basta sapere la query), dopo Sintaura (se vuoi solo il progetto Java testabile), oppure proseguire con Mymithra (se devi davvero portare i dati Dataverse in un altro sistema).

## Setup base

Solo Grimoire ha un build phase: scarica e parsa la documentazione Microsoft per popolare il wiki locale. Sintaura e Mymithra non hanno un build — sono skill puramente generative che leggono il wiki di Grimoire e scrivono progetti Java.

```bash
npm install
npm run build      # prima volta: clone + parse (~1 min)
npm run update     # aggiornamenti: pull + reparse incrementale
npm run rebuild    # cancella .cache/ e ricostruisce da zero
```

Il wiki vive sotto `wiki/`. Una volta costruito, è pronto per essere interrogato dalle skill in qualunque agent supportato.

> Per agganciare al wiki anche le **entità custom** del tuo tenant (prefissi `xyz_*`, tabelle business specifiche), vedi il capitolo **Skill 1 — Grimoire** sotto.

## Installazione per agente di coding

Le tre skill sono propagate a cinque agent diversi tramite otto file di istruzione. Tutti puntano allo stesso `wiki/` e seguono gli stessi workflow.

| Agent | File di istruzione | Trigger | Setup richiesto |
|---|---|---|---|
| Claude Code | `.claude/skills/{grimoire\|sintaura\|mymithra}/SKILL.md` | Auto via match sulla `description` di ogni skill | Niente — basta aprire Claude Code in questa cartella |
| Codex CLI / Cursor / Cline / Aider | `AGENTS.md` (root) | Always-on nel repo (convenzione [agents.md](https://agents.md)) | Niente — l'agent legge `AGENTS.md` automaticamente |
| GitHub Copilot Chat (ambient) | `.github/copilot-instructions.md` | Always-on quando lavori sul repo | Abilitare le custom instructions in VS Code (vedi sotto) |
| GitHub Copilot Chat (slash) | `.github/prompts/{dataverse-grimoire\|sintaura\|mymithra}.prompt.md` | Esplicito: `/dataverse-grimoire` / `/sintaura` / `/mymithra` | Abilitare i prompt files in VS Code (vedi sotto) |

### Claude Code

Niente da configurare. Apri il repository con `claude` o dall'app Claude Code; le tre skill si attivano automaticamente quando la conversazione matcha la `description`. Per forzare l'attivazione: *"usa dataverse-grimoire / sintaura / mymithra per…"*.

### Codex CLI / Cursor / Cline / Aider (AGENTS.md)

Niente da configurare. Tutti questi tool leggono `AGENTS.md` dalla root del repo automaticamente. Il file ha tre sezioni paritarie (Grimoire / Sintaura / Mymithra) di ~30 righe ciascuna; rimanda ai SKILL.md canonici per il workflow esteso, che l'agent legge on-demand quando il task lo richiede.

### GitHub Copilot Chat in VS Code

Copilot Chat supporta due meccanismi che usiamo entrambi:

1. **Custom instructions** (`.github/copilot-instructions.md`) — istruzioni globali sul repo, sempre attive. Da abilitare una volta sola:

   ```
   Settings → cerca "github.copilot.chat.codeGeneration.useInstructionFiles" → true
   ```

   Oppure in `.vscode/settings.json`:

   ```json
   { "github.copilot.chat.codeGeneration.useInstructionFiles": true }
   ```

2. **Prompt files** (`.github/prompts/{name}.prompt.md`) — prompt riusabili invocabili come slash command. Abilitazione (richiede VS Code 1.95+ con Copilot Chat aggiornato):

   ```
   Settings → cerca "chat.promptFiles" → true
   ```

   Oppure in `.vscode/settings.json`:

   ```json
   { "chat.promptFiles": true }
   ```

   Una volta abilitato, in Copilot Chat scrivi `/dataverse-grimoire`, `/sintaura` o `/mymithra` per invocare il workflow corrispondente.

### Verifica installazione

Per ogni agent, prova questo prompt:

> Sto integrando il nostro gestionale con Dataverse. Devo leggere via Web API tutti i preventivi aperti dell'ultimo mese: quale entità devo interrogare e qual è la chiamata?

Se l'agent risponde identificando `quote` come entità (matchando il sinonimo italiano "preventivo"), proponendo l'entity set `quotes` e una chiamata `GET /api/data/v9.2/quotes?$filter=…`, Grimoire funziona. Per testare Sintaura, dagli l'URL e chiedi di stubbarlo. Per testare Mymithra, parti da un progetto Sintaura esistente.

### Mantenere i file di istruzione allineati

Gli 8 file (3 `SKILL.md` + `AGENTS.md` + `copilot-instructions.md` + 3 `prompt.md`) duplicano la stessa logica per pubblicarla a tool diversi. **Source of truth**: i tre `SKILL.md` sotto `.claude/skills/`. Quando modifichi un workflow:

1. Aggiorna `SKILL.md` per primo (è il più strutturato).
2. Propaga la modifica al `prompt.md` corrispondente in `.github/prompts/` (full body).
3. Aggiorna la sezione di quella skill in `AGENTS.md` (short form).
4. Aggiorna la sezione di quella skill in `.github/copilot-instructions.md` solo se cambiano regole sintetiche o link.

---

## Skill 1 — Grimoire (entity lookup)

Wiki locale costruito da tre repo Microsoft pubblici (`MicrosoftDocs/powerapps-docs`, `MicrosoftDocs/dynamics-365-customer-engagement`, `microsoft/PowerApps-Samples`) e cercabile per concetto di business (italiano o inglese).

**Quando si attiva.** Quando descrivi un'entità in termini di business — *"clienti aziendali"*, *"preventivi"*, *"contratti di manutenzione"* — e ti serve il logical name + l'endpoint Web API per scriverci una query.

**Cosa produce.** `wiki/index.json` (indice) + `wiki/entities/{logical}.md` (~1350 schede) + `wiki/samples/{logical}.md` (link ai sample PowerApps). Workflow di lookup: indice → top-3 candidati → scheda dettaglio → endpoint pronto da copiare.

**Esempi.**

| Domanda | Risposta tipica |
|---|---|
| "qual è l'entità per i clienti aziendali?" | match synonym IT "cliente" → `account` (entity set `accounts`, primary name `name`), `GET /api/data/v9.2/accounts?$select=name,…` |
| "in quale entità trovo `creditlimit`?" | fallback Grep su `wiki/entities/*.md` → `account` |
| "esempio di POST per creare un lead" | identifica `lead`, controlla `wiki/samples/lead.md`, ritorna `POST /api/data/v9.2/leads` con campi mandatori |
| "ordini è `salesorder` o c'è qualcos'altro?" | confronta candidati (`salesorder` vs `salesorderdetail`), mostra le relazioni verso `invoice` e `product` |

Per il workflow completo (scoring, prefer-custom rule, gestione wiki vuoto), vedi `.claude/skills/dataverse-grimoire/SKILL.md`.

### Aggiornare con un Dataverse custom (entità del tuo tenant)

Le entità custom della tua solution (`xyz_*`, tabelle business) non esistono nei docs Microsoft. Per agganciare i loro metadati al wiki, fai un dump live dal tuo environment:

```bash
npm run custom -- --url https://orgXXXX.crm4.dynamics.com
```

Cosa succede al primo run:

1. **Login**: lo script stampa un codice tipo `ABC-123-XYZ` e l'URL `https://microsoft.com/devicelogin`. Aprilo, incolla il codice, autentica con il tuo account Microsoft (lo stesso che usi su make.powerapps.com).
2. **Token cache**: il token viene salvato in `.cache/auth/<host>.json` (gitignored). Le run successive non chiedono più il login finché il refresh token vale (~90 giorni).
3. **Dump metadati**: chiama `EntityDefinitions` con `IsCustomEntity eq true`, scarica attributi e relazioni, scrive `wiki/custom/{logical}.md`.
4. **Index**: `wiki/index.json` viene esteso con voci `source: "custom"` + `envHost`. La skill applica la **prefer-custom rule** quando esiste un conflitto di logical name (utile se hai esteso `account` o `contact` con campi custom).

Opzioni utili:

```bash
npm run custom -- --url <env-url> --filter "xyz_*"      # solo entità con prefisso xyz_
npm run custom -- --url <env-url> --all                 # tutte le entità (custom + standard)
npm run custom -- --url <env-url> --concurrency 10      # detail fetch più aggressivo
npm run custom:logout -- --url <env-url>                # invalida il token cachato
```

**Auth: cosa serve davvero.** Niente App Registration: lo script usa il public client well-known di Microsoft Power Query (`51f81489-…`), che ha già il consenso necessario per leggere i metadati di Dataverse via Web API. Il tuo utente deve avere un ruolo di sviluppo (System Customizer, System Administrator, ecc.). Nessun dato delle righe finisce nel wiki, solo schema — ma i file in `wiki/custom/` sono versionati: se i nomi delle tue entità sono confidenziali, valuta di tenere il repo privato o di aggiungere `wiki/custom/` al `.gitignore`.

---

## Skill 2 — Sintaura (Java stub generator)

Trasforma un endpoint Web API (tipicamente prodotto da Grimoire) in un **progetto Java 17 + JUnit 5 + WireMock + Instancio + Datafaker** auto-contenuto e pronto a `mvn test`.

**Quando si attiva.** Quando hai un URL Dataverse Web API e vuoi *"stubbarlo / mockarlo / scaffoldare un progetto Java di test"*. Esempio di trigger: *"stuba `GET /api/data/v9.2/appointments?$select=…&$expand=…` in `C:\dev\stub`, Maven, package `com.acme.stub`"*.

**Prerequisiti.** Wiki di Grimoire popolato (`npm run build` già fatto). Sintaura interroga il wiki per risolvere lo schema dell'entità.

**Cosa produce**, per ogni entità (e per ogni `$expand`):

- `models/{Entity}.java` — DTO Jackson-annotato.
- `providers/{Entity}Provider.java` — HTTP client + Jackson. Due costruttori: `(URI baseUri)` per i test stubbati, `(URI baseUri, String accessToken)` che aggiunge `Authorization: Bearer …` per le chiamate reali. Implementa `core.Provider<{Entity}>` per integrarsi con Mymithra.
- `factories/{Entity}Factory.java` — Instancio + Datafaker con override realistici (email, phone, paired date `scheduledstart`/`scheduledend`, ecc.).
- `stubs/{Entity}Stub.java` — configurazione WireMock.
- `{Entity}StubTest.java` — `@WireMockTest` che esercita il Provider contro un body deterministico.
- `{Entity}ProviderIntegrationTest.java` — chiama un Dataverse **reale** e verifica HTTP 200 + parsing senza errori. Auto-skip via `Assumptions` se la config è assente.
- `src/test/resources/application.properties` — chiavi `dataverse.baseUrl` / `dataverse.accessToken` vuote di default.

L'integration test legge la config in quest'ordine (prima fonte non-blank vince): `-Ddataverse.baseUrl=…` (system property) → `DATAVERSE_BASE_URL` (env var) → file `application.properties`. Per attivarlo:

```powershell
$env:DATAVERSE_BASE_URL    = "https://orgXXXXXXXX.crm4.dynamics.com"
$env:DATAVERSE_ACCESS_TOKEN = "<bearer token>"
mvn test -Dtest={Entity}ProviderIntegrationTest
```

Per il workflow completo (parsing dell'endpoint, type inference, gestione `$expand`, paired date ranges, override locale `mapping.json`), vedi `.claude/skills/sintaura/SKILL.md`.

---

## Skill 3 — Mymithra (pipeline orchestrator)

Aggiunge l'**operatività** a un progetto Sintaura: prende il Provider come fonte dati e lo orchestra in una pipeline lineare `fetch → validate → convert → publish`.

**Quando si attiva.** Quando hai un progetto Sintaura esistente e vuoi *"genera la pipeline / scaffold integration / orchestrator"* per un'entità. Esempio di trigger: *"genera la pipeline Mymithra per Appointment in `C:\dev\app`, package `com.acme.dataverse`"*.

**Prerequisiti.** Progetto Sintaura esistente con `models/{Entity}.java` + `providers/{Entity}Provider.java`. `pom.xml` con Mockito 5.11+ (Sintaura lo include sempre). `{Entity}Provider` deve implementare `Provider<{Entity}>` (Sintaura v3 lo emette automaticamente).

**Cosa produce**, dato un'entità root e il suo albero di `$expand` rilevati dai DTO:

- **Core riusabile** (in `{base}.core`, idempotente): `Provider`, `Validator`, `Converter`, `Publisher`, `Logger`, i loro Null Object, le `AbstractLogging*` come template loggati, `IntegrationPipeline<TIn,TOut>` come orchestratore, `ValidationResult { valid, errors }`, `PipelineResult { processed, skipped, failed }`. **17 classi + 4 test** generati una volta sola — Mymithra rileva se `core/` esiste e salta.
- **Scaffold per ogni nodo dell'albero** (in `{base}/{entity}/`): `{Entity}Output` (modello output), `{Entity}Validator/Converter/Publisher` (estendono `AbstractLogging*` con `doX()` da compilare). Per ogni `$expand`, il parent riceve i child via **composition diretta** nel costruttore (`new AppointmentValidator(logger, accountValidator)`) e propaga gli errori di validazione con prefisso del nav property (`regardingobjectid_account_appointment.email is invalid`).
- **`{Entity}Integration` (root only)** con un metodo statico `buildPipeline(provider, logger)` che fa il wiring bottom-up + un `main()` che legge `DATAVERSE_BASE_URL`/`DATAVERSE_ACCESS_TOKEN` da env, costruisce il Provider Sintaura e chiama `pipeline.run()`.
- **Test di collaborazione (Mockito 5 + JUnit 5)** per ogni componente: un test per `IntegrationPipeline` (golden path, skip su invalido, fail su throw, lista vuota), uno per ogni `AbstractLogging*` (verifica ordine dei log), uno per ogni `{Entity}Validator/Converter/Publisher` (verifica delegazione al child mock e prefisso degli errori), uno smoke per `{Entity}Integration.buildPipeline` con Provider mockato. Lo scaffold è eseguibile out-of-the-box: `mvn test` passa anche prima che l'utente compili la logica di business.

**Logging:** un'unica interfaccia `Logger` (`debug/info/warn/error`) iniettata via costruttore in tutti i componenti. Default: `NullLogger` o `ConsoleLogger`. Per integrare log4j/logback basta scrivere un'implementazione di `Logger` e iniettarla nel `main()`.

**Run dell'orchestratore** (dopo aver compilato la logica di business):

```powershell
$env:DATAVERSE_BASE_URL    = "https://orgXXXXXXXX.crm4.dynamics.com"
$env:DATAVERSE_ACCESS_TOKEN = "<bearer token>"
mvn exec:java "-Dexec.mainClass={pkg}.{Entity}Integration"
```

Per il workflow completo (detection dell'albero, idempotenza del core, struttura degli scaffold), vedi `.claude/skills/mymithra/SKILL.md`.

---

## Esempio end-to-end

`Sintaura/Demo/` contiene il risultato del percorso completo per **Appointment con `$expand=Account`**, ottenuto applicando le tre skill in sequenza:

1. **Grimoire**: domanda *"appuntamenti aperti collegati a clienti aziendali, con i recapiti dell'account"* → endpoint `GET /api/data/v9.2/appointments?$select=…&$expand=regardingobjectid_account_appointment(…)&$top=50`.
2. **Sintaura**: stub generato (Appointment + Account DTO/Provider/Factory/Stub/Tests).
3. **Mymithra**: telaio operativo aggiunto (core/ + scaffold per-entità + 22 test di collaborazione).

```powershell
cd Sintaura\Demo
mvn test
```

Output atteso: ~22 test passati, `AppointmentProviderIntegrationTest` skipped (no env vars). Vedi `Sintaura/Demo/README.md` per il dettaglio passo-passo.

## Forzare l'attivazione esplicita

Se per qualche motivo l'agent non aggancia la skill da solo:

| Agent | Come forzare |
|---|---|
| Claude Code | *"usa dataverse-grimoire / sintaura / mymithra per…"* |
| Codex / Cursor / Cline | *"segui le istruzioni in `AGENTS.md` (sezione Grimoire / Sintaura / Mymithra) per…"* |
| GitHub Copilot Chat | slash command: `/dataverse-grimoire`, `/sintaura`, `/mymithra` |

## Scope

In scope:
- ✅ Tutte le entità standard Dataverse (Web API reference, ~1350 schede)
- ✅ Sinonimi italiani per le ~50 entità più comuni (account, contact, opportunity, lead, invoice, salesorder, …)
- ✅ Sample di codice cross-referenziati dai repo PowerApps-Samples
- ✅ Entità custom da un tenant Dataverse reale via device code flow (`npm run custom`)
- ✅ Generazione progetti Java 17 + JUnit 5 + WireMock + Instancio + Datafaker (Sintaura)
- ✅ Generazione pipeline `fetch → validate → convert → publish` con scaffold per-entità + test di collaborazione (Mymithra)
- ✅ Multi-agent: Claude Code, Codex CLI, Cursor, Cline, Aider, GitHub Copilot Chat

Esplicitamente fuori scope (per ora):
- ❌ Service principal / OAuth client_credentials (solo device code interattivo)
- ❌ Filtro per solution specifica (solo per `IsCustomEntity` o per prefisso)
- ❌ MCP server (utile solo per agent remoti che non leggono file di istruzione)
- ❌ RAG / embedding semantici (il match testuale + sinonimi basta)
- ❌ Sync automatico tra gli 8 file di istruzione (per ora si aggiornano a mano partendo dai SKILL.md)
