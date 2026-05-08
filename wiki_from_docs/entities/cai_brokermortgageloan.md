---
logical: "cai_brokermortgageloan"
display_it: "Canale intermediario mutuo"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["canale intermediario mutuo"]
dataverse_logical: "cai_brokermortgageloan"
is_custom: false
schema_name: "cai_brokermortgageloan"
generated: "2026-05-07"
---

# Canale intermediario mutuo — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_brokermortgageloan`  
**Custom:** No  
**Ownership:** OrganizationOwned

Canali che possono censire Lead mutui

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `statecode` | Stato | State | **Sì** |  | Mostra se ilrecord di Canale mutuo è attivo o disattivo |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato del Canale mutuo |
| `cai_name` | Nome canale intermediario mutuo | Text | No | ✓ | Nome del Canale mutuo |
| `cai_description` | Descrizione canale intermediario mutuo | Text | No | ✓ | Descrizione del Canale mutuo |
| `cai_code` | Codice | Text | No | ✓ | Codice del canale mutuo |
| `cai_brokermortgageloanid` | Canale intermediario mutuo | Guid | No | ✓ |  |
| `cai_internalchannel` | Canale interno banca | Two options | No | ✓ |  |
| `cai_email` | E-mail | String | No |  |  |
| `cai_intermediaryguid` | GUID Intermediario | String | No |  |  |
| `cai_intermediaryndg` | NDG Intermediario | String | No |  |  |
| `cai_isenabledforconsultantsending` | Enable invio al consulente | Boolean | No |  |  |
| `cai_isenabledforpromoters` | Abilitato per Promotori | Boolean | No |  |  |
| `cai_isintermediaryguidenabled` | Abilitazione Guid Intermediario | Boolean | No |  |  |
| `cai_ismanagedexternally` | Gestito Esternamente | Boolean | No |  |  |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07