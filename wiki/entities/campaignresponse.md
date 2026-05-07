---
logical: "campaignresponse"
display: "Campaign Response"
entitySetName: "campaignresponses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["risposta campagna"]
synonyms_en: ["campaign response"]
---

# Campaign Response

Response from an existing or a potential new customer for a campaign.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `campaignresponse` |
| Display name | Campaign Response |
| Display (plural) | Campaign Responses |
| Schema name | `CampaignResponse` |
| Entity set (Web API) | `campaignresponses` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/campaignresponses?$select=subject&$top=10
GET /api/data/v9.2/campaignresponses(<guid>)
POST /api/data/v9.2/campaignresponses
PATCH /api/data/v9.2/campaignresponses(<guid>)
DELETE /api/data/v9.2/campaignresponses(<guid>)
```

## Attributes

Writable: **65** · Read-only: **24**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `Category`, `CC`, `ChannelTypeCode`, `Community`, `CompanyName`, `Customer`, `Customers`, `DeliveryPriorityCode`, `Description`, `EMailAddress`, `ExchangeItemId`, `ExchangeWebLink`, `Fax`, `FirstName`, `from`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastName`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `Organizer`, `OriginatingActivityId`, `OriginatingActivityIdTypeCode`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partner`, `Partners`, `PriorityCode`, `ProcessId`, `PromotionCodeName`, `ReceivedOn`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ResponseCode`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `Telephone`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `YomiCompanyName`, `YomiFirstName`, `YomiLastName`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (52)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_CampaignResponses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_campaignresponse` |
| `activity_campaignresponse` | [activitypointer](activitypointer.md) | `originatingactivityid` | `originatingactivityid_activitypointer` |
| `activity_pointer_campaignresponse` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_CampaignResponses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_campaignresponse` |
| `appointment_campaignresponse` | [appointment](appointment.md) | `originatingactivityid` | `originatingactivityid_appointment` |
| `bookableresourcebooking_CampaignResponses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_campaignresponse` |
| `bookableresourcebookingheader_CampaignResponses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_campaignresponse` |
| `BulkOperation_CampaignResponse` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_campaignresponse` |
| `business_unit_campaignresponse_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_campaignresponse` |
| `Campaign_CampaignResponses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_campaignresponse` |
| `campaignactivity_CampaignResponses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_campaignresponse` |
| `CampaignResponse_adx_inviteredemptions` | [adx_inviteredemption](adx_inviteredemption.md) | `originatingactivityid` | `originatingactivityid_adx_inviteredemption_campaignresponse` |
| `CampaignResponse_adx_portalcomments` | [adx_portalcomment](adx_portalcomment.md) | `originatingactivityid` | `originatingactivityid_adx_portalcomment_campaignresponse` |
| `CampaignResponse_IncidentResolutions` | [incidentresolution](incidentresolution.md) | `originatingactivityid` | `originatingactivityid_incidentresolution_campaignresponse` |
| `campaignresponse_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_campaignresponse` |
| `CampaignResponse_msdyn_copilottranscripts` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `originatingactivityid` | `originatingactivityid_msdyn_copilottranscript_campaignresponse` |
| `CampaignResponse_msdyn_ocliveworkitems` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `originatingactivityid` | `originatingactivityid_msdyn_ocliveworkitem_campaignresponse` |
| `CampaignResponse_msdyn_ocsessions` | [msdyn_ocsession](msdyn_ocsession.md) | `originatingactivityid` | `originatingactivityid_msdyn_ocsession_campaignresponse` |
| `CampaignResponse_msfp_alerts` | [msfp_alert](msfp_alert.md) | `originatingactivityid` | `originatingactivityid_msfp_alert_campaignresponse` |
| `CampaignResponse_msfp_surveyinvites` | [msfp_surveyinvite](msfp_surveyinvite.md) | `originatingactivityid` | `originatingactivityid_msfp_surveyinvite_campaignresponse` |
| `CampaignResponse_msfp_surveyresponses` | [msfp_surveyresponse](msfp_surveyresponse.md) | `originatingactivityid` | `originatingactivityid_msfp_surveyresponse_campaignresponse` |
| `CampaignResponse_OpportunityCloses` | [opportunityclose](opportunityclose.md) | `originatingactivityid` | `originatingactivityid_opportunityclose_campaignresponse` |
| `CampaignResponse_OrderCloses` | [orderclose](orderclose.md) | `originatingactivityid` | `originatingactivityid_orderclose_campaignresponse` |
| `campaignresponse_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_campaignresponse` |
| `CampaignResponse_QuoteCloses` | [quoteclose](quoteclose.md) | `originatingactivityid` | `originatingactivityid_quoteclose_campaignresponse` |
| `CampaignResponse_ServiceAppointments` | [serviceappointment](serviceappointment.md) | `originatingactivityid` | `originatingactivityid_serviceappointment_campaignresponse` |
| `campaignresponse_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_campaignresponse` |
| `campaignresponse_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_campaignresponse` |
| `contact_CampaignResponses` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_campaignresponse` |
| `email_campaignresponse` | [email](email.md) | `originatingactivityid` | `originatingactivityid_email` |
| `fax_campaignresponse` | [fax](fax.md) | `originatingactivityid` | `originatingactivityid_fax` |
| `interactionforemail_CampaignResponses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_campaignresponse` |
| `knowledgearticle_CampaignResponses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_campaignresponse` |
| `knowledgebaserecord_CampaignResponses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_campaignresponse` |
| `lead_CampaignResponses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_campaignresponse` |
| `letter_campaignresponse` | [letter](letter.md) | `originatingactivityid` | `originatingactivityid_letter` |
| `lk_campaignresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_campaignresponse` |
| `lk_campaignresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_campaignresponse` |
| `lk_campaignresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_campaignresponse` |
| `lk_campaignresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_campaignresponse` |
| `mspp_adplacement_CampaignResponses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_campaignresponse` |
| `mspp_pollplacement_CampaignResponses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_campaignresponse` |
| `mspp_publishingstatetransitionrule_CampaignResponses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_campaignresponse` |
| `mspp_redirect_CampaignResponses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_campaignresponse` |
| `mspp_shortcut_CampaignResponses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_campaignresponse` |
| `mspp_website_CampaignResponses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_campaignresponse` |
| `phonecall_campaignresponse` | [phonecall](phonecall.md) | `originatingactivityid` | `originatingactivityid_phonecall` |
| `processstage_campaignresponses` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `recurringappointmentmaster_campaignresponse` | [recurringappointmentmaster](recurringappointmentmaster.md) | `originatingactivityid` | `originatingactivityid_recurringappointmentmaster` |
| `team_campaignresponse` | [team](team.md) | `owningteam` | `owningteam_campaignresponse` |
| `TransactionCurrency_CampaignResponse` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_campaignresponse` |
| `user_campaignresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser_campaignresponse` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignresponse_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `CampaignResponse_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `CampaignResponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignResponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignResponse_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `CampaignResponse_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `CampaignResponse_Lead` | _n/a_ | `relatedobjectid` | _n/a_ |
| `campaignresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaignresponse_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `CampaignResponse_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CampaignResponse_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `CampaignResponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [campaignresponse.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/campaignresponse.md) on 2026-05-06.