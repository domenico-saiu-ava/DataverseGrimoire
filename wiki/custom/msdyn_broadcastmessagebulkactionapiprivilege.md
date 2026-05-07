---
logical: "msdyn_broadcastmessagebulkactionapiprivilege"
display: "msdyn_broadcastmessagebulkactionapiprivilege"
entitySetName: "msdyn_broadcastmessagebulkactionapiprivileges"
primaryId: "msdyn_broadcastmessagebulkactionapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_broadcastmessagebulkactionapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_broadcastmessagebulkactionapiprivilege` |
| Display name | msdyn_broadcastmessagebulkactionapiprivilege |
| Display (plural) | msdyn_broadcastmessagebulkactionapiprivileges |
| Schema name | `msdyn_broadcastmessagebulkactionapiprivilege` |
| Entity set (Web API) | `msdyn_broadcastmessagebulkactionapiprivileges` |
| Primary id attribute | `msdyn_broadcastmessagebulkactionapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges
PATCH /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_broadcastmessagebulkactionapiprivilegeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_broadcastmessagebulkactionapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_broadcastmessagebulkactionapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_broadcastmessagebulkactionapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_broadcastmessagebulkactionapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_broadcastmessagebulkactionapiprivilege_SyncErrors` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_AsyncOperations` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_MailboxTrackingFolders` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_UserEntityInstanceDatas` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `objectid` | `objectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_ProcessSession` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_BulkDeleteFailures` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_broadcastmessagebulkactionapiprivilege` |
| `msdyn_broadcastmessagebulkactionapiprivilege_PrincipalObjectAttributeAccesses` | [msdyn_broadcastmessagebulkactionapiprivilege](msdyn_broadcastmessagebulkactionapiprivilege.md) | `objectid` | `objectid_msdyn_broadcastmessagebulkactionapiprivilege` |


## Source

Generated from [msdyn_broadcastmessagebulkactionapiprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_broadcastmessagebulkactionapiprivilege')) on 2026-05-07.