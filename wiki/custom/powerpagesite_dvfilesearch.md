---
logical: "powerpagesite_dvfilesearch"
display: "powerpagesite_dvfilesearch"
entitySetName: "powerpagesite_dvfilesearchset"
primaryId: "powerpagesite_dvfilesearchid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerpagesite_dvfilesearch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesite_dvfilesearch` |
| Display name | powerpagesite_dvfilesearch |
| Schema name | `powerpagesite_dvfilesearch` |
| Entity set (Web API) | `powerpagesite_dvfilesearchset` |
| Primary id attribute | `powerpagesite_dvfilesearchid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagesite_dvfilesearchset?$select=&$top=10
GET /api/data/v9.2/powerpagesite_dvfilesearchset(<guid>)
POST /api/data/v9.2/powerpagesite_dvfilesearchset
PATCH /api/data/v9.2/powerpagesite_dvfilesearchset(<guid>)
DELETE /api/data/v9.2/powerpagesite_dvfilesearchset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `dvfilesearchid`, `ismanaged`, `overwritetime`, `powerpagesite_dvfilesearchid`, `powerpagesiteid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | [powerpagesite](powerpagesite.md) | _n/a_ | `powerpagesite_dvfilesearch` |

## Source

Generated from [powerpagesite_dvfilesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesite_dvfilesearch')) on 2026-05-07.