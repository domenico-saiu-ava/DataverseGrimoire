---
logical: "msdyn_autonomousagentmapping"
display: "Autonomous Agent Entity Mapping"
entitySetName: "msdyn_autonomousagentmappings"
primaryId: "msdyn_autonomousagentmappingid"
primaryName: "msdyn_autonomousagentmappingname"
tableType: "Standard"
ownership: "UserOwned"
---

# Autonomous Agent Entity Mapping

This table contains records of Autonomous Agent Entities Mappings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autonomousagentmapping` |
| Display name | Autonomous Agent Entity Mapping |
| Display (plural) | Autonomous Agent Entities Mappings |
| Schema name | `msdyn_autonomousagentmapping` |
| Entity set (Web API) | `msdyn_autonomousagentmappings` |
| Primary id attribute | `msdyn_autonomousagentmappingid` |
| Primary name attribute | `msdyn_autonomousagentmappingname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autonomousagentmappings?$select=msdyn_autonomousagentmappingname&$top=10
GET /api/data/v9.2/msdyn_autonomousagentmappings(<guid>)
POST /api/data/v9.2/msdyn_autonomousagentmappings
PATCH /api/data/v9.2/msdyn_autonomousagentmappings(<guid>)
DELETE /api/data/v9.2/msdyn_autonomousagentmappings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentconfigurationid`, `msdyn_autonomousagentmappingId`, `msdyn_autonomousagentmappingname`, `msdyn_autonomousprofileid`, `msdyn_executioncriteriaid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_autonomousagentmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_autonomousagentmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomousagentmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomousagentmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomousagentmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentconfiguration_msdyn_autonomousagentmapping` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `msdyn_agentconfigurationid` | `msdyn_agentconfigurationid` |
| `msdyn_autonomousprofile_msdyn_autonomousagentmapping` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `msdyn_autonomousprofileid` | `msdyn_autonomousprofileid` |
| `owner_msdyn_autonomousagentmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_autonomousagentmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_autonomousagentmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomousagentmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousagentmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousagentmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_autonomousagentmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_autonomousagentmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousagentmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_autonomousagentmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_autonomousagentmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_autonomousagentmapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_autonomousagentmapping.md) on 2026-05-06.