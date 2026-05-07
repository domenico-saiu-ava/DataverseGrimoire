---
logical: "serviceappointment"
display: "Service Activity"
entitySetName: "serviceappointments"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["appuntamento servizio", "attivita servizio"]
synonyms_en: ["service appointment", "service activity"]
---

# Service Activity

Activity offered by the organization to satisfy its customer's needs. Each service activity includes date, time, duration, and required resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceappointment` |
| Display name | Service Activity |
| Display (plural) | Service Activities |
| Schema name | `ServiceAppointment` |
| Entity set (Web API) | `serviceappointments` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/serviceappointments?$select=subject&$top=10
GET /api/data/v9.2/serviceappointments(<guid>)
POST /api/data/v9.2/serviceappointments
PATCH /api/data/v9.2/serviceappointments(<guid>)
DELETE /api/data/v9.2/serviceappointments(<guid>)
```

## Attributes

Writable: **53** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `Category`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsAllDayEvent`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `Location`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SiteId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (46)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_ServiceAppointments` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_serviceappointment` |
| `activity_pointer_service_appointment` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_ServiceAppointments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_serviceappointment` |
| `bookableresourcebooking_ServiceAppointments` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_serviceappointment` |
| `bookableresourcebookingheader_ServiceAppointments` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_serviceappointment` |
| `bulkoperation_ServiceAppointments` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_serviceappointment` |
| `business_unit_service_appointments` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_serviceappointment` |
| `Campaign_ServiceAppointments` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_serviceappointment` |
| `campaignactivity_ServiceAppointments` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_serviceappointment` |
| `Contact_ServiceAppointments` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_serviceappointment` |
| `Contract_ServiceAppointments` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_serviceappointment` |
| `entitlement_ServiceAppointments` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_serviceappointment` |
| `entitlementtemplate_ServiceAppointments` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_serviceappointment` |
| `Incident_ServiceAppointments` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_serviceappointment` |
| `interactionforemail_ServiceAppointments` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_serviceappointment` |
| `Invoice_ServiceAppointments` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_serviceappointment` |
| `KnowledgeArticle_ServiceAppointments` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_serviceappointment` |
| `KnowledgeBaseRecord_ServiceAppointments` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_serviceappointment` |
| `Lead_ServiceAppointments` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_serviceappointment` |
| `lk_serviceappointment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_serviceappointment` |
| `lk_serviceappointment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_serviceappointment` |
| `lk_serviceappointment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_serviceappointment` |
| `lk_serviceappointment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_serviceappointment` |
| `manualsla_serviceappointment` | [sla](sla.md) | `slaid` | `SLAId` |
| `msdyn_customerasset_ServiceAppointments` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_serviceappointment` |
| `msdyn_postalbum_ServiceAppointments` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_serviceappointment` |
| `msdyn_salessuggestion_ServiceAppointments` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_serviceappointment` |
| `msdyn_swarm_ServiceAppointments` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_serviceappointment` |
| `mspp_adplacement_ServiceAppointments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_serviceappointment` |
| `mspp_pollplacement_ServiceAppointments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_serviceappointment` |
| `mspp_publishingstatetransitionrule_ServiceAppointments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_serviceappointment` |
| `mspp_redirect_ServiceAppointments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_serviceappointment` |
| `mspp_shortcut_ServiceAppointments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_serviceappointment` |
| `mspp_website_ServiceAppointments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_serviceappointment` |
| `Opportunity_ServiceAppointments` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_serviceappointment` |
| `Quote_ServiceAppointments` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_serviceappointment` |
| `SalesOrder_ServiceAppointments` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_serviceappointment` |
| `service_service_appointments` | [service](service.md) | `serviceid` | `serviceid_serviceappointment` |
| `serviceappointment_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_serviceappointment` |
| `serviceappointment_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_serviceappointment` |
| `site_service_appointments` | [site](site.md) | `siteid` | `siteid` |
| `site_ServiceAppointments` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_serviceappointment` |
| `sla_serviceappointment` | [sla](sla.md) | `slainvokedid` | `slainvokedid_serviceappointment_sla` |
| `system_user_service_appointments` | [systemuser](systemuser.md) | `owninguser` | `owninguser_serviceappointment` |
| `team_service_appointments` | [team](team.md) | `owningteam` | `owningteam_serviceappointment` |
| `TransactionCurrency_ServiceAppointment` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_serviceappointment` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_ServiceAppointments` | _n/a_ | `originatingactivityid` | _n/a_ |
| `serviceappointment_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceappointment_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `ServiceAppointment_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `ServiceAppointment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ServiceAppointment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceappointment_connections1` | _n/a_ | `record1id` | _n/a_ |
| `serviceappointment_connections2` | _n/a_ | `record2id` | _n/a_ |
| `serviceappointment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceappointment_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `ServiceAppointment_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ServiceAppointment_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `ServiceAppointment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_serviceappointment` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [serviceappointment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/serviceappointment.md) on 2026-05-06.