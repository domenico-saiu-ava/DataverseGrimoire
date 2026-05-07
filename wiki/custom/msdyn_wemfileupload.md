---
logical: "msdyn_wemfileupload"
display: "Caricamento file WEM"
entitySetName: "msdyn_wemfileuploads"
primaryId: "msdyn_wemfileuploadid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Caricamento file WEM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemfileupload` |
| Display name | Caricamento file WEM |
| Display (plural) | Caricamenti file WEM |
| Schema name | `msdyn_wemfileupload` |
| Entity set (Web API) | `msdyn_wemfileuploads` |
| Primary id attribute | `msdyn_wemfileuploadid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemfileuploads?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemfileuploads(<guid>)
POST /api/data/v9.2/msdyn_wemfileuploads
PATCH /api/data/v9.2/msdyn_wemfileuploads(<guid>)
DELETE /api/data/v9.2/msdyn_wemfileuploads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_filedatainterval`, `msdyn_filetype`, `msdyn_isvalid`, `msdyn_name`, `msdyn_wemfileuploadid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_file`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_msdyn_wemfileupload_msdyn_file` | [fileattachment](fileattachment.md) | `msdyn_file` | `msdyn_file` |
| `lk_msdyn_wemfileupload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemfileupload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemfileupload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemfileupload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemfileupload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemfileupload` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemfileupload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemfileupload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemforecast_msdyn_wemforecastfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_wemforecastfileupload` | `msdyn_wemforecastfileupload` |
| `msdyn_wemfileupload_FileAttachments` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `objectid` | `objectid_msdyn_wemfileupload` |
| `msdyn_capacityplanning_externalforecastfileidfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_externalforecastfileid` | `msdyn_externalforecastfileid` |
| `msdyn_capacityplanning_parameteroverridefileidfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_parameteroverridefileid` | `msdyn_parameteroverridefileid` |
| `msdyn_wemfileupload_SyncErrors` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_AsyncOperations` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_MailboxTrackingFolders` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_UserEntityInstanceDatas` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `objectid` | `objectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_ProcessSession` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_BulkDeleteFailures` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemfileupload` |
| `msdyn_wemfileupload_PrincipalObjectAttributeAccesses` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `objectid` | `objectid_msdyn_wemfileupload` |


## Source

Generated from [msdyn_wemfileupload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemfileupload')) on 2026-05-07.