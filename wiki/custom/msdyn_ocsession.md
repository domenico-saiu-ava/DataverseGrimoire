---
logical: "msdyn_ocsession"
display: "Sessione"
entitySetName: "msdyn_ocsessions"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione

Sessione per l'interazione con un cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsession` |
| Display name | Sessione |
| Display (plural) | Sessioni |
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

Writable: **71** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msdyn_activeagentgroupid`, `msdyn_agentacceptedon`, `msdyn_agentassignedon`, `msdyn_botengagementmode`, `msdyn_cdsqueueid`, `msdyn_channel`, `msdyn_channelinstanceid`, `msdyn_channelprofileid`, `msdyn_closurereason`, `msdyn_liveworkitemid`, `msdyn_optionalwrapuptimer`, `msdyn_primarysession`, `msdyn_queueassignedon`, `msdyn_queueassignedreason`, `msdyn_queueextensionid`, `msdyn_queueid`, `msdyn_routingfailurestage`, `msdyn_sessionactivewrapuptimeinseconds`, `msdyn_sessionclosedon`, `msdyn_sessioncreatedon`, `msdyn_sessioncreationreason`, `msdyn_sessionid`, `msdyn_sessionmodifiedon`, `msdyn_sessionwrapuptimeinseconds`, `msdyn_state`, `msdyn_wrapupinitiatedon`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (60)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_msdyn_ocsessions` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_ocsession` |
| `msdyn_msdyn_ocsession_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_bookingrule_msdyn_ocsessions` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_ocsession` |
| `msdyn_resourceterritory_msdyn_ocsessions` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_ocsession` |
| `msdyn_systemuserschedulersetting_msdyn_ocsessions` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocsession` |
| `msdyn_timegroup_msdyn_ocsessions` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_ocsession` |
| `msdyn_timegroupdetail_msdyn_ocsessions` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_ocsession` |
| `interactionforemail_msdyn_ocsessions` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_ocsession` |
| `knowledgebaserecord_msdyn_ocsessions` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_ocsession` |
| `account_msdyn_ocsessions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_ocsession` |
| `contact_msdyn_ocsessions` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_ocsession` |
| `msdyn_ocsession_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_ocsession` |
| `msdyn_ocsession_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_ocsession` |
| `msdyn_ocsession_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_ocsession` |
| `msdyn_ocsession_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_ocsession` |
| `msdyn_ocsession_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_ocsession` |
| `knowledgearticle_msdyn_ocsessions` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_ocsession` |
| `adx_invitation_msdyn_ocsessions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocsession` |
| `mspp_adplacement_msdyn_ocsessions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocsession` |
| `mspp_pollplacement_msdyn_ocsessions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocsession` |
| `mspp_publishingstatetransitionrule_msdyn_ocsessions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocsession` |
| `mspp_redirect_msdyn_ocsessions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocsession` |
| `mspp_shortcut_msdyn_ocsessions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocsession` |
| `mspp_website_msdyn_ocsessions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocsession` |
| `lead_msdyn_ocsessions` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_ocsession` |
| `bookableresourcebooking_msdyn_ocsessions` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_ocsession` |
| `bookableresourcebookingheader_msdyn_ocsessions` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_ocsession` |
| `bulkoperation_msdyn_ocsessions` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_ocsession` |
| `campaign_msdyn_ocsessions` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_ocsession` |
| `campaignactivity_msdyn_ocsessions` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_ocsession` |
| `contract_msdyn_ocsessions` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_ocsession` |
| `entitlement_msdyn_ocsessions` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_ocsession` |
| `entitlementtemplate_msdyn_ocsessions` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_ocsession` |
| `incident_msdyn_ocsessions` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_ocsession` |
| `site_msdyn_ocsessions` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_ocsession` |
| `msdyn_ocsession_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_ocsession` |
| `msdyn_customerasset_msdyn_ocsessions` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocsession` |
| `msdyn_playbookinstance_msdyn_ocsessions` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_ocsession` |
| `invoice_msdyn_ocsessions` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_ocsession` |
| `opportunity_msdyn_ocsessions` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_ocsession` |
| `quote_msdyn_ocsessions` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_ocsession` |
| `salesorder_msdyn_ocsessions` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_ocsession` |
| `msdyn_postalbum_msdyn_ocsessions` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocsession` |
| `msdyn_swarm_msdyn_ocsessions` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_ocsession` |
| `msdyn_ocsession_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_ocsession` |
| `msdyn_ocsession_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_ocsession` |
| `msdyn_ocsession_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_ocsession` |
| `activity_pointer_msdyn_ocsession` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_ocsession` |
| `msdyn_ocsession_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `msdyn_msdyn_ocsession_msdyn_agentgroup_activeagentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_activeagentgroupid` | `msdyn_activeagentgroupid` |
| `msdyn_ocsession_msdyn_queueextension` | [msdyn_queueextension](msdyn_queueextension.md) | `msdyn_queueextensionid` | `msdyn_queueextensionid` |
| `msdyn_salessuggestion_msdyn_ocsessions` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocsession` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid_msdyn_ocsession` |
| `msdyn_msdyn_ocsession_msdyn_ocsession_primarysession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_primarysession` | `msdyn_primarysession_msdyn_ocsession` |
| `msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid_msdyn_ocsession` |
| `msdyn_queue_msdyn_ocsession_queueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid_msdyn_ocsession` |

### One-to-Many (29)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionextension_sessionid_msdyn_ocsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_ocsession_msdyn_agentcapacityupdatehistory_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_ocsession_sessioncharacteristic_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_ocsession` | `msdyn_ocsession` |
| `msdyn_ocsession_activity_parties` | [msdyn_ocsession](msdyn_ocsession.md) | `activityid` | `activityid_msdyn_ocsession_activityparty` |
| `CampaignResponse_msdyn_ocsessions` | [msdyn_ocsession](msdyn_ocsession.md) | `originatingactivityid` | `originatingactivityid_msdyn_ocsession_campaignresponse` |
| `msdyn_ocsession_ActionCards` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_SyncErrors` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_DuplicateMatchingRecord` | [msdyn_ocsession](msdyn_ocsession.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsession` |
| `msdyn_ocsession_DuplicateBaseRecord` | [msdyn_ocsession](msdyn_ocsession.md) | `baserecordid` | `baserecordid_msdyn_ocsession` |
| `msdyn_ocsession_AsyncOperations` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_MailboxTrackingFolders` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_UserEntityInstanceDatas` | [msdyn_ocsession](msdyn_ocsession.md) | `objectid` | `objectid_msdyn_ocsession` |
| `msdyn_ocsession_ProcessSession` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_BulkDeleteFailures` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_ocsession_PrincipalObjectAttributeAccesses` | [msdyn_ocsession](msdyn_ocsession.md) | `objectid` | `objectid_msdyn_ocsession` |
| `msdyn_ocsession_connections1` | [msdyn_ocsession](msdyn_ocsession.md) | `record1id` | `record1id_msdyn_ocsession` |
| `msdyn_ocsession_connections2` | [msdyn_ocsession](msdyn_ocsession.md) | `record2id` | `record2id_msdyn_ocsession` |
| `msdyn_ocsession_QueueItems` | [msdyn_ocsession](msdyn_ocsession.md) | `objectid` | `objectid_msdyn_ocsession` |
| `msdyn_ocsession_Annotations` | [msdyn_ocsession](msdyn_ocsession.md) | `objectid` | `objectid_msdyn_ocsession` |
| `msdyn_ocsession_Feedback` | [msdyn_ocsession](msdyn_ocsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsession` |
| `msdyn_msdyn_botsession_sessionid_msdyn_oc` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_lastsessionid` | `msdyn_lastsessionid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_ocsession_msdyn_ocsession_primarysession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_primarysession` | `msdyn_primarysession_msdyn_ocsession` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionparticipantevent_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionsentiment_omnichannelsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `msdyn_ocsession_sessionevent_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_agentresponsesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_agentresponsesessionid` | `msdyn_agentresponsesessionid` |
| `msdyn_ocsession_msdyn_conversationmessageblock_msdyn_customermessagesessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_customermessagesessionid` | `msdyn_customermessagesessionid` |
| `msdyn_ocsession_sessionparticipant_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |


## Source

Generated from [msdyn_ocsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsession')) on 2026-05-07.