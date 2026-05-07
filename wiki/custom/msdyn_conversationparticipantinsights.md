---
logical: "msdyn_conversationparticipantinsights"
display: "Conversation Participant Insights"
entitySetName: "msdyn_conversationparticipantinsights"
primaryId: "msdyn_conversationparticipantinsightsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **25** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aadid`, `msdyn_avgpausebeforespeakinginms`, `msdyn_channelindex`, `msdyn_conversationaggregatedinsights`, `msdyn_conversationparticipantinsightsid`, `msdyn_displayname`, `msdyn_email`, `msdyn_longestmonologueinms`, `msdyn_name`, `msdyn_participantid`, `msdyn_participantrole`, `msdyn_participationmethod`, `msdyn_phonenumber`, `msdyn_switchcount`, `msdyn_talkingspeedwordspermin`, `msdyn_talktolistenratio`, `msdyn_tenantid`, `msdyn_user`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationparticipantinsights_account_msdyn_User` | [account](account.md) | `msdyn_user` | `msdyn_user_account` |
| `msdyn_msdyn_conversationparticipantinsights_Con` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_conversationparticipantinsights_contact_msdyn_User` | [contact](contact.md) | `msdyn_user` | `msdyn_user_contact` |
| `msdyn_msdyn_conversationparticipantinsights_systemuser_msdyn_User` | [systemuser](systemuser.md) | `msdyn_user` | `msdyn_user_systemuser` |
| `lk_msdyn_conversationparticipantinsights_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationparticipantinsights_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationparticipantinsights_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationparticipantinsights_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationparticipantinsights` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationparticipantinsights` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationparticipantinsights` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationparticipantinsights` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationactionitem_Conversation` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationparticipantsentiment_Co` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationquestion_ConversationPa` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationsegmentsentiment_Conver` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationsignal_ConversationPart` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationsummarysuggestion_Conve` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_SyncErrors` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_DuplicateMatchingRecord` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_DuplicateBaseRecord` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `baserecordid` | `baserecordid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_AsyncOperations` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_MailboxTrackingFolders` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_UserEntityInstanceDatas` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `objectid` | `objectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_ProcessSession` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_BulkDeleteFailures` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationparticipantinsights` |
| `msdyn_conversationparticipantinsights_PrincipalObjectAttributeAccesses` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `objectid` | `objectid_msdyn_conversationparticipantinsights` |


## Source

Generated from [msdyn_conversationparticipantinsights (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationparticipantinsights')) on 2026-05-07.