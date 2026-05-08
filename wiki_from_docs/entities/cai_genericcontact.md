---
logical: "cai_genericcontact"
display_it: "Contatto generico"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["contatto generico"]
dataverse_logical: "cai_genericcontact"
is_custom: false
schema_name: "cai_genericcontact"
generated: "2026-05-07"
---

# Contatto generico — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_genericcontact`  
**Custom:** No  
**Ownership:** UserOwned

Rappresenta il contatto avvenuto tra il gestore e il cliente

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice contatto generico | Text | No |  | Codice autonumber del contatto |
| `cai_genericcontactid` | Contatto generico | UniqueIdentifier | No | ✓ | Identificativo del record |
| `regardingobjectid` | Tema | Lookup | No |  | Il record di Account o Contact correlato al contatto generico |
| `cai_contactdate` | Data di contatto | DateTime | No | ✓ | Data di censimento del contatto |
| `cai_contactchannelid` | Canale di contatto | Lookup | No | ✓ | Canale tramite cui è stato effettuato il contatto con il cliente |
| `cai_notes` | Nota | Text | No | ✓ | Nota inserita in fase di esitazione |
| `cai_managerid` | Gestore | Lookup | No | ✓ | Gestore che ha eseguito il contatto |
| `statecode` | Stato | State | **Sì** |  | State del record |
| `statuscode` | Motivo stato | Status | No |  | Stato del contatto generico |
| `ownerid` | Proprietario | Lookup | No |  | Gestore/Operatore che ha eseguito il contatto |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_contactchannelid` | Canale di contatto | `cai_contactchannel` |
| `cai_managerid` | Gestore | `systemuser` |
| `ownerid` | Proprietario | `systemuser` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07