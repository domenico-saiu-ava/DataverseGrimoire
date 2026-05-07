---
logical: "exportedexcel"
display: "Exported Excel"
entitySetName: "exportedexcels"
primaryId: "exportedexcelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Exported Excel

A Place holder entity to save excel file for each exportretaineddata custom api requests.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `exportedexcel` |
| Display name | Exported Excel |
| Display (plural) | Exported Excels |
| Schema name | `exportedexcel` |
| Entity set (Web API) | `exportedexcels` |
| Primary id attribute | `exportedexcelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/exportedexcels?$select=name&$top=10
GET /api/data/v9.2/exportedexcels(<guid>)
POST /api/data/v9.2/exportedexcels
PATCH /api/data/v9.2/exportedexcels(<guid>)
DELETE /api/data/v9.2/exportedexcels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **20**

### Writable

`exportedexcelId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExcelContent`, `ExcelContent_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_exportedexcel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_exportedexcel_ExcelContent` | [fileattachment](fileattachment.md) | `excelcontent` | `excelcontent` |
| `lk_exportedexcel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_exportedexcel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_exportedexcel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_exportedexcel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_exportedexcel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_exportedexcel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_exportedexcel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `exportedexcel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportedexcel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportedexcel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `exportedexcel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `exportedexcel_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `exportedexcel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportedexcel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `exportedexcel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `exportedexcel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [exportedexcel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/exportedexcel.md) on 2026-05-06.