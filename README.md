# DataverseGrimoire

Wiki locale costruito dalla documentazione ufficiale Microsoft Dataverse, interrogabile da **Claude Code, OpenAI Codex / Cursor / Cline e GitHub Copilot** tramite skill native che mappano concetti di business (in italiano o inglese) sui logical name delle entità Dataverse.

## Cosa risolve

Quando devi scrivere una query Web API o FetchXML su Dataverse, il problema ricorrente è: *"come si chiama davvero l'entità che contiene i clienti? gli ordini? le fatture?"*. La documentazione ufficiale è autorevole ma sparsa; questo progetto la cattura in locale e la rende cercabile dal tuo coding agent.

## Come funziona

1. **Build pipeline** (`npm run build`): clona tre repo pubblici di Microsoft (`MicrosoftDocs/powerapps-docs`, `MicrosoftDocs/dynamics-365-customer-engagement`, `microsoft/PowerApps-Samples`), parsa i `.md` di reference e genera:
   - `wiki/entities/{logical}.md` — un file per ogni entità (~1350 tra core platform e Dynamics 365 first-party apps)
   - `wiki/index.json` — indice macchina con display name, description, sinonimi IT/EN
   - `wiki/samples/{logical}.md` — link ai file di `PowerApps-Samples` che menzionano l'entità
2. **Agent integrations**: il wiki è esposto a quattro coding agent diversi tramite altrettanti file di istruzione (vedi tabella sotto). Workflow comune: ricerca → top-3 candidati → scheda dettaglio → esempio Web API.

## Setup base (build del wiki)

```bash
npm install
npm run build      # prima volta: clone + parse (~1 min)
npm run update     # aggiornamenti successivi: pull + reparse incrementale
npm run rebuild    # cancella .cache/ e ricostruisce da zero
```

Il wiki vive sotto `wiki/`. Una volta costruito, è interrogabile da uno dei coding agent supportati (vedi sezione successiva). Lo stesso `wiki/` serve tutti gli agent: il build si fa una volta sola.

## Installazione per agente di coding

DataverseGrimoire viene letto da quattro agent diversi tramite quattro file di istruzione differenti. Tutti puntano allo stesso `wiki/` e seguono lo stesso workflow logico.

