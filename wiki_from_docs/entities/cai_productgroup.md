---
logical: "cai_productgroup"
display_it: "Gruppo prodotto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["gruppo prodotto"]
processes: ["Catalogo prodotti"]
dataverse_logical: "cai_productgroup"
is_custom: false
schema_name: "cai_productgroup"
generated: "2026-05-07"
---

# Gruppo prodotto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_productgroup`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |
| `cai_productgroupid` | Gruppo prodotto | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `cai_code` | Codice | Text | No | ✓ | Codice del gruppo prodotto da precedente catalogo |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Retail - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF servizio clienti - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Retail - MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07