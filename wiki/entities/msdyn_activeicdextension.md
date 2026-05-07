---
logical: "msdyn_activeicdextension"
display: "Active ICD Extension"
entitySetName: "msdyn_activeicdextensions"
primaryId: "msdyn_activeicdextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Active ICD Extension

This notes the currently active description and examples for given entity (queue/agent etc.) as selected by the C1 administrator.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activeicdextension` |
| Display name | Active ICD Extension |
| Display (plural) | Active ICD Extensions |
| Schema name | `msdyn_ActiveICDExtension` |
| Entity set (Web API) | `msdyn_activeicdextensions` |
| Primary id attribute | `msdyn_activeicdextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activeicdextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activeicdextensions(<guid>)
POST /api/data/v9.2/msdyn_activeicdextensions
PATCH /api/data/v9.2/msdyn_activeicdextensions(<guid>)
DELETE /api/data/v9.2/msdyn_activeicdextensions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ActiveICDExtensionId`, `msdyn_entityId`, `msdyn_entityIdType`, `msdyn_icdExtensionid`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_activeicdextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_activeicdextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activeicdextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activeicdextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activeicdextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ICDExtension_msdyn_icdExtensionid_msdyn_ActiveICDExtension` | [msdyn_icdextension](msdyn_icdextension.md) | `msdyn_icdextensionid` | `msdyn_icdExtensionid` |
| `owner_msdyn_activeicdextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `queue_msdyn_entityId_msdyn_activeicdextension` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |
| `team_msdyn_activeicdextension` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_activeicdextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activeicdextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activeicdextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activeicdextension_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_activeicdextension_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_activeicdextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activeicdextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_activeicdextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activeicdextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_activeicdextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_activeicdextension.md) on 2026-05-06.