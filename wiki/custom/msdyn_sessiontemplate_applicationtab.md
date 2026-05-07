---
logical: "msdyn_sessiontemplate_applicationtab"
display: "msdyn_sessiontemplate_applicationtab"
entitySetName: "msdyn_sessiontemplate_applicationtabset"
primaryId: "msdyn_sessiontemplate_applicationtabid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_sessiontemplate_applicationtab

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessiontemplate_applicationtab` |
| Display name | msdyn_sessiontemplate_applicationtab |
| Schema name | `msdyn_sessiontemplate_applicationtab` |
| Entity set (Web API) | `msdyn_sessiontemplate_applicationtabset` |
| Primary id attribute | `msdyn_sessiontemplate_applicationtabid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessiontemplate_applicationtabset?$select=&$top=10
GET /api/data/v9.2/msdyn_sessiontemplate_applicationtabset(<guid>)
POST /api/data/v9.2/msdyn_sessiontemplate_applicationtabset
PATCH /api/data/v9.2/msdyn_sessiontemplate_applicationtabset(<guid>)
DELETE /api/data/v9.2/msdyn_sessiontemplate_applicationtabset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_applicationtabtemplateid`, `msdyn_sessiontemplate_applicationtabid`, `msdyn_sessiontemplateid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessiontemplate_applicationtab` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | _n/a_ | `msdyn_sessiontemplate_applicationtab` |

## Source

Generated from [msdyn_sessiontemplate_applicationtab (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessiontemplate_applicationtab')) on 2026-05-07.