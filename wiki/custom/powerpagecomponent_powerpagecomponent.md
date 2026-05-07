---
logical: "powerpagecomponent_powerpagecomponent"
display: "powerpagecomponent_powerpagecomponent"
entitySetName: "powerpagecomponent_powerpagecomponentset"
primaryId: "powerpagecomponent_powerpagecomponentid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `powerpagecomponent_powerpagecomponentid`, `powerpagecomponentidone`, `powerpagecomponentidtwo`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_powerpagecomponent` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `powerpagecomponent_powerpagecomponent` |

## Source

Generated from [powerpagecomponent_powerpagecomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagecomponent_powerpagecomponent')) on 2026-05-07.