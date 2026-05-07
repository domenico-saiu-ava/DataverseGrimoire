---
logical: "bot_environmentvariabledefinition"
display: "bot_environmentvariabledefinition"
entitySetName: "bot_environmentvariabledefinitionset"
primaryId: "bot_environmentvariabledefinitionid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`bot_environmentvariabledefinitionid`, `botid`, `componentidunique`, `componentstate`, `environmentvariabledefinitionid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_environmentvariabledefinition` | [bot](bot.md) | _n/a_ | `bot_environmentvariabledefinition` |

## Source

Generated from [bot_environmentvariabledefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bot_environmentvariabledefinition')) on 2026-05-07.