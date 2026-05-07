---
logical: "msfp_surveyresponse"
display: "Risposta al sondaggio Customer Voice"
entitySetName: "msfp_surveyresponses"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta al sondaggio Customer Voice

Risposta a un sondaggio.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyresponse` |
| Display name | Risposta al sondaggio Customer Voice |
| Display (plural) | Risposte al sondaggio Customer Voice |
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

Writable: **70** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msfp_embedcontextparameters`, `msfp_isquestionresponsegenerated`, `msfp_isquestionresponsesgenerated`, `msfp_language`, `msfp_locale`, `msfp_name`, `msfp_npsscore`, `msfp_otherproperties`, `msfp_parent_survey_response_new`, `msfp_parentsurveyresponse`, `msfp_questionresponseslist`, `msfp_respondent`, `msfp_respondentemailaddress`, `msfp_responsetype`, `msfp_satisfactionmetriccalculated`, `msfp_satisfactionmetricvalue`, `msfp_sentiment`, `msfp_sourceresponseidentifier`, `msfp_sourcesurveyidentifier`, `msfp_startdate`, `msfp_submitdate`, `msfp_surveyid`, `msfp_surveyinviteid`, `msfp_surveyresponse`, `msfp_surveyresponseurl`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (56)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_msfp_surveyresponses` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_surveyresponse` |
| `msdyn_bookingrule_msfp_surveyresponses` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_surveyresponse` |
| `msdyn_resourceterritory_msfp_surveyresponses` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_surveyresponse` |
| `msdyn_systemuserschedulersetting_msfp_surveyresponses` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyresponse` |
| `msdyn_timegroup_msfp_surveyresponses` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_surveyresponse` |
| `msdyn_timegroupdetail_msfp_surveyresponses` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_surveyresponse` |
| `msdyn_swarm_msfp_surveyresponses` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyresponse` |
| `interactionforemail_msfp_surveyresponses` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_surveyresponse` |
| `knowledgebaserecord_msfp_surveyresponses` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_surveyresponse` |
| `account_msfp_surveyresponses` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_surveyresponse` |
| `contact_msfp_surveyresponses` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_surveyresponse` |
| `msfp_surveyresponse_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_surveyresponse` |
| `msfp_surveyresponse_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_surveyresponse` |
| `msfp_surveyresponse_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_surveyresponse` |
| `msfp_surveyresponse_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_surveyresponse` |
| `msfp_surveyresponse_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_surveyresponse` |
| `knowledgearticle_msfp_surveyresponses` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_surveyresponse` |
| `adx_invitation_msfp_surveyresponses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyresponse` |
| `mspp_adplacement_msfp_surveyresponses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyresponse` |
| `mspp_pollplacement_msfp_surveyresponses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyresponse` |
| `mspp_publishingstatetransitionrule_msfp_surveyresponses` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyresponse` |
| `mspp_redirect_msfp_surveyresponses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyresponse` |
| `mspp_shortcut_msfp_surveyresponses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyresponse` |
| `mspp_website_msfp_surveyresponses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyresponse` |
| `lead_msfp_surveyresponses` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_surveyresponse` |
| `bookableresourcebooking_msfp_surveyresponses` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_surveyresponse` |
| `bookableresourcebookingheader_msfp_surveyresponses` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse` |
| `bulkoperation_msfp_surveyresponses` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_surveyresponse` |
| `campaign_msfp_surveyresponses` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_surveyresponse` |
| `campaignactivity_msfp_surveyresponses` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_surveyresponse` |
| `contract_msfp_surveyresponses` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_surveyresponse` |
| `entitlement_msfp_surveyresponses` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_surveyresponse` |
| `entitlementtemplate_msfp_surveyresponses` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_surveyresponse` |
| `incident_msfp_surveyresponses` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_surveyresponse` |
| `site_msfp_surveyresponses` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_surveyresponse` |
| `msfp_surveyresponse_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_surveyresponse` |
| `msdyn_customerasset_msfp_surveyresponses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyresponse` |
| `msdyn_playbookinstance_msfp_surveyresponses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse` |
| `invoice_msfp_surveyresponses` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_surveyresponse` |
| `opportunity_msfp_surveyresponses` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_surveyresponse` |
| `quote_msfp_surveyresponses` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_surveyresponse` |
| `salesorder_msfp_surveyresponses` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_surveyresponse` |
| `msdyn_postalbum_msfp_surveyresponses` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_surveyresponse` |
| `msfp_surveyresponse_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_surveyresponse` |
| `msfp_surveyresponse_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_surveyresponse` |
| `msfp_surveyresponse_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_surveyresponse` |
| `activity_pointer_msfp_surveyresponse` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_surveyresponse` |
| `msdyn_salessuggestion_msfp_surveyresponses` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyresponse` |
| `msfp_msfp_survey_msfp_surveyresponse_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyresponse` |
| `msfp_msfp_surveyinvite_msfp_surveyresponse_surveyinviteid` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_surveyinviteid` | `msfp_surveyinviteid_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parentsurveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parentsurveyresponse` | `msfp_parentsurveyresponse_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parent_survey_response_new` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parent_survey_response_new` | `msfp_parent_survey_response_new_msfp_surveyresponse` |

### One-to-Many (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyresponse_activity_parties` | [msfp_surveyresponse](msfp_surveyresponse.md) | `activityid` | `activityid_msfp_surveyresponse_activityparty` |
| `CampaignResponse_msfp_surveyresponses` | [msfp_surveyresponse](msfp_surveyresponse.md) | `originatingactivityid` | `originatingactivityid_msfp_surveyresponse_campaignresponse` |
| `msfp_surveyresponse_ActionCards` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_SyncErrors` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_AsyncOperations` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_MailboxTrackingFolders` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_UserEntityInstanceDatas` | [msfp_surveyresponse](msfp_surveyresponse.md) | `objectid` | `objectid_msfp_surveyresponse` |
| `msfp_surveyresponse_ProcessSession` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_BulkDeleteFailures` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_surveyresponse_PrincipalObjectAttributeAccesses` | [msfp_surveyresponse](msfp_surveyresponse.md) | `objectid` | `objectid_msfp_surveyresponse` |
| `msfp_surveyresponse_connections1` | [msfp_surveyresponse](msfp_surveyresponse.md) | `record1id` | `record1id_msfp_surveyresponse` |
| `msfp_surveyresponse_connections2` | [msfp_surveyresponse](msfp_surveyresponse.md) | `record2id` | `record2id_msfp_surveyresponse` |
| `msfp_surveyresponse_QueueItems` | [msfp_surveyresponse](msfp_surveyresponse.md) | `objectid` | `objectid_msfp_surveyresponse` |
| `msfp_surveyresponse_Annotations` | [msfp_surveyresponse](msfp_surveyresponse.md) | `objectid` | `objectid_msfp_surveyresponse` |
| `msfp_surveyresponse_Feedback` | [msfp_surveyresponse](msfp_surveyresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_alert_surveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponse` | `msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_questionresponse_surveyresponseid` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponseid` | `msfp_surveyresponseid` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parentsurveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parentsurveyresponse` | `msfp_parentsurveyresponse_msfp_surveyresponse` |
| `msfp_msfp_surveyresponse_msfp_surveyresponse_parent_survey_response_new` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_parent_survey_response_new` | `msfp_parent_survey_response_new_msfp_surveyresponse` |


## Source

Generated from [msfp_surveyresponse (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_surveyresponse')) on 2026-05-07.