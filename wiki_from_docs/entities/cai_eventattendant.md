---
logical: "cai_eventattendant"
display_it: "Accompagnatore evento"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["accompagnatore evento"]
dataverse_logical: "cai_eventattendant"
is_custom: false
schema_name: "cai_eventattendant"
generated: "2026-05-07"
---

# Accompagnatore evento — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_eventattendant`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ | Codice evento |
| `cai_name` | Nome | Text | No | ✓ | Nome accompagnatore |
| `cai_lastname` | Cognome | Choice | No | ✓ | Cognome accompagnatore |
| `cai_eventid` | Evento | Lookup | No | ✓ | Evento |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Accompagnatore evento |
| `statecode` | Stato | Choice | No |  | Stato del record di Accompagnatore evento |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_eventid` | Evento | `cai_event` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07