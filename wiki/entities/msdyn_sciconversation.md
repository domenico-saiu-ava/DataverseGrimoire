---
logical: "msdyn_sciconversation"
display: "SCI Conversation"
entitySetName: "msdyn_sciconversations"
primaryId: "msdyn_sciconversationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ChatId`, `msdyn_ClientFileName`, `msdyn_CommunicationType`, `msdyn_ConsentModeId`, `msdyn_ConversationAggregatedInsights`, `msdyn_ConversationId`, `msdyn_ConversationScope`, `msdyn_ConversationStartTime`, `msdyn_Direction`, `msdyn_Name`, `msdyn_OCRecording`, `msdyn_RelatedActivity`, `msdyn_RelatedActivityIdType`, `msdyn_SCIConversationId`, `msdyn_Transcript`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sciconversation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sciconversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sciconversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sciconversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sciconversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_sciconversation_appointment_msdyn_RelatedActivity` | [appointment](appointment.md) | `msdyn_relatedactivity` | `msdyn_relatedactivity_appointment` |
| `msdyn_msdyn_sciconversation_ConversationAggrega` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `msdyn_msdyn_sciconversation_OCRecording_msdyn_o` | [msdyn_ocrecording](msdyn_ocrecording.md) | `msdyn_ocrecording` | `msdyn_ocrecording` |
| `msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity` | [phonecall](phonecall.md) | `msdyn_relatedactivity` | `msdyn_relatedactivity_phonecall` |
| `msdyn_msdyn_sciconversation_Transcript_msdyn_tr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |
| `owner_msdyn_sciconversation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sciconversation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sciconversation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsystemtag_TagTarget_msd` | _n/a_ | `msdyn_tagtarget` | _n/a_ |
| `msdyn_msdyn_conversationtag_TagTarget_m` | _n/a_ | `msdyn_tagtarget` | _n/a_ |
| `msdyn_sciconversation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciconversation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciconversation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sciconversation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sciconversation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciconversation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sciconversation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciconversation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sciconversation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sciconversation.md) on 2026-05-06.