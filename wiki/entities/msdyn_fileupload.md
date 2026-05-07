---
logical: "msdyn_fileupload"
display: "File Upload"
entitySetName: "msdyn_fileuploads"
primaryId: "msdyn_fileuploadid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
---

# File Upload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_fileupload` |
| Display name | File Upload |
| Display (plural) | File Uploads |
| Schema name | `msdyn_FileUpload` |
| Entity set (Web API) | `msdyn_fileuploads` |
| Primary id attribute | `msdyn_fileuploadid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_fileuploads?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_fileuploads(<guid>)
POST /api/data/v9.2/msdyn_fileuploads
PATCH /api/data/v9.2/msdyn_fileuploads(<guid>)
DELETE /api/data/v9.2/msdyn_fileuploads(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `msdyn_DmsRequestId`, `msdyn_FileName`, `msdyn_FileUploadId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_ErrorLog`, `msdyn_ErrorLog_Name`, `msdyn_FileContent`, `msdyn_FileContent_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_fileupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_FileUpload_msdyn_ErrorLog` | [fileattachment](fileattachment.md) | `msdyn_errorlog` | `msdyn_errorlog` |
| `FileAttachment_msdyn_FileUpload_msdyn_FileContent` | [fileattachment](fileattachment.md) | `msdyn_filecontent` | `msdyn_filecontent` |
| `lk_msdyn_fileupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_fileupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_fileupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_fileupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_fileupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_fileupload` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_fileupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_fileupload_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_fileupload_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_fileupload_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_fileupload_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_fileupload_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_fileupload_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_fileupload_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_fileupload_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_fileupload_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_fileupload.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_fileupload.md) on 2026-05-06.