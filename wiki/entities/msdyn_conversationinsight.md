---
logical: "msdyn_conversationinsight"
display: "ConversationInsight"
entitySetName: "msdyn_conversationinsights"
primaryId: "msdyn_conversationinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# ConversationInsight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationinsight` |
| Display name | ConversationInsight |
| Display (plural) | ConversationInsights |
| Schema name | `msdyn_conversationinsight` |
| Entity set (Web API) | `msdyn_conversationinsights` |
| Primary id attribute | `msdyn_conversationinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationinsights(<guid>)
POST /api/data/v9.2/msdyn_conversationinsights
PATCH /api/data/v9.2/msdyn_conversationinsights(<guid>)
DELETE /api/data/v9.2/msdyn_conversationinsights(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `msdyn_CallAveragePause`, `msdyn_CallInsightDuration`, `msdyn_CallLongestCustomerMonologue`, `msdyn_CallSwitchesPerConversation`, `msdyn_CallTalkingSpeed`, `msdyn_CallTalkToListenRatio`, `msdyn_ConversationId`, `msdyn_conversationinsightId`, `msdyn_conversationinsighttarget`, `msdyn_conversationinsighttargetIdType`, `msdyn_copilotsummary`, `msdyn_copilotsummaryrequestcontext`, `msdyn_name`, `msdyn_summary`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_insights`, `msdyn_insights_Name`, `msdyn_TranscriptWithInsights`, `msdyn_TranscriptWithInsights_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_conversationinsight_msdyn_insights` | [fileattachment](fileattachment.md) | `msdyn_insights` | `msdyn_insights` |
| `FileAttachment_msdyn_conversationinsight_msdyn_TranscriptWithInsights` | [fileattachment](fileattachment.md) | `msdyn_transcriptwithinsights` | `msdyn_transcriptwithinsights` |
| `lk_msdyn_conversationinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget` | [appointment](appointment.md) | `msdyn_conversationinsighttarget` | `msdyn_conversationinsighttarget_appointment` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_ConversationId` |
| `msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget` | [phonecall](phonecall.md) | `msdyn_conversationinsighttarget` | `msdyn_conversationinsighttarget_phonecall` |
| `owner_msdyn_conversationinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationinsight_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationinsight.md) on 2026-05-06.