| Agent | File di istruzione | Trigger | Setup richiesto |
|---|---|---|---|
| Claude Code | `.claude/skills/dataverse-grimoire/SKILL.md` | Auto via match sulla `description` della skill | Niente — basta aprire Claude Code in questa cartella |
| Codex CLI / Cursor / Cline / Aider | `AGENTS.md` (root) | Always-on nel repo (convenzione [agents.md](https://agents.md)) | Niente — l'agente legge `AGENTS.md` automaticamente |
| GitHub Copilot Chat (ambient) | `.github/copilot-instructions.md` | Always-on quando lavori sul repo | Abilitare le custom instructions in VS Code (vedi sotto) |
| GitHub Copilot Chat (slash command) | `.github/prompts/dataverse-grimoire.prompt.md` | Esplicito: `/dataverse-grimoire` | Abilitare i prompt files in VS Code (vedi sotto) |

### Claude Code

Niente da configurare. Apri il repository con `claude` o dall'app Claude Code; la skill `dataverse-grimoire` si attiva automaticamente quando chiedi di entità Dataverse / Dynamics. Per forzarla esplicitamente: *"usa dataverse-grimoire per dirmi…"*.

### Codex CLI / Cursor / Cline / Aider (AGENTS.md)

Niente da configurare. Tutti questi tool leggono `AGENTS.md` dalla root del repo automaticamente. La differenza rispetto a Claude Code è che il file è **always-on**: ogni interazione include le istruzioni nel context. Il file è volutamente breve (~50 righe) per minimizzare il costo; rimanda a `.claude/skills/dataverse-grimoire/SKILL.md` per il workflow esteso, che l'agente leggerà on-demand quando il task lo richiede.

### GitHub Copilot Chat in VS Code

Copilot Chat supporta due meccanismi che usiamo entrambi:

1. **Custom instructions** (`.github/copilot-instructions.md`): istruzioni globali sul repo, sempre attive. Da abilitare una volta sola in VS Code:

   ```
   Settings → cerca "github.copilot.chat.codeGeneration.useInstructionFiles"
   → metti su true
   ```

   Oppure aggiungilo in `.vscode/settings.json`:

   ```json
   {
     "github.copilot.chat.codeGeneration.useInstructionFiles": true
   }
   ```

2. **Prompt files** (`.github/prompts/dataverse-grimoire.prompt.md`): prompt riusabili invocabili come slash command. Abilitazione (richiede VS Code 1.95+ con Copilot Chat aggiornato):

   ```
   Settings → cerca "chat.promptFiles" → metti su true
   ```

   Oppure in `.vscode/settings.json`:

   ```json
   {
     "chat.promptFiles": true
   }
   ```

   Una volta abilitato, in Copilot Chat scrivi `/dataverse-grimoire` per invocare il workflow completo. È equivalente a "usa la skill" in Claude Code.

### Verifica installazione

Per ogni agent, prova questo prompt nel rispettivo Chat / CLI:

> Sto integrando il nostro gestionale con Dataverse. Devo leggere via Web API tutti i preventivi aperti dell'ultimo mese: quale entità devo interrogare e qual è la chiamata?

Se l'agent risponde identificando `quote` come entità (matchando il sinonimo italiano "preventivo"), proponendo l'entity set `quotes` e una chiamata `GET /api/data/v9.2/quotes?$filter=…`, l'integrazione funziona.

### Mantenere i 4 file allineati

I 4 file (`SKILL.md`, `AGENTS.md`, `copilot-instructions.md`, `dataverse-grimoire.prompt.md`) duplicano la stessa logica. **Source of truth**: `.claude/skills/dataverse-grimoire/SKILL.md` (il più strutturato). Quando modifichi il workflow:

1. Aggiorna `SKILL.md` per primo.
2. Propaga le modifiche sostanziali a `AGENTS.md` e `.github/prompts/dataverse-grimoire.prompt.md` (entrambi sono "full body").
3. Aggiorna `.github/copilot-instructions.md` solo se cambiano i punti che vivono *fuori* dal prompt file (stile, override sul prefer-custom rule, comandi di aggiornamento).

## Aggiornare con un Dataverse custom (entità del tuo tenant)

Le entità custom della tua solution (prefissi `xyz_*`, tabelle business) non esistono nei docs Microsoft pubblici. Per agganciare i loro metadati al wiki, fai un dump live dal tuo environment:

```bash
npm run custom -- --url https://orgXXXX.crm4.dynamics.com
```

Cosa succede al primo run:

1. **Login**: lo script stampa un codice tipo `ABC-123-XYZ` e l'URL `https://microsoft.com/devicelogin`. Aprilo, incolla il codice, autentica con il tuo account Microsoft (lo stesso che usi su make.powerapps.com).
2. **Token cache**: il token viene salvato in `.cache/auth/<host>.json` (gitignored). Le run successive non chiedono più il login finché il refresh token vale (~90 giorni).
3. **Dump metadati**: lo script chiama `EntityDefinitions` con `IsCustomEntity eq true`, scarica attributi e relazioni di ogni entità custom, le scrive in `wiki/custom/{logical}.md` con lo stesso formato delle schede pubbliche.
4. **Index**: `wiki/index.json` viene esteso con voci marcate `source: "custom"` + `envHost` — la skill le preferisce automaticamente quando esiste un conflitto di logical name (utile se hai esteso `account` o `contact` con campi custom).

Opzioni utili:

```bash
npm run custom -- --url <env-url> --filter "xyz_*"      # solo entità che iniziano con xyz_
npm run custom -- --url <env-url> --all                 # tutte le entità (custom + standard)
npm run custom -- --url <env-url> --concurrency 10      # detail fetch più aggressivo
npm run custom:logout -- --url <env-url>                # invalida il token cachato
```

Quando rifare il dump: ogni volta che pubblichi modifiche allo schema (nuove tabelle, nuovi campi, nuove relazioni) nella tua solution.

### Auth: cosa serve davvero

- **Niente App Registration**: lo script usa il public client well-known di Microsoft Power Query (`51f81489-…`), che ha già il consenso necessario per leggere i metadati di Dataverse via Web API.
- **Permessi**: il tuo utente deve avere accesso in lettura ai metadati nell'environment (di norma qualsiasi ruolo di sviluppo Dataverse ce l'ha — System Customizer, System Administrator, ecc.).
- **Privacy**: nessun dato delle righe finisce nel wiki, solo schema. I file in `wiki/custom/` sono comunque versionati nel tuo repo (non gitignored): se il nome stesso delle tue entità custom è confidenziale, valuta se rendere il repo privato o aggiungere `wiki/custom/` al `.gitignore`.

## Esempi d'uso

Apri il tuo agent (Claude Code, Codex, Cursor, Cline, oppure GitHub Copilot Chat in VS Code) dentro questa cartella e prova prompt di questo tipo. Il pattern è sempre lo stesso: **descrivi il concetto di business in italiano (o inglese)** + **cosa devi farci** (query, schema, esempio codice, relazione). L'agent fa il resto.

Su Copilot, se l'auto-attivazione tarda, invoca esplicitamente lo slash command `/dataverse-grimoire`. Su Claude Code: *"usa dataverse-grimoire per…"*.

### Caso 1 — concetto vago in italiano (lo scenario più tipico)

> Sto integrando il nostro gestionale con Dataverse. Devo leggere via Web API tutti i preventivi aperti dell'ultimo mese: quale entità devo interrogare e qual è la chiamata?

La skill identifica `quote` dal sinonimo "preventivo", apre `wiki/entities/quote.md`, restituisce l'entity set (`quotes`) e una bozza di `GET /api/data/v9.2/quotes?$filter=…`.

### Caso 2 — schema diretto

> Dammi gli attributi principali di `incident` e le sue relazioni con account e contact.

Match esatto sul logical name → apre la scheda di `incident` (display: Case) e mostra le relazioni `customer_cases`, `incident_primary_contact`, ecc.

### Caso 3 — risalire da campo a entità

> In quale entità Dataverse trovo `creditlimit` e `creditonhold`?

Fallback su `Grep` di `wiki/entities/*.md` per il nome del campo → individua `account` come contenitore e mostra il contesto.

### Caso 4 — esempio di codice

> Mostrami un esempio di POST per creare un nuovo lead via Web API, con i campi obbligatori.

Identifica `lead`, controlla `wiki/samples/lead.md` se presente, altrimenti genera lo snippet `POST /api/data/v9.2/leads` con i campi `subject`, `firstname`, `lastname` (mandatori).

### Caso 5 — disambiguazione

> Mi serve l'entità che rappresenta "ordini": è `salesorder` o c'è qualcosa di diverso? Voglio anche capire come è collegata a fatture e prodotti.

Confronta candidati (`salesorder`, `salesorderdetail`), mostra le relazioni verso `invoice` (via `invoice_orders`) e `product` (via `salesorderdetail`).

### Caso 6 — entità custom del tuo tenant

> Nel nostro environment c'è un'entità che gestisce i contratti di manutenzione. Come si chiama esattamente e che attributi ha?

(Funziona solo dopo aver lanciato `npm run custom`.) La skill cerca nell'index entries con `source: "custom"`, identifica `xyz_maintenancecontract`, apre `wiki/custom/xyz_maintenancecontract.md` e mostra logical, entity set, attributi custom (`xyz_renewaldate`, `xyz_amount`, ecc.), relazioni verso `account`/`contact`.

### Caso 7 — estensione di un'entità standard

> Sul nostro account abbiamo aggiunto un campo "codice fiscale" — qual è il logical name?

Se il dump custom è stato fatto, l'index ha **due voci** per `account`: una `source: "docs"` e una `source: "custom"` (env-specific, con il campo extra). La skill applica la **prefer-custom rule**, apre `wiki/custom/account.md` e individua `xyz_codicefiscale` (o come l'avete chiamato) tra gli attributi writable.

