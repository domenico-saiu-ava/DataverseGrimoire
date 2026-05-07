---
logical: "msdyn_agentconfiguration"
display: "Agent Configuration"
entitySetName: "msdyn_agentconfigurations"
primaryId: "msdyn_agentconfigurationid"
primaryName: "msdyn_agentconfigurationname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **21** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentconfigurationid`, `msdyn_agentconfigurationname`, `msdyn_agenttype`, `msdyn_configurationentity`, `msdyn_configurationpagename`, `msdyn_configurationpagetype`, `msdyn_iconpath`, `msdyn_isenabled`, `msdyn_order`, `msdyn_prerequisitecheck`, `msdyn_prerequisitelink`, `msdyn_tooltip`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentconfiguration_SyncErrors` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_DuplicateMatchingRecord` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_DuplicateBaseRecord` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `baserecordid` | `baserecordid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_AsyncOperations` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_MailboxTrackingFolders` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_UserEntityInstanceDatas` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `objectid` | `objectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_ProcessSession` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_BulkDeleteFailures` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `objectid` | `objectid_msdyn_agentconfiguration` |
| `msdyn_agentconfiguration_msdyn_autonomousagentmapping` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `msdyn_agentconfigurationid` | `msdyn_agentconfigurationid` |


## Source

Generated from [msdyn_agentconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentconfiguration')) on 2026-05-07.