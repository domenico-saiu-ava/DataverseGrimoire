---
logical: "cai_customerinterview"
display_it: "Customer interview"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["customer interview"]
dataverse_logical: "cai_customerinterview"
is_custom: false
schema_name: "cai_customerinterview"
generated: "2026-05-07"
---

# Customer interview — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_customerinterview`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_customerinterviewid` | Customer interview | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_contactchannelid` | Tipo di contatto | Lookup | No | ✓ | Indica come è si è svolto il contatto con il cliente |
| `cai_appointmentdate` | Data incontro | Datetime | No | ✓ | La data dell'incontro da cui è stata generata la customer interview |
| `cai_appointmentnotes` | Note incontro | Text | No | ✓ | Le note dell'incontro |
| `cai_discussedtopicsgeneralnotes` | Note generali temi discussi | Text | No | ✓ | Le note relative ai temi discussi durante la customer interview |
| `cai_authorid` | Utente autore della customer interview | Lookup | No | ✓ | Utente che ha censito la customer interview |
| `cai_customerid` | Cliente/Azienda | Customer | No | ✓ | Cliente/Azienda per cui è stata effettuata la customer interview |
| `cai_appointmentid` | Appuntamento | Lookup | No | ✓ | Appuntamento da cui è stata generata la Customer interview |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_contactchannelid` | Tipo di contatto | `cai_contactchannel` |
| `cai_authorid` | Utente autore della customer interview | `systemuser` |
| `cai_appointmentid` | Appuntamento | `appointment` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07