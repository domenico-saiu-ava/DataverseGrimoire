---
logical: "cai_campaign"
display_it: "Anagrafe campagna"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["anagrafe campagna"]
dataverse_logical: "cai_campaign"
is_custom: false
schema_name: "cai_campaign"
generated: "2026-05-07"
---

# Anagrafe campagna — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_campaign`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `cai_campaignid` | Campagna | Uniqueidentifier | No |  |  |
| `cai_code` | Codice campagna | Text | No | ✓ |  |
| `cai_adobecode` | Codice campagna adobe | Text | No | ✓ |  |
| `cai_adobeid` | ID campagna adobe | Text | No | ✓ |  |
| `cai_startdate` | Data di avvio | DateTime | No | ✓ |  |
| `cai_enddate` | Data di scadenza | DateTime | No | ✓ |  |
| `cai_goal` | Obiettivo | Text | No | ✓ | ? |
| `cai_target` | Target | Text | No | ✓ | ? |
| `cai_mode` | Modalità | Text | No | ✓ | ? |
| `cai_channel` | Canale | Text | No | ✓ | ? |
| `cai_frequency` | Frequenza | Text | No | ✓ |  |
| `cai_type` | Tipo | Text | No | ✓ |  |
| `cai_duration` | Durata validità | Whole number | No | ✓ |  |
| `cai_segment` | Segmento | Text | No | ✓ |  |
| `cai_redemption` | Redemption | Text | No | ✓ | ? |
| `cai_description` | Descrizione | Text | No | ✓ |  |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Argomento |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Argomento |
| `cai_status` | Stato campagna | Text | No | ✓ | Stato della campagna riportato sul flusso |
| `cai_inventoryschedule` | Scadenziere/Magazzino | Two options | No | ✓ | Indica se le offerte della campagna siano da intendere come Scadenziere o Magazzino |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07