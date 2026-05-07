---
logical: "msdyn_rolloutplan"
display: "Rollout Plan"
entitySetName: "msdyn_rolloutplans"
primaryId: "msdyn_rolloutplanid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rollout Plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rolloutplan` |
| Display name | Rollout Plan |
| Display (plural) | Rollout Plans |
| Schema name | `msdyn_rolloutplan` |
| Entity set (Web API) | `msdyn_rolloutplans` |
| Primary id attribute | `msdyn_rolloutplanid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rolloutplans?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rolloutplans(<guid>)
POST /api/data/v9.2/msdyn_rolloutplans
PATCH /api/data/v9.2/msdyn_rolloutplans(<guid>)
DELETE /api/data/v9.2/msdyn_rolloutplans(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_name`, `msdyn_rolloutplanId`, `msdyn_scheduledutc`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_rolloutplan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_rolloutplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rolloutplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rolloutplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rolloutplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_rolloutplan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_rolloutplan` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_rolloutplan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rolloutplan_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rolloutplan_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rolloutplan_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_rolloutplan_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_rolloutplan_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rolloutplan_msdyn_autonomousprofile` | _n/a_ | `msdyn_rolloutplanid` | _n/a_ |
| `msdyn_rolloutplan_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_rolloutplan_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rolloutplan_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_rolloutplan.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_rolloutplan.md) on 2026-05-06.