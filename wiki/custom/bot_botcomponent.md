---
logical: "bot_botcomponent"
display: "bot_botcomponent"
entitySetName: "bot_botcomponentset"
primaryId: "bot_botcomponentid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# bot_botcomponent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bot_botcomponent` |
| Display name | bot_botcomponent |
| Schema name | `bot_botcomponent` |
| Entity set (Web API) | `bot_botcomponentset` |
| Primary id attribute | `bot_botcomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/bot_botcomponentset?$select=&$top=10
GET /api/data/v9.2/bot_botcomponentset(<guid>)
POST /api/data/v9.2/bot_botcomponentset
PATCH /api/data/v9.2/bot_botcomponentset(<guid>)
DELETE /api/data/v9.2/bot_botcomponentset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`bot_botcomponentid`, `botcomponentid`, `botid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | [bot](bot.md) | _n/a_ | `bot_botcomponent` |

## Source

Generated from [bot_botcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bot_botcomponent')) on 2026-05-07.