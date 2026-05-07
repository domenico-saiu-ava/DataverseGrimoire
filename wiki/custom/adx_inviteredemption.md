---
logical: "adx_inviteredemption"
display: "Riscatto invito"
entitySetName: "adx_inviteredemptions"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riscatto invito

Contiene informazioni sul riscatto di un invito.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_inviteredemption` |
| Display name | Riscatto invito |
| Display (plural) | Riscatti inviti |
| Schema name | `adx_inviteredemption` |
| Entity set (Web API) | `adx_inviteredemptions` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_inviteredemptions?$select=subject&$top=10
GET /api/data/v9.2/adx_inviteredemptions(<guid>)
POST /api/data/v9.2/adx_inviteredemptions
PATCH /api/data/v9.2/adx_inviteredemptions(<guid>)
DELETE /api/data/v9.2/adx_inviteredemptions(<guid>)
```

## Attributes

Writable: **46** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `adx_ipaddress`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (53)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `invoice_adx_inviteredemptions` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_adx_inviteredemption` |
| `contract_adx_inviteredemptions` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_adx_inviteredemption` |
| `msdyn_bookingalertstatus_adx_inviteredemptions` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_adx_inviteredemption` |
| `msdyn_customerasset_adx_inviteredemptions` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_adx_inviteredemption` |
| `opportunity_adx_inviteredemptions` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_adx_inviteredemption` |
| `entitlement_adx_inviteredemptions` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_adx_inviteredemption` |
| `msdyn_bookingrule_adx_inviteredemptions` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_adx_inviteredemption` |
| `entitlementtemplate_adx_inviteredemptions` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_adx_inviteredemption` |
| `incident_adx_inviteredemptions` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_adx_inviteredemption` |
| `quote_adx_inviteredemptions` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_adx_inviteredemption` |
| `service_adx_inviteredemptions` | [service](service.md) | `regardingobjectid` | `regardingobjectid_service_adx_inviteredemption` |
| `salesorder_adx_inviteredemptions` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_adx_inviteredemption` |
| `lead_adx_inviteredemptions` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_adx_inviteredemption` |
| `msdyn_resourceterritory_adx_inviteredemptions` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_adx_inviteredemption` |
| `bulkoperation_adx_inviteredemptions` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_adx_inviteredemption` |
| `campaign_adx_inviteredemptions` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_adx_inviteredemption` |
| `interactionforemail_adx_inviteredemptions` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_adx_inviteredemption` |
| `knowledgebaserecord_adx_inviteredemptions` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_adx_inviteredemption` |
| `account_adx_inviteredemptions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_adx_inviteredemption` |
| `contact_adx_inviteredemptions` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_adx_inviteredemption` |
| `adx_inviteredemption_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_adx_inviteredemption` |
| `adx_inviteredemption_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_adx_inviteredemption` |
| `adx_inviteredemption_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_adx_inviteredemption` |
| `adx_inviteredemption_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_adx_inviteredemption` |
| `adx_inviteredemption_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_adx_inviteredemption` |
| `knowledgearticle_adx_inviteredemptions` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_adx_inviteredemption` |
| `adx_invitation_adx_inviteredemptions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_adx_inviteredemption` |
| `adx_inviteredemption_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_adx_inviteredemption` |
| `adx_inviteredemption_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_adx_inviteredemption` |
| `activity_pointer_adx_inviteredemption` | [activitypointer](activitypointer.md) | `activityid` | `activityid_adx_inviteredemption` |
| `site_adx_inviteredemptions` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_adx_inviteredemption` |
| `campaignactivity_adx_inviteredemptions` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_adx_inviteredemption` |
| `msdyn_systemuserschedulersetting_adx_inviteredemptions` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_adx_inviteredemption` |
| `msdyn_timegroup_adx_inviteredemptions` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_adx_inviteredemption` |
| `bookableresourcebooking_adx_inviteredemptions` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_adx_inviteredemption` |
| `msdyn_postalbum_adx_inviteredemptions` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_adx_inviteredemption` |
| `msdyn_timegroupdetail_adx_inviteredemptions` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_adx_inviteredemption` |
| `msdyn_playbookinstance_adx_inviteredemptions` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_adx_inviteredemption` |
| `bookableresourcebookingheader_adx_inviteredemptions` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_adx_inviteredemption` |
| `msdyn_swarm_adx_inviteredemptions` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_adx_inviteredemption` |
| `msdyn_salessuggestion_adx_inviteredemptions` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_adx_inviteredemption` |
| `mspp_adplacement_adx_inviteredemptions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_inviteredemption` |
| `adx_inviteredemption_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_adx_inviteredemption` |
| `mspp_pollplacement_adx_inviteredemptions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_inviteredemption` |
| `mspp_publishingstatetransitionrule_adx_inviteredemptions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption` |
| `mspp_redirect_adx_inviteredemptions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_inviteredemption` |
| `mspp_shortcut_adx_inviteredemptions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_inviteredemption` |
| `mspp_website_adx_inviteredemptions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_inviteredemption` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_activity_parties` | [adx_inviteredemption](adx_inviteredemption.md) | `activityid` | `activityid_adx_inviteredemption_activityparty` |
| `adx_inviteredemption_ActionCards` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_SyncErrors` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_DuplicateMatchingRecord` | [adx_inviteredemption](adx_inviteredemption.md) | `duplicaterecordid` | `duplicaterecordid_adx_inviteredemption` |
| `adx_inviteredemption_DuplicateBaseRecord` | [adx_inviteredemption](adx_inviteredemption.md) | `baserecordid` | `baserecordid_adx_inviteredemption` |
| `adx_inviteredemption_AsyncOperations` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_MailboxTrackingFolders` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_UserEntityInstanceDatas` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_inviteredemption_ProcessSession` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_BulkDeleteFailures` | [adx_inviteredemption](adx_inviteredemption.md) | `regardingobjectid` | `regardingobjectid_adx_inviteredemption` |
| `adx_inviteredemption_PrincipalObjectAttributeAccesses` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_inviteredemption_connections1` | [adx_inviteredemption](adx_inviteredemption.md) | `record1id` | `record1id_adx_inviteredemption` |
| `adx_inviteredemption_connections2` | [adx_inviteredemption](adx_inviteredemption.md) | `record2id` | `record2id_adx_inviteredemption` |
| `adx_inviteredemption_QueueItems` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_inviteredemption_Annotations` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `CampaignResponse_adx_inviteredemptions` | [adx_inviteredemption](adx_inviteredemption.md) | `originatingactivityid` | `originatingactivityid_adx_inviteredemption_campaignresponse` |


## Source

Generated from [adx_inviteredemption (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_inviteredemption')) on 2026-05-07.