---
logical: "msdyn_aiodtrainingimage"
display: "AI Object Detection Image Mapping"
entitySetName: "msdyn_aiodtrainingimages"
primaryId: "msdyn_aiodtrainingimageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIConfigurationId`, `msdyn_AIOdImageId`, `msdyn_AIOdTrainingImageId`, `msdyn_LastModifiedDate`, `msdyn_name`, `msdyn_SourceType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aiodtrainingimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aiodtrainingimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodtrainingimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodtrainingimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodtrainingimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aiconfiguration_msdyn_aiodtrainingimage` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_aiodimage_msdyn_aiodtrainingimage` | [msdyn_aiodimage](msdyn_aiodimage.md) | `msdyn_aiodimageid` | `msdyn_AIOdImageId` |
| `owner_msdyn_aiodtrainingimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aiodtrainingimage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aiodtrainingimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodtrainingimage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingimage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingimage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aiodtrainingimage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aiodtrainingimage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox` | _n/a_ | `msdyn_aiodtrainingimageid` | _n/a_ |
| `msdyn_aiodtrainingimage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiodtrainingimage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingimage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aiodtrainingimage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiodtrainingimage.md) on 2026-05-06.