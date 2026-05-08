---
logical: "cai_contactchannel"
display_it: "Canale di Contatto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["canale di contatto"]
dataverse_logical: "cai_contactchannel"
is_custom: false
schema_name: "cai_contactchannel"
generated: "2026-05-07"
---

# Canale di Contatto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_contactchannel`  
**Custom:** No  
**Ownership:** OrganizationOwned

Identifica i canali di contatto disponibili per esitare (Telefonata/distanza,In filiale, Presso cliente)

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_contactchannelid` | Canale di Contatto | Uniqueidentifier | No |  | Unique identifier for entity instances |
| `cai_contactchannelcode` | Codice canale | Text | No | ✓ |  |
| `cai_name` | Nome canale | Text | No | ✓ |  |
| `cai_description` | Descrizione | Text | No | ✓ |  |
| `statecode` | Status | State | No |  | Status of the Canale di Contatto |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Canale di Contatto |
| `cai_selectableonfree` | Selezionabile su FrEE | Two options | No |  | Indica se il canale di contatto sia selezionabile su FrEE |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07