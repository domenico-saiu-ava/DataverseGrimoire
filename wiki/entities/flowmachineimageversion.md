---
logical: "flowmachineimageversion"
display: "Flow Machine Image Version"
entitySetName: "flowmachineimageversions"
primaryId: "flowmachineimageversionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Machine Image Version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachineimageversion` |
| Display name | Flow Machine Image Version |
| Display (plural) | Flow Machine Image Versions |
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

Writable: **18** · Read-only: **20**

### Writable

`flowmachineimage`, `flowmachineimageversionId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProvisioningError`, `reference`, `sourcemachineid`, `statecode`, `statuscode`, `statuserrormessage`, `SupportedScenario`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `generalizationlogs`, `generalizationlogs_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowmachineimageversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_flowmachineimageversion_generalizationlogs` | [fileattachment](fileattachment.md) | `generalizationlogs` | `generalizationlogs` |
| `flowmachineimage_flowmachineimageversion` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |
| `flowmachineimageversion_flowmachine` | [flowmachine](flowmachine.md) | `sourcemachineid` | `sourcemachineid_flowmachine` |
| `lk_flowmachineimageversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachineimageversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachineimageversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachineimageversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowmachineimageversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowmachineimageversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowmachineimageversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachine_flowmachineimageversion` | _n/a_ | `flowmachineimageversionid` | _n/a_ |
| `flowmachineimageversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimageversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimageversion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowmachineimageversion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowmachineimageversion_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `flowmachineimageversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimageversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowmachineimageversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimageversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowmachineimageversion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowmachineimageversion.md) on 2026-05-06.