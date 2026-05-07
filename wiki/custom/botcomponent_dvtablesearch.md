---
logical: "botcomponent_dvtablesearch"
display: "botcomponent_dvtablesearch"
entitySetName: "botcomponent_dvtablesearchset"
primaryId: "botcomponent_dvtablesearchid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# botcomponent_dvtablesearch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_dvtablesearch` |
| Display name | botcomponent_dvtablesearch |
| Schema name | `botcomponent_dvtablesearch` |
| Entity set (Web API) | `botcomponent_dvtablesearchset` |
| Primary id attribute | `botcomponent_dvtablesearchid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_dvtablesearchset?$select=&$top=10
GET /api/data/v9.2/botcomponent_dvtablesearchset(<guid>)
POST /api/data/v9.2/botcomponent_dvtablesearchset
PATCH /api/data/v9.2/botcomponent_dvtablesearchset(<guid>)
DELETE /api/data/v9.2/botcomponent_dvtablesearchset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_dvtablesearchid`, `botcomponentid`, `componentidunique`, `componentstate`, `dvtablesearchid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_dvtablesearch` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_dvtablesearch` |

## Source

Generated from [botcomponent_dvtablesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_dvtablesearch')) on 2026-05-07.