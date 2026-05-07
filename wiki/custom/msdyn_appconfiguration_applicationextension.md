---
logical: "msdyn_appconfiguration_applicationextension"
display: "msdyn_appconfiguration_applicationextension"
entitySetName: "msdyn_appconfiguration_applicationextensionset"
primaryId: "msdyn_appconfiguration_applicationextensionid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_appconfiguration_applicationextension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appconfiguration_applicationextension` |
| Display name | msdyn_appconfiguration_applicationextension |
| Schema name | `msdyn_appconfiguration_applicationextension` |
| Entity set (Web API) | `msdyn_appconfiguration_applicationextensionset` |
| Primary id attribute | `msdyn_appconfiguration_applicationextensionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appconfiguration_applicationextensionset?$select=&$top=10
GET /api/data/v9.2/msdyn_appconfiguration_applicationextensionset(<guid>)
POST /api/data/v9.2/msdyn_appconfiguration_applicationextensionset
PATCH /api/data/v9.2/msdyn_appconfiguration_applicationextensionset(<guid>)
DELETE /api/data/v9.2/msdyn_appconfiguration_applicationextensionset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_appconfiguration_applicationextensionid`, `msdyn_appconfigurationid`, `msdyn_applicationextensionid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_applicationextension` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfiguration_applicationextension` |

## Source

Generated from [msdyn_appconfiguration_applicationextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appconfiguration_applicationextension')) on 2026-05-07.