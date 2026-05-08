---
logical: "cai_leadoutcomeactivitycssession"
display_it: "SC Sessione di Esitazione"
source: "docs_analysis"
business_area: "Servizio Clienti"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["sc sessione di esitazione"]
dataverse_logical: "cai_leadoutcomeactivitycssession"
is_custom: false
schema_name: "cai_leadoutcomeactivitycssession"
generated: "2026-05-07"
---

# SC Sessione di Esitazione — Scheda funzionale

**Business area:** Servizio Clienti  
**Entità Dataverse:** `cai_leadoutcomeactivitycssession`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_sessionguid` | ID Sessione | text | No | ✓ | Guid che rappresenta la sessione di esitazione |
| `cai_leadid` | Lead | Lookup | No | ✓ | Lookup alla tabella Lead |
| `cai_leadoutcomeid` | Esito lead | Lookup | No | ✓ | Esito applicato alla Lead |
| `cai_notes` | Note esitazione | Memo | No | ✓ | Note inserite dall'utente in fase di esitazione |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07