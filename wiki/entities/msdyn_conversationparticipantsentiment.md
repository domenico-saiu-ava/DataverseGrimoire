---
logical: "msdyn_conversationparticipantsentiment"
display: "Conversation Participant Sentiment"
entitySetName: "msdyn_conversationparticipantsentiments"
primaryId: "msdyn_conversationparticipantsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Participant Sentiment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationparticipantsentiment` |
| Display name | Conversation Participant Sentiment |
| Display (plural) | Conversation Participant Sentiments |
| Schema name | `msdyn_ConversationParticipantSentiment` |
| Entity set (Web API) | `msdyn_conversationparticipantsentiments` |
| Primary id attribute | `msdyn_conversationparticipantsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationparticipantsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationparticipantsentiments(<guid>)
POST /api/data/v9.2/msdyn_conversationparticipantsentiments
PATCH /api/data/v9.2/msdyn_conversationparticipantsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_conversationparticipantsentiments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationParticipantInsights`, `msdyn_ConversationParticipantSentimentId`, `msdyn_Name`, `msdyn_OverallNegativeSentiment`, `msdyn_OverallPositiveSentiment`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_OverallNeutralSentiment`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationparticipantsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationparticipantsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationparticipantsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationparticipantsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationparticipantsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationparticipantsentiment_Co` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `owner_msdyn_conversationparticipantsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationparticipantsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationparticipantsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationparticipantsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationparticipantsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationparticipantsentiment.md) on 2026-05-06.