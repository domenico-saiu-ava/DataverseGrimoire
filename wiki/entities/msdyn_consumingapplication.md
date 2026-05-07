---
logical: "msdyn_consumingapplication"
display: "Consuming Application"
entitySetName: "msdyn_consumingapplications"
primaryId: "msdyn_consumingapplicationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Consuming Application

Consuming Application that use Unified Channel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consumingapplication` |
| Display name | Consuming Application |
| Display (plural) | Consuming Applications |
| Schema name | `msdyn_ConsumingApplication` |
| Entity set (Web API) | `msdyn_consumingapplications` |
| Primary id attribute | `msdyn_consumingapplicationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consumingapplications?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consumingapplications(<guid>)
POST /api/data/v9.2/msdyn_consumingapplications
PATCH /api/data/v9.2/msdyn_consumingapplications(<guid>)
DELETE /api/data/v9.2/msdyn_consumingapplications(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ConsumingApplicationId`, `msdyn_InboundUrlTemplate`, `msdyn_Name`, `msdyn_NotificationUrlTemplate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_consumingapplication` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_consumingapplication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consumingapplication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consumingapplication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consumingapplication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_consumingapplication` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_consumingapplication` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_consumingapplication` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consumingapplication_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_consumingapplication_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_consumingapplication_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_consumingapplication_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_consumingapplication_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_consumingapplication_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_consumingapplication_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_consumingapplication_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_channelinstance_ConsumingApplication_msdyn_a` | _n/a_ | `msdyn_consumingapplicationid` | _n/a_ |


## Source

Generated from [msdyn_consumingapplication.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_consumingapplication.md) on 2026-05-06.