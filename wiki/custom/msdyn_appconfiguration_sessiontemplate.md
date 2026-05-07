---
logical: "msdyn_appconfiguration_sessiontemplate"
display: "msdyn_appconfiguration_sessiontemplate"
entitySetName: "msdyn_appconfiguration_sessiontemplateset"
primaryId: "msdyn_appconfiguration_sessiontemplateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_appconfiguration_sessiontemplate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appconfiguration_sessiontemplate` |
| Display name | msdyn_appconfiguration_sessiontemplate |
| Schema name | `msdyn_appconfiguration_sessiontemplate` |
| Entity set (Web API) | `msdyn_appconfiguration_sessiontemplateset` |
| Primary id attribute | `msdyn_appconfiguration_sessiontemplateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appconfiguration_sessiontemplateset?$select=&$top=10
GET /api/data/v9.2/msdyn_appconfiguration_sessiontemplateset(<guid>)
POST /api/data/v9.2/msdyn_appconfiguration_sessiontemplateset
PATCH /api/data/v9.2/msdyn_appconfiguration_sessiontemplateset(<guid>)
DELETE /api/data/v9.2/msdyn_appconfiguration_sessiontemplateset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_appconfiguration_sessiontemplateid`, `msdyn_appconfigurationid`, `msdyn_sessiontemplateid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_sessiontemplate` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfiguration_sessiontemplate` |

## Source

Generated from [msdyn_appconfiguration_sessiontemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appconfiguration_sessiontemplate')) on 2026-05-07.