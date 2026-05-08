---
logical: "cai_nboproduct"
display_it: "Prodotto NBO"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["prodotto nbo"]
dataverse_logical: "cai_nboproduct"
is_custom: false
schema_name: "cai_nboproduct"
generated: "2026-05-07"
---

# Prodotto NBO — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_nboproduct`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `cai_productid` | Prodotto | Lookup | No |  | Lookup a prodotto |
| `cai_nboproductid` | Prodotto NBO | Uniqueidentifier | No |  |  |
| `cai_nboproductcode` | Codice Prodotto NBO | Text | No | ✓ |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_productid` | Prodotto | `cai_product` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07