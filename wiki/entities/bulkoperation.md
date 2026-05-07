---
logical: "bulkoperation"
display: "Quick Campaign"
entitySetName: "bulkoperations"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Quick Campaign

System operation used to perform lengthy and asynchronous operations on large data sets, such as distributing a campaign activity or quick campaign.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkoperation` |
| Display name | Quick Campaign |
| Display (plural) | Quick Campaigns |
| Schema name | `BulkOperation` |
| Entity set (Web API) | `bulkoperations` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkoperations?$select=subject&$top=10
GET /api/data/v9.2/bulkoperations(<guid>)
POST /api/data/v9.2/bulkoperations
PATCH /api/data/v9.2/bulkoperations(<guid>)
DELETE /api/data/v9.2/bulkoperations(<guid>)
```

## Attributes

Writable: **47** · Read-only: **33**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualEnd`, `BCC`, `CC`, `Community`, `CreatedRecordTypeCode`, `Customers`, `DeliveryPriorityCode`, `ErrorNumber`, `ExchangeItemId`, `ExchangeWebLink`, `FailureCount`, `from`, `ImportSequenceNumber`, `IsMapiPrivate`, `LastOnHoldTime`, `LeftVoiceMail`, `OperationTypeCode`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Parameters`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StatusCode`, `Subject`, `SuccessCount`, `TargetedRecordTypeCode`, `TargetMembersCount`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WorkflowInfo`

### Read-only

`ActivityTypeCode`, `ActualDurationMinutes`, `ActualStart`, `BulkOperationNumber`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `Description`, `ExchangeRate`, `InstanceTypeCode`, `IsBilled`, `IsRegularActivity`, `IsWorkflowCreated`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `StateCode`, `VersionNumber`

## Relationships

### Many-to-One (30)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_BulkOperations` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_bulkoperation` |
| `activity_pointer_BulkOperation` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_BulkOperations` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_bulkoperation` |
| `bookableresourcebooking_BulkOperations` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_bulkoperation` |
| `bookableresourcebookingheader_BulkOperations` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_bulkoperation` |
| `bulkoperation_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_bulkoperation` |
| `bulkoperation_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_bulkoperation` |
| `bulkoperation_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_bulkoperation` |
| `bulkoperation_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_bulkoperation` |
| `bulkoperation_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_bulkoperation` |
| `business_unit_BulkOperation_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_bulkoperation` |
| `CampaignActivity_BulkOperations` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_bulkoperation` |
| `contact_BulkOperations` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_bulkoperation` |
| `interactionforemail_BulkOperations` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_bulkoperation` |
| `knowledgearticle_BulkOperations` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_bulkoperation` |
| `knowledgebaserecord_BulkOperations` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_bulkoperation` |
| `lead_BulkOperations` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_bulkoperation` |
| `List_BulkOperations` | [list](list.md) | `regardingobjectid` | `regardingobjectid_list` |
| `lk_BulkOperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_bulkoperation` |
| `lk_BulkOperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_bulkoperation` |
| `lk_BulkOperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_bulkoperation` |
| `lk_BulkOperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_bulkoperation` |
| `mspp_adplacement_BulkOperations` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_bulkoperation` |
| `mspp_pollplacement_BulkOperations` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_bulkoperation` |
| `mspp_publishingstatetransitionrule_BulkOperations` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_bulkoperation` |
| `mspp_redirect_BulkOperations` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_bulkoperation` |
| `mspp_shortcut_BulkOperations` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_bulkoperation` |
| `mspp_website_BulkOperations` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_bulkoperation` |
| `team_BulkOperation` | [team](team.md) | `owningteam` | `owningteam_bulkoperation` |
| `user_BulkOperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser_bulkoperation` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bulkoperation_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `BulkOperation_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `BulkOperation_Appointment` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_CampaignResponse` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_Email` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_Letter` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_logs` | _n/a_ | `bulkoperationid` | _n/a_ |
| `BulkOperation_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_Phonecall` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `BulkOperation_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `bulkoperation_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_RecurringAppointmentMaster` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_SocialActivity` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperation_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BulkOperation_Accounts` | [bulkoperationid](bulkoperationid.md) | _n/a_ | _n/a_ |
| `BulkOperation_Contacts` | [bulkoperationid](bulkoperationid.md) | _n/a_ | _n/a_ |
| `BulkOperation_Leads` | [bulkoperationid](bulkoperationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [bulkoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bulkoperation.md) on 2026-05-06.