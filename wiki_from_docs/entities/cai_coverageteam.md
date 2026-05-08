---
logical: "cai_coverageteam"
display_it: "Appuntamento Coverage team"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["appuntamento coverage team"]
dataverse_logical: "cai_coverageteam"
is_custom: false
schema_name: "cai_coverageteam"
generated: "2026-05-07"
---

# Appuntamento Coverage team — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_coverageteam`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_appointmentcoverageteamid` | Appuntamento Coverage team | Guid | No | ✓ | Identificativo univoco del record di Appuntamento Coverage team |
| `cai_code` | Codice | text | No | ✓ | Codice del record |
| `cai_coverageteamid` | Coverage team | Lookup | No | ✓ | Riferimento al Coverage team |
| `cai_appointmentid` | Appuntamento | Lookup | No | ✓ | Riferimento all'appuntamento |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07