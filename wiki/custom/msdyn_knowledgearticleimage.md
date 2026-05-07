---
logical: "msdyn_knowledgearticleimage"
display: "Immagine articolo Knowledge Base"
entitySetName: "msdyn_knowledgearticleimages"
primaryId: "msdyn_knowledgearticleimageid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Immagine articolo Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticleimage` |
| Display name | Immagine articolo Knowledge Base |
| Display (plural) | Immagini articolo Knowledge Base |
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

Writable: **11** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_filename`, `msdyn_knowledgearticleimageid`, `msdyn_parententityrecordid`, `msdyn_parentknowledgearticleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_blobfile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgearticleimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgearticleimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgearticleimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgearticleimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgearticleimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgearticleimage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgearticleimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgearticleimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile` | [fileattachment](fileattachment.md) | `msdyn_blobfile` | `msdyn_blobfile` |
| `msdyn_knowledgearticleimage_parentknowledgearticleid` | [knowledgearticle](knowledgearticle.md) | `msdyn_parentknowledgearticleid` | `msdyn_parentknowledgearticleid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticleimage_SyncErrors` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_DuplicateMatchingRecord` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_DuplicateBaseRecord` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `baserecordid` | `baserecordid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_AsyncOperations` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_MailboxTrackingFolders` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_UserEntityInstanceDatas` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `objectid` | `objectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_ProcessSession` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_BulkDeleteFailures` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `objectid` | `objectid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_FileAttachments` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `objectid` | `objectid_msdyn_knowledgearticleimage` |


## Source

Generated from [msdyn_knowledgearticleimage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgearticleimage')) on 2026-05-07.