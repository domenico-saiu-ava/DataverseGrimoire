---
logical: "cai_leadoutcomeactivitycssessionparams"
display_it: "SC Parametri della Sessione di Esitazione"
source: "docs_analysis"
business_area: "Servizio Clienti"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["sc parametri della sessione di esitazione"]
dataverse_logical: "cai_leadoutcomeactivitycssessionparams"
is_custom: false
schema_name: "cai_leadoutcomeactivitycssessionparams"
generated: "2026-05-07"
---

# SC Parametri della Sessione di Esitazione — Scheda funzionale

**Business area:** Servizio Clienti  
**Entità Dataverse:** `cai_leadoutcomeactivitycssessionparams`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_sessionguid` | ID Sessione | Text | No | ✓ | Guid che rappresenta la sessione di esitazione |
| `cai_contactchannelcode` | Interazione | Text | No | ✓ | Canale di contatto |
| `cai_employeecode` | Codice Utente | Text | No | ✓ | Codice Utente |
| `cai_ndg` | Codice Cliente | Text | No | ✓ | Codice Cliente |
| `cai_appointmentscheduledstart` | Data Inizio | DateTime | No | ✓ | Data Inizio |
| `cai_appointmentscheduledend` | Data Fine | DateTime | No | ✓ | Data Fine |
| `cai_appointmenttypecode` | Tipo di appuntamento | Choice | No | ✓ | Tipo di contatto |
| `cai_appointmentsubject` | Oggetto | Text | No | ✓ | Oggetto appuntamento |
| `cai_appointmentisallday` | Tutto il giorno | Boolean | No | ✓ | Tutto il giorno |
| `cai_leadoutcomereason` | Motivo Esito | Choice | No | ✓ | Dettaglio motivazione in caso di esito: "Non interessato" oppure "Impossibilità a procedere" |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07