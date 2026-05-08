---
logical: "cai_dispatchingruleadditionalfields"
display_it: "Campi aggiuntivi regola smistamento Lead"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["campi aggiuntivi regola smistamento lead"]
dataverse_logical: "cai_dispatchingruleadditionalfields"
is_custom: false
schema_name: "cai_dispatchingruleadditionalfields"
generated: "2026-05-07"
---

# Campi aggiuntivi regola smistamento Lead — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_dispatchingruleadditionalfields`  
**Custom:** No  
**Ownership:** Organization owned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_dispatchingruleadditionalfieldsid` | Campi Aggiuntivi regola smistamento lead | Uniqueidentifier | No |  | Unique identifier for entity instances |
| `cai_dispatchingruleid` | Regola smistamento lead | Lookup | No | ✓ |  |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `cai_additionalfieldname` | Nome Campo Aggiuntivo | Text | No | ✓ |  |
| `cai_additionalfieldvalue` | Valore Campo Aggiuntivo | Text | No | ✓ |  |
| `statecode` | Status | State | No |  | Status of the Campi aggiuntivi regola smistamento Lead |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Campi aggiuntivi regola smistamento Lead |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_dispatchingruleid` | Regola smistamento lead | `cai_dispatchingrule` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07