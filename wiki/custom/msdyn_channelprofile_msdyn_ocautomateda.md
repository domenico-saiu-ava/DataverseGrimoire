---
logical: "msdyn_channelprofile_msdyn_ocautomateda"
display: "msdyn_channelprofile_msdyn_ocautomateda"
entitySetName: "msdyn_channelprofile_msdyn_ocautomatedaset"
primaryId: "msdyn_channelprofile_msdyn_ocautomatedaid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_channelprofile_msdyn_ocautomateda

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofile_msdyn_ocautomateda` |
| Display name | msdyn_channelprofile_msdyn_ocautomateda |
| Schema name | `msdyn_channelprofile_msdyn_ocautomateda` |
| Entity set (Web API) | `msdyn_channelprofile_msdyn_ocautomatedaset` |
| Primary id attribute | `msdyn_channelprofile_msdyn_ocautomatedaid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofile_msdyn_ocautomatedaset?$select=&$top=10
GET /api/data/v9.2/msdyn_channelprofile_msdyn_ocautomatedaset(<guid>)
POST /api/data/v9.2/msdyn_channelprofile_msdyn_ocautomatedaset
PATCH /api/data/v9.2/msdyn_channelprofile_msdyn_ocautomatedaset(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofile_msdyn_ocautomatedaset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_channelprofile_msdyn_ocautomatedaid`, `msdyn_channelprofileid`, `msdyn_ocautomatedactionruleid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` |

## Source

Generated from [msdyn_channelprofile_msdyn_ocautomateda (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofile_msdyn_ocautomateda')) on 2026-05-07.