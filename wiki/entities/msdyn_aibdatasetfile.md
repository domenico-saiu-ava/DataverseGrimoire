---
logical: "msdyn_aibdatasetfile"
display: "AI Builder Dataset File"
entitySetName: "msdyn_aibdatasetfiles"
primaryId: "msdyn_aibdatasetfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetFileId`, `msdyn_AIBDatasetId`, `msdyn_AIBFileId`, `msdyn_LastModifiedDate`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibdatasetfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aibdatasetfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBDatasetFile_msdyn_AIBDatas` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetid` | `msdyn_AIBDatasetId` |
| `msdyn_AIBDatasetFile_msdyn_AIBuilde` | [msdyn_aibfile](msdyn_aibfile.md) | `msdyn_aibfileid` | `msdyn_AIBFileId` |
| `owner_msdyn_aibdatasetfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibdatasetfile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibdatasetfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdatasetfile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetfile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetfile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibdatasetfile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibdatasetfile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetfile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibdatasetfile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_AIBFileAttachedData_msdyn_AIB` | _n/a_ | `msdyn_aibdatasetfileid` | _n/a_ |


## Source

Generated from [msdyn_aibdatasetfile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibdatasetfile.md) on 2026-05-06.