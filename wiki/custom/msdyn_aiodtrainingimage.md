---
logical: "msdyn_aiodtrainingimage"
display: "AI Object Detection Image Mapping"
entitySetName: "msdyn_aiodtrainingimages"
primaryId: "msdyn_aiodtrainingimageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Object Detection Image Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiodtrainingimage` |
| Display name | AI Object Detection Image Mapping |
| Display (plural) | AI Object Detection Image Mappings |
| Schema name | `msdyn_AIOdTrainingImage` |
| Entity set (Web API) | `msdyn_aiodtrainingimages` |
| Primary id attribute | `msdyn_aiodtrainingimageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiodtrainingimages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiodtrainingimages(<guid>)
POST /api/data/v9.2/msdyn_aiodtrainingimages
PATCH /api/data/v9.2/msdyn_aiodtrainingimages(<guid>)
DELETE /api/data/v9.2/msdyn_aiodtrainingimages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aiconfigurationid`, `msdyn_aiodimageid`, `msdyn_aiodtrainingimageid`, `msdyn_lastmodifieddate`, `msdyn_name`, `msdyn_sourcetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiodtrainingimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodtrainingimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodtrainingimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodtrainingimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aiodtrainingimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aiodtrainingimage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aiodtrainingimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aiodtrainingimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aiconfiguration_msdyn_aiodtrainingimage` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_aiodimage_msdyn_aiodtrainingimage` | [msdyn_aiodimage](msdyn_aiodimage.md) | `msdyn_aiodimageid` | `msdyn_AIOdImageId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodtrainingimage_SyncErrors` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_DuplicateMatchingRecord` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_DuplicateBaseRecord` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `baserecordid` | `baserecordid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_AsyncOperations` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_MailboxTrackingFolders` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_UserEntityInstanceDatas` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `objectid` | `objectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_ProcessSession` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_BulkDeleteFailures` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `objectid` | `objectid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `msdyn_aiodtrainingimageid` | `msdyn_AIOdTrainingImageId` |


## Source

Generated from [msdyn_aiodtrainingimage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiodtrainingimage')) on 2026-05-07.