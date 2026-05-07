---
logical: "activitypointer"
display: "Activity"
entitySetName: "activitypointers"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Activity

Task performed, or to be performed, by a user. An activity is any action for which an entry can be made on a calendar.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activitypointer` |
| Display name | Activity |
| Display (plural) | Activities |
| Schema name | `ActivityPointer` |
| Entity set (Web API) | `activitypointers` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/activitypointers?$select=subject&$top=10
GET /api/data/v9.2/activitypointers(<guid>)
POST /api/data/v9.2/activitypointers
PATCH /api/data/v9.2/activitypointers(<guid>)
DELETE /api/data/v9.2/activitypointers(<guid>)
```

## Attributes

Writable: **34** · Read-only: **28**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `Community`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OwnerId`, `OwnerIdType`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `allparties`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `DescriptionBlobId`, `DescriptionBlobId_Name`, `ExchangeRate`, `FormattedScheduledEnd`, `FormattedScheduledStart`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (25)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_ActivityPointers` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `activitypointer_sendermailboxid_mailbox` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid` |
| `adx_invitation_ActivityPointers` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `business_unit_activitypointer` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `Contact_ActivityPointers` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `FileAttachment_ActivityPointer_DescriptionBlobId` | [fileattachment](fileattachment.md) | `descriptionblobid` | `descriptionblobid` |
| `interactionforemail_ActivityPointers` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail` |
| `KnowledgeArticle_ActivityPointers` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `KnowledgeBaseRecord_ActivityPointers` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord` |
| `lk_activitypointer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_activitypointer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_activitypointer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_activitypointer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `manualsla_activitypointer` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla` |
| `mspp_adplacement_ActivityPointers` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement` |
| `mspp_pollplacement_ActivityPointers` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement` |
| `mspp_publishingstatetransitionrule_ActivityPointers` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule` |
| `mspp_redirect_ActivityPointers` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect` |
| `mspp_shortcut_ActivityPointers` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut` |
| `mspp_website_ActivityPointers` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website` |
| `owner_activitypointers` | [owner](owner.md) | `ownerid` | `ownerid` |
| `sla_activitypointer` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla` |
| `team_activity` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_ActivityPointer` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_activity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activity_pointer_activity_mime_attachment` | _n/a_ | `objectid` | _n/a_ |
| `activity_pointer_adx_inviteredemption` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_adx_portalcomment` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_appointment` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_chat` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_email` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_fax` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_letter` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_phonecall` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_recurrencerule` | _n/a_ | `objectid` | _n/a_ |
| `activity_pointer_recurringappointmentmaster` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_socialactivity` | _n/a_ | `activityid` | _n/a_ |
| `activity_pointer_task` | _n/a_ | `activityid` | _n/a_ |
| `activitypointer_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `ActivityPointer_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ActivityPointer_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activitypointer_connections1` | _n/a_ | `record1id` | _n/a_ |
| `activitypointer_connections2` | _n/a_ | `record2id` | _n/a_ |
| `activitypointer_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `ActivityPointer_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `slakpiinstance_activitypointer` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [activitypointer.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/activitypointer.md) on 2026-05-06.