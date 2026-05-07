---
logical: "canvasappextendedmetadata"
display: "CanvasApp Extended Metadata"
entitySetName: "canvasappextendedmetadata"
primaryId: "canvasappextendedmetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CanvasApp Extended Metadata

Holds extended metadata values for canvas apps that are not solution aware

## Identity

| Property | Value |
| --- | --- |
| Logical name | `canvasappextendedmetadata` |
| Display name | CanvasApp Extended Metadata |
| Display (plural) | CanvasApp Extended Metadatas |
| Schema name | `CanvasAppExtendedMetadata` |
| Entity set (Web API) | `canvasappextendedmetadata` |
| Primary id attribute | `canvasappextendedmetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/canvasappextendedmetadata?$select=name&$top=10
GET /api/data/v9.2/canvasappextendedmetadata(<guid>)
POST /api/data/v9.2/canvasappextendedmetadata
PATCH /api/data/v9.2/canvasappextendedmetadata(<guid>)
DELETE /api/data/v9.2/canvasappextendedmetadata(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`canvasappextendedmetadataid`, `canvasappid`, `canvasappuniqueid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_canvasappextendedmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_canvasappextendedmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_canvasappextendedmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_canvasappextendedmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_canvasappextendedmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_canvasappextendedmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_canvasappextendedmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_canvasappextendedmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `canvasappextendedmetadata` | [canvasapp](canvasapp.md) | `canvasappid` | `CanvasAppId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `canvasappextendedmetadata_SyncErrors` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `regardingobjectid` | `regardingobjectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_DuplicateMatchingRecord` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `duplicaterecordid` | `duplicaterecordid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_DuplicateBaseRecord` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `baserecordid` | `baserecordid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_AsyncOperations` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `regardingobjectid` | `regardingobjectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_MailboxTrackingFolders` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `regardingobjectid` | `regardingobjectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_UserEntityInstanceDatas` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `objectid` | `objectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_ProcessSession` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `regardingobjectid` | `regardingobjectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_BulkDeleteFailures` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `regardingobjectid` | `regardingobjectid_canvasappextendedmetadata` |
| `canvasappextendedmetadata_PrincipalObjectAttributeAccesses` | [canvasappextendedmetadata](canvasappextendedmetadata.md) | `objectid` | `objectid_canvasappextendedmetadata` |


## Source

Generated from [canvasappextendedmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='canvasappextendedmetadata')) on 2026-05-07.