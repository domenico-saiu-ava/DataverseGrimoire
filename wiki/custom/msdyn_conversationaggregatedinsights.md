---
logical: "msdyn_conversationaggregatedinsights"
display: "Conversation Aggregated Insights"
entitySetName: "msdyn_conversationaggregatedinsights"
primaryId: "msdyn_conversationaggregatedinsightsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationaggregatedinsightsid`, `msdyn_conversationdurationinms`, `msdyn_customerlongestmonologueinms`, `msdyn_name`, `msdyn_switchcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationaggregatedinsights_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationaggregatedinsights_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationaggregatedinsights_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationaggregatedinsights_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationaggregatedinsights` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationaggregatedinsights` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationaggregatedinsights` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationaggregatedinsights` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationparticipantinsights_Con` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_conversationsentiment_ConversationA` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_conversationsubject_ConversationAgg` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_sciconversation_ConversationAggrega` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_scicustomemailhighlight_EmailHighli` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_emailhighlighttarget` | `msdyn_emailhighlighttarget` |
| `msdyn_msdyn_scicustomhighlight_HighlightTarget_` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_highlighttarget` | `msdyn_highlighttarget` |
| `msdyn_conversationaggregatedinsights_SyncErrors` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_DuplicateMatchingRecord` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_DuplicateBaseRecord` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `baserecordid` | `baserecordid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_AsyncOperations` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_MailboxTrackingFolders` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_UserEntityInstanceDatas` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `objectid` | `objectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_ProcessSession` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_BulkDeleteFailures` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaggregatedinsights` |
| `msdyn_conversationaggregatedinsights_PrincipalObjectAttributeAccesses` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `objectid` | `objectid_msdyn_conversationaggregatedinsights` |


## Source

Generated from [msdyn_conversationaggregatedinsights (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationaggregatedinsights')) on 2026-05-07.