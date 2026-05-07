---
logical: "msfp_alert"
display: "Avviso di Customer Voice"
entitySetName: "msfp_alerts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Avviso di Customer Voice

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_alert` |
| Display name | Avviso di Customer Voice |
| Display (plural) | Avviso di Customer Voice |
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

Writable: **61** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msfp_alertrule`, `msfp_assigneeemail`, `msfp_assigneename`, `msfp_customeremail`, `msfp_customername`, `msfp_notes`, `msfp_project`, `msfp_questions`, `msfp_reason`, `msfp_resolutiondetail`, `msfp_resolutionsentiment`, `msfp_resolveremail`, `msfp_resolvername`, `msfp_satisfactionmetric`, `msfp_survey`, `msfp_surveyresponse`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (57)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_msfp_alerts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_alert` |
| `msdyn_bookingrule_msfp_alerts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msfp_alert` |
| `msdyn_resourceterritory_msfp_alerts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msfp_alert` |
| `msdyn_systemuserschedulersetting_msfp_alerts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_alert` |
| `msdyn_timegroup_msfp_alerts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msfp_alert` |
| `msdyn_timegroupdetail_msfp_alerts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msfp_alert` |
| `msdyn_swarm_msfp_alerts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msfp_alert` |
| `interactionforemail_msfp_alerts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msfp_alert` |
| `knowledgebaserecord_msfp_alerts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msfp_alert` |
| `account_msfp_alerts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msfp_alert` |
| `msfp_alert_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msfp_alert` |
| `contact_msfp_alerts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msfp_alert` |
| `msfp_alert_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msfp_alert` |
| `msfp_alert_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msfp_alert` |
| `msfp_alert_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msfp_alert` |
| `msfp_alert_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msfp_alert` |
| `msfp_alert_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msfp_alert` |
| `msfp_alert_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msfp_alert` |
| `knowledgearticle_msfp_alerts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msfp_alert` |
| `adx_invitation_msfp_alerts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_alert` |
| `mspp_adplacement_msfp_alerts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_alert` |
| `mspp_pollplacement_msfp_alerts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_alert` |
| `mspp_publishingstatetransitionrule_msfp_alerts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msfp_alert` |
| `mspp_redirect_msfp_alerts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_alert` |
| `mspp_shortcut_msfp_alerts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_alert` |
| `mspp_website_msfp_alerts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_alert` |
| `lead_msfp_alerts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msfp_alert` |
| `bookableresourcebooking_msfp_alerts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msfp_alert` |
| `bookableresourcebookingheader_msfp_alerts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msfp_alert` |
| `bulkoperation_msfp_alerts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msfp_alert` |
| `campaign_msfp_alerts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msfp_alert` |
| `campaignactivity_msfp_alerts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msfp_alert` |
| `contract_msfp_alerts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msfp_alert` |
| `entitlement_msfp_alerts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msfp_alert` |
| `entitlementtemplate_msfp_alerts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msfp_alert` |
| `incident_msfp_alerts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msfp_alert` |
| `site_msfp_alerts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msfp_alert` |
| `msfp_alert_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msfp_alert` |
| `msdyn_customerasset_msfp_alerts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_alert` |
| `msdyn_playbookinstance_msfp_alerts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_alert` |
| `invoice_msfp_alerts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msfp_alert` |
| `opportunity_msfp_alerts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msfp_alert` |
| `quote_msfp_alerts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msfp_alert` |
| `salesorder_msfp_alerts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msfp_alert` |
| `msdyn_postalbum_msfp_alerts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_alert` |
| `msfp_alert_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msfp_alert` |
| `msfp_alert_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msfp_alert` |
| `msfp_alert_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msfp_alert` |
| `msfp_alert_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msfp_alert` |
| `msfp_alert_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msfp_alert` |
| `activity_pointer_msfp_alert` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msfp_alert` |
| `msdyn_salessuggestion_msfp_alerts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_alert` |
| `msfp_msfp_project_msfp_alert_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_survey_msfp_alert_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_surveyresponse_msfp_alert_surveyresponse` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponse` | `msfp_surveyresponse` |
| `msfp_msfp_satisfactionmetric_msfp_alert` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |
| `msfp_msfp_alertrule_msfp_alert_alertrule` | [msfp_alertrule](msfp_alertrule.md) | `msfp_alertrule` | `msfp_alertrule` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_alert_activity_parties` | [msfp_alert](msfp_alert.md) | `activityid` | `activityid_msfp_alert_activityparty` |
| `CampaignResponse_msfp_alerts` | [msfp_alert](msfp_alert.md) | `originatingactivityid` | `originatingactivityid_msfp_alert_campaignresponse` |
| `msfp_alert_ActionCards` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_SyncErrors` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_DuplicateMatchingRecord` | [msfp_alert](msfp_alert.md) | `duplicaterecordid` | `duplicaterecordid_msfp_alert` |
| `msfp_alert_DuplicateBaseRecord` | [msfp_alert](msfp_alert.md) | `baserecordid` | `baserecordid_msfp_alert` |
| `msfp_alert_AsyncOperations` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_MailboxTrackingFolders` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_UserEntityInstanceDatas` | [msfp_alert](msfp_alert.md) | `objectid` | `objectid_msfp_alert` |
| `msfp_alert_ProcessSession` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_BulkDeleteFailures` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |
| `msfp_alert_PrincipalObjectAttributeAccesses` | [msfp_alert](msfp_alert.md) | `objectid` | `objectid_msfp_alert` |
| `msfp_alert_connections1` | [msfp_alert](msfp_alert.md) | `record1id` | `record1id_msfp_alert` |
| `msfp_alert_connections2` | [msfp_alert](msfp_alert.md) | `record2id` | `record2id_msfp_alert` |
| `msfp_alert_QueueItems` | [msfp_alert](msfp_alert.md) | `objectid` | `objectid_msfp_alert` |
| `msfp_alert_Annotations` | [msfp_alert](msfp_alert.md) | `objectid` | `objectid_msfp_alert` |
| `msfp_alert_Feedback` | [msfp_alert](msfp_alert.md) | `regardingobjectid` | `regardingobjectid_msfp_alert` |


## Source

Generated from [msfp_alert (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_alert')) on 2026-05-07.