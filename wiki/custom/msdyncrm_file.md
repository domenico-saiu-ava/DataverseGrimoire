---
logical: "msdyncrm_file"
display: "File"
entitySetName: "msdyncrm_files"
primaryId: "msdyncrm_fileid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_file` |
| Display name | File |
| Display (plural) | File |
| Schema name | `msdyncrm_file` |
| Entity set (Web API) | `msdyncrm_files` |
| Primary id attribute | `msdyncrm_fileid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_files?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_files(<guid>)
POST /api/data/v9.2/msdyncrm_files
PATCH /api/data/v9.2/msdyncrm_files(<guid>)
DELETE /api/data/v9.2/msdyncrm_files(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyncrm_alttext`, `msdyncrm_blobcdnuri`, `msdyncrm_blobsize`, `msdyncrm_bloburi`, `msdyncrm_category`, `msdyncrm_cmsid`, `msdyncrm_contenttype`, `msdyncrm_copyurl`, `msdyncrm_fileid`, `msdyncrm_height`, `msdyncrm_name`, `msdyncrm_rethumbnail`, `msdyncrm_sastoken`, `msdyncrm_sastokenexpirationdate`, `msdyncrm_source`, `msdyncrm_thumbnail_url`, `msdyncrm_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyncrm_filecontent`, `msdyncrm_mainimageid`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_file_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_file_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_file_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_file_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_file` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_file` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_file` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_file` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyncrm_file_msdyncrm_mainimage` | [imagedescriptor](imagedescriptor.md) | `msdyncrm_mainimageid` | `msdyncrm_mainimageid_imagedescriptor` |
| `FileAttachment_msdyncrm_file_msdyncrm_filecontent` | [fileattachment](fileattachment.md) | `msdyncrm_filecontent` | `msdyncrm_filecontent` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_file_SyncErrors` | [msdyncrm_file](msdyncrm_file.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_file` |
| `msdyncrm_file_DuplicateMatchingRecord` | [msdyncrm_file](msdyncrm_file.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_file` |
| `msdyncrm_file_DuplicateBaseRecord` | [msdyncrm_file](msdyncrm_file.md) | `baserecordid` | `baserecordid_msdyncrm_file` |
| `msdyncrm_file_AsyncOperations` | [msdyncrm_file](msdyncrm_file.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_file` |
| `msdyncrm_file_MailboxTrackingFolders` | [msdyncrm_file](msdyncrm_file.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_file` |
| `msdyncrm_file_UserEntityInstanceDatas` | [msdyncrm_file](msdyncrm_file.md) | `objectid` | `objectid_msdyncrm_file` |
| `msdyncrm_file_ProcessSession` | [msdyncrm_file](msdyncrm_file.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_file` |
| `msdyncrm_file_BulkDeleteFailures` | [msdyncrm_file](msdyncrm_file.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_file` |
| `msdyncrm_file_PrincipalObjectAttributeAccesses` | [msdyncrm_file](msdyncrm_file.md) | `objectid` | `objectid_msdyncrm_file` |
| `msdyncrm_file_FileAttachments` | [msdyncrm_file](msdyncrm_file.md) | `objectid` | `objectid_msdyncrm_file` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_keyword](msdyncrm_keyword.md) | _n/a_ | `msdyncrm_msdyncrm_keyword_msdyncrm_file` |
| `AITags_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_keyword](msdyncrm_keyword.md) | _n/a_ | `AITags_msdyncrm_keyword_msdyncrm_file` |

## Source

Generated from [msdyncrm_file (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_file')) on 2026-05-07.