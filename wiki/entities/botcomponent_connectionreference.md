---
logical: "botcomponent_connectionreference"
display: "botcomponent_connectionreference"
entitySetName: "botcomponent_connectionreferenceset"
primaryId: "botcomponent_connectionreferenceid"
tableType: "Standard"
ownership: "None"
---

# botcomponent_connectionreference

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_connectionreference` |
| Display name | botcomponent_connectionreference |
| Schema name | `botcomponent_connectionreference` |
| Entity set (Web API) | `botcomponent_connectionreferenceset` |
| Primary id attribute | `botcomponent_connectionreferenceid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_connectionreferenceset?$select=&$top=10
GET /api/data/v9.2/botcomponent_connectionreferenceset(<guid>)
POST /api/data/v9.2/botcomponent_connectionreferenceset
PATCH /api/data/v9.2/botcomponent_connectionreferenceset(<guid>)
DELETE /api/data/v9.2/botcomponent_connectionreferenceset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_connectionreferenceId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `connectionreferenceid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_connectionreference` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_connectionreference.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_connectionreference.md) on 2026-05-06.