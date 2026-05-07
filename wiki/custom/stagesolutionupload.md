---
logical: "stagesolutionupload"
display: "StageSolutionUpload"
entitySetName: "stagesolutionuploads"
primaryId: "stagesolutionuploadid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **11** · Read-only: **11**

### Writable

`importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `solutionfilename`, `solutionuniquename`, `stagesolutionuploadid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionfile`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagesolutionupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagesolutionupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagesolutionupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagesolutionupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_stagesolutionupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_stagesolutionupload` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_stagesolutionupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_stagesolutionupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_StageSolutionUpload_SolutionFile` | [fileattachment](fileattachment.md) | `solutionfile` | `solutionfile` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagesolutionupload_SyncErrors` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `stagesolutionupload_DuplicateMatchingRecord` | [stagesolutionupload](stagesolutionupload.md) | `duplicaterecordid` | `duplicaterecordid_stagesolutionupload` |
| `stagesolutionupload_DuplicateBaseRecord` | [stagesolutionupload](stagesolutionupload.md) | `baserecordid` | `baserecordid_stagesolutionupload` |
| `stagesolutionupload_AsyncOperations` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `stagesolutionupload_MailboxTrackingFolders` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `stagesolutionupload_UserEntityInstanceDatas` | [stagesolutionupload](stagesolutionupload.md) | `objectid` | `objectid_stagesolutionupload` |
| `stagesolutionupload_ProcessSession` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `stagesolutionupload_BulkDeleteFailures` | [stagesolutionupload](stagesolutionupload.md) | `regardingobjectid` | `regardingobjectid_stagesolutionupload` |
| `stagesolutionupload_PrincipalObjectAttributeAccesses` | [stagesolutionupload](stagesolutionupload.md) | `objectid` | `objectid_stagesolutionupload` |
| `stagesolutionupload_FileAttachments` | [stagesolutionupload](stagesolutionupload.md) | `objectid` | `objectid_stagesolutionupload` |


## Source

Generated from [stagesolutionupload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagesolutionupload')) on 2026-05-07.