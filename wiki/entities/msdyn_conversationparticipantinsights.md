---
logical: "msdyn_conversationparticipantinsights"
display: "Conversation Participant Insights"
entitySetName: "msdyn_conversationparticipantinsights"
primaryId: "msdyn_conversationparticipantinsightsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Participant Insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationparticipantinsights` |
| Display name | Conversation Participant Insights |
| Display (plural) | Conversation Participant Insights |
| Schema name | `msdyn_ConversationParticipantInsights` |
| Entity set (Web API) | `msdyn_conversationparticipantinsights` |
| Primary id attribute | `msdyn_conversationparticipantinsightsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationparticipantinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationparticipantinsights(<guid>)
POST /api/data/v9.2/msdyn_conversationparticipantinsights
PATCH /api/data/v9.2/msdyn_conversationparticipantinsights(<guid>)
DELETE /api/data/v9.2/msdyn_conversationparticipantinsights(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AadId`, `msdyn_AvgPauseBeforeSpeakingInMS`, `msdyn_ChannelIndex`, `msdyn_ConversationAggregatedInsights`, `msdyn_ConversationParticipantInsightsId`, `msdyn_DisplayName`, `msdyn_Email`, `msdyn_LongestMonologueInMS`, `msdyn_Name`, `msdyn_ParticipantId`, `msdyn_ParticipantRole`, `msdyn_ParticipationMethod`, `msdyn_PhoneNumber`, `msdyn_SwitchCount`, `msdyn_TalkingSpeedWordsPerMin`, `msdyn_TalkToListenRatio`, `msdyn_TenantId`, `msdyn_User`, `msdyn_UserIdType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationparticipantinsights` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationparticipantinsights_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationparticipantinsights_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationparticipantinsights_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationparticipantinsights_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationparticipantinsights_account_msdyn_User` | [account](account.md) | `msdyn_user` | `msdyn_user_account` |
| `msdyn_msdyn_conversationparticipantinsights_Con` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User` | [contact](contact.md) | `msdyn_user` | `msdyn_user_contact` |
| `msdyn_msdyn_conversationparticipantinsights_systemuser_msdyn_User` | [systemuser](systemuser.md) | `msdyn_user` | `msdyn_user_systemuser` |
| `owner_msdyn_conversationparticipantinsights` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationparticipantinsights` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationparticipantinsights` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationparticipantinsights_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantinsights_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantinsights_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationparticipantinsights_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationparticipantinsights_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantinsights_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationparticipantinsights_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationparticipantinsights_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_conversationactionitem_Conversation` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |
| `msdyn_msdyn_conversationparticipantsentiment_Co` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |
| `msdyn_msdyn_conversationquestion_ConversationPa` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |
| `msdyn_msdyn_conversationsegmentsentiment_Conver` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |
| `msdyn_msdyn_conversationsignal_ConversationPart` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |
| `msdyn_msdyn_conversationsummarysuggestion_Conve` | _n/a_ | `msdyn_conversationparticipantinsights` | _n/a_ |


## Source

Generated from [msdyn_conversationparticipantinsights.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationparticipantinsights.md) on 2026-05-06.