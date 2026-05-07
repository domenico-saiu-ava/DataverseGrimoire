---
logical: "msdyn_conversationparticipantsentiment"
display: "Conversation Participant Sentiment"
entitySetName: "msdyn_conversationparticipantsentiments"
primaryId: "msdyn_conversationparticipantsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **12** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_conversationparticipantinsights`, `msdyn_conversationparticipantsentimentid`, `msdyn_name`, `msdyn_overallnegativesentiment`, `msdyn_overallpositivesentiment`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_overallneutralsentiment`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationparticipantsentiment_Co` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `lk_msdyn_conversationparticipantsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationparticipantsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationparticipantsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationparticipantsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationparticipantsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationparticipantsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationparticipantsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationparticipantsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationparticipantsentiment_SyncErrors` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_DuplicateMatchingRecord` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_DuplicateBaseRecord` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `baserecordid` | `baserecordid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_AsyncOperations` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_MailboxTrackingFolders` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_UserEntityInstanceDatas` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `objectid` | `objectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_ProcessSession` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_BulkDeleteFailures` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantsentiment` |
| `msdyn_conversationparticipantsentiment_PrincipalObjectAttributeAccesses` | [msdyn_conversationparticipantsentiment](msdyn_conversationparticipantsentiment.md) | `objectid` | `objectid_msdyn_conversationparticipantsentiment` |


## Source

Generated from [msdyn_conversationparticipantsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationparticipantsentiment')) on 2026-05-07.