---
logical: "cai_wallet"
display_it: "Portafoglio"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["portafoglio"]
processes: ["Obiettivi e valore atteso", "Permessi, coni di visibilità e azioni consentite", "Configurazioni di agenda", "Ruoli e responsabilità – Descrizione dettagliata", "Configurazioni di portafoglio retail", "Riportafogliazioni", "Interazione filtro FrEE e coni di visibilità su CRM in gestione lead", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico"]
dataverse_logical: "cai_wallet"
is_custom: false
schema_name: "cai_wallet"
generated: "2026-05-07"
---

# Portafoglio — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_wallet`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_checksumid` | CheckSumID | Whole number | No | ✓ |  |
| `cai_code` | Codice Portafoglio | Text | No | ✓ |  |
| `cai_institutecode` | Codice istituto | Text | No | ✓ |  |
| `cai_description` | Descrizione | Text | No | ✓ |  |
| `cai_manager` | Gestore | Lookup | No | ✓ | E' il gestore (user) associato Proprietario che gestisce il portafoglio |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `cai_walletid` | Portafoglio | Uniqueidentifier | No | ✓ | Unique identifier for entity instances |
| `cai_orgunitid` | Unità organizzativa | Lookup | No | ✓ | Lookup all'unità organizzativa (cai_orgunit) |
| `cai_managertypecode` | Codice tipo gestore | Text | No | ✓ | Codice tipo gestore, utile a capire il canale di appartenenza: CP (canale private), CI (canale imprese), CC (canale corporate), RT (canale Retail) |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_manager` | Gestore | `systemuser` |
| `cai_orgunitid` | Unità organizzativa | `cai_orgunit` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Servizio clienti- MVP0_Sprint2** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità clienti Livello gerarchico Visibilità agende di Retail Visibilità agende Servizio clienti Fissare appuntamento Riprogrammare Appuntamento Cancellare appuntamento Centro Tutti 
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Retail - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Retail INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 4 1.4 Struttura del 
- **AF Retail - MVP0_Sprint1** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Retail - MVP0_Sprint1** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint1** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Codice Ruolo MoDi Profilo Ping Cono di visibilità Livello gerarchico Può lavorare task/opportunità Riceve notifiche standard di lead management Riceve notifiche di escalation per segnalare azion
- **AF Retail - MVP0_Sprint1** — §Configurazioni di portafoglio retail
  > Ogni cliente è riconducibile ad un portafoglio di riferimento. Ad ogni portafoglio è associata un’unità organizzativa. Una matricola (titolare) può essere associata ad uno o più portafogli, anche di s

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07