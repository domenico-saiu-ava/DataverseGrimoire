---
logical: "bot_environmentvariabledefinition"
display: "bot_environmentvariabledefinition"
entitySetName: "bot_environmentvariabledefinitionset"
primaryId: "bot_environmentvariabledefinitionid"
tableType: "Standard"
ownership: "None"
---

# bot_environmentvariabledefinition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bot_environmentvariabledefinition` |
| Display name | bot_environmentvariabledefinition |
| Schema name | `bot_environmentvariabledefinition` |
| Entity set (Web API) | `bot_environmentvariabledefinitionset` |
| Primary id attribute | `bot_environmentvariabledefinitionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/bot_environmentvariabledefinitionset?$select=&$top=10
GET /api/data/v9.2/bot_environmentvariabledefinitionset(<guid>)
POST /api/data/v9.2/bot_environmentvariabledefinitionset
PATCH /api/data/v9.2/bot_environmentvariabledefinitionset(<guid>)
DELETE /api/data/v9.2/bot_environmentvariabledefinitionset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`bot_environmentvariabledefinitionId`, `botid`, `ComponentIdUnique`, `ComponentState`, `environmentvariabledefinitionid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_environmentvariabledefinition` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [bot_environmentvariabledefinition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bot_environmentvariabledefinition.md) on 2026-05-06.