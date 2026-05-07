---
logical: "flowmachineimage"
display: "Immagine del computer del flusso"
entitySetName: "flowmachineimages"
primaryId: "flowmachineimageid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Immagine del computer del flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachineimage` |
| Display name | Immagine del computer del flusso |
| Display (plural) | Immagini del computer del flusso |
| Schema name | `flowmachineimage` |
| Entity set (Web API) | `flowmachineimages` |
| Primary id attribute | `flowmachineimageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachineimages?$select=name&$top=10
GET /api/data/v9.2/flowmachineimages(<guid>)
POST /api/data/v9.2/flowmachineimages
PATCH /api/data/v9.2/flowmachineimages(<guid>)
DELETE /api/data/v9.2/flowmachineimages(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`deprecationdate`, `description`, `endofsupportdate`, `flowmachineimageid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `source`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowmachineimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachineimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachineimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachineimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowmachineimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowmachineimage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowmachineimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowmachineimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachineimage_SyncErrors` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimage_DuplicateMatchingRecord` | [flowmachineimage](flowmachineimage.md) | `duplicaterecordid` | `duplicaterecordid_flowmachineimage` |
| `flowmachineimage_DuplicateBaseRecord` | [flowmachineimage](flowmachineimage.md) | `baserecordid` | `baserecordid_flowmachineimage` |
| `flowmachineimage_AsyncOperations` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimage_MailboxTrackingFolders` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimage_UserEntityInstanceDatas` | [flowmachineimage](flowmachineimage.md) | `objectid` | `objectid_flowmachineimage` |
| `flowmachineimage_ProcessSession` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimage_BulkDeleteFailures` | [flowmachineimage](flowmachineimage.md) | `regardingobjectid` | `regardingobjectid_flowmachineimage` |
| `flowmachineimage_PrincipalObjectAttributeAccesses` | [flowmachineimage](flowmachineimage.md) | `objectid` | `objectid_flowmachineimage` |
| `flowmachineimage_flowmachineimageversion` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |
| `flowmachinegroup_flowmachineimage` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |


## Source

Generated from [flowmachineimage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowmachineimage')) on 2026-05-07.