---
logical: "msdyn_ocliveworkitem"
display: "Conversazione"
entitySetName: "msdyn_ocliveworkitems"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conversazione

Registra l'interazione tra gli agenti e il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitem` |
| Display name | Conversazione |
| Display (plural) | Conversazioni |
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

Writable: **123** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msdyn_activeagentassignedon`, `msdyn_activeagentgroupid`, `msdyn_activeagentid`, `msdyn_activeintentfamilyid`, `msdyn_activeintentgroupid`, `msdyn_activeintentid`, `msdyn_activeintentstring`, `msdyn_activesessionparticipantid`, `msdyn_averageresponsetimeinmsadjforoh`, `msdyn_casefieldsupdatedbyAI`, `msdyn_cdsqueueid`, `msdyn_channel`, `msdyn_channelconnectionid`, `msdyn_channelinstanceid`, `msdyn_channelproviderName`, `msdyn_closedon`, `msdyn_conversationactivechattimeinseconds`, `msdyn_conversationactivewrapuptimeinseconds`, `msdyn_conversationactivitystate`, `msdyn_conversationfirstwaittimeinseconds`, `msdyn_conversationhandletimeinseconds`, `msdyn_conversationholdtimeinseconds`, `msdyn_conversationsummaryfield`, `msdyn_conversationtalktimeinseconds`, `msdyn_conversationtype`, `msdyn_conversationwrapuptimeinseconds`, `msdyn_copilotengaged`, `msdyn_createdon`, `msdyn_customer`, `msdyn_customerlanguageid`, `msdyn_customerlocale`, `msdyn_customersentimentlabel`, `msdyn_dailytopicid`, `msdyn_dispositioncodecontroldata`, `msdyn_effortpredictionresult`, `msdyn_escalationcount`, `msdyn_externalcontext`, `msdyn_firstresponsetimeinmsadjforoh`, `msdyn_firstwaitstartedon`, `msdyn_infracreatedby`, `msdyn_initiatedon`, `msdyn_intent`, `msdyn_isabandoned`, `msdyn_isagentaccepted`, `msdyn_isagentsession`, `msdyn_isoutbound`, `msdyn_issueid`, `msdyn_languageid`, `msdyn_lastactiveownerid`, `msdyn_lastsessionid`, `msdyn_liveworkstreamid`, `msdyn_liveworkstreamnotificationdata`, `msdyn_modifiedon`, `msdyn_ocliveworkitemextensionid`, `msdyn_ocliveworkitemid`, `msdyn_overflowtransfercount`, `msdyn_priorityscore`, `msdyn_queueid`, `msdyn_queueitemid`, `msdyn_regionid`, `msdyn_routableobjectid`, `msdyn_routableobjectlogicalname`, `msdyn_routingtype`, `msdyn_socialprofileid`, `msdyn_startedon`, `msdyn_statereason`, `msdyn_statuschangereason`, `msdyn_statusupdatedon`, `msdyn_thirdpartyconversation`, `msdyn_timelinecontrolfield`, `msdyn_title`, `msdyn_transcriptcontrol`, `msdyn_transfercount`, `msdyn_urcustomersentimentkeywords`, `msdyn_urcustomersentimentlabel`, `msdyn_urcustomersentimentscore`, `msdyn_workstreamworkdistributionmode`, `msdyn_wrapupinitiatedon`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (77)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_ocliveworkitemextensionid_msdyn_ocliveworkitemextension` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `msdyn_ocliveworkitemextensionid` | `msdyn_ocliveworkitemextensionid_msdyn_ocliveworkitem` |
| `msdyn_queueitem_msdyn_ocliveworkitem_queueitemid` | [queueitem](queueitem.md) | `msdyn_queueitemid` | `msdyn_queueitemid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_activesessionparticipantid` | `msdyn_activesessionparticipantid` |
| `msdyn_bookingalertstatus_msdyn_ocliveworkitems` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem` |
| `msdyn_msdyn_liveworkitem_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_bookingrule_msdyn_ocliveworkitems` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem` |
| `msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `msdyn_effortpredictionresult` | `msdyn_effortpredictionresult_msdyn_ocliveworkitem` |
| `msdyn_resourceterritory_msdyn_ocliveworkitems` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem` |
| `interactionforemail_msdyn_ocliveworkitems` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem` |
| `knowledgebaserecord_msdyn_ocliveworkitems` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem` |
| `account_msdyn_ocliveworkitems` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_ocliveworkitem` |
| `contact_msdyn_ocliveworkitems` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_ocliveworkitem` |
| `knowledgearticle_msdyn_ocliveworkitems` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_ocliveworkitem` |
| `adx_invitation_msdyn_ocliveworkitems` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocliveworkitem` |
| `mspp_adplacement_msdyn_ocliveworkitems` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocliveworkitem` |
| `mspp_pollplacement_msdyn_ocliveworkitems` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocliveworkitem` |
| `mspp_publishingstatetransitionrule_msdyn_ocliveworkitems` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocliveworkitem` |
| `mspp_redirect_msdyn_ocliveworkitems` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocliveworkitem` |
| `mspp_shortcut_msdyn_ocliveworkitems` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocliveworkitem` |
| `mspp_website_msdyn_ocliveworkitems` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocliveworkitem` |
| `lead_msdyn_ocliveworkitems` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_ocliveworkitem` |
| `bookableresourcebooking_msdyn_ocliveworkitems` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem` |
| `bookableresourcebookingheader_msdyn_ocliveworkitems` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem` |
| `bulkoperation_msdyn_ocliveworkitems` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_ocliveworkitem` |
| `campaign_msdyn_ocliveworkitems` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_ocliveworkitem` |
| `campaignactivity_msdyn_ocliveworkitems` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_ocliveworkitem` |
| `contract_msdyn_ocliveworkitems` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_ocliveworkitem` |
| `entitlement_msdyn_ocliveworkitems` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_ocliveworkitem` |
| `entitlementtemplate_msdyn_ocliveworkitems` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem` |
| `incident_msdyn_ocliveworkitems` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_ocliveworkitem` |
| `site_msdyn_ocliveworkitems` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_ocliveworkitem` |
| `msdyn_customerasset_msdyn_ocliveworkitems` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem` |
| `msdyn_playbookinstance_msdyn_ocliveworkitems` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem` |
| `invoice_msdyn_ocliveworkitems` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_ocliveworkitem` |
| `opportunity_msdyn_ocliveworkitems` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_ocliveworkitem` |
| `quote_msdyn_ocliveworkitems` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_ocliveworkitem` |
| `salesorder_msdyn_ocliveworkitems` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_ocliveworkitem` |
| `msdyn_postalbum_msdyn_ocliveworkitems` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem` |
| `msdyn_swarm_msdyn_ocliveworkitems` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_ocliveworkitem` |
| `activity_pointer_msdyn_ocliveworkitem` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_ocliveworkitem` |
| `msdyn_systemuserschedulersetting_msdyn_ocliveworkitems` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem` |
| `msdyn_timegroup_msdyn_ocliveworkitems` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem` |
| `msdyn_timegroupdetail_msdyn_ocliveworkitems` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intentfamily_activeintentfamilyid` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_activeintentfamilyid` | `msdyn_activeintentfamilyid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentgroupid` | `msdyn_activeintentgroupid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_activeintentid` | `msdyn_activeintentid` |
| `msdyn_ocliveworkitem_msdyn_lastactiveownerid_systemuser` | [systemuser](systemuser.md) | `msdyn_lastactiveownerid` | `msdyn_lastactiveownerid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_msdyn_language_msdyn_ocliveworkitem_msdyn_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid_msdyn_ocliveworkitem` |
| `msdyn_incident_msdyn_ocliveworkitem` | [incident](incident.md) | `msdyn_issueid` | `msdyn_IssueId_msdyn_ocliveworkitem` |
| `msdyn_salessuggestion_msdyn_ocliveworkitems` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocliveworkitem` |
| `msdyn_account_msdyn_ocliveworkitem_Customer` | [account](account.md) | `msdyn_customer` | `msdyn_customer_msdyn_ocliveworkitem_account` |
| `msdyn_contact_msdyn_ocliveworkitem_Customer` | [contact](contact.md) | `msdyn_customer` | `msdyn_customer_msdyn_ocliveworkitem_contact` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_msdyn_externalcontext_msdyn_ocexternalcontextid` | [msdyn_ocexternalcontext](msdyn_ocexternalcontext.md) | `msdyn_externalcontext` | `msdyn_externalcontext_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_task_msdyn_routableobjectid` | [task](task.md) | `msdyn_routableobjectid` | `msdyn_msdyn_routableobjectid_msdyn_ocliveworkitem_task` |
| `msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_lastsessionid` | `msdyn_lastsessionid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid` | [msdyn_ocsentimentdailytopic](msdyn_ocsentimentdailytopic.md) | `msdyn_dailytopicid` | `msdyn_dailytopicid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid_msdyn_ocliveworkitem` |
| `msdyn_socialprofile_msdyn_ocliveworkitem_socialprofileid` | [socialprofile](socialprofile.md) | `msdyn_socialprofileid` | `msdyn_socialprofileid_msdyn_ocliveworkitem` |
| `msdyn_systemuser_msdyn_ocliveworkitem_activeagentid` | [systemuser](systemuser.md) | `msdyn_activeagentid` | `msdyn_activeagentid_msdyn_ocliveworkitem` |
| `msdyn_queue_msdyn_ocliveworkitem_queueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid_msdyn_ocliveworkitem` |

