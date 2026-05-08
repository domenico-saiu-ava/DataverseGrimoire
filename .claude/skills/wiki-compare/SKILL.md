---
name: wiki-compare
description: Compare the functional wiki (wiki_from_docs/) against the technical wiki (wiki/) to identify entity and field discrepancies. Activate when the user asks to compare the two wikis, check alignment between functional analysis and technical schema, find missing entities or fields, or export a comparison report. Keywords: "confronto wiki", "discrepanze", "campi mancanti", "entità non mappate", "allineamento AF", "wiki comparison", "compare wikis".
---

# WikiCompare — Confronto wiki funzionale ↔ wiki tecnico

Hai accesso a due layer di documentazione Dataverse:
- **`wiki/`** — layer tecnico, autoritativo per schema (entità pubbliche + custom ingerite dal tenant)
- **`wiki_from_docs/`** — layer funzionale, generato dai documenti AF (Excel + Word)

Il tuo compito è confrontare i due layer e produrre un report Markdown delle discrepanze.

## Quando attivarsi

- L'utente chiede un confronto tra i due wiki
- L'utente vuole sapere quali entità delle AF non sono ancora nel wiki tecnico
- L'utente chiede campi documentati nelle AF ma assenti dallo schema tecnico
- L'utente chiede un export/report di allineamento
- L'utente dice "confronta wiki", "discrepanze", "campi mancanti", "allineamento AF"

## Workflow

### Step 1 — Esegui il confronto

Esegui lo script di analisi:

```bash
node scripts/compare-wikis.mjs
```

Lo script produce `compare_results.json` nella root del progetto con la struttura:

```json
[{
  "display_it": "Nome IT",
  "logical": "cai_entity",
  "inWiki": true|false,
  "isCustom": true|false,
  "wikiSource": "custom"|"docs"|"-",
  "docFields": <n>,
  "wikiFields": <n>,
  "missingInWiki": ["field1", "field2"],
  "business_area": "Retail / CRM"
}]
```

### Step 2 — Genera il report Markdown

Esegui lo script di export:

```bash
node scripts/export-wiki-compare-report.mjs
```

Lo script produce `wiki_from_docs/comparison_report.md` con:

1. **Header** — data generazione, conteggi riepilogati
2. **Sezione A** — Entità allineate (presenti in entrambi, nessun campo mancante)
3. **Sezione B** — Entità con gap di campi (presenti in entrambi, ma con campi AF assenti dal wiki tecnico)
4. **Sezione C** — Entità assenti dal wiki tecnico (richiedono `npm run custom`)

### Step 3 — Rispondi con il riepilogo

Presenta all'utente:
- Il path del file generato: `wiki_from_docs/comparison_report.md`
- La tabella riepilogativa (conteggi per categoria)
- I gap più critici (entità con più campi mancanti)
- L'azione consigliata (`npm run custom` se ci sono entità assenti)

## Interpretazione dei risultati

### Campi mancanti nel wiki tecnico (missingInWiki)

I campi mancanti sono quasi sempre uno di questi casi:

| Prefisso campo | Significato | Azione |
|---------------|-------------|--------|
| `cai_*` | Campo custom del progetto CAI | Esegui `npm run custom` per ingerirti |
| `msdyn_*` | Estensione Dynamics 365 Sales/Service | Esegui `npm run custom` |
| Virtual `*name` fields | Campi virtuali auto-generati da Dataverse (es. `owneridname`) | Non ingesti nel wiki per default — comportamento atteso |
| Campi standard assenti | Campo standard MS non documentato nelle AF | Verifica manualmente |

### Entità assenti dal wiki tecnico

Tutte le entità `cai_*` presenti in `wiki_from_docs/` ma assenti da `wiki/` indicano che `npm run custom` non è stato ancora eseguito su quel tenant. Non sono entità "mancanti" — sono solo da ingerie.

### Interpretazione `wikiSource`

- `custom` — entità ingerita dal tenant via `npm run custom` ✅
- `docs` — entità standard Microsoft dal wiki pubblico ✅
- `-` — entità non presente nel wiki tecnico ❌

## Note operative

- `compare_results.json` viene sovrascritto ad ogni run — è un file temporaneo
- `wiki_from_docs/comparison_report.md` è il file di report permanente, aggiornato ad ogni export
- Se `wiki_from_docs/index.json` o `wiki/index.json` non esistono, suggerisci rispettivamente `npm run docs` e `npm run build`
- Il report esclude le voci con `logical: "(non mappato)"` e i placeholder `cai_example`

## Stile risposta

- Rispondi in italiano per il testo narrativo; nomi logici e codice in inglese
- L'utente è esperto — salta le basi, vai dritto alle discrepanze significative
- Evidenzia sempre i gap più critici (entità con più campi mancanti e entità del Private Banking assenti)
