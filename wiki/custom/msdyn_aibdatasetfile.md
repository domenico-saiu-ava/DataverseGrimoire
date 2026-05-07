---
logical: "msdyn_aibdatasetfile"
display: "AI Builder Dataset File"
entitySetName: "msdyn_aibdatasetfiles"
primaryId: "msdyn_aibdatasetfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder Dataset File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibdatasetfile` |
| Display name | AI Builder Dataset File |
| Display (plural) | AI Builder Dataset Files |
| Schema name | `msdyn_AIBDatasetFile` |
| Entity set (Web API) | `msdyn_aibdatasetfiles` |
| Primary id attribute | `msdyn_aibdatasetfileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibdatasetfiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibdatasetfiles(<guid>)
POST /api/data/v9.2/msdyn_aibdatasetfiles
PATCH /api/data/v9.2/msdyn_aibdatasetfiles(<guid>)
DELETE /api/data/v9.2/msdyn_aibdatasetfiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aibdatasetfileid`, `msdyn_aibdatasetid`, `msdyn_aibfileid`, `msdyn_lastmodifieddate`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibdatasetfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibdatasetfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibdatasetfile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibdatasetfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibdatasetfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_AIBDatasetFile_msdyn_AIBDatas` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetid` | `msdyn_AIBDatasetId` |
| `msdyn_AIBDatasetFile_msdyn_AIBuilde` | [msdyn_aibfile](msdyn_aibfile.md) | `msdyn_aibfileid` | `msdyn_AIBFileId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdatasetfile_SyncErrors` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_DuplicateMatchingRecord` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_DuplicateBaseRecord` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_AsyncOperations` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_MailboxTrackingFolders` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_UserEntityInstanceDatas` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `objectid` | `objectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_ProcessSession` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_BulkDeleteFailures` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `objectid` | `objectid_msdyn_aibdatasetfile` |
| `msdyn_AIBFileAttachedData_msdyn_AIB` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `msdyn_aibdatasetfileid` | `msdyn_AIBDatasetFileId` |


## Source

Generated from [msdyn_aibdatasetfile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibdatasetfile')) on 2026-05-07.