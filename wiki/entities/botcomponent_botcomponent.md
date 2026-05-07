---
logical: "botcomponent_botcomponent"
display: "botcomponent_botcomponent"
entitySetName: "botcomponent_botcomponentset"
primaryId: "botcomponent_botcomponentid"
tableType: "Standard"
ownership: "None"
---

# botcomponent_botcomponent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_botcomponent` |
| Display name | botcomponent_botcomponent |
| Schema name | `botcomponent_botcomponent` |
| Entity set (Web API) | `botcomponent_botcomponentset` |
| Primary id attribute | `botcomponent_botcomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_botcomponentset?$select=&$top=10
GET /api/data/v9.2/botcomponent_botcomponentset(<guid>)
POST /api/data/v9.2/botcomponent_botcomponentset
PATCH /api/data/v9.2/botcomponent_botcomponentset(<guid>)
DELETE /api/data/v9.2/botcomponent_botcomponentset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_botcomponentId`, `botcomponentidOne`, `botcomponentidTwo`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_botcomponent` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_botcomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_botcomponent.md) on 2026-05-06.