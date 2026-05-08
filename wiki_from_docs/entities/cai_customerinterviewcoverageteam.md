---
logical: "cai_customerinterviewcoverageteam"
display_it: "Customer interview - Coverage team"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["customer interview - coverage team"]
dataverse_logical: "cai_customerinterviewcoverageteam"
is_custom: false
schema_name: "cai_customerinterviewcoverageteam"
generated: "2026-05-07"
---

# Customer interview - Coverage team — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_customerinterviewcoverageteam`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerinterviewcoverageteamid` | Tema Customer interview | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_coverageteamid` | Coverage team | Lookup | No | ✓ | Il coverage team collegato alla customer interview |
| `cai_customerinterviewid` | Customer interview | Lookup | No | ✓ | La customer interview a cui è stato collegato il record di coverage team |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_coverageteamid` | Coverage team | `cai_coverageteam` |
| `cai_customerinterviewid` | Customer interview | `cai_customerinterview` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07