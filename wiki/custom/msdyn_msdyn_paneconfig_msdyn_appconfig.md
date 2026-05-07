---
logical: "msdyn_msdyn_paneconfig_msdyn_appconfig"
display: "msdyn_msdyn_paneconfig_msdyn_appconfig"
entitySetName: "msdyn_msdyn_paneconfig_msdyn_appconfigset"
primaryId: "msdyn_msdyn_paneconfig_msdyn_appconfigid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_paneconfig_msdyn_appconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_paneconfig_msdyn_appconfig` |
| Display name | msdyn_msdyn_paneconfig_msdyn_appconfig |
| Schema name | `msdyn_msdyn_paneconfig_msdyn_appconfig` |
| Entity set (Web API) | `msdyn_msdyn_paneconfig_msdyn_appconfigset` |
| Primary id attribute | `msdyn_msdyn_paneconfig_msdyn_appconfigid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_paneconfig_msdyn_appconfigset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_paneconfig_msdyn_appconfigset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_paneconfig_msdyn_appconfigset
PATCH /api/data/v9.2/msdyn_msdyn_paneconfig_msdyn_appconfigset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_paneconfig_msdyn_appconfigset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_appconfigurationid`, `msdyn_msdyn_paneconfig_msdyn_appconfigid`, `msdyn_paneconfigurationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_paneconfig_msdyn_appconfig` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | _n/a_ | `msdyn_msdyn_paneconfig_msdyn_appconfig` |

## Source

Generated from [msdyn_msdyn_paneconfig_msdyn_appconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_paneconfig_msdyn_appconfig')) on 2026-05-07.