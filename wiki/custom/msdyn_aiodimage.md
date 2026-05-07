---
logical: "msdyn_aiodimage"
display: "AI Object Detection Image"
entitySetName: "msdyn_aiodimages"
primaryId: "msdyn_aiodimageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Object Detection Image

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiodimage` |
| Display name | AI Object Detection Image |
| Display (plural) | AI Object Detection Images |
| Schema name | `msdyn_AIOdImage` |
| Entity set (Web API) | `msdyn_aiodimages` |
| Primary id attribute | `msdyn_aiodimageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiodimages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiodimages(<guid>)
POST /api/data/v9.2/msdyn_aiodimages
PATCH /api/data/v9.2/msdyn_aiodimages(<guid>)
DELETE /api/data/v9.2/msdyn_aiodimages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aiodimageid`, `msdyn_checksum`, `msdyn_description`, `msdyn_metadata`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `entityimageid`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiodimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aiodimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aiodimage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aiodimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aiodimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyn_AIOdImage` | [imagedescriptor](imagedescriptor.md) | `entityimageid` | `entityimageid_imagedescriptor` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodimage_SyncErrors` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodimage_DuplicateMatchingRecord` | [msdyn_aiodimage](msdyn_aiodimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodimage` |
| `msdyn_aiodimage_DuplicateBaseRecord` | [msdyn_aiodimage](msdyn_aiodimage.md) | `baserecordid` | `baserecordid_msdyn_aiodimage` |
| `msdyn_aiodimage_AsyncOperations` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodimage_MailboxTrackingFolders` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodimage_UserEntityInstanceDatas` | [msdyn_aiodimage](msdyn_aiodimage.md) | `objectid` | `objectid_msdyn_aiodimage` |
| `msdyn_aiodimage_ProcessSession` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodimage_BulkDeleteFailures` | [msdyn_aiodimage](msdyn_aiodimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodimage` |
| `msdyn_aiodimage_PrincipalObjectAttributeAccesses` | [msdyn_aiodimage](msdyn_aiodimage.md) | `objectid` | `objectid_msdyn_aiodimage` |
| `msdyn_aiodimage_Annotations` | [msdyn_aiodimage](msdyn_aiodimage.md) | `objectid` | `objectid_msdyn_aiodimage` |
| `msdyn_aiodimage_msdyn_aiodtrainingimage` | [msdyn_aiodimage](msdyn_aiodimage.md) | `msdyn_aiodimageid` | `msdyn_AIOdImageId` |


## Source

Generated from [msdyn_aiodimage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiodimage')) on 2026-05-07.