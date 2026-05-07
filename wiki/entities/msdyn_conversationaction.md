---
logical: "msdyn_conversationaction"
display: "Conversation Action"
entitySetName: "msdyn_conversationactions"
primaryId: "msdyn_conversationactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Action

The action that can be performed in the conversation.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationaction` |
| Display name | Conversation Action |
| Display (plural) | Conversation Action |
| Schema name | `msdyn_conversationaction` |
| Entity set (Web API) | `msdyn_conversationactions` |
| Primary id attribute | `msdyn_conversationactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationactions(<guid>)
POST /api/data/v9.2/msdyn_conversationactions
PATCH /api/data/v9.2/msdyn_conversationactions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationactions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_conversationactionId`, `msdyn_EventName`, `msdyn_EventParameter`, `msdyn_FunctionName`, `msdyn_Icon`, `msdyn_name`, `msdyn_Order`, `msdyn_WebResource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_conversationaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationaction` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaction_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationaction_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction` | _n/a_ | `msdyn_conversationaction` | _n/a_ |
| `msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey` | _n/a_ | `msdyn_conversationactionkey` | _n/a_ |


## Source

Generated from [msdyn_conversationaction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationaction.md) on 2026-05-06.