---
logical: "agentconversationmessagefile"
display: "File messaggio conversazione agente"
entitySetName: "agentconversationmessagefiles"
primaryId: "agentconversationmessagefileid"
primaryName: "filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File messaggio conversazione agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentconversationmessagefile` |
| Display name | File messaggio conversazione agente |
| Display (plural) | File messaggi conversazione agente |
| Schema name | `agentconversationmessagefile` |
| Entity set (Web API) | `agentconversationmessagefiles` |
| Primary id attribute | `agentconversationmessagefileid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentconversationmessagefiles?$select=filename&$top=10
GET /api/data/v9.2/agentconversationmessagefiles(<guid>)
POST /api/data/v9.2/agentconversationmessagefiles
PATCH /api/data/v9.2/agentconversationmessagefiles(<guid>)
DELETE /api/data/v9.2/agentconversationmessagefiles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`agentconversationmessagefileid`, `agentconversationmessageid`, `filename`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agentconversationmessagefile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agentconversationmessagefile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agentconversationmessagefile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agentconversationmessagefile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agentconversationmessagefile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentconversationmessagefile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentconversationmessagefile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentconversationmessagefile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_agentconversationmessagefile_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `agentconversationmessage_agentconversationmessagefile_agentconversationmessageid` | [agentconversationmessage](agentconversationmessage.md) | `agentconversationmessageid` | `agentconversationmessageid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agentconversationmessagefile_SyncErrors` | [agentconversationmessagefile](agentconversationmessagefile.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessagefile` |
| `agentconversationmessagefile_AsyncOperations` | [agentconversationmessagefile](agentconversationmessagefile.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessagefile` |
| `agentconversationmessagefile_MailboxTrackingFolders` | [agentconversationmessagefile](agentconversationmessagefile.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessagefile` |
| `agentconversationmessagefile_UserEntityInstanceDatas` | [agentconversationmessagefile](agentconversationmessagefile.md) | `objectid` | `objectid_agentconversationmessagefile` |
| `agentconversationmessagefile_ProcessSession` | [agentconversationmessagefile](agentconversationmessagefile.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessagefile` |
| `agentconversationmessagefile_BulkDeleteFailures` | [agentconversationmessagefile](agentconversationmessagefile.md) | `regardingobjectid` | `regardingobjectid_agentconversationmessagefile` |
| `agentconversationmessagefile_PrincipalObjectAttributeAccesses` | [agentconversationmessagefile](agentconversationmessagefile.md) | `objectid` | `objectid_agentconversationmessagefile` |
| `agentconversationmessagefile_FileAttachments` | [agentconversationmessagefile](agentconversationmessagefile.md) | `objectid` | `objectid_agentconversationmessagefile` |


## Source

Generated from [agentconversationmessagefile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentconversationmessagefile')) on 2026-05-07.