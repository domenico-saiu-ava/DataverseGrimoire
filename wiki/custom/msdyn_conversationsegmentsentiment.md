---
logical: "msdyn_conversationsegmentsentiment"
display: "Conversation Segment Sentiment"
entitySetName: "msdyn_conversationsegmentsentiments"
primaryId: "msdyn_conversationsegmentsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_confidence`, `msdyn_conversationparticipantinsights`, `msdyn_conversationsegmentsentimentid`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_sentimenttarget`, `msdyn_sentimenttype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsegmentsentiment_Conver` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationsegmentsentiment_msdyn_conversationsignal_msdyn_SentimentTarget` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `msdyn_sentimenttarget` | `msdyn_sentimenttarget_msdyn_conversationsignal` |
| `lk_msdyn_conversationsegmentsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsegmentsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsegmentsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsegmentsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsegmentsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsegmentsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsegmentsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsegmentsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsegmentsentiment_SyncErrors` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_DuplicateMatchingRecord` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_DuplicateBaseRecord` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `baserecordid` | `baserecordid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_AsyncOperations` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_MailboxTrackingFolders` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_UserEntityInstanceDatas` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `objectid` | `objectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_ProcessSession` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_BulkDeleteFailures` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsegmentsentiment` |
| `msdyn_conversationsegmentsentiment_PrincipalObjectAttributeAccesses` | [msdyn_conversationsegmentsentiment](msdyn_conversationsegmentsentiment.md) | `objectid` | `objectid_msdyn_conversationsegmentsentiment` |


## Source

Generated from [msdyn_conversationsegmentsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsegmentsentiment')) on 2026-05-07.