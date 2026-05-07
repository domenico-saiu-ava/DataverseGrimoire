---
logical: "botcomponent_aipluginoperation"
display: "botcomponent_aipluginoperation"
entitySetName: "botcomponent_aipluginoperationset"
primaryId: "botcomponent_aipluginoperationid"
tableType: "Standard"
ownership: "None"
---

# botcomponent_aipluginoperation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_aipluginoperation` |
| Display name | botcomponent_aipluginoperation |
| Schema name | `botcomponent_aipluginoperation` |
| Entity set (Web API) | `botcomponent_aipluginoperationset` |
| Primary id attribute | `botcomponent_aipluginoperationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_aipluginoperationset?$select=&$top=10
GET /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
POST /api/data/v9.2/botcomponent_aipluginoperationset
PATCH /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
DELETE /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`aipluginoperationid`, `botcomponent_aipluginoperationId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_aipluginoperation` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_aipluginoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_aipluginoperation.md) on 2026-05-06.