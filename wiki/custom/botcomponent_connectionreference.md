---
logical: "botcomponent_connectionreference"
display: "botcomponent_connectionreference"
entitySetName: "botcomponent_connectionreferenceset"
primaryId: "botcomponent_connectionreferenceid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_connectionreferenceid`, `botcomponentid`, `componentidunique`, `componentstate`, `connectionreferenceid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_connectionreference` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_connectionreference` |

## Source

Generated from [botcomponent_connectionreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_connectionreference')) on 2026-05-07.