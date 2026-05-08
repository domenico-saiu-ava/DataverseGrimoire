---
logical: "cai_macroproduct"
display_it: "Macroprodotto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1"]
synonyms_it: ["macroprodotto"]
processes: ["Definizione livelli di priorità lead in MVP0 (soluzione temporanea prima dell’implementazione del motore di prioritizzazione previsto in MVP successivi)"]
dataverse_logical: "cai_macroproduct"
is_custom: false
schema_name: "cai_macroproduct"
generated: "2026-05-07"
---

# Macroprodotto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_macroproduct`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |
| `cai_macroproduct` | Macroprodotto | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `cai_code` | Codice macroprodotto | Text | No | ✓ |  |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Definizione livelli di priorità lead in MVP0 (soluzione temporanea prima dell’implementazione del motore di prioritizzazione previsto in MVP successivi)
  > Premessa: nel seguente paragrafo si descrive il modello di prioritizzazione dei contatti (“Lead” e “Suggerimenti” secondo la tassonomia “Caldo”, “Tiepido”, Freddo” nel corso del rilascio MVP0. Tali co

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1  
Data generazione: 2026-05-07