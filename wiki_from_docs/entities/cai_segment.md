---
logical: "cai_segment"
display_it: "Segmento"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["segmento"]
processes: ["Ruoli e responsabilità – Descrizione dettagliata", "Configurazioni di portafoglio retail", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "Definizione livelli di priorità lead in MVP0 (soluzione temporanea prima dell’implementazione del motore di prioritizzazione previsto in MVP successivi)", "3La mia giornata", "Vista lead e suggerimenti", "Visualizzazione lead e tempistiche di assegnazione/lavorazione e presa in carico", "Home – To-do list"]
dataverse_logical: "cai_segment"
is_custom: false
schema_name: "cai_segment"
generated: "2026-05-07"
---

# Segmento — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_segment`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_name` | Nome | Text | No | ✓ |  |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint1** — §Configurazioni di portafoglio retail
  > Ogni cliente è riconducibile ad un portafoglio di riferimento. Ad ogni portafoglio è associata un’unità organizzativa. Una matricola (titolare) può essere associata ad uno o più portafogli, anche di s
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §Definizione livelli di priorità lead in MVP0 (soluzione temporanea prima dell’implementazione del motore di prioritizzazione previsto in MVP successivi)
  > Premessa: nel seguente paragrafo si descrive il modello di prioritizzazione dei contatti (“Lead” e “Suggerimenti” secondo la tassonomia “Caldo”, “Tiepido”, Freddo” nel corso del rilascio MVP0. Tali co
- **AF Retail - MVP0_Sprint1** — §3La mia giornata
  > Figura 7 - Home Gestione lead Premessa: nel seguente paragrafo si descrive la sezione che funge da entrypoint per la gestione lead. L’analisi di dettaglio della to-do list sarà prevista in sprint di a
- **AF Retail - MVP0_Sprint1** — §Vista lead e suggerimenti
  > ­ Figura 8 – Vista lead clienti Figura 9 – Vista lead singole La schermata è accessibile dal menu laterale “Home - Gestione Lead”. La vista sarà filtrabile sulla base dei filtri in header impostati da
- **AF servizio clienti - MVP0_Sprint1** — §Visualizzazione lead e tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF servizio clienti - MVP0_Sprint1** — §Definizione livelli di priorità lead in MVP0 (soluzione temporanea prima dell’implementazione del motore di prioritizzazione previsto in MVP successivi)
  > Premessa: nel seguente paragrafo si descrive il modello di prioritizzazione dei contatti (“Lead” e “Suggerimenti” secondo la tassonomia “Caldo”, “Tiepido”, Freddo” nel corso del rilascio MVP0. Tali co

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07