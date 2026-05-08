---
logical: "cai_macrocategory"
display_it: "Macrocategoria"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["macrocategoria"]
dataverse_logical: "cai_macrocategory"
is_custom: false
schema_name: "cai_macrocategory"
generated: "2026-05-07"
---

# Macrocategoria — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_macrocategory`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |
| `cai_macrocategory` | Macrocategoria | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `cai_code` | Codice macrocategoria | Text | No | ✓ |  |
| `cai_minterclass` | Classe minter | Choice | No | ✓ |  |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07