---
logical: "virtualresourcegroupresource"
display: "Virtual Resource Group Resource"
entitySetName: "virtualresourcegroupresources"
primaryId: "virtualresourcegroupresourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Virtual Resource Group Resource

## Identity

| Property | Value |
| --- | --- |
| Logical name | `virtualresourcegroupresource` |
| Display name | Virtual Resource Group Resource |
| Display (plural) | Virtual Resource Group Resources Collection |
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

`businessunit`, `constraintbasedgroupid`, `name`, `resourceentitylogicalname`, `resourceentityname`, `resourcegroupId`, `virtualresourcegroupresourceId`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `constraintbasedgroup_virtualresourceg` | [constraintbasedgroup](constraintbasedgroup.md) | `resourcegroupid` | `resourcegroupId` |



## Source

Generated from [virtualresourcegroupresource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/virtualresourcegroupresource.md) on 2026-05-06.