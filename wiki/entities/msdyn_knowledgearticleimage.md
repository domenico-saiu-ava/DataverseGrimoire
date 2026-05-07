---
logical: "msdyn_knowledgearticleimage"
display: "Knowledge Article Image"
entitySetName: "msdyn_knowledgearticleimages"
primaryId: "msdyn_knowledgearticleimageid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Article Image

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticleimage` |
| Display name | Knowledge Article Image |
| Display (plural) | Knowledge Article Images |
| Schema name | `msdyn_knowledgearticleimage` |
| Entity set (Web API) | `msdyn_knowledgearticleimages` |
| Primary id attribute | `msdyn_knowledgearticleimageid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgearticleimages?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_knowledgearticleimages(<guid>)
POST /api/data/v9.2/msdyn_knowledgearticleimages
PATCH /api/data/v9.2/msdyn_knowledgearticleimages(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgearticleimages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_FileName`, `msdyn_knowledgearticleimageId`, `msdyn_ParentEntityRecordID`, `msdyn_ParentKnowledgeArticleID`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_BlobFile`, `msdyn_BlobFile_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgearticleimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile` | [fileattachment](fileattachment.md) | `msdyn_blobfile` | `msdyn_blobfile` |
| `lk_msdyn_knowledgearticleimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgearticleimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgearticleimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgearticleimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgearticleimage_parentknowledgearticleid` | [knowledgearticle](knowledgearticle.md) | `msdyn_parentknowledgearticleid` | `msdyn_parentknowledgearticleid` |
| `owner_msdyn_knowledgearticleimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgearticleimage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgearticleimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticleimage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticleimage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticleimage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgearticleimage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgearticleimage_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgearticleimage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgearticleimage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticleimage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgearticleimage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgearticleimage.md) on 2026-05-06.