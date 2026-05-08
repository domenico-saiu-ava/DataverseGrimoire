---
logical: "cai_customerinterviewpointofcontact"
display_it: "Referente Customer interview"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["referente customer interview"]
dataverse_logical: "cai_customerinterviewpointofcontact"
is_custom: false
schema_name: "cai_customerinterviewpointofcontact"
generated: "2026-05-07"
---

# Referente Customer interview — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_customerinterviewpointofcontact`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerinterviewpointofcontactid` | Referente Customer interview | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_name` | Nominativo | Text | No | ✓ | Il nominativo del referente |
| `cai_role` | Ruolo referente | Text | No | ✓ | Il ruolo del referente |
| `cai_customerinterviewid` | Customer interview | Lookup | No | ✓ | Customer interview di cui la persone è referente |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_customerinterviewid` | Customer interview | `cai_customerinterview` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07