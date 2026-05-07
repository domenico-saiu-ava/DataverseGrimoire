---
logical: "msdyn_autonomousprofile"
display: "Autonomous Profile"
entitySetName: "msdyn_autonomousprofiles"
primaryId: "msdyn_autonomousprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Autonomous Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autonomousprofile` |
| Display name | Autonomous Profile |
| Display (plural) | Autonomous Profiles |
| Schema name | `msdyn_autonomousprofile` |
| Entity set (Web API) | `msdyn_autonomousprofiles` |
| Primary id attribute | `msdyn_autonomousprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autonomousprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
POST /api/data/v9.2/msdyn_autonomousprofiles
PATCH /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_autonomousprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_autonomousprofileId`, `msdyn_name`, `msdyn_rolloutplanid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_autonomousprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_autonomousprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomousprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomousprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomousprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_rolloutplan_msdyn_autonomousprofile` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `msdyn_rolloutplanid` | `msdyn_rolloutplanid` |
| `owner_msdyn_autonomousprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_autonomousprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_autonomousprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomousprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_autonomousprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_autonomousprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousprofile_msdyn_autonomousagentmapping` | _n/a_ | `msdyn_autonomousprofileid` | _n/a_ |
| `msdyn_autonomousprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autonomousprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autonomousprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autonomousprofile.md) on 2026-05-06.