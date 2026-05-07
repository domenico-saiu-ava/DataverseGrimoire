---
logical: "msdyn_channelprofileaiagent"
display: "Agente IA Profilo canale"
entitySetName: "msdyn_channelprofileaiagents"
primaryId: "msdyn_channelprofileaiagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agente IA Profilo canale

Configurazione dell'agente IA associato al profilo canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofileaiagent` |
| Display name | Agente IA Profilo canale |
| Display (plural) | Agenti IA |
| Schema name | `msdyn_channelprofileaiagent` |
| Entity set (Web API) | `msdyn_channelprofileaiagents` |
| Primary id attribute | `msdyn_channelprofileaiagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofileaiagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelprofileaiagents(<guid>)
POST /api/data/v9.2/msdyn_channelprofileaiagents
PATCH /api/data/v9.2/msdyn_channelprofileaiagents(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofileaiagents(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_botid`, `msdyn_channelprofileaiagentid`, `msdyn_channelprofileid`, `msdyn_keeponhold`, `msdyn_name`, `msdyn_pauserecordingandtranscript`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofileaiagent_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `msdyn_channelprofileaiagent_msdyn_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `msdyn_channelprofileaiagent_msdyn_botid_bot` | [bot](bot.md) | `msdyn_botid` | `msdyn_botid` |
| `lk_msdyn_channelprofileaiagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprofileaiagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprofileaiagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprofileaiagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelprofileaiagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelprofileaiagent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelprofileaiagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelprofileaiagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofileaiagent_SyncErrors` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_AsyncOperations` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_MailboxTrackingFolders` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_UserEntityInstanceDatas` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `objectid` | `objectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_ProcessSession` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_BulkDeleteFailures` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofileaiagent` |
| `msdyn_channelprofileaiagent_PrincipalObjectAttributeAccesses` | [msdyn_channelprofileaiagent](msdyn_channelprofileaiagent.md) | `objectid` | `objectid_msdyn_channelprofileaiagent` |


## Source

Generated from [msdyn_channelprofileaiagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofileaiagent')) on 2026-05-07.