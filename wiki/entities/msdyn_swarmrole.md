---
logical: "msdyn_swarmrole"
display: "Swarm role"
entitySetName: "msdyn_swarmroles"
primaryId: "msdyn_swarmroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm role

Stores the different participant roles and associated role type defined

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmrole` |
| Display name | Swarm role |
| Display (plural) | Swarm roles |
| Schema name | `msdyn_swarmrole` |
| Entity set (Web API) | `msdyn_swarmroles` |
| Primary id attribute | `msdyn_swarmroleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmroles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmroles(<guid>)
POST /api/data/v9.2/msdyn_swarmroles
PATCH /api/data/v9.2/msdyn_swarmroles(<guid>)
DELETE /api/data/v9.2/msdyn_swarmroles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_roletype`, `msdyn_swarmroleId`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarmrole` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarmrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_swarmrole` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarmrole` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarmrole` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipant_swarmroleid` | _n/a_ | `msdyn_swarmroleid` | _n/a_ |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipantrule_swarmroleid` | _n/a_ | `msdyn_swarmroleid` | _n/a_ |
| `msdyn_swarmrole_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmrole_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmrole_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarmrole_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarmrole_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmrole_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarmrole_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmrole_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarmrole.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarmrole.md) on 2026-05-06.