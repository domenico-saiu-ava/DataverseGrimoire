---
logical: "msdyn_templatecontextvariable_msdyn_template"
display: "msdyn_templatecontextvariable_msdyn_template"
entitySetName: "msdyn_templatecontextvariable_msdyn_templateset"
primaryId: "msdyn_templatecontextvariable_msdyn_templateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_templatecontextvariable_msdyn_template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_templatecontextvariable_msdyn_template` |
| Display name | msdyn_templatecontextvariable_msdyn_template |
| Schema name | `msdyn_templatecontextvariable_msdyn_template` |
| Entity set (Web API) | `msdyn_templatecontextvariable_msdyn_templateset` |
| Primary id attribute | `msdyn_templatecontextvariable_msdyn_templateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_templatecontextvariable_msdyn_templateset?$select=&$top=10
GET /api/data/v9.2/msdyn_templatecontextvariable_msdyn_templateset(<guid>)
POST /api/data/v9.2/msdyn_templatecontextvariable_msdyn_templateset
PATCH /api/data/v9.2/msdyn_templatecontextvariable_msdyn_templateset(<guid>)
DELETE /api/data/v9.2/msdyn_templatecontextvariable_msdyn_templateset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_templatecontextvariable_msdyn_templateid`, `msdyn_templatecontextvariableid`, `msdyn_templaterulesetid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | [msdyn_templateruleset](msdyn_templateruleset.md) | _n/a_ | `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` |

## Source

Generated from [msdyn_templatecontextvariable_msdyn_template (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_templatecontextvariable_msdyn_template')) on 2026-05-07.