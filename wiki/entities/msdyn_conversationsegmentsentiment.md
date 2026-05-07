---
logical: "msdyn_conversationsegmentsentiment"
display: "Conversation Segment Sentiment"
entitySetName: "msdyn_conversationsegmentsentiments"
primaryId: "msdyn_conversationsegmentsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Segment Sentiment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsegmentsentiment` |
| Display name | Conversation Segment Sentiment |
| Display (plural) | Conversation Segment Sentiments |
| Schema name | `msdyn_ConversationSegmentSentiment` |
| Entity set (Web API) | `msdyn_conversationsegmentsentiments` |
| Primary id attribute | `msdyn_conversationsegmentsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsegmentsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsegmentsentiments(<guid>)
POST /api/data/v9.2/msdyn_conversationsegmentsentiments
PATCH /api/data/v9.2/msdyn_conversationsegmentsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsegmentsentiments(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Confidence`, `msdyn_ConversationParticipantInsights`, `msdyn_ConversationSegmentSentimentId`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_SentimentTarget`, `msdyn_SentimentTargetIdType`, `msdyn_SentimentType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsegmentsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsegmentsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsegmentsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsegmentsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsegmentsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsegmentsentiment_Conver` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationsegmentsentiment_msdyn_conversationsignal_msdyn_SentimentTarget` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `msdyn_sentimenttarget` | `msdyn_sentimenttarget_msdyn_conversationsignal` |
| `owner_msdyn_conversationsegmentsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsegmentsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsegmentsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsegmentsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsegmentsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsegmentsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsegmentsentiment.md) on 2026-05-06.