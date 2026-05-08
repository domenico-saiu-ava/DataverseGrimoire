---
logical: "cai_preferredcalendar"
display_it: "Agenda preferita"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["agenda preferita"]
processes: ["Visualizzazione agenda di collaboratori e filtri di visualizzazione › Visualizzazione agenda collega"]
dataverse_logical: "cai_preferredcalendar"
is_custom: false
schema_name: "cai_preferredcalendar"
generated: "2026-05-07"
---

# Agenda preferita — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_preferredcalendar`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `cai_preferredcalendarid` | Agenda preferita | Uniqueidentifier | No |  |  |
| `cai_code` | Codice Agenda preferita | Text | No | ✓ |  |
| `cai_systemuserid` | Utente | Lookup | No | ✓ | Utente che esprime la preferenza |
| `cai_colleagueid` | Collega | Lookup | No | ✓ | Utente di cui si sta salvando l'agenda |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Agenda preferita |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Agenda preferita |
| `cai_othercalendarpreferred` | Altra agenda preferita | Two options | No | ✓ | Flag che indica se la "altra agenda" sia o meno segnata come preferita |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_systemuserid` | Utente | `Lookup a systemuser` |
| `cai_colleagueid` | Collega | `Lookup a systemuser` |

## Processi correlati

- **AF Retail - MVP0_Sprint2** — §Visualizzazione agenda di collaboratori e filtri di visualizzazione › Visualizzazione agenda collega
  > Previsto accesso dalla pagina “Agende dei colleghi” come specificato in Visualizzazione altre agende Figura 20 – Agenda del collega Previsto Accesso alla pagina da Widget agenda in scrivania come desc

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07