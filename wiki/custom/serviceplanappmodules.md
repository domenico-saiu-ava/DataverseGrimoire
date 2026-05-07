---
logical: "serviceplanappmodules"
display: "serviceplanappmodules"
entitySetName: "serviceplanappmodulesset"
primaryId: "serviceplanappmodulesid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# serviceplanappmodules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceplanappmodules` |
| Display name | serviceplanappmodules |
| Schema name | `ServicePlanAppModules` |
| Entity set (Web API) | `serviceplanappmodulesset` |
| Primary id attribute | `serviceplanappmodulesid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/serviceplanappmodulesset?$select=&$top=10
GET /api/data/v9.2/serviceplanappmodulesset(<guid>)
POST /api/data/v9.2/serviceplanappmodulesset
PATCH /api/data/v9.2/serviceplanappmodulesset(<guid>)
DELETE /api/data/v9.2/serviceplanappmodulesset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`appmoduleid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `serviceplanappmodulesid`, `serviceplanid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_appmodule` | [serviceplan](serviceplan.md) | _n/a_ | `serviceplan_appmodule_association` |

## Source

Generated from [serviceplanappmodules (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='serviceplanappmodules')) on 2026-05-07.