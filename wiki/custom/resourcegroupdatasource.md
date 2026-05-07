---
logical: "resourcegroupdatasource"
display: "origine dati del gruppo di risorse"
entitySetName: "resourcegroupdatasources"
primaryId: "resourcegroupdatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# origine dati del gruppo di risorse

## Identity

| Property | Value |
| --- | --- |
| Logical name | `resourcegroupdatasource` |
| Display name | origine dati del gruppo di risorse |
| Display (plural) | origini dati del gruppo di risorse |
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

`name`, `resourcegroupdatasourceid`

## Relationships




## Source

Generated from [resourcegroupdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='resourcegroupdatasource')) on 2026-05-07.