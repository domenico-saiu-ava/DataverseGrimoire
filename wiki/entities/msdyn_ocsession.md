---
logical: "msdyn_ocsession"
display: "Session"
entitySetName: "msdyn_ocsessions"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Session

Session for interacting with a customer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsession` |
| Display name | Session |
| Display (plural) | Sessions |
| Schema name | `msdyn_ocsession` |
| Entity set (Web API) | `msdyn_ocsessions` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessions?$select=subject&$top=10
GET /api/data/v9.2/msdyn_ocsessions(<guid>)
POST /api/data/v9.2/msdyn_ocsessions
PATCH /api/data/v9.2/msdyn_ocsessions(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessions(<guid>)
```

## Attributes

Writable: **71** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msdyn_activeagentgroupid`, `msdyn_agentacceptedon`, `msdyn_agentassignedon`, `msdyn_botengagementmode`, `msdyn_cdsqueueid`, `msdyn_channel`, `msdyn_channelinstanceid`, `msdyn_channelprofileid`, `msdyn_closurereason`, `msdyn_liveworkitemid`, `msdyn_primarysession`, `msdyn_queueassignedon`, `msdyn_queueassignedreason`, `msdyn_queueid`, `msdyn_routingfailurestage`, `msdyn_sessionactivewrapuptimeinseconds`, `msdyn_sessionclosedon`, `msdyn_sessioncreatedon`, `msdyn_sessioncreationreason`, `msdyn_sessionid`, `msdyn_sessionmodifiedon`, `msdyn_sessionwrapuptimeinseconds`, `msdyn_state`, `msdyn_wrapupinitiatedon`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (51)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msdyn_ocsessions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_ocsession` |
| `activity_pointer_msdyn_ocsession` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_ocsession` |
| `adx_invitation_msdyn_ocsessions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocsession` |
| `bookableresourcebooking_msdyn_ocsessions` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_ocsession` |
| `bookableresourcebookingheader_msdyn_ocsessions` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_ocsession` |
| `bulkoperation_msdyn_ocsessions` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_ocsession` |
| `campaign_msdyn_ocsessions` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_ocsession` |
| `campaignactivity_msdyn_ocsessions` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_ocsession` |
| `contact_msdyn_ocsessions` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_ocsession` |
| `contract_msdyn_ocsessions` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_ocsession` |
| `entitlement_msdyn_ocsessions` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_ocsession` |
| `entitlementtemplate_msdyn_ocsessions` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_ocsession` |
| `incident_msdyn_ocsessions` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_ocsession` |
| `interactionforemail_msdyn_ocsessions` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_ocsession` |
| `invoice_msdyn_ocsessions` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_ocsession` |
| `knowledgearticle_msdyn_ocsessions` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_ocsession` |
| `knowledgebaserecord_msdyn_ocsessions` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_ocsession` |
| `lead_msdyn_ocsessions` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_ocsession` |
| `msdyn_customerasset_msdyn_ocsessions` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocsession` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid_msdyn_ocsession` |
| `msdyn_msdyn_ocsession_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_msdyn_ocsession_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_msdyn_ocsession_msdyn_ocsession_primarysession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_primarysession` | `msdyn_primarysession_msdyn_ocsession` |
| `msdyn_ocsession_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_ocsession` |
| `msdyn_ocsession_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_ocsession` |
| `msdyn_ocsession_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `msdyn_ocsession_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_ocsession` |
| `msdyn_ocsession_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_ocsession` |
| `msdyn_ocsession_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_ocsession` |
| `msdyn_ocsession_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_ocsession` |
| `msdyn_ocsession_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_ocsession` |
| `msdyn_ocsession_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_ocsession` |
| `msdyn_postalbum_msdyn_ocsessions` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocsession` |
| `msdyn_queue_msdyn_ocsession_queueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid_msdyn_ocsession` |
| `msdyn_salessuggestion_msdyn_ocsessions` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocsession` |
| `msdyn_swarm_msdyn_ocsessions` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocsession` |
| `mspp_adplacement_msdyn_ocsessions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocsession` |
| `mspp_pollplacement_msdyn_ocsessions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocsession` |
| `mspp_publishingstatetransitionrule_msdyn_ocsessions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocsession` |
| `mspp_redirect_msdyn_ocsessions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocsession` |
| `mspp_shortcut_msdyn_ocsessions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocsession` |
| `mspp_website_msdyn_ocsessions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocsession` |
| `opportunity_msdyn_ocsessions` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_ocsession` |
| `quote_msdyn_ocsessions` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_ocsession` |
| `salesorder_msdyn_ocsessions` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_ocsession` |
| `site_msdyn_ocsessions` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_ocsession` |

### One-to-Many (28)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msdyn_ocsessions` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msdyn_msdyn_botsession_sessionid_msdyn_oc` | _n/a_ | `msdyn_sessionid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_agentcapacityupdatehistory_sessionid` | _n/a_ | `msdyn_sessionid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid` | _n/a_ | `msdyn_lastsessionid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_ocsession_primarysession` | _n/a_ | `msdyn_primarysession` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_ocsessionparticipantevent_sessionid` | _n/a_ | `msdyn_sessionid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_ocsessionsentiment_omnichannelsession` | _n/a_ | `msdyn_omnichannelsession` | _n/a_ |
| `msdyn_ocsession_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msdyn_ocsession_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_ocsession_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_ocsession_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsession_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsession_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_agentresponsesessionid` | _n/a_ | `msdyn_agentresponsesessionid` | _n/a_ |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_customermessagesessionid` | _n/a_ | `msdyn_customermessagesessionid` | _n/a_ |
| `msdyn_ocsession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsession_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsession_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsession_sessioncharacteristic_nested` | _n/a_ | `msdyn_ocsession` | _n/a_ |
| `msdyn_ocsession_sessionevent_nested` | _n/a_ | `msdyn_omnichannelsession` | _n/a_ |
| `msdyn_ocsession_sessionparticipant_nested` | _n/a_ | `msdyn_omnichannelsession` | _n/a_ |
| `msdyn_ocsession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_sessionid_msdyn_ocsession` | _n/a_ | `msdyn_sessionid` | _n/a_ |


## Source

Generated from [msdyn_ocsession.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsession.md) on 2026-05-06.