---
logical: "cai_conflict"
display_it: "Conflitto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["conflitto"]
processes: ["Configurazioni di agenda", "Riportafogliazioni", "Ruoli e responsabilità – Descrizione dettagliata", "Pianificazione disponibilità"]
dataverse_logical: "cai_conflict"
is_custom: true
schema_name: "cai_conflict"
generated: "2026-05-07"
---

# Conflitto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_conflict`  
**Custom:** Sì  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_appointmentid` | Appuntamento | Lookup | No | ✓ |  |
| `cai_appointmentidname` | N/A | Text | No | ✓ | N/A |
| `cai_conflictenddate` | Data fine conflitto | DateTime | No | ✓ |  |
| `cai_conflictid` | Conflitto | Uniqueidentifier | No |  | Identificatore univoco delle istanze di entità |
| `cai_name` | Nome | Text | No | ✓ |  |
| `cai_orgunitid` | Unità organizzativa | Lookup | No | ✓ |  |
| `cai_orgunitidname` | N/A | Text | No | ✓ | N/A |
| `cai_participantid` | Partecipante | Lookup | No | ✓ |  |
| `cai_participantidname` | N/A | Text | No | ✓ | N/A |
| `cai_participantidyominame` | N/A | Text | No | ✓ | N/A |
| `createdby` | Autore | Lookup | No |  | Identificatore univoco dell'utente che ha creato il record. |
| `createdbyname` | N/A | Text | No |  | N/A |
| `createdbyyominame` | N/A | Text | No |  | N/A |
| `createdon` | Data creazione | DateTime | No |  | Data e ora di creazione del record. |
| `createdonbehalfby` | Autore (delegato) | Lookup | No |  | Identificatore univoco dell'utente delegato che ha creato il record. |
| `createdonbehalfbyname` | N/A | Text | No |  | N/A |
| `createdonbehalfbyyominame` | N/A | Text | No |  | N/A |
| `importsequencenumber` | Numero sequenza importazione | Whole number | No |  | Numero di sequenza dell'importazione che ha creato il record. |
| `modifiedby` | Autore modifica | Lookup | No |  | Identificatore univoco dell'utente che ha modificato il record. |
| `modifiedbyname` | N/A | Text | No |  | N/A |
| `modifiedbyyominame` | N/A | Text | No |  | N/A |
| `modifiedon` | Data modifica | DateTime | No |  | Data e ora di modifica del record. |
| `modifiedonbehalfby` | Autore modifica (delegato) | Lookup | No |  | Identificatore univoco dell'utente delegato che ha modificato il record. |
| `modifiedonbehalfbyname` | N/A | Text | No |  | N/A |
| `modifiedonbehalfbyyominame` | N/A | Text | No |  | N/A |
| `overriddencreatedon` | Data creazione record | DateTime | No |  | Data e ora di migrazione del record. |
| `ownerid` | Proprietario | Owner | No |  | ID proprietario |
| `owneridname` | N/A | Text | No |  | Nome del proprietario |
| `owneridtype` | N/A | EntityName | No |  | Tipo di ID proprietario |
| `owneridyominame` | N/A | Text | No |  | Nome Yomi del proprietario |
| `owningbusinessunit` | Business Unit proprietaria | Lookup | No |  | Identificatore univoco della Business Unit a cui appartiene il record |
| `owningbusinessunitname` | N/A | Text | No |  | N/A |
| `owningteam` | Team proprietario | Lookup | No |  | Identificatore univoco del team a cui appartiene il record. |
| `owninguser` | Utente proprietario | Lookup | No |  | Identificatore univoco dell'utente a cui appartiene il record. |
| `statecode` | Stato | State | No |  | Stato di Conflitto |
| `statuscode` | Motivo stato | Status | No |  | Motivo dello stato di Conflitto |
| `timezoneruleversionnumber` | Numero di versione regola fuso orario | Whole number | No |  | Solo per uso interno. |
| `utcconversiontimezonecode` | Codice fuso orario conversione UTC | Whole number | No |  | Codice del fuso orario utilizzato al momento della creazione del record. |
| `versionnumber` | Numero di versione | BigInt | No |  | Numero di versione |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_appointmentid` | Appuntamento | `appointment` |
| `cai_orgunitid` | Unità organizzativa | `cai_orgunit` |
| `cai_participantid` | Partecipante | `systemuser` |
| `createdby` | Autore | `systemuser` |
| `createdonbehalfby` | Autore (delegato) | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `modifiedonbehalfby` | Autore modifica (delegato) | `systemuser` |
| `owningbusinessunit` | Business Unit proprietaria | `businessunit` |
| `owningteam` | Team proprietario | `team` |
| `owninguser` | Utente proprietario | `systemuser, team` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Retail - MVP0_Sprint1** — §Riportafogliazioni
  > Gli item di lead e suggerimenti in volo dovranno essere migrati Per storico contatti , dato su dynamics (non contacthistory) , i dati dovranno essere visibili al nuovo gestore Per gli appuntamenti anc
- **AF Retail - MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Retail - MVP0_Sprint2** — §Pianificazione disponibilità
  > Figura 22 – Pianificazione Figura 21 – La mia agenda Figura 23 – Impostazione ricorrenza Figura 24 – Disponibilità pianificate Previsto accesso dalla mia Agenda tramite CTA “Pianifica disponibilità”, 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07