---
logical: "cai_campaignoffer"
display_it: "Offerta campagna"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["offerta campagna"]
dataverse_logical: "cai_campaignoffer"
is_custom: false
schema_name: "cai_campaignoffer"
generated: "2026-05-07"
---

# Offerta campagna — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_campaignoffer`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `cai_campaignofferid` | Offerta campagna | Uniqueidentifier | No |  |  |
| `cai_code` | Codice offerta campagna | Text | No | ✓ |  |
| `cai_adobecode` | Codice offerta campagna adobe | Text | No | ✓ |  |
| `cai_adobeid` | ID offerta campagna adobe | Text | No | ✓ |  |
| `cai_startdate` | Data di avvio | DateTime | No | ✓ |  |
| `cai_enddate` | Data di scadenza | DateTime | No | ✓ |  |
| `cai_txt` | TXT | Text | No | ✓ |  |
| `cai_channel` | Canale | Text | No | ✓ |  |
| `cai_contenttype` | Tipo contenuto | Text | No | ✓ |  |
| `cai_contentcode` | Codice contenuto | Text | No | ✓ |  |
| `cai_activitytype` | Tipo attività | Text | No | ✓ |  |
| `cai_argumentid` | Argomento | Lookup | No | ✓ | Lookup a cai_argument |
| `cai_duration` | Durata validità | Whole number | No | ✓ |  |
| `cai_description` | Descrizione | Text | No | ✓ |  |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Argomento |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Argomento |
| `cai_productid` | Prodotto | Lookup | No |  | Prodotto da associare all'offerta |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_argumentid` | Argomento | `Lookup a cai_argument` |
| `cai_productid` | Prodotto | `cai_product` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07