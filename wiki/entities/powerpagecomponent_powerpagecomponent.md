---
logical: "powerpagecomponent_powerpagecomponent"
display: "powerpagecomponent_powerpagecomponent"
entitySetName: "powerpagecomponent_powerpagecomponentset"
primaryId: "powerpagecomponent_powerpagecomponentid"
tableType: "Standard"
ownership: "None"
---

# powerpagecomponent_powerpagecomponent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent_powerpagecomponent` |
| Display name | powerpagecomponent_powerpagecomponent |
| Schema name | `powerpagecomponent_powerpagecomponent` |
| Entity set (Web API) | `powerpagecomponent_powerpagecomponentset` |
| Primary id attribute | `powerpagecomponent_powerpagecomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagecomponent_powerpagecomponentset?$select=&$top=10
GET /api/data/v9.2/powerpagecomponent_powerpagecomponentset(<guid>)
POST /api/data/v9.2/powerpagecomponent_powerpagecomponentset
PATCH /api/data/v9.2/powerpagecomponent_powerpagecomponentset(<guid>)
DELETE /api/data/v9.2/powerpagecomponent_powerpagecomponentset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `powerpagecomponent_powerpagecomponentId`, `powerpagecomponentidOne`, `powerpagecomponentidTwo`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_powerpagecomponent` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [powerpagecomponent_powerpagecomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagecomponent_powerpagecomponent.md) on 2026-05-06.