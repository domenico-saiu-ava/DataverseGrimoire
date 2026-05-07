---
logical: "skilldvtablesearch"
display: "skilldvtablesearch"
entitySetName: "skilldvtablesearchset"
primaryId: "skilldvtablesearchid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# skilldvtablesearch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `skilldvtablesearch` |
| Display name | skilldvtablesearch |
| Schema name | `skilldvtablesearch` |
| Entity set (Web API) | `skilldvtablesearchset` |
| Primary id attribute | `skilldvtablesearchid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/skilldvtablesearchset?$select=&$top=10
GET /api/data/v9.2/skilldvtablesearchset(<guid>)
POST /api/data/v9.2/skilldvtablesearchset
PATCH /api/data/v9.2/skilldvtablesearchset(<guid>)
DELETE /api/data/v9.2/skilldvtablesearchset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `dvtablesearchid`, `ismanaged`, `overwritetime`, `skilldvtablesearchid`, `skillid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `skill_dvtablesearch_association` | [skill](skill.md) | _n/a_ | `skill_dvtablesearch_association` |

## Source

Generated from [skilldvtablesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='skilldvtablesearch')) on 2026-05-07.