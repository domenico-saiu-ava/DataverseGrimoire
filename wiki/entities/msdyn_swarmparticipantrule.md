---
logical: "msdyn_swarmparticipantrule"
display: "Swarm participant rule"
entitySetName: "msdyn_swarmparticipantrules"
primaryId: "msdyn_swarmparticipantruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm participant rule

Rules to fetch participants based on their role

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmparticipantrule` |
| Display name | Swarm participant rule |
| Display (plural) | Swarm participant rules |
| Schema name | `msdyn_swarmparticipantrule` |
| Entity set (Web API) | `msdyn_swarmparticipantrules` |
| Primary id attribute | `msdyn_swarmparticipantruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmparticipantrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
POST /api/data/v9.2/msdyn_swarmparticipantrules
PATCH /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
DELETE /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_rulexml`, `msdyn_swarmparticipantruleId`, `msdyn_swarmroleid`, `msdyn_swarmtemplateid`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarmparticipantrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarmparticipantrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmparticipantrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmparticipantrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmparticipantrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipantrule_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarmparticipantrule_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |
| `owner_msdyn_swarmparticipantrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarmparticipantrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarmparticipantrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmparticipantrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipantrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipantrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarmparticipantrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarmparticipantrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipantrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarmparticipantrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmparticipantrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarmparticipantrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarmparticipantrule.md) on 2026-05-06.