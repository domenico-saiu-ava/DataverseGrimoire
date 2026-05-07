---
logical: "componentversiondatasource"
display: "Component Version Data Source"
entitySetName: "componentversiondatasources"
primaryId: "componentversiondatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Component Version Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversiondatasource` |
| Display name | Component Version Data Source |
| Display (plural) | Component Version Data Sources |
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

`componentversiondatasourceId`, `name`

## Relationships




## Source

Generated from [componentversiondatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/componentversiondatasource.md) on 2026-05-06.