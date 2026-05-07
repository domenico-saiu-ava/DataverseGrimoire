---
logical: "msdyn_bulkforcecloseapiprivilege"
display: "msdyn_bulkforcecloseapiprivilege"
entitySetName: "msdyn_bulkforcecloseapiprivileges"
primaryId: "msdyn_bulkforcecloseapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_bulkforcecloseapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bulkforcecloseapiprivilege` |
| Display name | msdyn_bulkforcecloseapiprivilege |
| Display (plural) | msdyn_bulkforcecloseapiprivileges |
| Schema name | `msdyn_bulkforcecloseapiprivilege` |
| Entity set (Web API) | `msdyn_bulkforcecloseapiprivileges` |
| Primary id attribute | `msdyn_bulkforcecloseapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bulkforcecloseapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_bulkforcecloseapiprivileges
PATCH /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_bulkforcecloseapiprivilegeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bulkforcecloseapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bulkforcecloseapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bulkforcecloseapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bulkforcecloseapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bulkforcecloseapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bulkforcecloseapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bulkforcecloseapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bulkforcecloseapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkforcecloseapiprivilege_SyncErrors` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_AsyncOperations` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_MailboxTrackingFolders` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_UserEntityInstanceDatas` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `objectid` | `objectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_ProcessSession` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_BulkDeleteFailures` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkforcecloseapiprivilege` |
| `msdyn_bulkforcecloseapiprivilege_PrincipalObjectAttributeAccesses` | [msdyn_bulkforcecloseapiprivilege](msdyn_bulkforcecloseapiprivilege.md) | `objectid` | `objectid_msdyn_bulkforcecloseapiprivilege` |


## Source

Generated from [msdyn_bulkforcecloseapiprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bulkforcecloseapiprivilege')) on 2026-05-07.