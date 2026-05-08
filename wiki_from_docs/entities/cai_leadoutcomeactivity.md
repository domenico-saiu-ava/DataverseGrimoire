---
logical: "cai_leadoutcomeactivity"
display_it: "Esitazione"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["esitazione"]
processes: ["Tassonomia generale", "Configurazioni di agenda", "Dettagli appuntamento", "Esitazione appuntamento", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "Scheda lead e suggerimenti", "Gestione lead e suggerimenti con esito “venduto”", "Gestione lead e suggerimenti con esito “Fissa un appuntamento”"]
dataverse_logical: "cai_leadoutcomeactivity"
is_custom: false
schema_name: "cai_leadoutcomeactivity"
generated: "2026-05-07"
---

# Esitazione — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_leadoutcomeactivity`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato per il record che rappresenta l'attività di esitazione |
| `cai_leadid` | Lead | Lookup | No | ✓ | Lead esitato |
| `cai_leadoutcomeid` | Esito lead | Lookup | No | ✓ | Esito applicato alla Lead |
| `cai_notes` | Note esitazione | Memo | No | ✓ | Note inserite dall'utente in fase di esitazione |
| `cai_appointmentid` | Appuntamento | Lookup | No | ✓ | Contatto di tipo appuntamento |
| `cai_phonecallid` | Telefonata | Lookup | No | ✓ | Contatto di tipo telefonata |
| `cai_genericcontactid` | Contatto generico | Lookup | No | ✓ | Contatto generico |
| `cai_contactdate` | Data di contatto | DateTime | No | ✓ | Data di censimento del contatto |
| `cai_managerid` | Gestore | Lookup | No | ✓ | Gestore che ha eseguito il contatto |
| `cai_invalidcontactmethods` | Recapiti non validi | Multichoice | No | ✓ | Recapiti contatto non validi |
| `cai_interaction` | Interazione |  | No |  |  |
| `cai_leadoutcomereason` | Motivo Esito | Choice | No | ✓ | Dettaglio motivazione in caso di esito: "Non interessato" oppure "Impossibilità a procedere" |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_leadid` | Lead | `Lead` |
| `cai_leadoutcomeid` | Esito lead | `Lead outcome` |
| `cai_appointmentid` | Appuntamento | `appointment` |
| `cai_phonecallid` | Telefonata | `phonecall` |
| `cai_genericcontactid` | Contatto generico | `cai_genericcontact` |
| `cai_managerid` | Gestore | `None` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 2 Servizio clienti INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 3 1.4 Stru
- **AF Servizio clienti- MVP0_Sprint2** — §Tassonomia generale
  > In ambito CRM, si definisce “Appuntamento” ogni incontro associato ad una lead o suggerimento di un cliente/prospect e che richieda un’esitazione In ambito CRM, si definisce “Impegno” ogni attività ch
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co
- **AF Servizio clienti- MVP0_Sprint2** — §Esitazione appuntamento
  > Figura 10 – Esitazione appuntamento Avvio del flusso di esitazione appuntamento dal tab Prodotti lead e suggerimenti presente nella pagina di dettaglio appuntamento descritta nel paragrafo Dettagli ap
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §Scheda lead e suggerimenti
  > Figura 10 – Scheda lead (Tab Lead) Figura 11 – Scheda lead (Tab Dettagli) La schermata è accessibile dalla vista lead tramite click su una specifica lead o anagrafica dalla lista in riga. La schermata
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “venduto”
  > Figura 12 - Pagina di Esitazione Figura 13 - Pagina di esitazione CTA Esita attivato Figura 14 - Pagina di esitazione con esito registrato L’azione rapida per esitare si trova sulla schermata Scheda l

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07