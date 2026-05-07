---
logical: "virtualresourcegroupresource"
display: "Risorsa gruppo di risorse virtuale"
entitySetName: "virtualresourcegroupresources"
primaryId: "virtualresourcegroupresourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risorsa gruppo di risorse virtuale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `virtualresourcegroupresource` |
| Display name | Risorsa gruppo di risorse virtuale |
| Display (plural) | Raccolta risorse del gruppo di risorse virtuale |
| Schema name | `virtualresourcegroupresource` |
| Entity set (Web API) | `virtualresourcegroupresources` |
| Primary id attribute | `virtualresourcegroupresourceid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/virtualresourcegroupresources?$select=name&$top=10
GET /api/data/v9.2/virtualresourcegroupresources(<guid>)
POST /api/data/v9.2/virtualresourcegroupresources
PATCH /api/data/v9.2/virtualresourcegroupresources(<guid>)
DELETE /api/data/v9.2/virtualresourcegroupresources(<guid>)
```

## Attributes

Writable: **7** · Read-only: **0**

### Writable

`businessunit`, `constraintbasedgroupid`, `name`, `resourceentitylogicalname`, `resourceentityname`, `resourcegroupid`, `virtualresourcegroupresourceid`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `constraintbasedgroup_virtualresourceg` | [constraintbasedgroup](constraintbasedgroup.md) | `resourcegroupid` | `resourcegroupId` |



## Source

Generated from [virtualresourcegroupresource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='virtualresourcegroupresource')) on 2026-05-07.