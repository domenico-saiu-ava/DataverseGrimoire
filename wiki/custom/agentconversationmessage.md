---
logical: "agentconversationmessage"
display: "Messaggio conversazione agente"
entitySetName: "agentconversationmessages"
primaryId: "agentconversationmessageid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Messaggio conversazione agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentconversationmessage` |
| Display name | Messaggio conversazione agente |
| Display (plural) | Messaggi conversazione agente |
| Schema name | `agentconversationmessage` |
| Entity set (Web API) | `agentconversationmessages` |
| Primary id attribute | `agentconversationmessageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentconversationmessages?$select=name&$top=10
GET /api/data/v9.2/agentconversationmessages(<guid>)
POST /api/data/v9.2/agentconversationmessages
PATCH /api/data/v9.2/agentconversationmessages(<guid>)
DELETE /api/data/v9.2/agentconversationmessages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`agentconversationmessageid`, `importsequencenumber`, `message`, `messagecontext`, `messagesender`, `name`, `overriddencreatedon`, `ownerid`, `regardingobjectid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agentconversationmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agentconversationmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agentconversationmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agentconversationmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agentconversationmessage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentconversationmessage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentconversationmessage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentconversationmessage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agentconversationmessage_uxagentproject` | [uxagentproject](uxagentproject.md) | `regardingobjectid` | `RegardingObjectId_uxagentproject` |
| `agentconversationmessage_uxagentprojectfile` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `RegardingObjectId_uxagentprojectfile` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agentconversationmessage_SyncErrors` | [agentconversationmessage](agentconversationmessage.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessage` |
| `agentconversationmessage_AsyncOperations` | [agentconversationmessage](agentconversationmessage.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessage` |
| `agentconversationmessage_MailboxTrackingFolders` | [agentconversationmessage](agentconversationmessage.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessage` |
| `agentconversationmessage_UserEntityInstanceDatas` | [agentconversationmessage](agentconversationmessage.md) | `objectid` | `objectid_agentconversationmessage` |
| `agentconversationmessage_ProcessSession` | [agentconversationmessage](agentconversationmessage.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessage` |
| `agentconversationmessage_BulkDeleteFailures` | [agentconversationmessage](agentconversationmessage.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessage` |
| `agentconversationmessage_PrincipalObjectAttributeAccesses` | [agentconversationmessage](agentconversationmessage.md) | `objectid` | `objectid_agentconversationmessage` |
| `agentconversationmessage_agentconversationmessagefile_agentconversationmessageid` | [agentconversationmessage](agentconversationmessage.md) | `agentconversationmessageid` | `agentconversationmessageid` |


## Source

Generated from [agentconversationmessage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentconversationmessage')) on 2026-05-07.