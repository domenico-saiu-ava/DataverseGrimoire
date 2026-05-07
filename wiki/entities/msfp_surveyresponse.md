---
logical: "msfp_surveyresponse"
display: "Customer Voice survey response"
entitySetName: "msfp_surveyresponses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey response

Response to a survey.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyresponse` |
| Display name | Customer Voice survey response |
| Display (plural) | Customer Voice survey responses |
| Schema name | `msfp_surveyresponse` |
| Entity set (Web API) | `msfp_surveyresponses` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_surveyresponses?$select=subject&$top=10
GET /api/data/v9.2/msfp_surveyresponses(<guid>)
POST /api/data/v9.2/msfp_surveyresponses
PATCH /api/data/v9.2/msfp_surveyresponses(<guid>)
DELETE /api/data/v9.2/msfp_surveyresponses(<guid>)
```

## Attributes

Writable: **72** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msfp_embedcontextparameters`, `msfp_isquestionresponsegenerated`, `msfp_isquestionresponsesgenerated`, `msfp_language`, `msfp_locale`, `msfp_name`, `msfp_npsscore`, `msfp_otherproperties`, `msfp_parent_survey_response_new`, `msfp_parentsurveyresponse`, `msfp_questionresponseslist`, `msfp_respondent`, `msfp_respondentemailaddress`, `msfp_responsetype`, `msfp_satisfactionmetriccalculated`, `msfp_satisfactionmetricvalue`, `msfp_sentiment`, `msfp_sourceresponseidentifier`, `msfp_sourcesurveyidentifier`, `msfp_Startdate`, `msfp_submitdate`, `msfp_surveyid`, `msfp_surveyinviteid`, `msfp_surveyresponse`, `msfp_surveyresponseurl`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (49)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msfp_surveyresponses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_surveyresponse` |
| `activity_pointer_msfp_surveyresponse` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_surveyresponse` |
| `adx_invitation_msfp_surveyresponses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyresponse` |
| `bookableresourcebooking_msfp_surveyresponses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_surveyresponse` |
| `bookableresourcebookingheader_msfp_surveyresponses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse` |
| `bulkoperation_msfp_surveyresponses` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_surveyresponse` |
| `campaign_msfp_surveyresponses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_surveyresponse` |
| `campaignactivity_msfp_surveyresponses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_surveyresponse` |
| `contact_msfp_surveyresponses` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_surveyresponse` |
| `contract_msfp_surveyresponses` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_surveyresponse` |
| `entitlement_msfp_surveyresponses` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_surveyresponse` |
| `entitlementtemplate_msfp_surveyresponses` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_surveyresponse` |
| `incident_msfp_surveyresponses` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_surveyresponse` |
| `interactionforemail_msfp_surveyresponses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_surveyresponse` |
| `invoice_msfp_surveyresponses` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_surveyresponse` |
| `knowledgearticle_msfp_surveyresponses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_surveyresponse` |
| `knowledgebaserecord_msfp_surveyresponses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_surveyresponse` |
| `lead_msfp_surveyresponses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_surveyresponse` |
| `msdyn_customerasset_msfp_surveyresponses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyresponse` |
| `msdyn_postalbum_msfp_surveyresponses` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyresponse` |
| `msdyn_salessuggestion_msfp_surveyresponses` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyresponse` |
| `msdyn_swarm_msfp_surveyresponses` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyresponse` |
| `msfp_msfp_survey_msfp_surveyresponse_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyresponse` |
| `msfp_msfp_surveyinvite_msfp_surveyresponse_surveyinviteid` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_surveyinviteid` | `msfp_surveyinviteid_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parent_survey_response_new` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parent_survey_response_new` | `msfp_parent_survey_response_new_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parentsurveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parentsurveyresponse` | `msfp_parentsurveyresponse_msfp_surveyresponse` |
| `msfp_surveyresponse_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_surveyresponse` |
| `msfp_surveyresponse_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_surveyresponse` |
| `msfp_surveyresponse_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_surveyresponse` |
| `msfp_surveyresponse_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_surveyresponse` |
| `msfp_surveyresponse_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_surveyresponse` |
| `msfp_surveyresponse_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_surveyresponse` |
| `msfp_surveyresponse_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_surveyresponse` |
| `msfp_surveyresponse_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_surveyresponse` |
| `mspp_adplacement_msfp_surveyresponses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyresponse` |
| `mspp_pollplacement_msfp_surveyresponses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyresponse` |
| `mspp_publishingstatetransitionrule_msfp_surveyresponses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyresponse` |
| `mspp_redirect_msfp_surveyresponses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyresponse` |
| `mspp_shortcut_msfp_surveyresponses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyresponse` |
| `mspp_website_msfp_surveyresponses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyresponse` |
| `opportunity_msfp_surveyresponses` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_surveyresponse` |
| `quote_msfp_surveyresponses` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_surveyresponse` |
| `salesorder_msfp_surveyresponses` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_surveyresponse` |
| `site_msfp_surveyresponses` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_surveyresponse` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msfp_surveyresponses` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msfp_msfp_surveyresponse_msfp_alert_surveyresponse` | _n/a_ | `msfp_surveyresponse` | _n/a_ |
| `msfp_msfp_surveyresponse_msfp_questionresponse_surveyresponseid` | _n/a_ | `msfp_surveyresponseid` | _n/a_ |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parent_survey_response_new` | _n/a_ | `msfp_parent_survey_response_new` | _n/a_ |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parentsurveyresponse` | _n/a_ | `msfp_parentsurveyresponse` | _n/a_ |
| `msfp_surveyresponse_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msfp_surveyresponse_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyresponse_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msfp_surveyresponse_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msfp_surveyresponse_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyresponse_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyresponse_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyresponse_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_surveyresponse.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_surveyresponse.md) on 2026-05-06.