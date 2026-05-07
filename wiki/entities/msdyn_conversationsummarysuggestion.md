---
logical: "msdyn_conversationsummarysuggestion"
display: "Conversation Summary Suggestion"
entitySetName: "msdyn_conversationsummarysuggestions"
primaryId: "msdyn_conversationsummarysuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Summary Suggestion

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsummarysuggestion` |
| Display name | Conversation Summary Suggestion |
| Display (plural) | Conversation Summary Suggestions |
| Schema name | `msdyn_ConversationSummarySuggestion` |
| Entity set (Web API) | `msdyn_conversationsummarysuggestions` |
| Primary id attribute | `msdyn_conversationsummarysuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsummarysuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsummarysuggestions(<guid>)
POST /api/data/v9.2/msdyn_conversationsummarysuggestions
PATCH /api/data/v9.2/msdyn_conversationsummarysuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsummarysuggestions(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Content`, `msdyn_ConversationParticipantInsights`, `msdyn_ConversationSummarySuggestionId`, `msdyn_ConversationSummarySuggestionType`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Locale`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_Selected`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsummarysuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsummarysuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummarysuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummarysuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummarysuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsummarysuggestion_Conve` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `owner_msdyn_conversationsummarysuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsummarysuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsummarysuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummarysuggestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsummarysuggestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsummarysuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsummarysuggestion.md) on 2026-05-06.