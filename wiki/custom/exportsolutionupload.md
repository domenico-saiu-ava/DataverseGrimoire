---
logical: "exportsolutionupload"
display: "ExportSolutionUpload"
entitySetName: "exportsolutionuploads"
primaryId: "exportsolutionuploadid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **13** · Read-only: **11**

### Writable

`asyncoperationid`, `commitid`, `exportsolutionuploadid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `solutionfilename`, `solutionuniquename`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionfile`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_exportsolutionupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_exportsolutionupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_exportsolutionupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_exportsolutionupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_exportsolutionupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_exportsolutionupload` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_exportsolutionupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_exportsolutionupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_ExportSolutionUpload_SolutionFile` | [fileattachment](fileattachment.md) | `solutionfile` | `solutionfile` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `exportsolutionupload_SyncErrors` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `exportsolutionupload_DuplicateMatchingRecord` | [exportsolutionupload](exportsolutionupload.md) | `duplicaterecordid` | `duplicaterecordid_exportsolutionupload` |
| `exportsolutionupload_DuplicateBaseRecord` | [exportsolutionupload](exportsolutionupload.md) | `baserecordid` | `baserecordid_exportsolutionupload` |
| `exportsolutionupload_AsyncOperations` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `exportsolutionupload_MailboxTrackingFolders` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `exportsolutionupload_UserEntityInstanceDatas` | [exportsolutionupload](exportsolutionupload.md) | `objectid` | `objectid_exportsolutionupload` |
| `exportsolutionupload_ProcessSession` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `exportsolutionupload_BulkDeleteFailures` | [exportsolutionupload](exportsolutionupload.md) | `regardingobjectid` | `regardingobjectid_exportsolutionupload` |
| `exportsolutionupload_PrincipalObjectAttributeAccesses` | [exportsolutionupload](exportsolutionupload.md) | `objectid` | `objectid_exportsolutionupload` |
| `exportsolutionupload_FileAttachments` | [exportsolutionupload](exportsolutionupload.md) | `objectid` | `objectid_exportsolutionupload` |


## Source

Generated from [exportsolutionupload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='exportsolutionupload')) on 2026-05-07.