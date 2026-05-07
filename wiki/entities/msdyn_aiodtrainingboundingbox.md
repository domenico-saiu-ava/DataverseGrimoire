---
logical: "msdyn_aiodtrainingboundingbox"
display: "AI Object Detection Bounding Box"
entitySetName: "msdyn_aiodtrainingboundingboxes"
primaryId: "msdyn_aiodtrainingboundingboxid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Object Detection Bounding Box

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiodtrainingboundingbox` |
| Display name | AI Object Detection Bounding Box |
| Display (plural) | AI Object Detection Bounding Boxes |
| Schema name | `msdyn_AIOdTrainingBoundingBox` |
| Entity set (Web API) | `msdyn_aiodtrainingboundingboxes` |
| Primary id attribute | `msdyn_aiodtrainingboundingboxid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiodtrainingboundingboxes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiodtrainingboundingboxes(<guid>)
POST /api/data/v9.2/msdyn_aiodtrainingboundingboxes
PATCH /api/data/v9.2/msdyn_aiodtrainingboundingboxes(<guid>)
DELETE /api/data/v9.2/msdyn_aiodtrainingboundingboxes(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIOdLabelId`, `msdyn_AIOdTrainingBoundingBoxId`, `msdyn_AIOdTrainingImageId`, `msdyn_Height`, `msdyn_Left`, `msdyn_name`, `msdyn_Top`, `msdyn_Width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aiodtrainingboundingbox` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aiodtrainingboundingbox_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodtrainingboundingbox_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodtrainingboundingbox_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aiodlabel_msdyn_aiodtrainingboundingbox` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `msdyn_aiodlabelid` | `msdyn_AIOdLabelId` |
| `msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `msdyn_aiodtrainingimageid` | `msdyn_AIOdTrainingImageId` |
| `owner_msdyn_aiodtrainingboundingbox` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aiodtrainingboundingbox` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aiodtrainingboundingbox` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodtrainingboundingbox_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiodtrainingboundingbox_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aiodtrainingboundingbox.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiodtrainingboundingbox.md) on 2026-05-06.