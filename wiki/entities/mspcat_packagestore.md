---
logical: "mspcat_packagestore"
display: "Package Submission Store"
entitySetName: "mspcat_packagestores"
primaryId: "mspcat_packagestoreid"
primaryName: "mspcat_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Package Submission Store

Manages submissions to the Catalog and provisioning

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspcat_packagestore` |
| Display name | Package Submission Store |
| Display (plural) | Package Submission Stores |
| Schema name | `mspcat_PackageStore` |
| Entity set (Web API) | `mspcat_packagestores` |
| Primary id attribute | `mspcat_packagestoreid` |
| Primary name attribute | `mspcat_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mspcat_packagestores?$select=mspcat_name&$top=10
GET /api/data/v9.2/mspcat_packagestores(<guid>)
POST /api/data/v9.2/mspcat_packagestores
PATCH /api/data/v9.2/mspcat_packagestores(<guid>)
DELETE /api/data/v9.2/mspcat_packagestores(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `mspcat_AsyncOperationId`, `mspcat_IntendedDeploymentType`, `mspcat_Name`, `mspcat_Operation`, `mspcat_PackageStoreId`, `mspcat_ProcessingMessage`, `mspcat_SolutionUniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `mspcat_PackageFile`, `mspcat_PackageFile_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mspcat_packagestore` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_mspcat_PackageStore_mspcat_PackageFile` | [fileattachment](fileattachment.md) | `mspcat_packagefile` | `mspcat_packagefile` |
| `lk_mspcat_packagestore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mspcat_packagestore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mspcat_packagestore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mspcat_packagestore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_mspcat_packagestore` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_mspcat_packagestore` | [team](team.md) | `owningteam` | `owningteam` |
| `user_mspcat_packagestore` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspcat_mspcat_catalogsubmissionfiles_PackageStor` | _n/a_ | `mspcat_packagestore` | _n/a_ |
| `mspcat_packagestore_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_packagestore_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_packagestore_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `mspcat_packagestore_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `mspcat_packagestore_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `mspcat_packagestore_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_packagestore_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mspcat_packagestore_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspcat_packagestore_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspcat_packagestore.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspcat_packagestore.md) on 2026-05-06.