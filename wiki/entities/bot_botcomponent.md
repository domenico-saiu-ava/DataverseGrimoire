---
logical: "bot_botcomponent"
display: "bot_botcomponent"
entitySetName: "bot_botcomponentset"
primaryId: "bot_botcomponentid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`bot_botcomponentId`, `botcomponentid`, `botid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [bot_botcomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bot_botcomponent.md) on 2026-05-06.