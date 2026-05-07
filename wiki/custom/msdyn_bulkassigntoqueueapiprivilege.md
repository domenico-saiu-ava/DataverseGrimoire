---
logical: "msdyn_bulkassigntoqueueapiprivilege"
display: "msdyn_bulkassigntoqueueapiprivilege"
entitySetName: "msdyn_bulkassigntoqueueapiprivileges"
primaryId: "msdyn_bulkassigntoqueueapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_bulkassigntoqueueapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bulkassigntoqueueapiprivilege` |
| Display name | msdyn_bulkassigntoqueueapiprivilege |
| Display (plural) | msdyn_bulkassigntoqueueapiprivileges |
| Schema name | `msdyn_bulkassigntoqueueapiprivilege` |
| Entity set (Web API) | `msdyn_bulkassigntoqueueapiprivileges` |
| Primary id attribute | `msdyn_bulkassigntoqueueapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges
PATCH /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_bulkassigntoqueueapiprivilegeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bulkassigntoqueueapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bulkassigntoqueueapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bulkassigntoqueueapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bulkassigntoqueueapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bulkassigntoqueueapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkassigntoqueueapiprivilege_SyncErrors` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_AsyncOperations` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_MailboxTrackingFolders` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_UserEntityInstanceDatas` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `objectid` | `objectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_ProcessSession` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_BulkDeleteFailures` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkassigntoqueueapiprivilege` |
| `msdyn_bulkassigntoqueueapiprivilege_PrincipalObjectAttributeAccesses` | [msdyn_bulkassigntoqueueapiprivilege](msdyn_bulkassigntoqueueapiprivilege.md) | `objectid` | `objectid_msdyn_bulkassigntoqueueapiprivilege` |


## Source

Generated from [msdyn_bulkassigntoqueueapiprivilege (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bulkassigntoqueueapiprivilege')) on 2026-05-07.