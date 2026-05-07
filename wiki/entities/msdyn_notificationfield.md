---
logical: "msdyn_notificationfield"
display: "Notification Field"
entitySetName: "msdyn_notificationfields"
primaryId: "msdyn_notificationfieldid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Notification Field

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notificationfield` |
| Display name | Notification Field |
| Display (plural) | Notification Fields |
| Schema name | `msdyn_notificationfield` |
| Entity set (Web API) | `msdyn_notificationfields` |
| Primary id attribute | `msdyn_notificationfieldid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notificationfields?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notificationfields(<guid>)
POST /api/data/v9.2/msdyn_notificationfields
PATCH /api/data/v9.2/msdyn_notificationfields(<guid>)
DELETE /api/data/v9.2/msdyn_notificationfields(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_notificationfieldId`, `msdyn_order`, `msdyn_title`, `msdyn_UniqueName`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_notificationfield` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_notificationfield_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notificationfield_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notificationfield_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notificationfield_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_notificationfield` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_notificationfield` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_notificationfield` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationfield_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationfield_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationfield_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_notificationfield_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_notificationfield_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationfield_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_notificationfield_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notificationfield_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_notificationfield` | [msdyn_notificationfieldid](msdyn_notificationfieldid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_notificationfield.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_notificationfield.md) on 2026-05-06.