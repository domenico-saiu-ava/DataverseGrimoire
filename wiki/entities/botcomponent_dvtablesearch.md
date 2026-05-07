---
logical: "botcomponent_dvtablesearch"
display: "botcomponent_dvtablesearch"
entitySetName: "botcomponent_dvtablesearchset"
primaryId: "botcomponent_dvtablesearchid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_dvtablesearchId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `dvtablesearchid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_dvtablesearch` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_dvtablesearch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_dvtablesearch.md) on 2026-05-06.