---
logical: "msdyn_agentconfiguration"
display: "Agent Configuration"
entitySetName: "msdyn_agentconfigurations"
primaryId: "msdyn_agentconfigurationid"
primaryName: "msdyn_agentconfigurationname"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Configuration

This table contains records of agent configurations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentconfiguration` |
| Display name | Agent Configuration |
| Display (plural) | Agent Configurations |
| Schema name | `msdyn_agentconfiguration` |
| Entity set (Web API) | `msdyn_agentconfigurations` |
| Primary id attribute | `msdyn_agentconfigurationid` |
| Primary name attribute | `msdyn_agentconfigurationname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentconfigurations?$select=msdyn_agentconfigurationname&$top=10
GET /api/data/v9.2/msdyn_agentconfigurations(<guid>)
POST /api/data/v9.2/msdyn_agentconfigurations
PATCH /api/data/v9.2/msdyn_agentconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_agentconfigurations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentconfigurationId`, `msdyn_agentconfigurationname`, `msdyn_agenttype`, `msdyn_ConfigurationEntity`, `msdyn_ConfigurationPageName`, `msdyn_ConfigurationPageType`, `msdyn_iconpath`, `msdyn_isEnabled`, `msdyn_order`, `msdyn_prerequisitecheck`, `msdyn_prerequisitelink`, `msdyn_tooltip`, `msdyn_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_agentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentconfiguration_msdyn_autonomousagentmapping` | _n/a_ | `msdyn_agentconfigurationid` | _n/a_ |
| `msdyn_agentconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentconfiguration.md) on 2026-05-06.