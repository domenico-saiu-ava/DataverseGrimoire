---
logical: "msdyn_copilottranscript"
display: "Copilot Transcript"
entitySetName: "msdyn_copilottranscripts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot Transcript

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilottranscript` |
| Display name | Copilot Transcript |
| Display (plural) | Copilot Transcripts |
| Schema name | `msdyn_copilottranscript` |
| Entity set (Web API) | `msdyn_copilottranscripts` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilottranscripts?$select=subject&$top=10
GET /api/data/v9.2/msdyn_copilottranscripts(<guid>)
POST /api/data/v9.2/msdyn_copilottranscripts
PATCH /api/data/v9.2/msdyn_copilottranscripts(<guid>)
DELETE /api/data/v9.2/msdyn_copilottranscripts(<guid>)
```

## Attributes

Writable: **52** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msdyn_additionalcontext`, `msdyn_copilotmode`, `msdyn_copilotskill`, `msdyn_transcriptforid`, `msdyn_transcriptforlogicalname`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (45)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msdyn_copilottranscripts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_copilottranscript` |
| `activity_pointer_msdyn_copilottranscript` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_copilottranscript` |
| `adx_invitation_msdyn_copilottranscripts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_copilottranscript` |
| `bookableresourcebooking_msdyn_copilottranscripts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_copilottranscript` |
| `bookableresourcebookingheader_msdyn_copilottranscripts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_copilottranscript` |
| `bulkoperation_msdyn_copilottranscripts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_copilottranscript` |
| `campaign_msdyn_copilottranscripts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_copilottranscript` |
| `campaignactivity_msdyn_copilottranscripts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_copilottranscript` |
| `contact_msdyn_copilottranscripts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_copilottranscript` |
| `contract_msdyn_copilottranscripts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_copilottranscript` |
| `entitlement_msdyn_copilottranscripts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_copilottranscript` |
| `entitlementtemplate_msdyn_copilottranscripts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_copilottranscript` |
| `incident_msdyn_copilottranscripts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_copilottranscript` |
| `interactionforemail_msdyn_copilottranscripts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_copilottranscript` |
| `invoice_msdyn_copilottranscripts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_copilottranscript` |
| `knowledgearticle_msdyn_copilottranscripts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_copilottranscript` |
| `knowledgebaserecord_msdyn_copilottranscripts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_copilottranscript` |
| `lead_msdyn_copilottranscripts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_copilottranscript` |
| `msdyn_copilottranscript_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_copilottranscript` |
| `msdyn_copilottranscript_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_copilottranscript` |
| `msdyn_copilottranscript_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_copilottranscript` |
| `msdyn_copilottranscript_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_copilottranscript` |
| `msdyn_copilottranscript_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_copilottranscript` |
| `msdyn_customerasset_msdyn_copilottranscripts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_copilottranscript` |
| `msdyn_postalbum_msdyn_copilottranscripts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_copilottranscript` |
| `msdyn_salessuggestion_msdyn_copilottranscripts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_copilottranscript` |
| `msdyn_swarm_msdyn_copilottranscripts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_copilottranscript` |
| `mspp_adplacement_msdyn_copilottranscripts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_copilottranscript` |
| `mspp_pollplacement_msdyn_copilottranscripts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_copilottranscript` |
| `mspp_publishingstatetransitionrule_msdyn_copilottranscripts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_copilottranscript` |
| `mspp_redirect_msdyn_copilottranscripts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_copilottranscript` |
| `mspp_shortcut_msdyn_copilottranscripts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_copilottranscript` |
| `mspp_website_msdyn_copilottranscripts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_copilottranscript` |
| `opportunity_msdyn_copilottranscripts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_copilottranscript` |
| `quote_msdyn_copilottranscripts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_copilottranscript` |
| `salesorder_msdyn_copilottranscripts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_copilottranscript` |
| `site_msdyn_copilottranscripts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_copilottranscript` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msdyn_copilottranscripts` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msdyn_copilottranscript_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msdyn_copilottranscript_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilottranscript_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_copilottranscript_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_copilottranscript_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilottranscript_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilottranscript_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilottranscript_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilottranscript_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilottranscript_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_copilottranscript_msdyn_copilottranscriptdata_copilottranscriptid` | _n/a_ | `msdyn_copilottranscriptid` | _n/a_ |


## Source

Generated from [msdyn_copilottranscript.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilottranscript.md) on 2026-05-06.