---
logical: "msdyn_channelprofile_msdyn_ocsystemmess"
display: "msdyn_channelprofile_msdyn_ocsystemmess"
entitySetName: "msdyn_channelprofile_msdyn_ocsystemmessset"
primaryId: "msdyn_channelprofile_msdyn_ocsystemmessid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_channelprofile_msdyn_ocsystemmess

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofile_msdyn_ocsystemmess` |
| Display name | msdyn_channelprofile_msdyn_ocsystemmess |
| Schema name | `msdyn_channelprofile_msdyn_ocsystemmess` |
| Entity set (Web API) | `msdyn_channelprofile_msdyn_ocsystemmessset` |
| Primary id attribute | `msdyn_channelprofile_msdyn_ocsystemmessid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofile_msdyn_ocsystemmessset?$select=&$top=10
GET /api/data/v9.2/msdyn_channelprofile_msdyn_ocsystemmessset(<guid>)
POST /api/data/v9.2/msdyn_channelprofile_msdyn_ocsystemmessset
PATCH /api/data/v9.2/msdyn_channelprofile_msdyn_ocsystemmessset(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofile_msdyn_ocsystemmessset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_channelprofile_msdyn_ocsystemmessid`, `msdyn_channelprofileid`, `msdyn_ocsystemmessageid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` |

## Source

Generated from [msdyn_channelprofile_msdyn_ocsystemmess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofile_msdyn_ocsystemmess')) on 2026-05-07.