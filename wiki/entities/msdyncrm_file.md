---
logical: "msdyncrm_file"
display: "File"
entitySetName: "msdyncrm_files"
primaryId: "msdyncrm_fileid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_file` |
| Display name | File |
| Display (plural) | Files |
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

Writable: **27** · Read-only: **23**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyncrm_Alttext`, `msdyncrm_BlobCdnUri`, `msdyncrm_BlobSize`, `msdyncrm_BlobUri`, `msdyncrm_category`, `msdyncrm_cmsid`, `msdyncrm_ContentType`, `msdyncrm_copyUrl`, `msdyncrm_fileId`, `msdyncrm_height`, `msdyncrm_mainimage`, `msdyncrm_name`, `msdyncrm_rethumbnail`, `msdyncrm_sastoken`, `msdyncrm_sastokenexpirationdate`, `msdyncrm_source`, `msdyncrm_thumbnail_url`, `msdyncrm_width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyncrm_filecontent`, `msdyncrm_filecontent_Name`, `msdyncrm_mainimage_Timestamp`, `msdyncrm_mainimage_URL`, `msdyncrm_mainimageId`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_file` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyncrm_file_msdyncrm_filecontent` | [fileattachment](fileattachment.md) | `msdyncrm_filecontent` | `msdyncrm_filecontent` |
| `lk_msdyncrm_file_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_file_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_file_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_file_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_file` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_file` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_file` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_file_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_file_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_file_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_file_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_file_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_file_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_file_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_file_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_file_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AITags_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_fileid](msdyncrm_fileid.md) | _n/a_ | _n/a_ |
| `msdyncrm_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_fileid](msdyncrm_fileid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyncrm_file.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_file.md) on 2026-05-06.