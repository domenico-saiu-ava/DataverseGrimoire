---
logical: "computeruseagent"
display: "ComputerUseAgent"
entitySetName: "computeruseagents"
primaryId: "computeruseagentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ComputerUseAgent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `computeruseagent` |
| Display name | ComputerUseAgent |
| Display (plural) | ComputerUseAgents |
| Schema name | `computeruseagent` |
| Entity set (Web API) | `computeruseagents` |
| Primary id attribute | `computeruseagentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/computeruseagents?$select=name&$top=10
GET /api/data/v9.2/computeruseagents(<guid>)
POST /api/data/v9.2/computeruseagents
PATCH /api/data/v9.2/computeruseagents(<guid>)
DELETE /api/data/v9.2/computeruseagents(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`additionalconfiguration`, `additionalconfigurationversion`, `computeruseagentid`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `promptconfiguration`, `promptconfigurationversion`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_computeruseagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_computeruseagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_computeruseagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_computeruseagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_computeruseagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_computeruseagent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_computeruseagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_computeruseagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `computeruseagent_SyncErrors` | [computeruseagent](computeruseagent.md) | `regardingobjectid` | `regardingobjectid_computeruseagent` |
| `computeruseagent_DuplicateMatchingRecord` | [computeruseagent](computeruseagent.md) | `duplicaterecordid` | `duplicaterecordid_computeruseagent` |
| `computeruseagent_DuplicateBaseRecord` | [computeruseagent](computeruseagent.md) | `baserecordid` | `baserecordid_computeruseagent` |
| `computeruseagent_AsyncOperations` | [computeruseagent](computeruseagent.md) | `regardingobjectid` | `regardingobjectid_computeruseagent` |
| `computeruseagent_MailboxTrackingFolders` | [computeruseagent](computeruseagent.md) | `regardingobjectid` | `regardingobjectid_computeruseagent` |
| `computeruseagent_UserEntityInstanceDatas` | [computeruseagent](computeruseagent.md) | `objectid` | `objectid_computeruseagent` |
| `computeruseagent_ProcessSession` | [computeruseagent](computeruseagent.md) | `regardingobjectid` | `regardingobjectid_computeruseagent` |
| `computeruseagent_BulkDeleteFailures` | [computeruseagent](computeruseagent.md) | `regardingobjectid` | `regardingobjectid_computeruseagent` |
| `computeruseagent_PrincipalObjectAttributeAccesses` | [computeruseagent](computeruseagent.md) | `objectid` | `objectid_computeruseagent` |
| `computeruseagent_flowsession_ComputerUseAgentId` | [computeruseagent](computeruseagent.md) | `computeruseagentid` | `ComputerUseAgentId` |


## Source

Generated from [computeruseagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='computeruseagent')) on 2026-05-07.