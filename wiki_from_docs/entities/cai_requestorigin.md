---
logical: "cai_requestorigin"
display_it: "Fonte Richiesta"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
synonyms_it: ["fonte richiesta"]
processes: ["Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista"]
dataverse_logical: "cai_requestorigin"
is_custom: false
schema_name: "cai_requestorigin"
generated: "2026-05-07"
---

# Fonte Richiesta — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_requestorigin`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_requestoriginid` | Fonte Richiesta | Uniqueidentifier | No |  | Unique identifier for entity instances |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `statecode` | Status | State | No |  | Status of the Fonte Richiesta |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Fonte Richiesta |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF servizio clienti - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07