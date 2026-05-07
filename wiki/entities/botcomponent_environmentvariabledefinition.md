---
logical: "botcomponent_environmentvariabledefinition"
display: "botcomponent_environmentvariabledefinition"
entitySetName: "botcomponent_environmentvariabledefinitionset"
primaryId: "botcomponent_environmentvariabledefinitionid"
tableType: "Standard"
ownership: "None"
---

# botcomponent_environmentvariabledefinition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_environmentvariabledefinition` |
| Display name | botcomponent_environmentvariabledefinition |
| Schema name | `botcomponent_environmentvariabledefinition` |
| Entity set (Web API) | `botcomponent_environmentvariabledefinitionset` |
| Primary id attribute | `botcomponent_environmentvariabledefinitionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_environmentvariabledefinitionset?$select=&$top=10
GET /api/data/v9.2/botcomponent_environmentvariabledefinitionset(<guid>)
POST /api/data/v9.2/botcomponent_environmentvariabledefinitionset
PATCH /api/data/v9.2/botcomponent_environmentvariabledefinitionset(<guid>)
DELETE /api/data/v9.2/botcomponent_environmentvariabledefinitionset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_environmentvariabledefinitionId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `environmentvariabledefinitionid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_environmentvariabledefinition` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_environmentvariabledefinition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_environmentvariabledefinition.md) on 2026-05-06.