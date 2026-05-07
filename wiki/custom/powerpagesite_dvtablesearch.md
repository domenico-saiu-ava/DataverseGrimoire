---
logical: "powerpagesite_dvtablesearch"
display: "powerpagesite_dvtablesearch"
entitySetName: "powerpagesite_dvtablesearchset"
primaryId: "powerpagesite_dvtablesearchid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerpagesite_dvtablesearch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesite_dvtablesearch` |
| Display name | powerpagesite_dvtablesearch |
| Schema name | `powerpagesite_dvtablesearch` |
| Entity set (Web API) | `powerpagesite_dvtablesearchset` |
| Primary id attribute | `powerpagesite_dvtablesearchid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagesite_dvtablesearchset?$select=&$top=10
GET /api/data/v9.2/powerpagesite_dvtablesearchset(<guid>)
POST /api/data/v9.2/powerpagesite_dvtablesearchset
PATCH /api/data/v9.2/powerpagesite_dvtablesearchset(<guid>)
DELETE /api/data/v9.2/powerpagesite_dvtablesearchset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `dvtablesearchid`, `ismanaged`, `overwritetime`, `powerpagesite_dvtablesearchid`, `powerpagesiteid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvtablesearch` | [powerpagesite](powerpagesite.md) | _n/a_ | `powerpagesite_dvtablesearch` |

## Source

Generated from [powerpagesite_dvtablesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesite_dvtablesearch')) on 2026-05-07.