---
logical: "msdyn_ocliveworkitem"
display: "Conversation"
entitySetName: "msdyn_ocliveworkitems"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation

Tracks the interaction between the agents and customer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitem` |
| Display name | Conversation |
| Display (plural) | Conversations |
| Schema name | `msdyn_ocliveworkitem` |
| Entity set (Web API) | `msdyn_ocliveworkitems` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitems?$select=subject&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitems(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitems
PATCH /api/data/v9.2/msdyn_ocliveworkitems(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitems(<guid>)
```

## Attributes

Writable: **126** · Read-only: **25**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msdyn_activeagentassignedon`, `msdyn_activeagentgroupid`, `msdyn_activeagentid`, `msdyn_activeintentfamilyid`, `msdyn_activeintentgroupid`, `msdyn_activeintentid`, `msdyn_activeintentstring`, `msdyn_activesessionparticipantid`, `msdyn_averageresponsetimeinmsadjforoh`, `msdyn_casefieldsupdatedbyAI`, `msdyn_cdsqueueid`, `msdyn_channel`, `msdyn_channelconnectionid`, `msdyn_channelinstanceid`, `msdyn_channelproviderName`, `msdyn_closedon`, `msdyn_conversationactivechattimeinseconds`, `msdyn_conversationactivewrapuptimeinseconds`, `msdyn_conversationactivitystate`, `msdyn_conversationfirstwaittimeinseconds`, `msdyn_conversationhandletimeinseconds`, `msdyn_conversationholdtimeinseconds`, `msdyn_ConversationSummaryField`, `msdyn_conversationtalktimeinseconds`, `msdyn_conversationtype`, `msdyn_conversationwrapuptimeinseconds`, `msdyn_copilotengaged`, `msdyn_createdon`, `msdyn_customer`, `msdyn_customerIdType`, `msdyn_customerlanguageid`, `msdyn_customerlocale`, `msdyn_customersentimentlabel`, `msdyn_dailytopicid`, `msdyn_dispositioncodecontroldata`, `msdyn_effortpredictionresult`, `msdyn_escalationcount`, `msdyn_externalcontext`, `msdyn_firstresponsetimeinmsadjforoh`, `msdyn_firstwaitstartedon`, `msdyn_infracreatedby`, `msdyn_initiatedon`, `msdyn_intent`, `msdyn_isabandoned`, `msdyn_isagentaccepted`, `msdyn_isagentsession`, `msdyn_isoutbound`, `msdyn_IssueId`, `msdyn_languageid`, `msdyn_lastactiveownerid`, `msdyn_lastsessionid`, `msdyn_liveworkstreamid`, `msdyn_liveworkstreamnotificationdata`, `msdyn_modifiedon`, `msdyn_ocliveworkitemextensionid`, `msdyn_ocliveworkitemid`, `msdyn_overflowtransfercount`, `msdyn_queueid`, `msdyn_queueitemid`, `msdyn_regionid`, `msdyn_routableobjectid`, `msdyn_routableobjectidIdType`, `msdyn_routableobjectlogicalname`, `msdyn_routingtype`, `msdyn_socialprofileid`, `msdyn_startedon`, `msdyn_statereason`, `msdyn_statuschangereason`, `msdyn_statusupdatedon`, `msdyn_thirdpartyconversation`, `msdyn_TimelineControlField`, `msdyn_title`, `msdyn_TranscriptControl`, `msdyn_transfercount`, `msdyn_urcustomersentimentkeywords`, `msdyn_urcustomersentimentlabel`, `msdyn_urcustomersentimentscore`, `msdyn_workstreamworkdistributionmode`, `msdyn_wrapupinitiatedon`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_customerName`, `msdyn_customerYomiName`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (69)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_msdyn_ocliveworkitems` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_ocliveworkitem` |
| `activity_pointer_msdyn_ocliveworkitem` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_ocliveworkitem` |
| `adx_invitation_msdyn_ocliveworkitems` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocliveworkitem` |
| `bookableresourcebooking_msdyn_ocliveworkitems` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem` |
| `bookableresourcebookingheader_msdyn_ocliveworkitems` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem` |
| `bulkoperation_msdyn_ocliveworkitems` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_ocliveworkitem` |
| `campaign_msdyn_ocliveworkitems` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_ocliveworkitem` |
| `campaignactivity_msdyn_ocliveworkitems` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_ocliveworkitem` |
| `contact_msdyn_ocliveworkitems` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_ocliveworkitem` |
| `contract_msdyn_ocliveworkitems` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_ocliveworkitem` |
| `entitlement_msdyn_ocliveworkitems` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_ocliveworkitem` |
| `entitlementtemplate_msdyn_ocliveworkitems` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem` |
| `incident_msdyn_ocliveworkitems` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_ocliveworkitem` |
| `interactionforemail_msdyn_ocliveworkitems` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem` |
| `invoice_msdyn_ocliveworkitems` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_ocliveworkitem` |
| `knowledgearticle_msdyn_ocliveworkitems` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_ocliveworkitem` |
| `knowledgebaserecord_msdyn_ocliveworkitems` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem` |
| `lead_msdyn_ocliveworkitems` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_ocliveworkitem` |
| `msdyn_account_msdyn_ocliveworkitem_Customer` | [account](account.md) | `msdyn_customer` | `msdyn_customer_msdyn_ocliveworkitem_account` |
| `msdyn_contact_msdyn_ocliveworkitem_Customer` | [contact](contact.md) | `msdyn_customer` | `msdyn_customer_msdyn_ocliveworkitem_contact` |
| `msdyn_customerasset_msdyn_ocliveworkitems` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem` |
| `msdyn_incident_msdyn_ocliveworkitem` | [incident](incident.md) | `msdyn_issueid` | `msdyn_IssueId_msdyn_ocliveworkitem` |
| `msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `msdyn_effortpredictionresult` | `msdyn_effortpredictionresult_msdyn_ocliveworkitem` |
| `msdyn_msdyn_language_msdyn_ocliveworkitem_msdyn_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_liveworkitem_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentgroupid` | `msdyn_activeintentgroupid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentid` | `msdyn_activeintentid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intentfamily_activeintentfamilyid` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_activeintentfamilyid` | `msdyn_activeintentfamilyid` |
| `msdyn_msdyn_ocliveworkitem_task_msdyn_routableobjectid` | [task](task.md) | `msdyn_routableobjectid` | `msdyn_msdyn_routableobjectid_msdyn_ocliveworkitem_task` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_lastsessionid` | `msdyn_lastsessionid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_activesessionparticipantid` | `msdyn_activesessionparticipantid` |
| `msdyn_ocliveworkitem_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_msdyn_externalcontext_msdyn_ocexternalcontextid` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `msdyn_externalcontext` | `msdyn_externalcontext_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_msdyn_lastactiveownerid_systemuser` | [systemuser](systemuser.md) | `msdyn_lastactiveownerid` | `msdyn_lastactiveownerid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_ocliveworkitemextensionid_msdyn_ocliveworkitemextension` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `msdyn_ocliveworkitemextensionid` | `msdyn_ocliveworkitemextensionid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_ocliveworkitem` |
| `msdyn_postalbum_msdyn_ocliveworkitems` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem` |
| `msdyn_queue_msdyn_ocliveworkitem_queueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid_msdyn_ocliveworkitem` |
| `msdyn_queueitem_msdyn_ocliveworkitem_queueitemid` | [queueitem](queueitem.md) | `msdyn_queueitemid` | `msdyn_queueitemid_msdyn_ocliveworkitem` |
| `msdyn_salessuggestion_msdyn_ocliveworkitems` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocliveworkitem` |
| `msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid` | [socialprofile](socialprofile.md) | `msdyn_socialprofileid` | `msdyn_socialprofileid_msdyn_ocliveworkitem` |
| `msdyn_swarm_msdyn_ocliveworkitems` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocliveworkitem` |
| `msdyn_systemuser_msdyn_ocliveworkitem_activeagentid` | [systemuser](systemuser.md) | `msdyn_activeagentid` | `msdyn_activeagentid_msdyn_ocliveworkitem` |
| `mspp_adplacement_msdyn_ocliveworkitems` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocliveworkitem` |
| `mspp_pollplacement_msdyn_ocliveworkitems` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocliveworkitem` |
| `mspp_publishingstatetransitionrule_msdyn_ocliveworkitems` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocliveworkitem` |
| `mspp_redirect_msdyn_ocliveworkitems` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocliveworkitem` |
| `mspp_shortcut_msdyn_ocliveworkitems` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocliveworkitem` |
| `mspp_website_msdyn_ocliveworkitems` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocliveworkitem` |
| `opportunity_msdyn_ocliveworkitems` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_ocliveworkitem` |
| `quote_msdyn_ocliveworkitems` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_ocliveworkitem` |
| `salesorder_msdyn_ocliveworkitems` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_ocliveworkitem` |
| `site_msdyn_ocliveworkitems` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_ocliveworkitem` |

