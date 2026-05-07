---
logical: "msdyn_conversationtopic_conversation"
display: "Mapping conversazioni con argomenti di conversazione"
entitySetName: "msdyn_conversationtopic_conversations"
primaryId: "msdyn_conversationtopic_conversationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping conversazioni con argomenti di conversazione

Mapping conversazioni con argomenti di conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopic_conversation` |
| Display name | Mapping conversazioni con argomenti di conversazione |
| Display (plural) | Conversazioni con argomenti di conversazione |
| Schema name | `msdyn_conversationtopic_conversation` |
| Entity set (Web API) | `msdyn_conversationtopic_conversations` |
| Primary id attribute | `msdyn_conversationtopic_conversationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopic_conversations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopic_conversations(<guid>)
POST /api/data/v9.2/msdyn_conversationtopic_conversations
PATCH /api/data/v9.2/msdyn_conversationtopic_conversations(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopic_conversations(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_conversationid`, `msdyn_conversationtopic_conversationid`, `msdyn_conversationtopicid`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopic_conversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopic_conversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopic_conversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopic_conversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopic_conversation` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `msdyn_conversationtopicid` | `msdyn_conversationtopicid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopic_conversation_SyncErrors` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_AsyncOperations` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_MailboxTrackingFolders` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_UserEntityInstanceDatas` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `objectid` | `objectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_ProcessSession` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_BulkDeleteFailures` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopic_conversation` |
| `msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses` | [msdyn_conversationtopic_conversation](msdyn_conversationtopic_conversation.md) | `objectid` | `objectid_msdyn_conversationtopic_conversation` |


## Source

Generated from [msdyn_conversationtopic_conversation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationtopic_conversation')) on 2026-05-07.