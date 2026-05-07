---
logical: "msdyn_conversationmessageblock"
display: "Conversation Message Block"
entitySetName: "msdyn_conversationmessageblocks"
primaryId: "msdyn_conversationmessageblockid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Message Block

A Message Block would constitute a block of messages up till an agent responds (including the messages sent by the agent). A follow up message, after an agent responds, will create another message block, this block again ends with the messages from the agent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationmessageblock` |
| Display name | Conversation Message Block |
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

Writable: **25** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentid`, `msdyn_agentmessagetime`, `msdyn_agentresponsesessionid`, `msdyn_agentresponsetimeadjforoh`, `msdyn_agentresponsetimenotadjforoh`, `msdyn_conversationmessageblockId`, `msdyn_customermessagesessionid`, `msdyn_customermessagetimestamp`, `msdyn_inboundmessagecountoutsideoh`, `msdyn_inboundmessagecountwithinoh`, `msdyn_isfirstresponsetime`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_outboundmessagecountoutsideoh`, `msdyn_outboundmessagecountwithinoh`, `msdyn_responsetimeadjforoh`, `msdyn_responsetimenotadjforoh`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationmessageblock` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationmessageblock_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationmessageblock_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationmessageblock_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationmessageblock_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_agentresponsesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_agentresponsesessionid` | `msdyn_agentresponsesessionid` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_customermessagesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_customermessagesessionid` | `msdyn_customermessagesessionid` |
| `msdyn_systemuser_msdyn_conversationmessageblock_msdyn_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `owner_msdyn_conversationmessageblock` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationmessageblock` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationmessageblock` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationmessageblock_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationmessageblock_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationmessageblock_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationmessageblock_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationmessageblock_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationmessageblock_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationmessageblock_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationmessageblock_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationmessageblock.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationmessageblock.md) on 2026-05-06.