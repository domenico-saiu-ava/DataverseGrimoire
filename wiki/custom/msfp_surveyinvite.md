---
logical: "msfp_surveyinvite"
display: "Invito al sondaggio Customer Voice"
entitySetName: "msfp_surveyinvites"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Invito al sondaggio Customer Voice

Impegno che tiene traccia di un invito al sondaggio inviato a un utente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyinvite` |
| Display name | Invito al sondaggio Customer Voice |
| Display (plural) | Inviti al sondaggio Customer Voice |
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

Writable: **67** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msfp_channel`, `msfp_contextparameters`, `msfp_customervoicesurveyinvite`, `msfp_emailmessage`, `msfp_fromemailaddress`, `msfp_invitebouncecategory`, `msfp_invitebouncedetails`, `msfp_inviteemailaddress`, `msfp_invitefailurereason`, `msfp_invitesentdate`, `msfp_invitestatus`, `msfp_invitestatusreason`, `msfp_inviteupdateddate`, `msfp_isincentiveenabled`, `msfp_longurl`, `msfp_otherproperties`, `msfp_respondent`, `msfp_sourcesurveyidentifier`, `msfp_subject`, `msfp_surveyid`, `msfp_surveyinvitationurl`, `msfp_unsubscribedrecipientsurveyinviteid`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (54)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_msfp_surveyinvites` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_surveyinvite` |
| `msdyn_bookingrule_msfp_surveyinvites` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_surveyinvite` |
| `msdyn_resourceterritory_msfp_surveyinvites` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_surveyinvite` |
| `msdyn_systemuserschedulersetting_msfp_surveyinvites` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyinvite` |
| `msdyn_timegroup_msfp_surveyinvites` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_surveyinvite` |
| `msdyn_timegroupdetail_msfp_surveyinvites` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_surveyinvite` |
| `msdyn_swarm_msfp_surveyinvites` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_surveyinvite` |
| `interactionforemail_msfp_surveyinvites` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_surveyinvite` |
| `knowledgebaserecord_msfp_surveyinvites` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_surveyinvite` |
| `account_msfp_surveyinvites` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_surveyinvite` |
| `contact_msfp_surveyinvites` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_surveyinvite` |
| `msfp_surveyinvite_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_surveyinvite` |
| `msfp_surveyinvite_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_surveyinvite` |
| `msfp_surveyinvite_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_surveyinvite` |
| `msfp_surveyinvite_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_surveyinvite` |
| `msfp_surveyinvite_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_surveyinvite` |
| `knowledgearticle_msfp_surveyinvites` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_surveyinvite` |
| `adx_invitation_msfp_surveyinvites` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyinvite` |
| `mspp_adplacement_msfp_surveyinvites` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyinvite` |
| `mspp_pollplacement_msfp_surveyinvites` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyinvite` |
| `mspp_publishingstatetransitionrule_msfp_surveyinvites` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyinvite` |
| `mspp_redirect_msfp_surveyinvites` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyinvite` |
| `mspp_shortcut_msfp_surveyinvites` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyinvite` |
| `mspp_website_msfp_surveyinvites` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyinvite` |
| `lead_msfp_surveyinvites` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_surveyinvite` |
| `bookableresourcebooking_msfp_surveyinvites` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_surveyinvite` |
| `bookableresourcebookingheader_msfp_surveyinvites` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_surveyinvite` |
| `bulkoperation_msfp_surveyinvites` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_surveyinvite` |
| `campaign_msfp_surveyinvites` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_surveyinvite` |
| `campaignactivity_msfp_surveyinvites` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_surveyinvite` |
| `contract_msfp_surveyinvites` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_surveyinvite` |
| `entitlement_msfp_surveyinvites` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_surveyinvite` |
| `entitlementtemplate_msfp_surveyinvites` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_surveyinvite` |
| `incident_msfp_surveyinvites` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_surveyinvite` |
| `site_msfp_surveyinvites` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_surveyinvite` |
| `msfp_surveyinvite_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_surveyinvite` |
| `msdyn_customerasset_msfp_surveyinvites` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyinvite` |
| `msdyn_playbookinstance_msfp_surveyinvites` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_surveyinvite` |
| `invoice_msfp_surveyinvites` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_surveyinvite` |
| `opportunity_msfp_surveyinvites` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_surveyinvite` |
| `quote_msfp_surveyinvites` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_surveyinvite` |
| `salesorder_msfp_surveyinvites` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_surveyinvite` |
| `msdyn_postalbum_msfp_surveyinvites` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_surveyinvite` |
| `msfp_surveyinvite_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_surveyinvite` |
| `msfp_surveyinvite_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_surveyinvite` |
| `msfp_surveyinvite_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_surveyinvite` |
| `activity_pointer_msfp_surveyinvite` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_surveyinvite` |
| `msdyn_salessuggestion_msfp_surveyinvites` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyinvite` |
| `msfp_msfp_survey_msfp_surveyinvite_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyinvite` |
| `msfp_msfp_unsubscribedrecipient_msfp_surveyinvite` | [msfp_unsubscribedrecipient](msfp_unsubscribedrecipient.md) | `msfp_unsubscribedrecipientsurveyinviteid` | `msfp_UnsubscribedRecipientSurveyInviteId_msfp_surveyinvite` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyinvite_activity_parties` | [msfp_surveyinvite](msfp_surveyinvite.md) | `activityid` | `activityid_msfp_surveyinvite_activityparty` |
| `CampaignResponse_msfp_surveyinvites` | [msfp_surveyinvite](msfp_surveyinvite.md) | `originatingactivityid` | `originatingactivityid_msfp_surveyinvite_campaignresponse` |
| `msfp_surveyinvite_ActionCards` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_SyncErrors` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_AsyncOperations` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_MailboxTrackingFolders` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_UserEntityInstanceDatas` | [msfp_surveyinvite](msfp_surveyinvite.md) | `objectid` | `objectid_msfp_surveyinvite` |
| `msfp_surveyinvite_ProcessSession` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_BulkDeleteFailures` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_surveyinvite_PrincipalObjectAttributeAccesses` | [msfp_surveyinvite](msfp_surveyinvite.md) | `objectid` | `objectid_msfp_surveyinvite` |
| `msfp_surveyinvite_connections1` | [msfp_surveyinvite](msfp_surveyinvite.md) | `record1id` | `record1id_msfp_surveyinvite` |
| `msfp_surveyinvite_connections2` | [msfp_surveyinvite](msfp_surveyinvite.md) | `record2id` | `record2id_msfp_surveyinvite` |
| `msfp_surveyinvite_QueueItems` | [msfp_surveyinvite](msfp_surveyinvite.md) | `objectid` | `objectid_msfp_surveyinvite` |
| `msfp_surveyinvite_Annotations` | [msfp_surveyinvite](msfp_surveyinvite.md) | `objectid` | `objectid_msfp_surveyinvite` |
| `msfp_surveyinvite_Feedback` | [msfp_surveyinvite](msfp_surveyinvite.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvite` |
| `msfp_shorturl_inviteid_msfp_surveyinvite` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_inviteid` | `msfp_inviteid` |
| `msfp_msfp_surveyinvite_msfp_surveyresponse_surveyinviteid` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_surveyinviteid` | `msfp_surveyinviteid_msfp_surveyresponse` |


## Source

Generated from [msfp_surveyinvite (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_surveyinvite')) on 2026-05-07.