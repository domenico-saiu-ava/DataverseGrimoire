---
logical: "msdyn_copilottranscript"
display: "Trascrizione Copilot"
entitySetName: "msdyn_copilottranscripts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trascrizione Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilottranscript` |
| Display name | Trascrizione Copilot |
| Display (plural) | Trascrizioni Copilot |
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

Writable: **50** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `msdyn_additionalcontext`, `msdyn_copilotmode`, `msdyn_copilotskill`, `msdyn_transcriptforid`, `msdyn_transcriptforlogicalname`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (52)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_msdyn_copilottranscripts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_copilottranscript` |
| `msdyn_bookingrule_msdyn_copilottranscripts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_copilottranscript` |
| `interactionforemail_msdyn_copilottranscripts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_copilottranscript` |
| `knowledgebaserecord_msdyn_copilottranscripts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_copilottranscript` |
| `account_msdyn_copilottranscripts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_copilottranscript` |
| `contact_msdyn_copilottranscripts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_copilottranscript` |
| `msdyn_copilottranscript_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_copilottranscript` |
| `msdyn_copilottranscript_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_copilottranscript` |
| `msdyn_copilottranscript_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_copilottranscript` |
| `knowledgearticle_msdyn_copilottranscripts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_copilottranscript` |
| `adx_invitation_msdyn_copilottranscripts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_copilottranscript` |
| `mspp_adplacement_msdyn_copilottranscripts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_copilottranscript` |
| `mspp_pollplacement_msdyn_copilottranscripts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_copilottranscript` |
| `mspp_publishingstatetransitionrule_msdyn_copilottranscripts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_copilottranscript` |
| `mspp_redirect_msdyn_copilottranscripts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_copilottranscript` |
| `mspp_shortcut_msdyn_copilottranscripts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_copilottranscript` |
| `mspp_website_msdyn_copilottranscripts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_copilottranscript` |
| `lead_msdyn_copilottranscripts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_copilottranscript` |
| `bookableresourcebooking_msdyn_copilottranscripts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_copilottranscript` |
| `bookableresourcebookingheader_msdyn_copilottranscripts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_copilottranscript` |
| `bulkoperation_msdyn_copilottranscripts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_copilottranscript` |
| `campaign_msdyn_copilottranscripts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_copilottranscript` |
| `campaignactivity_msdyn_copilottranscripts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_copilottranscript` |
| `contract_msdyn_copilottranscripts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_copilottranscript` |
| `entitlement_msdyn_copilottranscripts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_copilottranscript` |
| `entitlementtemplate_msdyn_copilottranscripts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_copilottranscript` |
| `incident_msdyn_copilottranscripts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_copilottranscript` |
| `site_msdyn_copilottranscripts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_copilottranscript` |
| `msdyn_copilottranscript_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_copilottranscript` |
| `msdyn_customerasset_msdyn_copilottranscripts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_copilottranscript` |
| `msdyn_playbookinstance_msdyn_copilottranscripts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_copilottranscript` |
| `invoice_msdyn_copilottranscripts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_copilottranscript` |
| `opportunity_msdyn_copilottranscripts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_copilottranscript` |
| `quote_msdyn_copilottranscripts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_copilottranscript` |
| `salesorder_msdyn_copilottranscripts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_copilottranscript` |
| `msdyn_postalbum_msdyn_copilottranscripts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_copilottranscript` |
| `msdyn_swarm_msdyn_copilottranscripts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_copilottranscript` |
| `msdyn_salessuggestion_msdyn_copilottranscripts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_copilottranscript` |
| `msdyn_copilottranscript_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_copilottranscript` |
| `msdyn_copilottranscript_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_copilottranscript` |
| `activity_pointer_msdyn_copilottranscript` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_copilottranscript` |
| `msdyn_resourceterritory_msdyn_copilottranscripts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_copilottranscript` |
| `msdyn_systemuserschedulersetting_msdyn_copilottranscripts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_copilottranscript` |
| `msdyn_timegroup_msdyn_copilottranscripts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_copilottranscript` |
| `msdyn_timegroupdetail_msdyn_copilottranscripts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_copilottranscript` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilottranscript_activity_parties` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `activityid` | `activityid_msdyn_copilottranscript_activityparty` |
| `CampaignResponse_msdyn_copilottranscripts` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `originatingactivityid` | `originatingactivityid_msdyn_copilottranscript_campaignresponse` |
| `msdyn_copilottranscript_ActionCards` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_SyncErrors` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_DuplicateMatchingRecord` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_DuplicateBaseRecord` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `baserecordid` | `baserecordid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_AsyncOperations` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_MailboxTrackingFolders` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_UserEntityInstanceDatas` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `objectid` | `objectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_ProcessSession` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_BulkDeleteFailures` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_PrincipalObjectAttributeAccesses` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `objectid` | `objectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_connections1` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `record1id` | `record1id_msdyn_copilottranscript` |
| `msdyn_copilottranscript_connections2` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `record2id` | `record2id_msdyn_copilottranscript` |
| `msdyn_copilottranscript_QueueItems` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `objectid` | `objectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_Annotations` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `objectid` | `objectid_msdyn_copilottranscript` |
| `msdyn_copilottranscript_Feedback` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilottranscript` |
| `msdyn_msdyn_copilottranscript_msdyn_copilottranscriptdata_copilottranscriptid` | [msdyn_copilottranscript](msdyn_copilottranscript.md) | `msdyn_copilottranscriptid` | `msdyn_copilottranscriptid` |


## Source

Generated from [msdyn_copilottranscript (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilottranscript')) on 2026-05-07.