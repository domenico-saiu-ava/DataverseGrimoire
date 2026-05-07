---
logical: "msdyn_capacitywrapuptime"
display: "Tempo di riepilogo capacità"
entitySetName: "msdyn_capacitywrapuptimes"
primaryId: "msdyn_capacitywrapuptimeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tempo di riepilogo capacità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_capacitywrapuptime` |
| Display name | Tempo di riepilogo capacità |
| Display (plural) | Tempi di riepilogo capacità |
| Schema name | `msdyn_capacitywrapuptime` |
| Entity set (Web API) | `msdyn_capacitywrapuptimes` |
| Primary id attribute | `msdyn_capacitywrapuptimeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_capacitywrapuptimes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_capacitywrapuptimes(<guid>)
POST /api/data/v9.2/msdyn_capacitywrapuptimes
PATCH /api/data/v9.2/msdyn_capacitywrapuptimes(<guid>)
DELETE /api/data/v9.2/msdyn_capacitywrapuptimes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_blockcapacityforwrapupinmin`, `msdyn_blockcapacityforwrapupinseconds`, `msdyn_blockcapacityforwrapuptype`, `msdyn_capacitywrapuptimeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_capacitywrapuptime_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_capacitywrapuptime_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_capacitywrapuptime_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_capacitywrapuptime_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_capacitywrapuptime` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_capacitywrapuptime` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_capacitywrapuptime` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_capacitywrapuptime` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_capacitywrapuptime_SyncErrors` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_AsyncOperations` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_MailboxTrackingFolders` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_UserEntityInstanceDatas` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `objectid` | `objectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_ProcessSession` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_BulkDeleteFailures` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacitywrapuptime` |
| `msdyn_capacitywrapuptime_PrincipalObjectAttributeAccesses` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `objectid` | `objectid_msdyn_capacitywrapuptime` |
| `msdyn_channelprofile_msdyn_capacitywrapuptimeid_msdyn_capacitywrapuptime` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `msdyn_capacitywrapuptimeid` | `msdyn_capacitywrapuptimeid` |


## Source

Generated from [msdyn_capacitywrapuptime (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_capacitywrapuptime')) on 2026-05-07.