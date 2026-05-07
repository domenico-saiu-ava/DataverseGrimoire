---
logical: "powerpagesite_dvtablesearch"
display: "powerpagesite_dvtablesearch"
entitySetName: "powerpagesite_dvtablesearchset"
primaryId: "powerpagesite_dvtablesearchid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `dvtablesearchid`, `IsManaged`, `OverwriteTime`, `powerpagesite_dvtablesearchId`, `powerpagesiteid`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvtablesearch` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [powerpagesite_dvtablesearch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesite_dvtablesearch.md) on 2026-05-06.