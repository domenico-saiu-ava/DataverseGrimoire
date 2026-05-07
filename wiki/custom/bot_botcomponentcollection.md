---
logical: "bot_botcomponentcollection"
display: "bot_botcomponentcollection"
entitySetName: "bot_botcomponentcollectionset"
primaryId: "bot_botcomponentcollectionid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# bot_botcomponentcollection

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bot_botcomponentcollection` |
| Display name | bot_botcomponentcollection |
| Schema name | `bot_botcomponentcollection` |
| Entity set (Web API) | `bot_botcomponentcollectionset` |
| Primary id attribute | `bot_botcomponentcollectionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/bot_botcomponentcollectionset?$select=&$top=10
GET /api/data/v9.2/bot_botcomponentcollectionset(<guid>)
POST /api/data/v9.2/bot_botcomponentcollectionset
PATCH /api/data/v9.2/bot_botcomponentcollectionset(<guid>)
DELETE /api/data/v9.2/bot_botcomponentcollectionset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`bot_botcomponentcollectionid`, `botcomponentcollectionid`, `botid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponentcollection` | [bot](bot.md) | _n/a_ | `bot_botcomponentcollection` |

## Source

Generated from [bot_botcomponentcollection (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bot_botcomponentcollection')) on 2026-05-07.