### One-to-Many (53)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionextension_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_readtracker_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitem` | `msdyn_liveworkitem` |
| `msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `msdyn_AgentNudge_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitem` | `msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_conversationdispositioncodemap_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_ConversationId` |
| `msdyn_ocliveworkitem_activity_parties` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `activityid` | `activityid_msdyn_ocliveworkitem_activityparty` |
| `CampaignResponse_msdyn_ocliveworkitems` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `originatingactivityid` | `originatingactivityid_msdyn_ocliveworkitem_campaignresponse` |
| `msdyn_ocliveworkitem_ActionCards` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_SyncErrors` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_AsyncOperations` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_MailboxTrackingFolders` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_UserEntityInstanceDatas` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `objectid` | `objectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_ProcessSession` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_BulkDeleteFailures` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `objectid` | `objectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_connections1` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `record1id` | `record1id_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_connections2` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `record2id` | `record2id_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_QueueItems` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `objectid` | `objectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_Annotations` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `objectid` | `objectid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitem_Feedback` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `msdyn_msdyn_evaluation_msdyn_ocliveworkitem_msdyn_RegardingObjectId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_msdyn_ocliveworkitem` |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_ObjectId` |
| `msdyn_screenrecordinglink_RelatedObject_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_relatedobject` | `msdyn_RelatedObject` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_objectid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_suggestionfor` | `msdyn_suggestionfor_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocliveworkitem_msdyn_productmap_msdyn_recordid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordid` | `msdyn_recordid_msdyn_ocliveworkitem_msdyn_ocliveworkitem` |
| `msdyn_intentcontexthistory_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_relatedrecordid` | `msdyn_relatedrecordid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitemcontextitemelastic_msdyn_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocliveworkitem_msdyn_queueextension_msdyn_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `msdyn_ocliveworkitemmatchingcriteria_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_msdyn_liveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_LiveWorkItemId` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid_msdyn_ocsession` |
| `msdyn_msdyn_ocliveworkitem_msdyn_transcript` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemidid` | `msdyn_LiveWorkItemIdId` |
| `msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_knowledgebaserecord` | [knowledgebaserecord](knowledgebaserecord.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocliveworkitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitem')) on 2026-05-07.