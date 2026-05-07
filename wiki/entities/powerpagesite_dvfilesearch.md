---
logical: "powerpagesite_dvfilesearch"
display: "powerpagesite_dvfilesearch"
entitySetName: "powerpagesite_dvfilesearchset"
primaryId: "powerpagesite_dvfilesearchid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `dvfilesearchid`, `IsManaged`, `OverwriteTime`, `powerpagesite_dvfilesearchId`, `powerpagesiteid`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [powerpagesite_dvfilesearch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesite_dvfilesearch.md) on 2026-05-06.