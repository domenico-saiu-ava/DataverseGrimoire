---
logical: "msdyn_autonomousagentmapping"
display: "Autonomous Agent Entity Mapping"
entitySetName: "msdyn_autonomousagentmappings"
primaryId: "msdyn_autonomousagentmappingid"
primaryName: "msdyn_autonomousagentmappingname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentconfigurationid`, `msdyn_autonomousagentmappingid`, `msdyn_autonomousagentmappingname`, `msdyn_autonomousprofileid`, `msdyn_executioncriteriaid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autonomousagentmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomousagentmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomousagentmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomousagentmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_autonomousagentmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_autonomousagentmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_autonomousagentmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_autonomousagentmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_autonomousprofile_msdyn_autonomousagentmapping` | [msdyn_autonomousprofile](msdyn_autonomousprofile.md) | `msdyn_autonomousprofileid` | `msdyn_autonomousprofileid` |
| `msdyn_agentconfiguration_msdyn_autonomousagentmapping` | [msdyn_agentconfiguration](msdyn_agentconfiguration.md) | `msdyn_agentconfigurationid` | `msdyn_agentconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomousagentmapping_SyncErrors` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_DuplicateMatchingRecord` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_DuplicateBaseRecord` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `baserecordid` | `baserecordid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_AsyncOperations` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_MailboxTrackingFolders` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_UserEntityInstanceDatas` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `objectid` | `objectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_ProcessSession` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_BulkDeleteFailures` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomousagentmapping` |
| `msdyn_autonomousagentmapping_PrincipalObjectAttributeAccesses` | [msdyn_autonomousagentmapping](msdyn_autonomousagentmapping.md) | `objectid` | `objectid_msdyn_autonomousagentmapping` |


## Source

Generated from [msdyn_autonomousagentmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autonomousagentmapping')) on 2026-05-07.