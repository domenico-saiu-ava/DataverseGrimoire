---
logical: "msdyn_agentcapacityupdatehistory"
display: "Cronologia aggiornamento capacità agente"
entitySetName: "msdyn_agentcapacityupdatehistories"
primaryId: "msdyn_agentcapacityupdatehistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia aggiornamento capacità agente

L'entità cronologia aggiornamento capacità agente registra tutte le modifiche apportate alla capacità dell'agente in base a un profilo della capacità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcapacityupdatehistory` |
| Display name | Cronologia aggiornamento capacità agente |
| Display (plural) | Cronologie aggiornamento capacità agente |
| Schema name | `msdyn_agentcapacityupdatehistory` |
| Entity set (Web API) | `msdyn_agentcapacityupdatehistories` |
| Primary id attribute | `msdyn_agentcapacityupdatehistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcapacityupdatehistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
POST /api/data/v9.2/msdyn_agentcapacityupdatehistories
PATCH /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
DELETE /api/data/v9.2/msdyn_agentcapacityupdatehistories(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentcapacityupdatehistoryid`, `msdyn_agentid`, `msdyn_availablecapacityprofileunits`, `msdyn_blockassignment`, `msdyn_capacityprofileid`, `msdyn_defaultmaxunits`, `msdyn_endtime`, `msdyn_eventid`, `msdyn_isforceassignment`, `msdyn_isunitbased`, `msdyn_name`, `msdyn_presenceid`, `msdyn_resetduration`, `msdyn_sessionid`, `msdyn_starttime`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcapacityupdatehistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcapacityupdatehistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcapacityupdatehistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcapacityupdatehistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentcapacityupdatehistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentcapacityupdatehistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentcapacityupdatehistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentcapacityupdatehistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_capacityprofile_msdyn_agentcapacityupdatehistory_capacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `user_msdyn_agentcapacityupdatehistory_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `msdyn_msdyn_ocsession_msdyn_agentcapacityupdatehistory_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_presence_msdyn_agentcapacityupdatehistory_presenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_presenceid` | `msdyn_presenceid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcapacityupdatehistory_SyncErrors` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_DuplicateMatchingRecord` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_DuplicateBaseRecord` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `baserecordid` | `baserecordid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_AsyncOperations` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_MailboxTrackingFolders` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_UserEntityInstanceDatas` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `objectid` | `objectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_ProcessSession` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_BulkDeleteFailures` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcapacityupdatehistory` |
| `msdyn_agentcapacityupdatehistory_PrincipalObjectAttributeAccesses` | [msdyn_agentcapacityupdatehistory](msdyn_agentcapacityupdatehistory.md) | `objectid` | `objectid_msdyn_agentcapacityupdatehistory` |


## Source

Generated from [msdyn_agentcapacityupdatehistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentcapacityupdatehistory')) on 2026-05-07.