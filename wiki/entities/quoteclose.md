---
logical: "quoteclose"
display: "Quote Close"
entitySetName: "quotecloses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Quote Close

Activity generated when a quote is closed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `quoteclose` |
| Display name | Quote Close |
| Display (plural) | Quote Close Activities |
| Schema name | `QuoteClose` |
| Entity set (Web API) | `quotecloses` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/quotecloses?$select=subject&$top=10
GET /api/data/v9.2/quotecloses(<guid>)
POST /api/data/v9.2/quotecloses
PATCH /api/data/v9.2/quotecloses(<guid>)
DELETE /api/data/v9.2/quotecloses(<guid>)
```

## Attributes

Writable: **51** · Read-only: **27**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `Category`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `QuoteId`, `QuoteNumber`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `Revision`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `QuoteIdType`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (39)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_QuoteCloses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_quoteclose` |
| `activity_pointer_quote_close` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_QuoteCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_quoteclose` |
| `bookableresourcebooking_QuoteCloses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_quoteclose` |
| `bookableresourcebookingheader_QuoteCloses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_quoteclose` |
| `bulkoperation_QuoteCloses` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_quoteclose` |
| `business_unit_quote_close_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_quoteclose` |
| `campaign_QuoteCloses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_quoteclose` |
| `campaignactivity_QuoteCloses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_quoteclose` |
| `entitlement_QuoteCloses` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_quoteclose` |
| `entitlementtemplate_QuoteCloses` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_quoteclose` |
| `incident_QuoteCloses` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_quoteclose` |
| `interactionforemail_QuoteCloses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_quoteclose` |
| `knowledgearticle_QuoteCloses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_quoteclose` |
| `knowledgebaserecord_QuoteCloses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_quoteclose` |
| `lead_QuoteCloses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_quoteclose` |
| `lk_quoteclose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_quoteclose` |
| `lk_quoteclose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_quoteclose` |
| `lk_quoteclose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_quoteclose` |
| `lk_quoteclose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_quoteclose` |
| `msdyn_customerasset_QuoteCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_quoteclose` |
| `mspp_adplacement_QuoteCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_quoteclose` |
| `mspp_pollplacement_QuoteCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_quoteclose` |
| `mspp_publishingstatetransitionrule_QuoteCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_quoteclose` |
| `mspp_redirect_QuoteCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_quoteclose` |
| `mspp_shortcut_QuoteCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_quoteclose` |
| `mspp_website_QuoteCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_quoteclose` |
| `opportunity_QuoteCloses` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_quoteclose` |
| `Quote_QuoteClose` | [quote](quote.md) | `quoteid` | `quoteid` |
| `quote_QuoteCloses` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_quoteclose` |
| `quoteclose_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_quoteclose` |
| `quoteclose_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_quoteclose` |
| `quoteclose_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_quoteclose` |
| `quoteclose_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_quoteclose` |
| `quoteclose_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_quoteclose` |
| `service_quoteclose` | [service](service.md) | `serviceid` | `serviceid_quoteclose` |
| `site_QuoteCloses` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_quoteclose` |
| `team_quoteclose` | [team](team.md) | `owningteam` | `owningteam_quoteclose` |
| `user_quoteclose` | [systemuser](systemuser.md) | `owninguser` | `owninguser_quoteclose` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_QuoteCloses` | _n/a_ | `originatingactivityid` | _n/a_ |
| `quoteclose_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `QuoteClose_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `QuoteClose_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QuoteClose_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quoteclose_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quoteclose_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `QuoteClose_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [quoteclose.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/quoteclose.md) on 2026-05-06.