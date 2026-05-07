---
logical: "msdyn_notifyagentbulkactionapiprivilege"
display: "msdyn_notifyagentbulkactionapiprivilege"
entitySetName: "msdyn_notifyagentbulkactionapiprivileges"
primaryId: "msdyn_notifyagentbulkactionapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_notifyagentbulkactionapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notifyagentbulkactionapiprivilege` |
| Display name | msdyn_notifyagentbulkactionapiprivilege |
| Display (plural) | msdyn_notifyagentbulkactionapiprivileges |
| Schema name | `msdyn_notifyagentbulkactionapiprivilege` |
| Entity set (Web API) | `msdyn_notifyagentbulkactionapiprivileges` |
| Primary id attribute | `msdyn_notifyagentbulkactionapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges
PATCH /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_notifyagentbulkactionapiprivilegeid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_notifyagentbulkactionapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_notifyagentbulkactionapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_notifyagentbulkactionapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_notifyagentbulkactionapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_notifyagentbulkactionapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notifyagentbulkactionapiprivilege_SyncErrors` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_AsyncOperations` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_MailboxTrackingFolders` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_UserEntityInstanceDatas` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `objectid` | `objectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_ProcessSession` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_BulkDeleteFailures` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_notifyagentbulkactionapiprivilege` |
| `msdyn_notifyagentbulkactionapiprivilege_PrincipalObjectAttributeAccesses` | [msdyn_notifyagentbulkactionapiprivilege](msdyn_notifyagentbulkactionapiprivilege.md) | `objectid` | `objectid_msdyn_notifyagentbulkactionapiprivilege` |


## Source

Generated from [msdyn_notifyagentbulkactionapiprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_notifyagentbulkactionapiprivilege')) on 2026-05-07.