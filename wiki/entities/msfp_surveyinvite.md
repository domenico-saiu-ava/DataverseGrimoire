---
logical: "msfp_surveyinvite"
display: "Customer Voice survey invite"
entitySetName: "msfp_surveyinvites"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey invite

Activity that tracks a survey invitation sent to a person.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyinvite` |
| Display name | Customer Voice survey invite |
| Display (plural) | Customer Voice survey invites |
| Schema name | `msfp_surveyinvite` |
| Entity set (Web API) | `msfp_surveyinvites` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_surveyinvites?$select=subject&$top=10
GET /api/data/v9.2/msfp_surveyinvites(<guid>)
POST /api/data/v9.2/msfp_surveyinvites
PATCH /api/data/v9.2/msfp_surveyinvites(<guid>)
DELETE /api/data/v9.2/msfp_surveyinvites(<guid>)
```

## Attributes

Writable: **69** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msfp_channel`, `msfp_contextparameters`, `msfp_CustomerVoiceSurveyInvite`, `msfp_emailmessage`, `msfp_fromemailaddress`, `msfp_invitebouncecategory`, `msfp_invitebouncedetails`, `msfp_inviteemailaddress`, `msfp_invitefailurereason`, `msfp_invitesentdate`, `msfp_invitestatus`, `msfp_invitestatusreason`, `msfp_inviteupdateddate`, `msfp_isincentiveEnabled`, `msfp_longurl`, `msfp_otherproperties`, `msfp_respondent`, `msfp_sourcesurveyidentifier`, `msfp_subject`, `msfp_surveyid`, `msfp_surveyinvitationurl`, `msfp_UnsubscribedRecipientSurveyInviteId`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (47)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msfp_surveyinvites` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_surveyinvite` |
| `activity_pointer_msfp_surveyinvite` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_surveyinvite` |
| `adx_invitation_msfp_surveyinvites` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyinvite` |
| `bookableresourcebooking_msfp_surveyinvites` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_surveyinvite` |
| `bookableresourcebookingheader_msfp_surveyinvites` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_surveyinvite` |
| `bulkoperation_msfp_surveyinvites` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_surveyinvite` |
| `campaign_msfp_surveyinvites` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_surveyinvite` |
| `campaignactivity_msfp_surveyinvites` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_surveyinvite` |
| `contact_msfp_surveyinvites` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_surveyinvite` |
| `contract_msfp_surveyinvites` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_surveyinvite` |
| `entitlement_msfp_surveyinvites` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_surveyinvite` |
| `entitlementtemplate_msfp_surveyinvites` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_surveyinvite` |
| `incident_msfp_surveyinvites` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_surveyinvite` |
| `interactionforemail_msfp_surveyinvites` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_surveyinvite` |
| `invoice_msfp_surveyinvites` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_surveyinvite` |
| `knowledgearticle_msfp_surveyinvites` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_surveyinvite` |
| `knowledgebaserecord_msfp_surveyinvites` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_surveyinvite` |
| `lead_msfp_surveyinvites` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_surveyinvite` |
| `msdyn_customerasset_msfp_surveyinvites` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyinvite` |
| `msdyn_postalbum_msfp_surveyinvites` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyinvite` |
| `msdyn_salessuggestion_msfp_surveyinvites` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyinvite` |
| `msdyn_swarm_msfp_surveyinvites` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyinvite` |
| `msfp_msfp_survey_msfp_surveyinvite_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyinvite` |
| `msfp_msfp_unsubscribedrecipient_msfp_surveyinvite` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `msfp_unsubscribedrecipientsurveyinviteid` | `msfp_UnsubscribedRecipientSurveyInviteId_msfp_surveyinvite` |
| `msfp_surveyinvite_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_surveyinvite` |
| `msfp_surveyinvite_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_surveyinvite` |
| `msfp_surveyinvite_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_surveyinvite` |
| `msfp_surveyinvite_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_surveyinvite` |
| `msfp_surveyinvite_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_surveyinvite` |
| `msfp_surveyinvite_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_surveyinvite` |
| `msfp_surveyinvite_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_surveyinvite` |
| `msfp_surveyinvite_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_surveyinvite` |
| `mspp_adplacement_msfp_surveyinvites` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyinvite` |
| `mspp_pollplacement_msfp_surveyinvites` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyinvite` |
| `mspp_publishingstatetransitionrule_msfp_surveyinvites` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyinvite` |
| `mspp_redirect_msfp_surveyinvites` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyinvite` |
| `mspp_shortcut_msfp_surveyinvites` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyinvite` |
| `mspp_website_msfp_surveyinvites` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyinvite` |
| `opportunity_msfp_surveyinvites` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_surveyinvite` |
| `quote_msfp_surveyinvites` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_surveyinvite` |
| `salesorder_msfp_surveyinvites` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_surveyinvite` |
| `site_msfp_surveyinvites` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_surveyinvite` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msfp_surveyinvites` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msfp_msfp_surveyinvite_msfp_surveyresponse_surveyinviteid` | _n/a_ | `msfp_surveyinviteid` | _n/a_ |
| `msfp_shorturl_inviteid_msfp_surveyinvite` | _n/a_ | `msfp_inviteid` | _n/a_ |
| `msfp_surveyinvite_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msfp_surveyinvite_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyinvite_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msfp_surveyinvite_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msfp_surveyinvite_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyinvite_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvite_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyinvite_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_surveyinvite.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_surveyinvite.md) on 2026-05-06.