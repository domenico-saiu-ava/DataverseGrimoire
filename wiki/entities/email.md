---
logical: "email"
display: "Email"
entitySetName: "emails"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["email", "e-mail", "messaggio email", "posta elettronica"]
synonyms_en: ["email", "e-mail", "message"]
---

# Email

Activity that is delivered using email protocols.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `email` |
| Display name | Email |
| Display (plural) | Email Messages |
| Schema name | `Email` |
| Entity set (Web API) | `emails` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/emails?$select=subject&$top=10
GET /api/data/v9.2/emails(<guid>)
POST /api/data/v9.2/emails
PATCH /api/data/v9.2/emails(<guid>)
DELETE /api/data/v9.2/emails(<guid>)
```

## Attributes

Writable: **75** · Read-only: **40**

### Writable

`AcceptingEntityId`, `AcceptingEntityTypeCode`, `ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `AttachmentOpenCount`, `BaseConversationIndexHash`, `bcc`, `Category`, `cc`, `ConversationTrackingId`, `CorrelatedActivityId`, `correlatedsubjectchanged`, `DelayedEmailSendTime`, `DeliveryAttempts`, `DeliveryPriorityCode`, `DeliveryReceiptRequested`, `Description`, `DirectionCode`, `EmailReminderExpiryTime`, `EmailReminderText`, `EmailReminderType`, `EmailTrackingId`, `FollowEmailUserPreference`, `from`, `ImportSequenceNumber`, `InternetMessageHeaders`, `IsBilled`, `IsDuplicateSenderUnresolved`, `IsWorkflowCreated`, `LastOnHoldTime`, `LastOpenedTime`, `LinksClickedCount`, `MessageId`, `MessageIdDupCheck`, `MimeType`, `Notifications`, `OpenCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentActivityId`, `PriorityCode`, `ProcessId`, `PurviewRights`, `ReadReceiptRequested`, `ReceivingMailboxId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `related`, `ReminderActionCardId`, `ReservedForInternalUse`, `ScheduledEnd`, `ScheduledStart`, `Sender`, `SensitivityLabelId`, `SensitivityLabelInfo`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubmittedBy`, `TemplateId`, `TimeZoneRuleVersionNumber`, `to`, `ToRecipients`, `TrackingToken`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `AttachmentCount`, `Compressed`, `ConversationIndex`, `CorrelationMethod`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DescriptionBlobId`, `DescriptionBlobId_Name`, `EmailReminderStatus`, `EmailSender`, `EmailSenderObjectTypeCode`, `ExchangeRate`, `InReplyTo`, `IsEmailFollowed`, `IsEmailReminderSet`, `IsRegularActivity`, `IsSafeDescriptionTruncated`, `IsUnsafe`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ParentSensitivityLabelId`, `PostponeEmailProcessingUntil`, `ReplyCount`, `SafeDescription`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SendersAccount`, `SendersAccountObjectTypeCode`, `SentOn`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (39)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Email_EmailSender` | [account](account.md) | `emailsender` | `emailsender_account` |
| `Account_Email_SendersAccount` | [account](account.md) | `sendersaccount` | `sendersaccount` |
| `Account_Emails` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_email` |
| `activity_pointer_email` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_Emails` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_email` |
| `AsyncOperation_Emails` | [asyncoperation](asyncoperation.md) | `regardingobjectid` | `regardingobjectid_asyncoperation` |
| `business_unit_email_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_email` |
| `Contact_Email_EmailSender` | [contact](contact.md) | `emailsender` | `emailsender_contact` |
| `Contact_Emails` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_email` |
| `email_acceptingentity_queue` | [queue](queue.md) | `acceptingentityid` | `acceptingentityid` |
| `email_acceptingentity_systemuser` | [systemuser](systemuser.md) | `acceptingentityid` | `acceptingentityid` |
| `email_email_CorrelatedActivityId` | [email](email.md) | `correlatedactivityid` | `CorrelatedActivityId_Email` |
| `email_email_parentactivityid` | [email](email.md) | `parentactivityid` | `parentactivityid` |
| `Email_EmailTemplate` | [template](template.md) | `templateid` | `templateid` |
| `email_sendermailboxid_mailbox` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_email` |
| `FileAttachment_Email_DescriptionBlobId` | [fileattachment](fileattachment.md) | `descriptionblobid` | `descriptionblobid_email` |
| `KnowledgeArticle_Emails` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_email` |
| `KnowledgeBaseRecord_Emails` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_email` |
| `lk_email_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_email` |
| `lk_email_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_email` |
| `lk_email_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_email` |
| `lk_email_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_email` |
| `mailbox_email_ReceivingMailboxId` | [mailbox](mailbox.md) | `receivingmailboxid` | `ReceivingMailboxId_Email` |
| `manualsla_email` | [sla](sla.md) | `slaid` | `sla_email_sla` |
| `mspp_adplacement_Emails` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_email` |
| `mspp_pollplacement_Emails` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_email` |
| `mspp_publishingstatetransitionrule_Emails` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_email` |
| `mspp_redirect_Emails` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_email` |
| `mspp_shortcut_Emails` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_email` |
| `mspp_website_Emails` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_email` |
| `owner_emails` | [owner](owner.md) | `ownerid` | `ownerid_email` |
| `processstage_emails` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `Queue_Email_EmailSender` | [queue](queue.md) | `emailsender` | `emailsender_queue` |
| `sensitivitylabel_email_SensitivityLabelId` | [sensitivitylabel](sensitivitylabel.md) | `sensitivitylabelid` | `SensitivityLabelId_Email` |
| `sla_email` | [sla](sla.md) | `slainvokedid` | `slainvokedid_email_sla` |
| `SystemUser_Email_EmailSender` | [systemuser](systemuser.md) | `emailsender` | `emailsender_systemuser` |
| `team_email` | [team](team.md) | `owningteam` | `owningteam_email` |
| `TransactionCurrency_Email` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_email` |
| `user_email` | [systemuser](systemuser.md) | `owninguser` | `owninguser_email` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `email_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `email_activity_mime_attachment` | _n/a_ | `objectid` | _n/a_ |
| `email_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `Email_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Email_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Email_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `email_connections1` | _n/a_ | `record1id` | _n/a_ |
| `email_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Email_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Email_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `email_email_CorrelatedActivityId` | _n/a_ | `correlatedactivityid` | _n/a_ |
| `email_email_parentactivityid` | _n/a_ | `parentactivityid` | _n/a_ |
| `email_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `email_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Email_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Email_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `Email_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_email` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [email.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/email.md) on 2026-05-06.