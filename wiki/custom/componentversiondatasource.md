---
logical: "componentversiondatasource"
display: "Origine dati versione del componente"
entitySetName: "componentversiondatasources"
primaryId: "componentversiondatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati versione del componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversiondatasource` |
| Display name | Origine dati versione del componente |
| Display (plural) | Origini dati versione del componente |
| Schema name | `componentversiondatasource` |
| Entity set (Web API) | `componentversiondatasources` |
| Primary id attribute | `componentversiondatasourceid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/componentversiondatasources?$select=name&$top=10
GET /api/data/v9.2/componentversiondatasources(<guid>)
POST /api/data/v9.2/componentversiondatasources
PATCH /api/data/v9.2/componentversiondatasources(<guid>)
DELETE /api/data/v9.2/componentversiondatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`componentversiondatasourceid`, `name`

## Relationships




## Source

Generated from [componentversiondatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='componentversiondatasource')) on 2026-05-07.