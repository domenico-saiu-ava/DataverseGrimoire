---
logical: "campaignactivity"
display: "Campaign Activity"
entitySetName: "campaignactivities"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["attivita campagna", "campagna attivita"]
synonyms_en: ["campaign activity"]
---

# Campaign Activity

Task performed, or to be performed, by a user for planning or running a campaign.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `campaignactivity` |
| Display name | Campaign Activity |
| Display (plural) | Campaign Activities |
| Schema name | `CampaignActivity` |
| Entity set (Web API) | `campaignactivities` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/campaignactivities?$select=subject&$top=10
GET /api/data/v9.2/campaignactivities(<guid>)
POST /api/data/v9.2/campaignactivities
PATCH /api/data/v9.2/campaignactivities(<guid>)
DELETE /api/data/v9.2/campaignactivities(<guid>)
```

## Attributes

Writable: **54** · Read-only: **27**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualCost`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `BudgetedCost`, `Category`, `CC`, `ChannelTypeCode`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `DoNotSendOnOptOut`, `ExchangeItemId`, `ExchangeWebLink`, `ExcludeIfContactedInXDays`, `from`, `IgnoreInactiveListMembers`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TraversedPath`, `TypeCode`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `ActualCost_Base`, `BudgetedCost_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activity_pointer_campaignactivity` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_CampaignActivities` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_campaignactivity` |
| `bookableresourcebooking_CampaignActivities` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_campaignactivity` |
| `bookableresourcebookingheader_CampaignActivities` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_campaignactivity` |
| `business_unit_campaignactivity_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_campaignactivity` |
| `Campaign_CampaignActivities` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_campaignactivity` |
| `campaignactivity_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_campaignactivity` |
| `campaignactivity_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_campaignactivity` |
| `campaignactivity_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_campaignactivity` |
| `campaignactivity_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_campaignactivity` |
| `lk_campaignactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_campaignactivity` |
| `lk_campaignactivity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_campaignactivity` |
| `lk_campaignactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_campaignactivity` |
| `lk_campaignactivity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_campaignactivity` |
| `mspp_adplacement_CampaignActivities` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_campaignactivity` |
| `mspp_pollplacement_CampaignActivities` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_campaignactivity` |
| `mspp_publishingstatetransitionrule_CampaignActivities` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_campaignactivity` |
| `mspp_redirect_CampaignActivities` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_campaignactivity` |
| `mspp_shortcut_CampaignActivities` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_campaignactivity` |
| `mspp_website_CampaignActivities` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_campaignactivity` |
| `processstage_campaignactivities` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `team_campaignactivity` | [team](team.md) | `owningteam` | `owningteam_campaignactivity` |
| `transactioncurrency_campaignactivity` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_campaignactivity` |
| `user_campaignactivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser_campaignactivity` |

### One-to-Many (38)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignactivity_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `campaignactivity_activityparties` | _n/a_ | `partyid` | _n/a_ |
| `CampaignActivity_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `CampaignActivity_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_BulkOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_CampaignResponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_connections1` | _n/a_ | `record1id` | _n/a_ |
| `campaignactivity_connections2` | _n/a_ | `record2id` | _n/a_ |
| `CampaignActivity_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_logs` | _n/a_ | `campaignactivityid` | _n/a_ |
| `CampaignActivity_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `CampaignActivity_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `campaignactivity_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignactivity_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignActivity_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignActivity_Accounts` | [campaignactivityid](campaignactivityid.md) | _n/a_ | _n/a_ |
| `CampaignActivity_Contacts` | [campaignactivityid](campaignactivityid.md) | _n/a_ | _n/a_ |
| `CampaignActivity_Leads` | [campaignactivityid](campaignactivityid.md) | _n/a_ | _n/a_ |
| `campaignactivitylist_association` | [campaignactivityid](campaignactivityid.md) | _n/a_ | _n/a_ |
| `campaignactivitysalesliterature_association` | [campaignactivityid](campaignactivityid.md) | _n/a_ | _n/a_ |

## Source

Generated from [campaignactivity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/campaignactivity.md) on 2026-05-06.