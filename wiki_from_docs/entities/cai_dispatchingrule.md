---
logical: "cai_dispatchingrule"
display_it: "Regola smistamento Lead"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["regola smistamento lead"]
dataverse_logical: "cai_dispatchingrule"
is_custom: false
schema_name: "cai_dispatchingrule"
generated: "2026-05-07"
---

# Regola smistamento Lead — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_dispatchingrule`  
**Custom:** No  
**Ownership:** OrganizationOwned

Entità realizzata per definire il criterio di smistamento delle

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_dispatchingruleid` | Regola smistamento Lead | Guid | No | ✓ |  |
| `cai_sourcerequestid` | Fonte Richiesta | Lookup | No | ✓ | Campo Fonte richiesta, ricevuto in ricezione lead (ex Ticket) |
| `cai_code` | Codice regola | Text | No | ✓ | Codice regola |
| `cai_iscustomer` | Cliente? | Choice | No |  | Campo Cliente?, ricevuto in ricezione lead (ex Ticket) |
| `cai_complexitylevelofadditionalfields` | Livello Complessità Campi Aggiuntivi | Whole number | No | ✓ | Campo calcolato - livello complessità Campi aggiuntivi |
| `cai_complexitylevelticketdata` | Livello Complessità Dati Ticket | Whole number | No | ✓ | Campo calcolato - livello complessità Dati Ticket |
| `cai_name` | Nome Regola | Text | No | ✓ |  |
| `cai_productid` | Prodotto | Lookup | No | ✓ | Il Prodotto da applicare alla Lead nel momento in cui fa match con la regola |
| `cai_productserviceinterest` | Prodotto Servizio Interesse | Text | No | ✓ | Campo Prodotto Servizio Interesse, ricevuto in ricezione lead (ex Ticket) |
| `cai_contactusformtype` | Tipologia Form Contattaci | Text | No | ✓ | Campo Tipologia Form Contattaci, ricevuto in ricezione lead (ex Ticket) |
| `cai_messagetype` | Famiglia Prodotto | Text | No | ✓ | Campo Famiglia Prodotto, ricevuto in ricezione lead (ex Ticket) |
| `cai_destination` | Destinazione Lead | Choice | No | ✓ | La destinazione prevista per la Lead |
| `cai_leadtype` | Tipologia Lead | Choice | No | ✓ | La Tipologia di Lead da assegnare alla Lead nel momento in cui fa match con la regola |
| `cai_assignmentdeadlinehours` | Tempo di scadenza presa in carico | Whole number | No | ✓ | Il Tempo di scadenza presa in carico, espresso in ore, da assegnare alla Lead nel momento in cui fa match con la regola |
| `cai_concurrencytimehours` | Tempo di concorrenza | Whole number | No | ✓ | Il Tempo di concorrenza, espresso in ore, da assegnare alla Lead nel momento in cui fa match con la regola |
| `cai_attemptsbeforeescalationtocustomerservice` | Numero tentativi prima del passaggio al Servizio clienti | Whole number | No | ✓ | Il numero di tentativi massimo previsto prima del passaggio al servizio clienti, da assegnare alla Lead nel momento in cui fa match con la regola |
| `statecode` | Status | State | No |  |  |
| `statuscode` | Status reason | Status | No |  |  |
| `cai_leadformat` | Formato del Lead | Choice | No |  |  |
| `cai_firstassignment` | Prima assegnazione | Choice | No | ✓ |  |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_sourcerequestid` | Fonte Richiesta | `crp_fonterichiesta` |
| `cai_productid` | Prodotto | `cai_product` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07