---
logical: "msdyn_agentstatus"
display: "Stato agente"
entitySetName: "msdyn_agentstatuses"
primaryId: "msdyn_agentstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato agente

Lo stato dell'agente contiene i dettagli sullo stato o la presenza dell'agente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentstatus` |
| Display name | Stato agente |
| Display (plural) | stato agente |
| Schema name | `msdyn_agentstatus` |
| Entity set (Web API) | `msdyn_agentstatuses` |
| Primary id attribute | `msdyn_agentstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentstatuses(<guid>)
POST /api/data/v9.2/msdyn_agentstatuses
PATCH /api/data/v9.2/msdyn_agentstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_agentstatuses(<guid>)
```

## Attributes

Writable: **24** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentid`, `msdyn_agentstatusid`, `msdyn_assignedconversationcount`, `msdyn_availableunitscapacity`, `msdyn_capacitymodifiedon`, `msdyn_capacitymodifiedonwithmilliseconds`, `msdyn_currentpresenceid`, `msdyn_eventname`, `msdyn_isagentloggedin`, `msdyn_isblockedbysomeprofile`, `msdyn_name`, `msdyn_nextpresenceid`, `msdyn_presencemodifiedby`, `msdyn_presencemodifiedbyuserid`, `msdyn_presencemodifiedon`, `msdyn_presencemodifiedonwithmilliseconds`, `msdyn_subeventname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_presence_msdyn_agentstatus_nextpresenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_nextpresenceid` | `msdyn_nextpresenceid` |
| `lk_msdyn_agentstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_presence_msdyn_agentstatus_currentpresenceid` | [msdyn_presence](msdyn_presence.md) | `msdyn_currentpresenceid` | `msdyn_currentpresenceid` |
| `msdyn_systemuser_msdyn_agentstatus_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `msdyn_systemuser_msdyn_agentstatus_msdyn_presencemodifiedbyuserid` | [systemuser](systemuser.md) | `msdyn_presencemodifiedbyuserid` | `msdyn_presencemodifiedbyuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentstatus_SyncErrors` | [msdyn_agentstatus](msdyn_agentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatus` |
| `msdyn_agentstatus_DuplicateMatchingRecord` | [msdyn_agentstatus](msdyn_agentstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentstatus` |
| `msdyn_agentstatus_DuplicateBaseRecord` | [msdyn_agentstatus](msdyn_agentstatus.md) | `baserecordid` | `baserecordid_msdyn_agentstatus` |
| `msdyn_agentstatus_AsyncOperations` | [msdyn_agentstatus](msdyn_agentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatus` |
| `msdyn_agentstatus_MailboxTrackingFolders` | [msdyn_agentstatus](msdyn_agentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatus` |
| `msdyn_agentstatus_UserEntityInstanceDatas` | [msdyn_agentstatus](msdyn_agentstatus.md) | `objectid` | `objectid_msdyn_agentstatus` |
| `msdyn_agentstatus_ProcessSession` | [msdyn_agentstatus](msdyn_agentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatus` |
| `msdyn_agentstatus_BulkDeleteFailures` | [msdyn_agentstatus](msdyn_agentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentstatus` |
| `msdyn_agentstatus_PrincipalObjectAttributeAccesses` | [msdyn_agentstatus](msdyn_agentstatus.md) | `objectid` | `objectid_msdyn_agentstatus` |


## Source

Generated from [msdyn_agentstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentstatus')) on 2026-05-07.