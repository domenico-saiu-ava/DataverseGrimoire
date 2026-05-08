---
logical: "cai_qualitativeinfosestateplanning"
display_it: "Info qualitative - Pianificazione successoria"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["info qualitative - pianificazione successoria"]
dataverse_logical: "cai_qualitativeinfosestateplanning"
is_custom: false
schema_name: "cai_qualitativeinfosestateplanning"
generated: "2026-05-07"
---

# Info qualitative - Pianificazione successoria — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_qualitativeinfosestateplanning`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_qualitativeinfosestateplanningid` | Info qualitative - Pianificazione successoria | Guid | No | ✓ | Identificativo del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato del record |
| `cai_customerid` | Cliente | Customer | No | ✓ |  |
| `cai_children` | Figli | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_presenceofnoncustomerheirs` | Presenza Eredi non clienti | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_successionplanning` | Pianificazione successoria | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_successionplanningtools` | Strumenti di pianificazione successoria | Choice | No | ✓ | Testamento; Patto di Famiglia; Donazione; Holding; Trust; SS; Polizze vita; Vincolo di destinazione (se disponibile, altrimenti vuoto) |
| `cai_philanthropicinterest` | Interesse filantropia | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_successionplanningnotes` | Note Pianificazione successoria | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07