---
logical: "msdyn_appconfig_msdyn_channelprovider"
display: "msdyn_appconfig_msdyn_channelprovider"
entitySetName: "msdyn_appconfig_msdyn_channelproviderset"
primaryId: "msdyn_appconfig_msdyn_channelproviderid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_appconfig_msdyn_channelprovider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appconfig_msdyn_channelprovider` |
| Display name | msdyn_appconfig_msdyn_channelprovider |
| Schema name | `msdyn_appconfig_msdyn_channelprovider` |
| Entity set (Web API) | `msdyn_appconfig_msdyn_channelproviderset` |
| Primary id attribute | `msdyn_appconfig_msdyn_channelproviderid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appconfig_msdyn_channelproviderset?$select=&$top=10
GET /api/data/v9.2/msdyn_appconfig_msdyn_channelproviderset(<guid>)
POST /api/data/v9.2/msdyn_appconfig_msdyn_channelproviderset
PATCH /api/data/v9.2/msdyn_appconfig_msdyn_channelproviderset(<guid>)
DELETE /api/data/v9.2/msdyn_appconfig_msdyn_channelproviderset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_appconfig_msdyn_channelproviderid`, `msdyn_appconfigurationid`, `msdyn_channelproviderid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfig_msdyn_channelprovider` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_appconfig_msdyn_channelprovider` |

## Source

Generated from [msdyn_appconfig_msdyn_channelprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appconfig_msdyn_channelprovider')) on 2026-05-07.