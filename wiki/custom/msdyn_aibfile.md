---
logical: "msdyn_aibfile"
display: "AI Builder File"
entitySetName: "msdyn_aibfiles"
primaryId: "msdyn_aibfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibfile` |
| Display name | AI Builder File |
| Display (plural) | AI Builder Files |
| Schema name | `msdyn_AIBFile` |
| Entity set (Web API) | `msdyn_aibfiles` |
| Primary id attribute | `msdyn_aibfileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibfiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibfiles(<guid>)
POST /api/data/v9.2/msdyn_aibfiles
PATCH /api/data/v9.2/msdyn_aibfiles(<guid>)
DELETE /api/data/v9.2/msdyn_aibfiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_aibdatasetscontainerid`, `msdyn_aibfileid`, `msdyn_checksum`, `msdyn_importmetadata`, `msdyn_mimetype`, `msdyn_name`, `msdyn_size`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_file`, `msdyn_imageid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibfile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIBFile_msdyn_File` | [fileattachment](fileattachment.md) | `msdyn_file` | `msdyn_file` |
| `ImageDescriptor_msdyn_AIBFile_msdyn_Image` | [imagedescriptor](imagedescriptor.md) | `msdyn_imageid` | `msdyn_imageid_imagedescriptor` |
| `msdyn_AIBFile_msdyn_AIBDatasetsCont` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibfile_SyncErrors` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfile_DuplicateMatchingRecord` | [msdyn_aibfile](msdyn_aibfile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfile` |
| `msdyn_aibfile_DuplicateBaseRecord` | [msdyn_aibfile](msdyn_aibfile.md) | `baserecordid` | `baserecordid_msdyn_aibfile` |
| `msdyn_aibfile_AsyncOperations` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfile_MailboxTrackingFolders` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfile_UserEntityInstanceDatas` | [msdyn_aibfile](msdyn_aibfile.md) | `objectid` | `objectid_msdyn_aibfile` |
| `msdyn_aibfile_ProcessSession` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfile_BulkDeleteFailures` | [msdyn_aibfile](msdyn_aibfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfile` |
| `msdyn_aibfile_PrincipalObjectAttributeAccesses` | [msdyn_aibfile](msdyn_aibfile.md) | `objectid` | `objectid_msdyn_aibfile` |
| `msdyn_aibfile_FileAttachments` | [msdyn_aibfile](msdyn_aibfile.md) | `objectid` | `objectid_msdyn_aibfile` |
| `msdyn_AIBDatasetFile_msdyn_AIBuilde` | [msdyn_aibfile](msdyn_aibfile.md) | `msdyn_aibfileid` | `msdyn_AIBFileId` |


## Source

Generated from [msdyn_aibfile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibfile')) on 2026-05-07.