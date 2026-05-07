---
logical: "msfp_alert"
display: "Customer Voice alert"
entitySetName: "msfp_alerts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice alert

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_alert` |
| Display name | Customer Voice alert |
| Display (plural) | Customer Voice alert |
| Schema name | `msfp_alert` |
| Entity set (Web API) | `msfp_alerts` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_alerts?$select=subject&$top=10
GET /api/data/v9.2/msfp_alerts(<guid>)
POST /api/data/v9.2/msfp_alerts
PATCH /api/data/v9.2/msfp_alerts(<guid>)
DELETE /api/data/v9.2/msfp_alerts(<guid>)
```

## Attributes

Writable: **63** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msfp_alertrule`, `msfp_assigneeemail`, `msfp_assigneename`, `msfp_customeremail`, `msfp_customername`, `msfp_notes`, `msfp_project`, `msfp_questions`, `msfp_reason`, `msfp_resolutiondetail`, `msfp_resolutionsentiment`, `msfp_resolveremail`, `msfp_resolvername`, `msfp_satisfactionmetric`, `msfp_survey`, `msfp_surveyresponse`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (50)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msfp_alerts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_alert` |
| `activity_pointer_msfp_alert` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_alert` |
| `adx_invitation_msfp_alerts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_alert` |
| `bookableresourcebooking_msfp_alerts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_alert` |
| `bookableresourcebookingheader_msfp_alerts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_alert` |
| `bulkoperation_msfp_alerts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_alert` |
| `campaign_msfp_alerts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_alert` |
| `campaignactivity_msfp_alerts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_alert` |
| `contact_msfp_alerts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_alert` |
| `contract_msfp_alerts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_alert` |
| `entitlement_msfp_alerts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_alert` |
| `entitlementtemplate_msfp_alerts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_alert` |
| `incident_msfp_alerts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_alert` |
| `interactionforemail_msfp_alerts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_alert` |
| `invoice_msfp_alerts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_alert` |
| `knowledgearticle_msfp_alerts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_alert` |
| `knowledgebaserecord_msfp_alerts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_alert` |
| `lead_msfp_alerts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_alert` |
| `msdyn_customerasset_msfp_alerts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_alert` |
| `msdyn_postalbum_msfp_alerts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_alert` |
| `msdyn_salessuggestion_msfp_alerts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_alert` |
| `msdyn_swarm_msfp_alerts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_alert` |
| `msfp_alert_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_alert` |
| `msfp_alert_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_alert` |
| `msfp_alert_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_alert` |
| `msfp_alert_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_alert` |
| `msfp_alert_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_alert` |
| `msfp_alert_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_alert` |
| `msfp_alert_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_alert` |
| `msfp_alert_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_alert` |
| `msfp_alert_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_alert` |
| `msfp_alert_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_alert` |
| `msfp_alert_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_alert` |
| `msfp_alert_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_alert` |
| `msfp_alert_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_alert` |
| `msfp_msfp_alertrule_msfp_alert_alertrule` | [msfp_alertrule](msfp_alertrule.md) | `msfp_alertrule` | `msfp_alertrule` |
| `msfp_msfp_project_msfp_alert_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_satisfactionmetric_msfp_alert` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |
| `msfp_msfp_survey_msfp_alert_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_surveyresponse_msfp_alert_surveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponse` | `msfp_surveyresponse` |
| `mspp_adplacement_msfp_alerts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_alert` |
| `mspp_pollplacement_msfp_alerts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_alert` |
| `mspp_publishingstatetransitionrule_msfp_alerts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_alert` |
| `mspp_redirect_msfp_alerts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_alert` |
| `mspp_shortcut_msfp_alerts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_alert` |
| `mspp_website_msfp_alerts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_alert` |
| `opportunity_msfp_alerts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_alert` |
| `quote_msfp_alerts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_alert` |
| `salesorder_msfp_alerts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_alert` |
| `site_msfp_alerts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_alert` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msfp_alerts` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msfp_alert_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msfp_alert_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msfp_alert_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msfp_alert_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msfp_alert_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_alert_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_alert_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_alert_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_alert_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msfp_alert_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_alert.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_alert.md) on 2026-05-06.