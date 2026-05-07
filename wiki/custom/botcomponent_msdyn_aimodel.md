---
logical: "botcomponent_msdyn_aimodel"
display: "botcomponent_msdyn_aimodel"
entitySetName: "botcomponent_msdyn_aimodelset"
primaryId: "botcomponent_msdyn_aimodelid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# botcomponent_msdyn_aimodel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_msdyn_aimodel` |
| Display name | botcomponent_msdyn_aimodel |
| Schema name | `botcomponent_msdyn_aimodel` |
| Entity set (Web API) | `botcomponent_msdyn_aimodelset` |
| Primary id attribute | `botcomponent_msdyn_aimodelid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_msdyn_aimodelset?$select=&$top=10
GET /api/data/v9.2/botcomponent_msdyn_aimodelset(<guid>)
POST /api/data/v9.2/botcomponent_msdyn_aimodelset
PATCH /api/data/v9.2/botcomponent_msdyn_aimodelset(<guid>)
DELETE /api/data/v9.2/botcomponent_msdyn_aimodelset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_msdyn_aimodelid`, `botcomponentid`, `componentidunique`, `componentstate`, `ismanaged`, `msdyn_aimodelid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_msdyn_aimodel` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_msdyn_aimodel` |

## Source

Generated from [botcomponent_msdyn_aimodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_msdyn_aimodel')) on 2026-05-07.