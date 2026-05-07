---
logical: "flowmachineimage"
display: "Flow Machine Image"
entitySetName: "flowmachineimages"
primaryId: "flowmachineimageid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Machine Image

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachineimage` |
| Display name | Flow Machine Image |
| Display (plural) | Flow Machine Images |
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

Writable: **15** · Read-only: **18**

### Writable

`DeprecationDate`, `description`, `EndOfSupportDate`, `flowmachineimageId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `source`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowmachineimage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_flowmachineimage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachineimage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachineimage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachineimage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowmachineimage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowmachineimage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowmachineimage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachinegroup_flowmachineimage` | _n/a_ | `flowmachineimage` | _n/a_ |
| `flowmachineimage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowmachineimage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowmachineimage_flowmachineimageversion` | _n/a_ | `flowmachineimage` | _n/a_ |
| `flowmachineimage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowmachineimage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowmachineimage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowmachineimage.md) on 2026-05-06.