---
logical: "msdyn_agentstatushistory"
display: "Cronologia stato agente"
entitySetName: "msdyn_agentstatushistories"
primaryId: "msdyn_agentstatushistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia stato agente

L'entità cronologia stato agente registra tutte le modifiche apportate alla presenza o alla capacità disponibile dell'agente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentstatushistory` |
| Display name | Cronologia stato agente |
| Display (plural) | Cronologie stato agente |
| Schema name | `msdyn_agentstatushistory` |
| Entity set (Web API) | `msdyn_agentstatushistories` |
| Primary id attribute | `msdyn_agentstatushistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentstatushistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentstatushistories(<guid>)
POST /api/data/v9.2/msdyn_agentstatushistories
PATCH /api/data/v9.2/msdyn_agentstatushistories(<guid>)
DELETE /api/data/v9.2/msdyn_agentstatushistories(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentid`, `msdyn_agentstatushistoryid`, `msdyn_assignedconversationcount`, `msdyn_availablecapacity`, `msdyn_endtime`, `msdyn_eventid`, `msdyn_eventname`, `msdyn_isagentloggedin`, `msdyn_isblockedbysomeprofile`, `msdyn_name`, `msdyn_presenceid`, `msdyn_presencemodifiedbyuserid`, `msdyn_starttime`, `msdyn_subeventname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentstatushistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentstatushistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentstatushistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentstatushistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentstatushistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentstatushistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentstatushistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentstatushistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_agentstatushistory_msdyn_presencemodifiedbyuserid` | [systemuser](systemuser.md) | `msdyn_presencemodifiedbyuserid` | `msdyn_presencemodifiedbyuserid` |
| `msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |
| `msdyn_systemuser_msdyn_agentstatushistory_Agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_Agentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentstatushistory_SyncErrors` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_DuplicateMatchingRecord` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_DuplicateBaseRecord` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `baserecordid` | `baserecordid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_AsyncOperations` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_MailboxTrackingFolders` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_UserEntityInstanceDatas` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `objectid` | `objectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_ProcessSession` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_BulkDeleteFailures` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatushistory` |
| `msdyn_agentstatushistory_PrincipalObjectAttributeAccesses` | [msdyn_agentstatushistory](msdyn_agentstatushistory.md) | `objectid` | `objectid_msdyn_agentstatushistory` |


## Source

Generated from [msdyn_agentstatushistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentstatushistory')) on 2026-05-07.