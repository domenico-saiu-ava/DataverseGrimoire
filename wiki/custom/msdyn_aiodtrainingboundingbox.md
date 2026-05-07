---
logical: "msdyn_aiodtrainingboundingbox"
display: "AI Object Detection Bounding Box"
entitySetName: "msdyn_aiodtrainingboundingboxes"
primaryId: "msdyn_aiodtrainingboundingboxid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aiodlabelid`, `msdyn_aiodtrainingboundingboxid`, `msdyn_aiodtrainingimageid`, `msdyn_height`, `msdyn_left`, `msdyn_name`, `msdyn_top`, `msdyn_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiodtrainingboundingbox_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiodtrainingboundingbox_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiodtrainingboundingbox_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aiodtrainingboundingbox` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aiodtrainingboundingbox` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aiodtrainingboundingbox` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aiodtrainingboundingbox` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aiodlabel_msdyn_aiodtrainingboundingbox` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `msdyn_aiodlabelid` | `msdyn_AIOdLabelId` |
| `msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `msdyn_aiodtrainingimageid` | `msdyn_AIOdTrainingImageId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodtrainingboundingbox_SyncErrors` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_DuplicateBaseRecord` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `baserecordid` | `baserecordid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_AsyncOperations` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_MailboxTrackingFolders` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_UserEntityInstanceDatas` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `objectid` | `objectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_ProcessSession` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_BulkDeleteFailures` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_PrincipalObjectAttributeAccesses` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `objectid` | `objectid_msdyn_aiodtrainingboundingbox` |


## Source

Generated from [msdyn_aiodtrainingboundingbox (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiodtrainingboundingbox')) on 2026-05-07.