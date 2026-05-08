---
logical: "cai_queueitemlead"
display_it: "Elemento Coda Lead"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["elemento coda lead"]
dataverse_logical: "cai_queueitemlead"
is_custom: false
schema_name: "cai_queueitemlead"
generated: "2026-05-07"
---

# Elemento Coda Lead — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_queueitemlead`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |
| `cai_leadid` | Lead | Lookup | No | ✓ | Lead |
| `cai_queueitemid` | Elemento Coda | Lookup | No | ✓ | Elemento Coda |
| `cai_relationship` | Relazione | Choice | No | ✓ | Tipo di relazione tra Elemento Coda e Lead |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_leadid` | Lead | `Foreign Key to Lead Table` |
| `cai_queueitemid` | Elemento Coda | `Foreign Key to Queue Item Table` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07