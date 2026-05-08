---
logical: "cai_walletmembership"
display_it: "Membro Portafoglio"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["membro portafoglio"]
dataverse_logical: "cai_walletmembership"
is_custom: false
schema_name: "cai_walletmembership"
generated: "2026-05-07"
---

# Membro Portafoglio — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_walletmembership`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_checksumid` | Checksum ID | Whole number | No | ✓ |  |
| `cai_startdate` | Data Fine | DateTime | No | ✓ |  |
| `cai_enddate` | Data Inizio | DateTime | No | ✓ |  |
| `cai_systemuserid` | Utente | Lookup | No | ✓ | Unique identifier for User associated with Delegato Portafoglio. |
| `cai_delegatoportafoglioid` | Membro Portafoglio | Uniqueidentifier | No |  | Unique identifier for entity instances |
| `cai_name` | Name | Text | No | ✓ | Verrà valorizzato dalla logica di inserimento come concatenazione di valori indicati sul portafoglio |
| `cai_walletid` | Portafoglio | Lookup | No | ✓ | Unique identifier for Portafoglio |
| `cai_membershiptype` | Tipo | Choice | No | ✓ |  |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_systemuserid` | Utente | `systemuser` |
| `cai_walletid` | Portafoglio | `crp_portafoglio` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07