### Caso 8 — refresh dopo modifiche allo schema

> Ho appena pubblicato 3 nuove tabelle nella solution, aggiorna il wiki.

Tu lanci `npm run custom -- --url <env-url>`, lo script usa il token cachato (niente browser), aggiorna `wiki/custom/` e `wiki/index.json`. Da quel momento la skill conosce le 3 nuove tabelle.

### Forzare l'attivazione esplicitamente

Se per qualche motivo l'agent non aggancia il wiki da solo:

- **Claude Code**: *"usa dataverse-grimoire per dirmi…"*
- **Codex / Cursor / Cline**: *"segui le istruzioni in `AGENTS.md` per…"*
- **GitHub Copilot Chat**: invoca lo slash command `/dataverse-grimoire`

## Scope

Questa versione copre:
- ✅ Tutte le entità standard Dataverse (Web API reference, ~1350 schede)
- ✅ Sinonimi italiani per le ~50 entità più comuni (account, contact, opportunity, lead, invoice, salesorder, …)
- ✅ Sample di codice cross-referenziati dai repo PowerApps-Samples
- ✅ **Entità custom da un tenant Dataverse reale** via device code flow (`npm run custom`)

Esplicitamente fuori scope (per ora):
- ❌ Service principal / OAuth client_credentials (solo device code interattivo per ora)
- ❌ Filtro per solution specifica (solo per `IsCustomEntity` o per prefisso)
- ❌ MCP server (utile solo se servisse esporre il wiki a tool che non leggono file di istruzione, es. Copilot per Office o agenti remoti)
- ❌ RAG / embedding semantici (il match testuale + sinonimi basta)
- ❌ Sync automatico tra i 4 file di istruzione (per ora si aggiornano a mano partendo da `SKILL.md`)
