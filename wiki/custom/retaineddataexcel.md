---
logical: "retaineddataexcel"
display: "RetainedData Excel"
entitySetName: "retaineddataexcels"
primaryId: "retaineddataexcelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **10** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `retaineddataexcelid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `excelcontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retaineddataexcel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retaineddataexcel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retaineddataexcel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retaineddataexcel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retaineddataexcel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retaineddataexcel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retaineddataexcel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retaineddataexcel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_retaineddataexcel_ExcelContent` | [fileattachment](fileattachment.md) | `excelcontent` | `excelcontent` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retaineddataexcel_SyncErrors` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retaineddataexcel_DuplicateMatchingRecord` | [retaineddataexcel](retaineddataexcel.md) | `duplicaterecordid` | `duplicaterecordid_retaineddataexcel` |
| `retaineddataexcel_DuplicateBaseRecord` | [retaineddataexcel](retaineddataexcel.md) | `baserecordid` | `baserecordid_retaineddataexcel` |
| `retaineddataexcel_AsyncOperations` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retaineddataexcel_MailboxTrackingFolders` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retaineddataexcel_UserEntityInstanceDatas` | [retaineddataexcel](retaineddataexcel.md) | `objectid` | `objectid_retaineddataexcel` |
| `retaineddataexcel_ProcessSession` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retaineddataexcel_BulkDeleteFailures` | [retaineddataexcel](retaineddataexcel.md) | `regardingobjectid` | `regardingobjectid_retaineddataexcel` |
| `retaineddataexcel_PrincipalObjectAttributeAccesses` | [retaineddataexcel](retaineddataexcel.md) | `objectid` | `objectid_retaineddataexcel` |
| `retaineddataexcel_FileAttachments` | [retaineddataexcel](retaineddataexcel.md) | `objectid` | `objectid_retaineddataexcel` |


## Source

Generated from [retaineddataexcel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retaineddataexcel')) on 2026-05-07.