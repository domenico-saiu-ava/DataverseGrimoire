---
logical: "cai_customerinterviewpartecipant"
display_it: "Partecipante Customer interview"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["partecipante customer interview"]
dataverse_logical: "cai_customerinterviewpartecipant"
is_custom: false
schema_name: "cai_customerinterviewpartecipant"
generated: "2026-05-07"
---

# Partecipante Customer interview — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_customerinterviewpartecipant`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerinterviewpartecipantid` | Partecipante Customer interview | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_userid` | Partecipante | Lookup | No | ✓ | Utente partecipante alla customer interview |
| `cai_customerinterviewid` | Customer interview | Lookup | No | ✓ | Customer interview di cui la persone è referente |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_userid` | Partecipante | `systemuser` |
| `cai_customerinterviewid` | Customer interview | `cai_customerinterview` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07