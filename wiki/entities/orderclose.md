---
logical: "orderclose"
display: "Order Close"
entitySetName: "ordercloses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Order Close

Activity generated automatically when an order is closed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `orderclose` |
| Display name | Order Close |
| Display (plural) | Order Close Activities |
| Schema name | `OrderClose` |
| Entity set (Web API) | `ordercloses` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ordercloses?$select=subject&$top=10
GET /api/data/v9.2/ordercloses(<guid>)
POST /api/data/v9.2/ordercloses
PATCH /api/data/v9.2/ordercloses(<guid>)
DELETE /api/data/v9.2/ordercloses(<guid>)
```

## Attributes

Writable: **51** · Read-only: **27**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `Category`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `OrderNumber`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `Revision`, `SalesOrderId`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SalesOrderIdType`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (38)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_OrderCloses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_orderclose` |
| `activity_pointer_order_close` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_OrderCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_orderclose` |
| `bookableresourcebooking_OrderCloses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_orderclose` |
| `bookableresourcebookingheader_OrderCloses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_orderclose` |
| `bulkoperation_OrderCloses` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_orderclose` |
| `business_unit_order_close_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_orderclose` |
| `campaign_OrderCloses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_orderclose` |
| `campaignactivity_OrderCloses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_orderclose` |
| `entitlement_OrderCloses` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_orderclose` |
| `entitlementtemplate_OrderCloses` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_orderclose` |
| `incident_OrderCloses` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_orderclose` |
| `interactionforemail_OrderCloses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_orderclose` |
| `knowledgearticle_OrderCloses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_orderclose` |
| `knowledgebaserecord_OrderCloses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_orderclose` |
| `lead_OrderCloses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_orderclose` |
| `lk_orderclose_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_orderclose` |
| `lk_orderclose_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_orderclose` |
| `lk_orderclose_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_orderclose` |
| `lk_orderclose_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_orderclose` |
| `msdyn_customerasset_OrderCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_orderclose` |
| `mspp_adplacement_OrderCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_orderclose` |
| `mspp_pollplacement_OrderCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_orderclose` |
| `mspp_publishingstatetransitionrule_OrderCloses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_orderclose` |
| `mspp_redirect_OrderCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_orderclose` |
| `mspp_shortcut_OrderCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_orderclose` |
| `mspp_website_OrderCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_orderclose` |
| `opportunity_OrderCloses` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_orderclose` |
| `orderclose_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_orderclose` |
| `orderclose_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_orderclose` |
| `orderclose_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_orderclose` |
| `orderclose_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_orderclose` |
| `orderclose_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_orderclose` |
| `SalesOrder_OrderClose` | [salesorder](salesorder.md) | `salesorderid` | `salesorderid` |
| `service_orderclose` | [service](service.md) | `serviceid` | `serviceid_orderclose` |
| `site_OrderCloses` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_orderclose` |
| `team_orderclose` | [team](team.md) | `owningteam` | `owningteam_orderclose` |
| `user_orderclose` | [systemuser](systemuser.md) | `owninguser` | `owninguser_orderclose` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_OrderCloses` | _n/a_ | `originatingactivityid` | _n/a_ |
| `orderclose_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `OrderClose_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `OrderClose_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OrderClose_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `orderclose_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `orderclose_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `OrderClose_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [orderclose.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/orderclose.md) on 2026-05-06.