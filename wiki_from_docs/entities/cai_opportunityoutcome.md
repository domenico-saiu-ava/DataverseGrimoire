---
logical: "cai_opportunityoutcome"
display_it: "Esito opportunità"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["esito opportunità"]
dataverse_logical: "cai_opportunityoutcome"
is_custom: false
schema_name: "cai_opportunityoutcome"
generated: "2026-05-07"
---

# Esito opportunità — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_opportunityoutcome`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_opportunityoutcomeid` | Esito opportunità | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_technicalcode` | Codice tecnico | Text | No | ✓ | Codice tecnico da utilizzare espressamente per logiche di business |
| `cai_name` | Nome | Text | No | ✓ | Nome dell'esito |
| `cai_retail` | Retail | Boolean | No |  | Indica se l'esito è previsto per le opportunità di Retail |
| `cai_private` | Private | Boolean | No |  | Indica se l'esito è previsto per le opportunità di Private |
| `cai_bdi` | Banca d'impresa | Boolean | No |  | Indica se l'esito è previsto per le opportunità di Banca d'impresa |
| `cai_customerservice` | Servizio clienti | Boolean | No |  | Indica se l'esito è previsto per le opportunità di Servizio clienti |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Esito opportunità |
| `statecode` | Stato | Choice | No |  | Stato del record di Esito opportunità |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07