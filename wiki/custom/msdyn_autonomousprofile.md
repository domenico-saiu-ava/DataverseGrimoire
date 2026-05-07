---
logical: "msdyn_autonomousprofile"
display: "Autonomous Profile"
entitySetName: "msdyn_autonomousprofiles"
primaryId: "msdyn_autonomousprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Autonomous Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autonomousprofile` |
| Display name | Autonomous Profile |
| Display (plural) | Autonomous Profiles |
| Schema name | `msdyn_autonomousprofile` |
| Entity set (Web API) | `msdyn_autonomousprofiles` |
| Primary id attribute | `msdyn_autonomousprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autonomousprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
POST /api/data/v9.2/msdyn_autonomousprofiles
PATCH /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_autonomousprofileid`, `msdyn_name`, `msdyn_rolloutplanid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autonomousprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomousprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomousprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomousprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_autonomousprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_autonomousprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_autonomousprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_autonomousprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_rolloutplan_msdyn_autonomousprofile` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `msdyn_rolloutplanid` | `msdyn_rolloutplanid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomousprofile_SyncErrors` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_DuplicateMatchingRecord` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_DuplicateBaseRecord` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `baserecordid` | `baserecordid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_AsyncOperations` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_MailboxTrackingFolders` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_UserEntityInstanceDatas` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `objectid` | `objectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_ProcessSession` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_BulkDeleteFailures` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_PrincipalObjectAttributeAccesses` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `objectid` | `objectid_msdyn_autonomousprofile` |
| `msdyn_autonomousprofile_msdyn_autonomousagentmapping` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `msdyn_autonomousprofileid` | `msdyn_autonomousprofileid` |


## Source

Generated from [msdyn_autonomousprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autonomousprofile')) on 2026-05-07.