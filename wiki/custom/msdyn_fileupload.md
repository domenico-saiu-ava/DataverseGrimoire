---
logical: "msdyn_fileupload"
display: "File Upload"
entitySetName: "msdyn_fileuploads"
primaryId: "msdyn_fileuploadid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File Upload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_fileupload` |
| Display name | File Upload |
| Display (plural) | File Uploads |
| Schema name | `msdyn_FileUpload` |
| Entity set (Web API) | `msdyn_fileuploads` |
| Primary id attribute | `msdyn_fileuploadid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_fileuploads?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_fileuploads(<guid>)
POST /api/data/v9.2/msdyn_fileuploads
PATCH /api/data/v9.2/msdyn_fileuploads(<guid>)
DELETE /api/data/v9.2/msdyn_fileuploads(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_dmsrequestid`, `msdyn_filename`, `msdyn_fileuploadid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_errorlog`, `msdyn_filecontent`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_fileupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_fileupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_fileupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_fileupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_fileupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_fileupload` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_fileupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_fileupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_FileUpload_msdyn_FileContent` | [fileattachment](fileattachment.md) | `msdyn_filecontent` | `msdyn_filecontent` |
| `FileAttachment_msdyn_FileUpload_msdyn_ErrorLog` | [fileattachment](fileattachment.md) | `msdyn_errorlog` | `msdyn_errorlog` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_fileupload_SyncErrors` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_fileupload_DuplicateMatchingRecord` | [msdyn_fileupload](msdyn_fileupload.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_fileupload` |
| `msdyn_fileupload_DuplicateBaseRecord` | [msdyn_fileupload](msdyn_fileupload.md) | `baserecordid` | `baserecordid_msdyn_fileupload` |
| `msdyn_fileupload_AsyncOperations` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_fileupload_MailboxTrackingFolders` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_fileupload_UserEntityInstanceDatas` | [msdyn_fileupload](msdyn_fileupload.md) | `objectid` | `objectid_msdyn_fileupload` |
| `msdyn_fileupload_ProcessSession` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_fileupload_BulkDeleteFailures` | [msdyn_fileupload](msdyn_fileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_fileupload` |
| `msdyn_fileupload_PrincipalObjectAttributeAccesses` | [msdyn_fileupload](msdyn_fileupload.md) | `objectid` | `objectid_msdyn_fileupload` |
| `msdyn_fileupload_FileAttachments` | [msdyn_fileupload](msdyn_fileupload.md) | `objectid` | `objectid_msdyn_fileupload` |


## Source

Generated from [msdyn_fileupload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_fileupload')) on 2026-05-07.