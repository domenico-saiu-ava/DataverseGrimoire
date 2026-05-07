---
logical: "resourcegroupdatasource"
display: "resource group data source"
entitySetName: "resourcegroupdatasources"
primaryId: "resourcegroupdatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# resource group data source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `resourcegroupdatasource` |
| Display name | resource group data source |
| Display (plural) | resource group data sources |
| Schema name | `resourcegroupdatasource` |
| Entity set (Web API) | `resourcegroupdatasources` |
| Primary id attribute | `resourcegroupdatasourceid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/resourcegroupdatasources?$select=name&$top=10
GET /api/data/v9.2/resourcegroupdatasources(<guid>)
POST /api/data/v9.2/resourcegroupdatasources
PATCH /api/data/v9.2/resourcegroupdatasources(<guid>)
DELETE /api/data/v9.2/resourcegroupdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`name`, `resourcegroupdatasourceId`

## Relationships




## Source

Generated from [resourcegroupdatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/resourcegroupdatasource.md) on 2026-05-06.