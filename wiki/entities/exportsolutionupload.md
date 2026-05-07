---
logical: "exportsolutionupload"
display: "ExportSolutionUpload"
entitySetName: "exportsolutionuploads"
primaryId: "exportsolutionuploadid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# ExportSolutionUpload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `exportsolutionupload` |
| Display name | ExportSolutionUpload |
| Display (plural) | ExportSolutionUpload |
| Schema name | `ExportSolutionUpload` |
| Entity set (Web API) | `exportsolutionuploads` |
| Primary id attribute | `exportsolutionuploadid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/exportsolutionuploads?$select=name&$top=10
GET /api/data/v9.2/exportsolutionuploads(<guid>)
POST /api/data/v9.2/exportsolutionuploads
PATCH /api/data/v9.2/exportsolutionuploads(<guid>)
DELETE /api/data/v9.2/exportsolutionuploads(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`AsyncOperationId`, `CommitID`, `ExportSolutionUploadId`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SolutionFileName`, `SolutionUniqueName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionFile`, `SolutionFile_Name`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_exportsolutionupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_ExportSolutionUpload_SolutionFile` | [fileattachment](fileattachment.md) | `solutionfile` | `solutionfile` |
| `lk_exportsolutionupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_exportsolutionupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_exportsolutionupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_exportsolutionupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_exportsolutionupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_exportsolutionupload` | [team](team.md) | `owningteam` | `owningteam` |
| `user_exportsolutionupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `exportsolutionupload_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportsolutionupload_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportsolutionupload_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `exportsolutionupload_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `exportsolutionupload_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `exportsolutionupload_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportsolutionupload_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `exportsolutionupload_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportsolutionupload_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [exportsolutionupload.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/exportsolutionupload.md) on 2026-05-06.