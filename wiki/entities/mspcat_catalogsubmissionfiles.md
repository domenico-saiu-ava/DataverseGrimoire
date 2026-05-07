---
logical: "mspcat_catalogsubmissionfiles"
display: "Catalog Submission Files"
entitySetName: "mspcat_catalogsubmissionfileses"
primaryId: "mspcat_catalogsubmissionfilesid"
primaryName: "mspcat_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Catalog Submission Files

Files associated with the package that will be used as part of the submission to the catalog system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspcat_catalogsubmissionfiles` |
| Display name | Catalog Submission Files |
| Display (plural) | Catalog Submission Files |
| Schema name | `mspcat_CatalogSubmissionFiles` |
| Entity set (Web API) | `mspcat_catalogsubmissionfileses` |
| Primary id attribute | `mspcat_catalogsubmissionfilesid` |
| Primary name attribute | `mspcat_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mspcat_catalogsubmissionfileses?$select=mspcat_name&$top=10
GET /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
POST /api/data/v9.2/mspcat_catalogsubmissionfileses
PATCH /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
DELETE /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `mspcat_CatalogSubmissionFilesId`, `mspcat_Description`, `mspcat_FileType`, `mspcat_ImageSize`, `mspcat_Name`, `mspcat_PackageStore`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `mspcat_File`, `mspcat_File_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mspcat_catalogsubmissionfiles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_mspcat_CatalogSubmissionFiles_mspcat_File` | [fileattachment](fileattachment.md) | `mspcat_file` | `mspcat_file` |
| `lk_mspcat_catalogsubmissionfiles_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mspcat_catalogsubmissionfiles_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mspcat_catalogsubmissionfiles_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mspcat_catalogsubmissionfiles_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mspcat_mspcat_catalogsubmissionfiles_PackageStor` | [mspcat_packagestore](mspcat_packagestore.md) | `mspcat_packagestore` | `mspcat_PackageStore` |
| `owner_mspcat_catalogsubmissionfiles` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_mspcat_catalogsubmissionfiles` | [team](team.md) | `owningteam` | `owningteam` |
| `user_mspcat_catalogsubmissionfiles` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspcat_catalogsubmissionfiles_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_catalogsubmissionfiles_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspcat_catalogsubmissionfiles.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspcat_catalogsubmissionfiles.md) on 2026-05-06.