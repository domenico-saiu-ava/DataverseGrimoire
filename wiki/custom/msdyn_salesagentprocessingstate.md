---
logical: "msdyn_salesagentprocessingstate"
display: "Stato elaborazione agente di vendita"
entitySetName: "msdyn_salesagentprocessingstates"
primaryId: "msdyn_salesagentprocessingstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato elaborazione agente di vendita

Questa tabella gestisce lo stato di elaborazione dell'agente 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentprocessingstate` |
| Display name | Stato elaborazione agente di vendita |
| Display (plural) | Stati elaborazione agente di vendita |
| Schema name | `msdyn_salesagentprocessingstate` |
| Entity set (Web API) | `msdyn_salesagentprocessingstates` |
| Primary id attribute | `msdyn_salesagentprocessingstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentprocessingstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
POST /api/data/v9.2/msdyn_salesagentprocessingstates
PATCH /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentprocessingstates(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentorchestrationid`, `msdyn_currentprocessingstate`, `msdyn_lastresearchendtime`, `msdyn_lastresearchstarttime`, `msdyn_manualrefreshes`, `msdyn_name`, `msdyn_nextrefreshtime`, `msdyn_priority`, `msdyn_regardingentity`, `msdyn_salesagentprocessingstateid`, `msdyn_salesagentprofile`, `msdyn_totalresearchcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentprocessingstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentprocessingstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentprocessingstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentprocessingstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentprocessingstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentprocessingstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentprocessingstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentprocessingstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesagentprocessingstate_regardingentity_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingentity` | `msdyn_regardingentity` |
| `msdyn_salesagentprocessingstate_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentprocessingstate_SyncErrors` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_AsyncOperations` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_MailboxTrackingFolders` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_UserEntityInstanceDatas` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `objectid` | `objectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_ProcessSession` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_BulkDeleteFailures` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentprocessingstate` |
| `msdyn_salesagentprocessingstate_PrincipalObjectAttributeAccesses` | [msdyn_salesagentprocessingstate](msdyn_salesagentprocessingstate.md) | `objectid` | `objectid_msdyn_salesagentprocessingstate` |


## Source

Generated from [msdyn_salesagentprocessingstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentprocessingstate')) on 2026-05-07.