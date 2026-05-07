---
logical: "botcomponent_botcomponent"
display: "botcomponent_botcomponent"
entitySetName: "botcomponent_botcomponentset"
primaryId: "botcomponent_botcomponentid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_botcomponentid`, `botcomponentidone`, `botcomponentidtwo`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_botcomponent` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_botcomponent` |

## Source

Generated from [botcomponent_botcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_botcomponent')) on 2026-05-07.