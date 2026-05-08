---
logical: "cai_suggestedaction"
display_it: "Azione suggerita"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["azione suggerita"]
dataverse_logical: "cai_suggestedaction"
is_custom: false
schema_name: "cai_suggestedaction"
generated: "2026-05-07"
---

# Azione suggerita — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_suggestedaction`  
**Custom:** No  
**Ownership:** UserOwned

Azioni suggerite per il gestore

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `cai_suggestedactionid` | Azione suggerita | Uniqueidentifier | No |  |  |
| `cai_code` | Codice azione suggerita | Text | No | ✓ |  |
| `cai_suggestedactiontext` | Azione da suggerire | Text | No | ✓ | Testo dell'azione da suggerire all'utente |
| `cai_name` | Name | Text | No | ✓ | Nome azione suggerita |
| `cai_operationtypesuggested` | Modalità di azione suggerita | Text | No | ✓ | Tipo della modalità di azione suggerita |
| `statecode` | Status | State | No |  | Status of the Argomento |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Argomento |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07