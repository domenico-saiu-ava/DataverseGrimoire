---
logical: "msdyn_channelprofile_msdyn_ocautomateda"
display: "msdyn_channelprofile_msdyn_ocautomateda"
entitySetName: "msdyn_channelprofile_msdyn_ocautomatedaset"
primaryId: "msdyn_channelprofile_msdyn_ocautomatedaid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `msdyn_channelprofile_msdyn_ocautomatedaId`, `msdyn_channelprofileid`, `msdyn_ocautomatedactionruleid`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_channelprofile_msdyn_ocautomateda.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelprofile_msdyn_ocautomateda.md) on 2026-05-06.