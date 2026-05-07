---
logical: "msdyn_conversationsentiment"
display: "Conversation Sentiment"
entitySetName: "msdyn_conversationsentiments"
primaryId: "msdyn_conversationsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **12** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_conversationaggregatedinsights`, `msdyn_conversationsentimentid`, `msdyn_customernegativesentiment`, `msdyn_customerpositivesentiment`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_customerneutralsentiment`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsentiment_ConversationA` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `lk_msdyn_conversationsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsentiment_SyncErrors` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_DuplicateMatchingRecord` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_DuplicateBaseRecord` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `baserecordid` | `baserecordid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_AsyncOperations` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_MailboxTrackingFolders` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_UserEntityInstanceDatas` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `objectid` | `objectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_ProcessSession` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_BulkDeleteFailures` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsentiment` |
| `msdyn_conversationsentiment_PrincipalObjectAttributeAccesses` | [msdyn_conversationsentiment](msdyn_conversationsentiment.md) | `objectid` | `objectid_msdyn_conversationsentiment` |


## Source

Generated from [msdyn_conversationsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsentiment')) on 2026-05-07.