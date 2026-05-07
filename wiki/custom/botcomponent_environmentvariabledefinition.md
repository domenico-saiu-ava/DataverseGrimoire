---
logical: "botcomponent_environmentvariabledefinition"
display: "botcomponent_environmentvariabledefinition"
entitySetName: "botcomponent_environmentvariabledefinitionset"
primaryId: "botcomponent_environmentvariabledefinitionid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_environmentvariabledefinitionid`, `botcomponentid`, `componentidunique`, `componentstate`, `environmentvariabledefinitionid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_environmentvariabledefinition` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_environmentvariabledefinition` |

## Source

Generated from [botcomponent_environmentvariabledefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_environmentvariabledefinition')) on 2026-05-07.