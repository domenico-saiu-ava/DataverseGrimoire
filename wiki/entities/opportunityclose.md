---
logical: "opportunityclose"
display: "Opportunity Close"
entitySetName: "opportunitycloses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Opportunity Close

Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `opportunityclose` |
| Display name | Opportunity Close |
| Display (plural) | Opportunity Close Activities |
| Schema name | `OpportunityClose` |
| Entity set (Web API) | `opportunitycloses` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/opportunitycloses?$select=subject&$top=10
GET /api/data/v9.2/opportunitycloses(<guid>)
POST /api/data/v9.2/opportunitycloses
PATCH /api/data/v9.2/opportunitycloses(<guid>)
DELETE /api/data/v9.2/opportunitycloses(<guid>)
```

## Attributes

Writable: **53** · Read-only: **28**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualRevenue`, `ActualStart`, `BCC`, `Category`, `CC`, `Community`, `CompetitorId`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OpportunityId`, `OpportunityStateCode`, `OpportunityStatusCode`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `ActualRevenue_Base`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OpportunityIdType`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (39)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_OpportunityCloses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_opportunityclose` |
| `activity_pointer_opportunity_close` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_OpportunityCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_opportunityclose` |
| `bookableresourcebooking_OpportunityCloses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_opportunityclose` |
| `bookableresourcebookingheader_OpportunityCloses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_opportunityclose` |
| `bulkoperation_OpportunityCloses` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_opportunityclose` |
| `business_unit_opportunity_close_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_opportunityclose` |
| `campaign_OpportunityCloses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_opportunityclose` |
| `campaignactivity_OpportunityCloses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_opportunityclose` |
| `competitor_opportunity_activities` | [competitor](competitor.md) | `competitorid` | `competitorid` |
| `entitlement_OpportunityCloses` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_opportunityclose` |
| `entitlementtemplate_OpportunityCloses` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_opportunityclose` |
| `incident_OpportunityCloses` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_opportunityclose` |
| `interactionforemail_OpportunityCloses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_opportunityclose` |
| `knowledgearticle_OpportunityCloses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_opportunityclose` |
| `knowledgebaserecord_OpportunityCloses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_opportunityclose` |
| `lead_OpportunityCloses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_opportunityclose` |
| `lk_opportunityclose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_opportunityclose` |
| `lk_opportunityclose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_opportunityclose` |
| `lk_opportunityclose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_opportunityclose` |
| `lk_opportunityclose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_opportunityclose` |
| `msdyn_customerasset_OpportunityCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_opportunityclose` |
| `mspp_adplacement_OpportunityCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_opportunityclose` |
| `mspp_pollplacement_OpportunityCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_opportunityclose` |
| `mspp_publishingstatetransitionrule_OpportunityCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_opportunityclose` |
| `mspp_redirect_OpportunityCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_opportunityclose` |
| `mspp_shortcut_OpportunityCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_opportunityclose` |
| `mspp_website_OpportunityCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_opportunityclose` |
| `Opportunity_OpportunityClose` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `opportunity_OpportunityCloses` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_opportunityclose` |
| `opportunityclose_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_opportunityclose` |
| `opportunityclose_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_opportunityclose` |
| `opportunityclose_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_opportunityclose` |
| `opportunityclose_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_opportunityclose` |
| `service_opportunityclose` | [service](service.md) | `serviceid` | `serviceid_opportunityclose` |
| `site_OpportunityCloses` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_opportunityclose` |
| `team_opportunityclose` | [team](team.md) | `owningteam` | `owningteam_opportunityclose` |
| `transactioncurrency_opportunityclose` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_opportunityclose` |
| `user_opportunityclose` | [systemuser](systemuser.md) | `owninguser` | `owninguser_opportunityclose` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_OpportunityCloses` | _n/a_ | `originatingactivityid` | _n/a_ |
| `opportunityclose_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `OpportunityClose_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `OpportunityClose_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OpportunityClose_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunityclose_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunityclose_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `OpportunityClose_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [opportunityclose.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/opportunityclose.md) on 2026-05-06.