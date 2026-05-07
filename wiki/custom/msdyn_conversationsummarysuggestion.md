---
logical: "msdyn_conversationsummarysuggestion"
display: "Conversation Summary Suggestion"
entitySetName: "msdyn_conversationsummarysuggestions"
primaryId: "msdyn_conversationsummarysuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_content`, `msdyn_conversationparticipantinsights`, `msdyn_conversationsummarysuggestionid`, `msdyn_conversationsummarysuggestiontype`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_locale`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_selected`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsummarysuggestion_Conve` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `lk_msdyn_conversationsummarysuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsummarysuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsummarysuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsummarysuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsummarysuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsummarysuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsummarysuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsummarysuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsummarysuggestion_SyncErrors` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_DuplicateMatchingRecord` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_DuplicateBaseRecord` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `baserecordid` | `baserecordid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_AsyncOperations` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_MailboxTrackingFolders` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_UserEntityInstanceDatas` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `objectid` | `objectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_ProcessSession` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_BulkDeleteFailures` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsummarysuggestion` |
| `msdyn_conversationsummarysuggestion_PrincipalObjectAttributeAccesses` | [msdyn_conversationsummarysuggestion](msdyn_conversationsummarysuggestion.md) | `objectid` | `objectid_msdyn_conversationsummarysuggestion` |


## Source

Generated from [msdyn_conversationsummarysuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsummarysuggestion')) on 2026-05-07.