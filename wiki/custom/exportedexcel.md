---
logical: "exportedexcel"
display: "File Excel esportato"
entitySetName: "exportedexcels"
primaryId: "exportedexcelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File Excel esportato

Entitò segnaposto per salvare il file di Excel per ogni richiesta API exportretaineddata personalizzata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `exportedexcel` |
| Display name | File Excel esportato |
| Display (plural) | File Excel esportati |
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

Writable: **10** · Read-only: **17**

### Writable

`exportedexcelid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `excelcontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_exportedexcel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_exportedexcel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_exportedexcel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_exportedexcel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_exportedexcel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_exportedexcel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_exportedexcel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_exportedexcel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_exportedexcel_ExcelContent` | [fileattachment](fileattachment.md) | `excelcontent` | `excelcontent` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `exportedexcel_SyncErrors` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportedexcel_DuplicateMatchingRecord` | [exportedexcel](exportedexcel.md) | `duplicaterecordid` | `duplicaterecordid_exportedexcel` |
| `exportedexcel_DuplicateBaseRecord` | [exportedexcel](exportedexcel.md) | `baserecordid` | `baserecordid_exportedexcel` |
| `exportedexcel_AsyncOperations` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportedexcel_MailboxTrackingFolders` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportedexcel_UserEntityInstanceDatas` | [exportedexcel](exportedexcel.md) | `objectid` | `objectid_exportedexcel` |
| `exportedexcel_ProcessSession` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportedexcel_BulkDeleteFailures` | [exportedexcel](exportedexcel.md) | `regardingobjectid` | `regardingobjectid_exportedexcel` |
| `exportedexcel_PrincipalObjectAttributeAccesses` | [exportedexcel](exportedexcel.md) | `objectid` | `objectid_exportedexcel` |
| `exportedexcel_FileAttachments` | [exportedexcel](exportedexcel.md) | `objectid` | `objectid_exportedexcel` |


## Source

Generated from [exportedexcel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='exportedexcel')) on 2026-05-07.