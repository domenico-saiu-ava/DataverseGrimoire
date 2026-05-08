---
logical: "cai_opportunitycoverageteam"
display_it: "Opportunità - Coverage team"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["opportunità - coverage team"]
dataverse_logical: "cai_opportunitycoverageteam"
is_custom: false
schema_name: "cai_opportunitycoverageteam"
generated: "2026-05-07"
---

# Opportunità - Coverage team — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_opportunitycoverageteam`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_opportunitycoverageteamid` | Opportunità - Coverage team | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_opportunityid` | Opportunità | Lookup | No | ✓ | Record di opportunità cui è legato un record di coverage team |
| `cai_coverageteam` | Coverage team | Lookup | No | ✓ | Record di coverage team legato a un'opportunità |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_opportunityid` | Opportunità | `opportunity` |
| `cai_coverageteam` | Coverage team | `cai_coverageteam` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07