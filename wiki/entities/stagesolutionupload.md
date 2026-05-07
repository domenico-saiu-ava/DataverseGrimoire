---
logical: "stagesolutionupload"
display: "StageSolutionUpload"
entitySetName: "stagesolutionuploads"
primaryId: "stagesolutionuploadid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# StageSolutionUpload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagesolutionupload` |
| Display name | StageSolutionUpload |
| Display (plural) | StageSolutionUpload |
| Schema name | `StageSolutionUpload` |
| Entity set (Web API) | `stagesolutionuploads` |
| Primary id attribute | `stagesolutionuploadid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/stagesolutionuploads?$select=name&$top=10
GET /api/data/v9.2/stagesolutionuploads(<guid>)
POST /api/data/v9.2/stagesolutionuploads
PATCH /api/data/v9.2/stagesolutionuploads(<guid>)
DELETE /api/data/v9.2/stagesolutionuploads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SolutionFileName`, `SolutionUniqueName`, `StageSolutionUploadId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionFile`, `SolutionFile_Name`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_stagesolutionupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_StageSolutionUpload_SolutionFile` | [fileattachment](fileattachment.md) | `solutionfile` | `solutionfile` |
| `lk_stagesolutionupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagesolutionupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagesolutionupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagesolutionupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_stagesolutionupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_stagesolutionupload` | [team](team.md) | `owningteam` | `owningteam` |
| `user_stagesolutionupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagesolutionupload_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagesolutionupload_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagesolutionupload_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `stagesolutionupload_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `stagesolutionupload_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `stagesolutionupload_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagesolutionupload_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `stagesolutionupload_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagesolutionupload_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [stagesolutionupload.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/stagesolutionupload.md) on 2026-05-06.