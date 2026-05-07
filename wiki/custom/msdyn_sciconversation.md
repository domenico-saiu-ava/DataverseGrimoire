---
logical: "msdyn_sciconversation"
display: "SCI Conversation"
entitySetName: "msdyn_sciconversations"
primaryId: "msdyn_sciconversationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SCI Conversation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sciconversation` |
| Display name | SCI Conversation |
| Display (plural) | SCI Conversations |
| Schema name | `msdyn_SCIConversation` |
| Entity set (Web API) | `msdyn_sciconversations` |
| Primary id attribute | `msdyn_sciconversationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sciconversations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sciconversations(<guid>)
POST /api/data/v9.2/msdyn_sciconversations
PATCH /api/data/v9.2/msdyn_sciconversations(<guid>)
DELETE /api/data/v9.2/msdyn_sciconversations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_chatid`, `msdyn_clientfilename`, `msdyn_communicationtype`, `msdyn_consentmodeid`, `msdyn_conversationaggregatedinsights`, `msdyn_conversationid`, `msdyn_conversationscope`, `msdyn_conversationstarttime`, `msdyn_direction`, `msdyn_name`, `msdyn_ocrecording`, `msdyn_relatedactivity`, `msdyn_sciconversationid`, `msdyn_transcript`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sciconversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sciconversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sciconversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sciconversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sciconversation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sciconversation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sciconversation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sciconversation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity` | [appointment](appointment.md) | `msdyn_relatedactivity` | `msdyn_relatedactivity_appointment` |
| `msdyn_msdyn_sciconversation_ConversationAggrega` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_sciconversation_OCRecording_msdyn_o` | [msdyn_ocrecording](msdyn_ocrecording.md) | `msdyn_ocrecording` | `msdyn_ocrecording` |
| `msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity` | [phonecall](phonecall.md) | `msdyn_relatedactivity` | `msdyn_relatedactivity_phonecall` |
| `msdyn_msdyn_sciconversation_Transcript_msdyn_tr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sciconversation_SyncErrors` | [msdyn_sciconversation](msdyn_sciconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciconversation` |
| `msdyn_sciconversation_DuplicateMatchingRecord` | [msdyn_sciconversation](msdyn_sciconversation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sciconversation` |
| `msdyn_sciconversation_DuplicateBaseRecord` | [msdyn_sciconversation](msdyn_sciconversation.md) | `baserecordid` | `baserecordid_msdyn_sciconversation` |
| `msdyn_sciconversation_AsyncOperations` | [msdyn_sciconversation](msdyn_sciconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciconversation` |
| `msdyn_sciconversation_MailboxTrackingFolders` | [msdyn_sciconversation](msdyn_sciconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciconversation` |
| `msdyn_sciconversation_UserEntityInstanceDatas` | [msdyn_sciconversation](msdyn_sciconversation.md) | `objectid` | `objectid_msdyn_sciconversation` |
| `msdyn_sciconversation_ProcessSession` | [msdyn_sciconversation](msdyn_sciconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciconversation` |
| `msdyn_sciconversation_BulkDeleteFailures` | [msdyn_sciconversation](msdyn_sciconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciconversation` |
| `msdyn_sciconversation_PrincipalObjectAttributeAccesses` | [msdyn_sciconversation](msdyn_sciconversation.md) | `objectid` | `objectid_msdyn_sciconversation` |
| `msdyn_msdyn_conversationsystemtag_TagTarget_msd` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |
| `msdyn_msdyn_conversationtag_TagTarget_m` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |


## Source

Generated from [msdyn_sciconversation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sciconversation')) on 2026-05-07.