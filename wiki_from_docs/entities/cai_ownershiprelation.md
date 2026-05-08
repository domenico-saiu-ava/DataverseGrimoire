---
logical: "cai_ownershiprelation"
display_it: "Titolarità Rapporto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["titolarità rapporto"]
processes: ["Configurazioni di agenda"]
dataverse_logical: "cai_ownershiprelation"
is_custom: false
schema_name: "cai_ownershiprelation"
generated: "2026-05-07"
---

# Titolarità Rapporto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_ownershiprelation`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_name` | Nome | Text | No | ✓ |  |
| `cai_date` | Data | DateTime | No | ✓ |  |

## Processi correlati

- **AF Retail - MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07