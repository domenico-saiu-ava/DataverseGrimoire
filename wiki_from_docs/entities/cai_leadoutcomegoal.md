---
logical: "cai_leadoutcomegoal"
display_it: "Obiettivo Esito Lead"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["obiettivo esito lead"]
dataverse_logical: "cai_leadoutcomegoal"
is_custom: false
schema_name: "cai_leadoutcomegoal"
generated: "2026-05-07"
---

# Obiettivo Esito Lead — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_leadoutcomegoal`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `cai_leadoutcomeid` | Esito lead | Lookup | No |  | Lookup a Esito Lead |
| `cai_marketinggoalid` | Obiettivo di marketing | Lookup | No |  | Lookup a Obiettivo di marketing |
| `cai_leadoutcomegoalid` | Obiettivo Esito Lead | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_leadoutcomeid` | Esito lead | `Lookup a Esito Lead` |
| `cai_marketinggoalid` | Obiettivo di marketing | `Lookup a Obiettivo di marketing` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07