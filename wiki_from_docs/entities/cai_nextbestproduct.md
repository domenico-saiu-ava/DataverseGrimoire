---
logical: "cai_nextbestproduct"
display_it: "Next best product"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
synonyms_it: ["next best product"]
processes: ["Classificazione di lead per flusso di origine", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "Next best product", "Scheda lead e suggerimenti", "Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista", "Visualizzazione lead e tempistiche di assegnazione/lavorazione e presa in carico"]
dataverse_logical: "cai_nextbestproduct"
is_custom: false
schema_name: "cai_nextbestproduct"
generated: "2026-05-07"
---

# Next best product — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_nextbestproduct`  
**Custom:** No  
**Ownership:** UserOwned

Next best product da proporre ai clienti

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerid` | Account/Contatto | Customer | No | ✓ | Cliente/Azienda a cui è riferito il prodotto |
| `cai_enddate` | Data scadenza | DateTime | No | ✓ |  |
| `cai_priority` | Priorità | Whole number | No | ✓ |  |
| `cai_name` | Nome | Text | No |  | codice istituto (presente nel tracciato di integrazione) + codice ndg + codice prodotto nbo + data rif. (presente nel tracciato di integrazione) |
| `cai_nboproductid` | Lookup | Prodotto NBO | No | ✓ | Riferimento al Prodotto NBO indicato su flusso dei Next best product |
| `cai_productid` | Lookup | Prodotto | No | ✓ | Il prodotto suggerito |
| `statecode` | Status | State | No |  | Status del Next best product |
| `statuscode` | Status Reason | Status | No |  | Status reason del Next best product |
| `cai_productmodel` | Modello prodotto | Text | No | ✓ |  |
| `cai_sellingproposition` | Proposta di acquisto | Text | No | ✓ |  |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Retail INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 4 1.4 Struttura del 
- **AF Retail - MVP0_Sprint1** — §Classificazione di lead per flusso di origine
  > Le tipologie di origini previste per Lead e Suggerimenti sono: Lead da CJ : nel campo origine si prevede che tali lead presentino la nomenclatura “CJ- Macro prodotto ” ed in tooltip il codice del CJ e
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §Next best product
  > Si prevede l’utilizzo del motore di raccomandazione AS-IS, che restituisce per anagrafica mediamente 8 suggerimenti, con riferimento a elementi censiti dalla variabile “Prodotto” del catalogo Si preve
- **AF Retail - MVP0_Sprint1** — §Scheda lead e suggerimenti
  > Figura 10 – Scheda lead (Tab Lead) Figura 11 – Scheda lead (Tab Dettagli) La schermata è accessibile dalla vista lead tramite click su una specifica lead o anagrafica dalla lista in riga. La schermata
- **AF Retail - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF servizio clienti - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Servizio Clienti INDICE 1 Introduzione 4 1.1 Contesto di business 4 1.2 Obiettivi e valore atteso 4 1.3 Principi guida e best practice 5 1.4 Stru
- **AF servizio clienti - MVP0_Sprint1** — §Classificazione di lead per flusso di origine
  > Le tipologie di origini previste per Lead e Suggerimenti sono: Lead da CJ : nel campo origine si prevede che tali lead presentino la nomenclatura “CJ-C ategoria prodotto ” ed in tooltip il codice del 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07