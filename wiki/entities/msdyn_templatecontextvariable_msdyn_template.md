---
logical: "msdyn_templatecontextvariable_msdyn_template"
display: "msdyn_templatecontextvariable_msdyn_template"
entitySetName: "msdyn_templatecontextvariable_msdyn_templateset"
primaryId: "msdyn_templatecontextvariable_msdyn_templateid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `msdyn_templatecontextvariable_msdyn_templateId`, `msdyn_templatecontextvariableid`, `msdyn_templaterulesetid`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_templatecontextvariable_msdyn_templateruleset_msdyn_templateruleset` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_templatecontextvariable_msdyn_template.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_templatecontextvariable_msdyn_template.md) on 2026-05-06.