### One-to-Many (49)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_msdyn_ocliveworkitems` | _n/a_ | `originatingactivityid` | _n/a_ |
| `msdyn_conversationdispositioncodemap_ocliveworkitem` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_msdyn_ocliveworkitem` | _n/a_ | `msdyn_objectid` | _n/a_ |
| `msdyn_intentcontexthistory_poly_msdyn_ocliveworkitem` | _n/a_ | `msdyn_relatedrecordid` | _n/a_ |
| `msdyn_msdyn_evaluation_msdyn_ocliveworkitem_msdyn_RegardingObjectId` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId` | _n/a_ | `msdyn_conversationid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid` | _n/a_ | `msdyn_conversationid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid` | _n/a_ | `msdyn_conversationid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid` | _n/a_ | `msdyn_objectid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid` | _n/a_ | `msdyn_objectid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget` | _n/a_ | `msdyn_recordingtarget` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_productmap_msdyn_recordid` | _n/a_ | `msdyn_recordid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid` | _n/a_ | `msdyn_conversationid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor` | _n/a_ | `msdyn_suggestionfor` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload` | _n/a_ | `msdyn_suggestionfor` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_transcript` | _n/a_ | `msdyn_liveworkitemidid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject` | _n/a_ | `msdyn_targetobject` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem` | _n/a_ | `msdyn_liveworkitem` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject` | _n/a_ | `msdyn_targetobject` | _n/a_ |
| `msdyn_ocliveworkitem_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `msdyn_ocliveworkitem_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_ocliveworkitem_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_ocliveworkitem_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid` | _n/a_ | `msdyn_liveworkitemid` | _n/a_ |
| `msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_ocliveworkitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitem_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkitemid_msdyn_ocliveworkitem` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_ocliveworkitemmatchingcriteria_ocliveworkitemid_msdyn_ocliveworkitem` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |
| `msdyn_readtracker_poly_msdyn_ocliveworkitem` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_sessionextension_ocliveworkitemid_msdyn_ocliveworkitem` | _n/a_ | `msdyn_ocliveworkitemid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocliveworkitem_knowledgearticle` | [activityid](activityid.md) | _n/a_ | _n/a_ |
| `msdyn_ocliveworkitem_knowledgebaserecord` | [activityid](activityid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocliveworkitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitem.md) on 2026-05-06.