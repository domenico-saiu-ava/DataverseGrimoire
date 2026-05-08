# wiki_from_docs — Wiki da Analisi Funzionali

Strato di mapping funzionale generato automaticamente dai documenti di analisi funzionale del progetto CRM D365.

## Contenuto

| Metrica | Valore |
| --- | --- |
| Entità totali | **74** |
| di cui custom | **1** |
| Standard D365 | **73** |
| Entità con contesto Word | **29** |
| Processi documentati | **7** |
| Business area coperte | Business Dev Intelligence, Private Banking, Retail / CRM, Servizio Clienti, Standard D365 |
| Data generazione | 2026-05-07 |

## Come viene usato dagli agent

Il layer tecnico (`wiki/index.json`) è **sempre autoritativo** per lo schema.
Questo wiki viene consultato **dopo** per validare/rafforzare la scelta tecnica:

| Scenario | Comportamento |
| --- | --- |
| ✅ Match trovato, nessuna discrepanza | Sezione "Contesto funzionale" completa nell'output |
| ⚠️ Match trovato, discrepanza rilevata | Avviso esplicito + date aggiornamento + bozza messaggio al team Dataverse |
| ❌ Nessun match in wiki_from_docs | Nota inline, schema tecnico disponibile comunque |

## Aggiornamento

```bash
npm run docs          # genera / rigenera wiki_from_docs/
npm run docs:rebuild  # pulisce e rigenera da zero
```

_Generato il: 2026-05-07_