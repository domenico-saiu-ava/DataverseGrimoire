---
logical: "retaineddataexcel"
display: "RetainedData Excel"
entitySetName: "retaineddataexcels"
primaryId: "retaineddataexcelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# RetainedData Excel

A Place holder entity to save excel file for each exportretaineddata custom api requests.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retaineddataexcel` |
| Display name | RetainedData Excel |
| Display (plural) | RetainedData Excels |
| Schema name | `retaineddataexcel` |
| Entity set (Web API) | `retaineddataexcels` |
| Primary id attribute | `retaineddataexcelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retaineddataexcels?$select=name&$top=10
GET /api/data/v9.2/retaineddataexcels(<guid>)
POST /api/data/v9.2/retaineddataexcels
PATCH /api/data/v9.2/retaineddataexcels(<guid>)
DELETE /api/data/v9.2/retaineddataexcels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `retaineddataexcelId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExcelContent`, `ExcelContent_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_retaineddataexcel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_retaineddataexcel_ExcelContent` | [fileattachment](fileattachment.md) | `excelcontent` | `excelcontent` |
| `lk_retaineddataexcel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retaineddataexcel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retaineddataexcel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retaineddataexcel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_retaineddataexcel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_retaineddataexcel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_retaineddataexcel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retaineddataexcel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retaineddataexcel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retaineddataexcel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `retaineddataexcel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `retaineddataexcel_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `retaineddataexcel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retaineddataexcel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retaineddataexcel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retaineddataexcel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retaineddataexcel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retaineddataexcel.md) on 2026-05-06.