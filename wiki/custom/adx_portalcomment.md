---
logical: "adx_portalcomment"
display: "Commento portale"
entitySetName: "adx_portalcomments"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Commento portale

Impegno usato per condividere informazioni tra l'utente e il cliente nel portale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_portalcomment` |
| Display name | Commento portale |
| Display (plural) | Commenti portale |
| Schema name | `adx_portalcomment` |
| Entity set (Web API) | `adx_portalcomments` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_portalcomments?$select=subject&$top=10
GET /api/data/v9.2/adx_portalcomments(<guid>)
POST /api/data/v9.2/adx_portalcomments
PATCH /api/data/v9.2/adx_portalcomments(<guid>)
DELETE /api/data/v9.2/adx_portalcomments(<guid>)
```

## Attributes

Writable: **46** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `adx_portalcommentdirectioncode`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (54)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `invoice_adx_portalcomments` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_adx_portalcomment` |
| `contract_adx_portalcomments` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_adx_portalcomment` |
| `msdyn_bookingalertstatus_adx_portalcomments` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_adx_portalcomment` |
| `msdyn_customerasset_adx_portalcomments` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_adx_portalcomment` |
| `opportunity_adx_portalcomments` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_adx_portalcomment` |
| `entitlement_adx_portalcomments` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_adx_portalcomment` |
| `msdyn_bookingrule_adx_portalcomments` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_adx_portalcomment` |
| `entitlementtemplate_adx_portalcomments` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_adx_portalcomment` |
| `incident_adx_portalcomments` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_adx_portalcomment` |
| `quote_adx_portalcomments` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_adx_portalcomment` |
| `service_adx_portalcomments` | [service](service.md) | `regardingobjectid` | `regardingobjectid_service_adx_portalcomment` |
| `salesorder_adx_portalcomments` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_adx_portalcomment` |
| `lead_adx_portalcomments` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_adx_portalcomment` |
| `msdyn_resourceterritory_adx_portalcomments` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_adx_portalcomment` |
| `bulkoperation_adx_portalcomments` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_adx_portalcomment` |
| `campaign_adx_portalcomments` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_adx_portalcomment` |
| `site_adx_portalcomments` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_adx_portalcomment` |
| `campaignactivity_adx_portalcomments` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_adx_portalcomment` |
| `interactionforemail_adx_portalcomments` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_adx_portalcomment` |
| `knowledgebaserecord_adx_portalcomments` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_adx_portalcomment` |
| `account_adx_portalcomments` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_adx_portalcomment` |
| `adx_portalcomment_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_adx_portalcomment` |
| `contact_adx_portalcomments` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_adx_portalcomment` |
| `adx_portalcomment_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_adx_portalcomment` |
| `adx_portalcomment_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_adx_portalcomment` |
| `adx_portalcomment_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_adx_portalcomment` |
| `adx_portalcomment_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_adx_portalcomment` |
| `adx_portalcomment_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_adx_portalcomment` |
| `adx_portalcomment_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_adx_portalcomment` |
| `knowledgearticle_adx_portalcomments` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_adx_portalcomment` |
| `adx_invitation_adx_portalcomments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_portalcomment` |
| `adx_portalcomment_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_adx_portalcomment` |
| `adx_portalcomment_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_adx_portalcomment` |
| `adx_portalcomment_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_adx_portalcomment` |
| `adx_portalcomment_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_adx_portalcomment` |
| `adx_portalcomment_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_adx_portalcomment` |
| `activity_pointer_adx_portalcomment` | [activitypointer](activitypointer.md) | `activityid` | `activityid_adx_portalcomment` |
| `processstage_adx_portalcomment` | [processstage](processstage.md) | `stageid` | `stageid_adx_portalcomment` |
| `msdyn_systemuserschedulersetting_adx_portalcomments` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_adx_portalcomment` |
| `msdyn_timegroup_adx_portalcomments` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_adx_portalcomment` |
| `bookableresourcebooking_adx_portalcomments` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_adx_portalcomment` |
| `msdyn_postalbum_adx_portalcomments` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_adx_portalcomment` |
| `msdyn_timegroupdetail_adx_portalcomments` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_adx_portalcomment` |
| `msdyn_playbookinstance_adx_portalcomments` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_adx_portalcomment` |
| `bookableresourcebookingheader_adx_portalcomments` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_adx_portalcomment` |
| `msdyn_swarm_adx_portalcomments` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_adx_portalcomment` |
| `msdyn_salessuggestion_adx_portalcomments` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_adx_portalcomment` |
| `mspp_adplacement_adx_portalcomments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_portalcomment` |
| `adx_portalcomment_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_adx_portalcomment` |
| `mspp_pollplacement_adx_portalcomments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_portalcomment` |
| `mspp_publishingstatetransitionrule_adx_portalcomments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_portalcomment` |
| `mspp_redirect_adx_portalcomments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_portalcomment` |
| `mspp_shortcut_adx_portalcomments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_portalcomment` |
| `mspp_website_adx_portalcomments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_portalcomment` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_portalcomment_activity_parties` | [adx_portalcomment](adx_portalcomment.md) | `activityid` | `activityid_adx_portalcomment_activityparty` |
| `adx_portalcomment_ActionCards` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_SyncErrors` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_SharePointDocumentLocations` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_SharePointDocuments` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_AsyncOperations` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_MailboxTrackingFolders` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_UserEntityInstanceDatas` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `adx_portalcomment_ProcessSession` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_BulkDeleteFailures` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `adx_portalcomment_PrincipalObjectAttributeAccesses` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `adx_portalcomment_QueueItems` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `adx_portalcomment_Annotations` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `CampaignResponse_adx_portalcomments` | [adx_portalcomment](adx_portalcomment.md) | `originatingactivityid` | `originatingactivityid_adx_portalcomment_campaignresponse` |


## Source

Generated from [adx_portalcomment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_portalcomment')) on 2026-05-07.