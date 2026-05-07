---
logical: "botcomponent_msdyn_aimodel"
display: "botcomponent_msdyn_aimodel"
entitySetName: "botcomponent_msdyn_aimodelset"
primaryId: "botcomponent_msdyn_aimodelid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_msdyn_aimodelId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `msdyn_aimodelid`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_msdyn_aimodel` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_msdyn_aimodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_msdyn_aimodel.md) on 2026-05-06.