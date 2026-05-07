---
logical: "serviceplanappmodules"
display: "serviceplanappmodules"
entitySetName: "serviceplanappmodulesset"
primaryId: "serviceplanappmodulesid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`AppModuleId`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `ServicePlanAppModulesId`, `ServicePlanId`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_appmodule` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [serviceplanappmodules.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/serviceplanappmodules.md) on 2026-05-06.