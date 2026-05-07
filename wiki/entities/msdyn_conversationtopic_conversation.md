---
logical: "msdyn_conversationtopic_conversation"
display: "Conversation topic Conversation mapping"
entitySetName: "msdyn_conversationtopic_conversations"
primaryId: "msdyn_conversationtopic_conversationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation topic Conversation mapping

Conversation mapping with conversation topics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopic_conversation` |
| Display name | Conversation topic Conversation mapping |
| Display (plural) | Conversation topic conversations |
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

`ImportSequenceNumber`, `msdyn_conversationid`, `msdyn_conversationtopic_conversationId`, `msdyn_conversationtopicid`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopic_conversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopic_conversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopic_conversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopic_conversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid` | [msdyn_conversationtopic](msdyn_conversationtopic.md) | `msdyn_conversationtopicid` | `msdyn_conversationtopicid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `organization_msdyn_conversationtopic_conversation` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopic_conversation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_conversation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_conversation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationtopic_conversation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopic_conversation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationtopic_conversation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationtopic_conversation.md) on 2026-05-06.