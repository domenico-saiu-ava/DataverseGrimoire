---
logical: "msdyn_aibfile"
display: "AI Builder File"
entitySetName: "msdyn_aibfiles"
primaryId: "msdyn_aibfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Builder File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibfile` |
| Display name | AI Builder File |
| Display (plural) | AI Builder Files |
| Schema name | `msdyn_AIBFile` |
| Entity set (Web API) | `msdyn_aibfiles` |
| Primary id attribute | `msdyn_aibfileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibfiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibfiles(<guid>)
POST /api/data/v9.2/msdyn_aibfiles
PATCH /api/data/v9.2/msdyn_aibfiles(<guid>)
DELETE /api/data/v9.2/msdyn_aibfiles(<guid>)
```

## Attributes

Writable: **16** · Read-only: **17**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetsContainerId`, `msdyn_AIBFileId`, `msdyn_Checksum`, `msdyn_Image`, `msdyn_ImportMetadata`, `msdyn_MimeType`, `msdyn_Name`, `msdyn_Size`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_File`, `msdyn_File_Name`, `msdyn_Image_Timestamp`, `msdyn_Image_URL`, `msdyn_ImageId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIBFile_msdyn_File` | [fileattachment](fileattachment.md) | `msdyn_file` | `msdyn_file` |
| `lk_msdyn_aibfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBFile_msdyn_AIBDatasetsCont` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |
| `owner_msdyn_aibfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibfile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_AIBDatasetFile_msdyn_AIBuilde` | _n/a_ | `msdyn_aibfileid` | _n/a_ |
| `msdyn_aibfile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibfile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibfile_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibfile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibfile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aibfile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibfile.md) on 2026-05-06.