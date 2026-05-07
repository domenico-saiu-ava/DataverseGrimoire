---
logical: "msdyn_icdextension"
display: "ICD Extension"
entitySetName: "msdyn_icdextensions"
primaryId: "msdyn_icdextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# ICD Extension

Contains ICD related fields that will be generated and kept.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_icdextension` |
| Display name | ICD Extension |
| Display (plural) | ICD Extensions |
| Schema name | `msdyn_ICDExtension` |
| Entity set (Web API) | `msdyn_icdextensions` |
| Primary id attribute | `msdyn_icdextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_icdextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_icdextensions(<guid>)
POST /api/data/v9.2/msdyn_icdextensions
PATCH /api/data/v9.2/msdyn_icdextensions(<guid>)
DELETE /api/data/v9.2/msdyn_icdextensions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_description`, `msdyn_entityId`, `msdyn_entityIdType`, `msdyn_examples`, `msdyn_ICDExtensionId`, `msdyn_isAIGenerated`, `msdyn_Name`, `msdyn_reviewState`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_icdextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_icdextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_icdextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_icdextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_icdextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_icdextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `queue_msdyn_entityId_msdyn_icdextension` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |
| `team_msdyn_icdextension` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_icdextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_icdextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icdextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icdextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_icdextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_icdextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ICDExtension_msdyn_icdExtensionid_msdyn_ActiveICDExtension` | _n/a_ | `msdyn_icdextensionid` | _n/a_ |
| `msdyn_icdextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_icdextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_icdextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_icdextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_icdextension.md) on 2026-05-06.