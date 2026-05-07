---
logical: "msdyn_aiodimage"
display: "AI Object Detection Image"
entitySetName: "msdyn_aiodimages"
primaryId: "msdyn_aiodimageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **15**

### Writable

`EntityImage`, `ImportSequenceNumber`, `msdyn_AIOdImageId`, `msdyn_Checksum`, `msdyn_Description`, `msdyn_Metadata`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aiodimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aiodimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aiodimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aiodimage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aiodimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodimage_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiodimage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodimage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodimage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aiodimage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aiodimage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodimage_msdyn_aiodtrainingimage` | _n/a_ | `msdyn_aiodimageid` | _n/a_ |
| `msdyn_aiodimage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiodimage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodimage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aiodimage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiodimage.md) on 2026-05-06.