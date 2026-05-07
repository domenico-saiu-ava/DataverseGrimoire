---
logical: "msdyn_capacityprofile"
display: "Profilo capacità"
entitySetName: "msdyn_capacityprofiles"
primaryId: "msdyn_capacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo capacità

Profili capacità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_capacityprofile` |
| Display name | Profilo capacità |
| Display (plural) | Profili capacità |
| Schema name | `msdyn_capacityprofile` |
| Entity set (Web API) | `msdyn_capacityprofiles` |
| Primary id attribute | `msdyn_capacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_capacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_capacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_capacityprofiles
PATCH /api/data/v9.2/msdyn_capacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_capacityprofiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_blockassignment`, `msdyn_capacityprofileid`, `msdyn_defaultmaxunits`, `msdyn_name`, `msdyn_resetduration`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_capacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_capacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_capacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_capacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_capacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_capacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_capacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_capacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofile_id` | `msdyn_capacityProfile_id` |
| `msdyn_msdyn_capacityprofile_msdyn_agentcapacityupdatehistory_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_capacityprofile_SyncErrors` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_DuplicateMatchingRecord` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_DuplicateBaseRecord` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `baserecordid` | `baserecordid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_AsyncOperations` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_MailboxTrackingFolders` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_UserEntityInstanceDatas` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `objectid` | `objectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_ProcessSession` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_BulkDeleteFailures` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityprofile` |
| `msdyn_capacityprofile_PrincipalObjectAttributeAccesses` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `objectid` | `objectid_msdyn_capacityprofile` |
| `msdyn_rulesetdependencymapping_msdyn_capacityprofile_msdyn_referencedpolymorphicentityid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile` |
| `msdyn_capacityprofile_msdyn_agentcapacityprofileunit_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |


## Source

Generated from [msdyn_capacityprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_capacityprofile')) on 2026-05-07.