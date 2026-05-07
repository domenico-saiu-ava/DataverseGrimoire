---
logical: "bot_botcomponentcollection"
display: "bot_botcomponentcollection"
entitySetName: "bot_botcomponentcollectionset"
primaryId: "bot_botcomponentcollectionid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`bot_botcomponentcollectionId`, `botcomponentcollectionid`, `botid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponentcollection` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [bot_botcomponentcollection.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bot_botcomponentcollection.md) on 2026-05-06.