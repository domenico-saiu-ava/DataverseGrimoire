---
logical: "flowmachineimageversion"
display: "Versione immagine del computer del flusso"
entitySetName: "flowmachineimageversions"
primaryId: "flowmachineimageversionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione immagine del computer del flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachineimageversion` |
| Display name | Versione immagine del computer del flusso |
| Display (plural) | Versioni immagini del computer del flusso |
| Schema name | `flowmachineimageversion` |
| Entity set (Web API) | `flowmachineimageversions` |
| Primary id attribute | `flowmachineimageversionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachineimageversions?$select=name&$top=10
GET /api/data/v9.2/flowmachineimageversions(<guid>)
POST /api/data/v9.2/flowmachineimageversions
PATCH /api/data/v9.2/flowmachineimageversions(<guid>)
DELETE /api/data/v9.2/flowmachineimageversions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **17**

### Writable

`flowmachineimage`, `flowmachineimageversionid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `provisioningerror`, `reference`, `sourcemachineid`, `statecode`, `statuscode`, `statuserrormessage`, `supportedscenario`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `version`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `generalizationlogs`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowmachineimageversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachineimageversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachineimageversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachineimageversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowmachineimageversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowmachineimageversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowmachineimageversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowmachineimageversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_flowmachineimageversion_generalizationlogs` | [fileattachment](fileattachment.md) | `generalizationlogs` | `generalizationlogs` |
| `flowmachineimage_flowmachineimageversion` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |
| `flowmachineimageversion_flowmachine` | [flowmachine](flowmachine.md) | `sourcemachineid` | `sourcemachineid_flowmachine` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachineimageversion_SyncErrors` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachineimageversion_DuplicateMatchingRecord` | [flowmachineimageversion](flowmachineimageversion.md) | `duplicaterecordid` | `duplicaterecordid_flowmachineimageversion` |
| `flowmachineimageversion_DuplicateBaseRecord` | [flowmachineimageversion](flowmachineimageversion.md) | `baserecordid` | `baserecordid_flowmachineimageversion` |
| `flowmachineimageversion_AsyncOperations` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachineimageversion_MailboxTrackingFolders` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachineimageversion_UserEntityInstanceDatas` | [flowmachineimageversion](flowmachineimageversion.md) | `objectid` | `objectid_flowmachineimageversion` |
| `flowmachineimageversion_ProcessSession` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachineimageversion_BulkDeleteFailures` | [flowmachineimageversion](flowmachineimageversion.md) | `regardingobjectid` | `regardingobjectid_flowmachineimageversion` |
| `flowmachineimageversion_PrincipalObjectAttributeAccesses` | [flowmachineimageversion](flowmachineimageversion.md) | `objectid` | `objectid_flowmachineimageversion` |
| `flowmachineimageversion_FileAttachments` | [flowmachineimageversion](flowmachineimageversion.md) | `objectid` | `objectid_flowmachineimageversion` |
| `flowmachine_flowmachineimageversion` | [flowmachineimageversion](flowmachineimageversion.md) | `flowmachineimageversionid` | `FlowMachineImageVersionId` |


## Source

Generated from [flowmachineimageversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowmachineimageversion')) on 2026-05-07.