---
logical: "msdyn_conversationmessageblock"
display: "Blocco messaggi di conversazione"
entitySetName: "msdyn_conversationmessageblocks"
primaryId: "msdyn_conversationmessageblockid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Blocco messaggi di conversazione

Un blocco dei messaggi rimane attivo finché un agente non risponde (inclusi i messaggi inviati dall'agente). Un messaggio di follow-up, dopo la risposta di un agente, crea un altro blocco dei messaggi. Anche questo blocco termina quando vengono inviati messaggi dall'agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationmessageblock` |
| Display name | Blocco messaggi di conversazione |
| Display (plural) | msdyn_conversationmessageblock |
| Schema name | `msdyn_conversationmessageblock` |
| Entity set (Web API) | `msdyn_conversationmessageblocks` |
| Primary id attribute | `msdyn_conversationmessageblockid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationmessageblocks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationmessageblocks(<guid>)
POST /api/data/v9.2/msdyn_conversationmessageblocks
PATCH /api/data/v9.2/msdyn_conversationmessageblocks(<guid>)
DELETE /api/data/v9.2/msdyn_conversationmessageblocks(<guid>)
```

## Attributes

Writable: **24** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentid`, `msdyn_agentmessagetime`, `msdyn_agentresponsesessionid`, `msdyn_agentresponsetimeadjforoh`, `msdyn_agentresponsetimenotadjforoh`, `msdyn_conversationmessageblockid`, `msdyn_customermessagesessionid`, `msdyn_customermessagetimestamp`, `msdyn_inboundmessagecountoutsideoh`, `msdyn_inboundmessagecountwithinoh`, `msdyn_isfirstresponsetime`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_outboundmessagecountoutsideoh`, `msdyn_outboundmessagecountwithinoh`, `msdyn_responsetimeadjforoh`, `msdyn_responsetimenotadjforoh`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationmessageblock_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationmessageblock_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationmessageblock_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationmessageblock_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationmessageblock` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationmessageblock` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationmessageblock` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationmessageblock` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_agentresponsesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_agentresponsesessionid` | `msdyn_agentresponsesessionid` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_customermessagesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_customermessagesessionid` | `msdyn_customermessagesessionid` |
| `msdyn_systemuser_msdyn_conversationmessageblock_msdyn_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationmessageblock_SyncErrors` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_DuplicateMatchingRecord` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_DuplicateBaseRecord` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `baserecordid` | `baserecordid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_AsyncOperations` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_MailboxTrackingFolders` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_UserEntityInstanceDatas` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `objectid` | `objectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_ProcessSession` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_BulkDeleteFailures` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationmessageblock` |
| `msdyn_conversationmessageblock_PrincipalObjectAttributeAccesses` | [msdyn_conversationmessageblock](msdyn_conversationmessageblock.md) | `objectid` | `objectid_msdyn_conversationmessageblock` |


## Source

Generated from [msdyn_conversationmessageblock (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationmessageblock')) on 2026-05-07.