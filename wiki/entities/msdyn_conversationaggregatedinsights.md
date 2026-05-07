---
logical: "msdyn_conversationaggregatedinsights"
display: "Conversation Aggregated Insights"
entitySetName: "msdyn_conversationaggregatedinsights"
primaryId: "msdyn_conversationaggregatedinsightsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Aggregated Insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationaggregatedinsights` |
| Display name | Conversation Aggregated Insights |
| Display (plural) | Conversation Aggregated Insights |
| Schema name | `msdyn_ConversationAggregatedInsights` |
| Entity set (Web API) | `msdyn_conversationaggregatedinsights` |
| Primary id attribute | `msdyn_conversationaggregatedinsightsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationaggregatedinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationaggregatedinsights(<guid>)
POST /api/data/v9.2/msdyn_conversationaggregatedinsights
PATCH /api/data/v9.2/msdyn_conversationaggregatedinsights(<guid>)
DELETE /api/data/v9.2/msdyn_conversationaggregatedinsights(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationAggregatedInsightsId`, `msdyn_ConversationDurationInMS`, `msdyn_CustomerLongestMonologueInMS`, `msdyn_Name`, `msdyn_SwitchCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationaggregatedinsights` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationaggregatedinsights_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationaggregatedinsights_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationaggregatedinsights_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationaggregatedinsights_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_conversationaggregatedinsights` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationaggregatedinsights` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationaggregatedinsights` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationaggregatedinsights_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationaggregatedinsights_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_conversationparticipantinsights_Con` | _n/a_ | `msdyn_conversationaggregatedinsights` | _n/a_ |
| `msdyn_msdyn_conversationsentiment_ConversationA` | _n/a_ | `msdyn_conversationaggregatedinsights` | _n/a_ |
| `msdyn_msdyn_conversationsubject_ConversationAgg` | _n/a_ | `msdyn_conversationaggregatedinsights` | _n/a_ |
| `msdyn_msdyn_sciconversation_ConversationAggrega` | _n/a_ | `msdyn_conversationaggregatedinsights` | _n/a_ |
| `msdyn_msdyn_scicustomemailhighlight_EmailHighli` | _n/a_ | `msdyn_emailhighlighttarget` | _n/a_ |
| `msdyn_msdyn_scicustomhighlight_HighlightTarget_` | _n/a_ | `msdyn_highlighttarget` | _n/a_ |


## Source

Generated from [msdyn_conversationaggregatedinsights.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationaggregatedinsights.md) on 2026-05-06.