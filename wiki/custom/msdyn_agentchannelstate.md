---
logical: "msdyn_agentchannelstate"
display: "Stato canale agente"
entitySetName: "msdyn_agentchannelstates"
primaryId: "msdyn_agentchannelstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato canale agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentchannelstate` |
| Display name | Stato canale agente |
| Display (plural) | Stati canale agente |
| Schema name | `msdyn_agentchannelstate` |
| Entity set (Web API) | `msdyn_agentchannelstates` |
| Primary id attribute | `msdyn_agentchannelstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentchannelstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentchannelstates(<guid>)
POST /api/data/v9.2/msdyn_agentchannelstates
PATCH /api/data/v9.2/msdyn_agentchannelstates(<guid>)
DELETE /api/data/v9.2/msdyn_agentchannelstates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentchannelstateid`, `msdyn_agentid`, `msdyn_channeltype`, `msdyn_lastsessionreleasetime`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentchannelstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentchannelstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentchannelstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentchannelstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentchannelstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentchannelstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentchannelstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentchannelstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_agentchannelstate_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentchannelstate_SyncErrors` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_DuplicateMatchingRecord` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_DuplicateBaseRecord` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `baserecordid` | `baserecordid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_AsyncOperations` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_MailboxTrackingFolders` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_UserEntityInstanceDatas` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `objectid` | `objectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_ProcessSession` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_BulkDeleteFailures` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentchannelstate` |
| `msdyn_agentchannelstate_PrincipalObjectAttributeAccesses` | [msdyn_agentchannelstate](msdyn_agentchannelstate.md) | `objectid` | `objectid_msdyn_agentchannelstate` |


## Source

Generated from [msdyn_agentchannelstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentchannelstate')) on 2026-05-07.