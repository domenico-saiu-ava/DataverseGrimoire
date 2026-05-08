---
logical: "cai_customerinterviewtopic"
display_it: "Tema Customer interview"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["tema customer interview"]
dataverse_logical: "cai_customerinterviewtopic"
is_custom: false
schema_name: "cai_customerinterviewtopic"
generated: "2026-05-07"
---

# Tema Customer interview — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_customerinterviewtopic`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerinterviewtopicid` | Tema Customer interview | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_macroproductid` | Macroprodotto | Lookup | No | ✓ | Indica il macroprodotto di cui si è discusso con il cliente |
| `cai_notes` | Note | Text | No | ✓ | Le note dell'incontro |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_macroproductid` | Macroprodotto | `cai_macroproduct` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07