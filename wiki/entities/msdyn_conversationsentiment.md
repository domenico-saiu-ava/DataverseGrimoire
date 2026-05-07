---
logical: "msdyn_conversationsentiment"
display: "Conversation Sentiment"
entitySetName: "msdyn_conversationsentiments"
primaryId: "msdyn_conversationsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Sentiment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsentiment` |
| Display name | Conversation Sentiment |
| Display (plural) | Conversation Sentiments |
| Schema name | `msdyn_ConversationSentiment` |
| Entity set (Web API) | `msdyn_conversationsentiments` |
| Primary id attribute | `msdyn_conversationsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsentiments(<guid>)
POST /api/data/v9.2/msdyn_conversationsentiments
PATCH /api/data/v9.2/msdyn_conversationsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsentiments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationAggregatedInsights`, `msdyn_ConversationSentimentId`, `msdyn_CustomerNegativeSentiment`, `msdyn_CustomerPositiveSentiment`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_CustomerNeutralSentiment`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsentiment_ConversationA` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `owner_msdyn_conversationsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsentiment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsentiment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsentiment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsentiment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsentiment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsentiment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsentiment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsentiment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsentiment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsentiment.md) on 2026-05-06.