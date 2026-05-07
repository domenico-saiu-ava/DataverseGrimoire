---
logical: "cai_genericcontact"
display: "Contatto generico"
entitySetName: "cai_genericcontacts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contatto generico

Rappresenta il contatto avvenuto tra il gestore e il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_genericcontact` |
| Display name | Contatto generico |
| Display (plural) | Contatti generici |
| Schema name | `cai_genericcontact` |
| Entity set (Web API) | `cai_genericcontacts` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_genericcontacts?$select=subject&$top=10
GET /api/data/v9.2/cai_genericcontacts(<guid>)
POST /api/data/v9.2/cai_genericcontacts
PATCH /api/data/v9.2/cai_genericcontacts(<guid>)
DELETE /api/data/v9.2/cai_genericcontacts(<guid>)
```

## Attributes

Writable: **51** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cai_code`, `cai_contactchannelid`, `cai_contactdate`, `cai_managerid`, `cai_notes`, `cai_orgunitid`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (55)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_contactchannel_cai_genericcontact_contactchannelid` | [cai_contactchannel](cai_contactchannel.md) | `cai_contactchannelid` | `cai_contactchannelid_cai_genericcontact` |
| `cai_systemuser_cai_genericcontact_managerid` | [systemuser](systemuser.md) | `cai_managerid` | `cai_managerid_cai_genericcontact` |
| `interactionforemail_cai_genericcontacts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_cai_genericcontact` |
| `knowledgebaserecord_cai_genericcontacts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_cai_genericcontact` |
| `account_cai_genericcontacts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_cai_genericcontact` |
| `cai_genericcontact_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_cai_genericcontact` |
| `contact_cai_genericcontacts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_cai_genericcontact` |
| `cai_genericcontact_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_cai_genericcontact` |
| `cai_genericcontact_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_cai_genericcontact` |
| `cai_genericcontact_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_cai_genericcontact` |
| `cai_genericcontact_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_cai_genericcontact` |
| `cai_genericcontact_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_cai_genericcontact` |
| `cai_genericcontact_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_cai_genericcontact` |
| `knowledgearticle_cai_genericcontacts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_cai_genericcontact` |
| `msdyn_bookingalertstatus_cai_genericcontacts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_cai_genericcontact` |
| `msdyn_bookingrule_cai_genericcontacts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_cai_genericcontact` |
| `msdyn_resourceterritory_cai_genericcontacts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_cai_genericcontact` |
| `msdyn_systemuserschedulersetting_cai_genericcontacts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_cai_genericcontact` |
| `msdyn_timegroup_cai_genericcontacts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_cai_genericcontact` |
| `msdyn_timegroupdetail_cai_genericcontacts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_cai_genericcontact` |
| `adx_invitation_cai_genericcontacts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_cai_genericcontact` |
| `mspp_adplacement_cai_genericcontacts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_cai_genericcontact` |
| `mspp_pollplacement_cai_genericcontacts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_cai_genericcontact` |
| `mspp_publishingstatetransitionrule_cai_genericcontacts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_cai_genericcontact` |
| `mspp_redirect_cai_genericcontacts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_cai_genericcontact` |
| `mspp_shortcut_cai_genericcontacts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_cai_genericcontact` |
| `mspp_website_cai_genericcontacts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_cai_genericcontact` |
| `lead_cai_genericcontacts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_cai_genericcontact` |
| `bookableresourcebooking_cai_genericcontacts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_cai_genericcontact` |
| `bookableresourcebookingheader_cai_genericcontacts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_cai_genericcontact` |
| `bulkoperation_cai_genericcontacts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_cai_genericcontact` |
| `campaign_cai_genericcontacts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_cai_genericcontact` |
| `campaignactivity_cai_genericcontacts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_cai_genericcontact` |
| `contract_cai_genericcontacts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_cai_genericcontact` |
| `entitlement_cai_genericcontacts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_cai_genericcontact` |
| `entitlementtemplate_cai_genericcontacts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_cai_genericcontact` |
| `incident_cai_genericcontacts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_cai_genericcontact` |
| `site_cai_genericcontacts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_cai_genericcontact` |
| `cai_genericcontact_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_cai_genericcontact` |
| `msdyn_customerasset_cai_genericcontacts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_cai_genericcontact` |
| `msdyn_playbookinstance_cai_genericcontacts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_cai_genericcontact` |
| `invoice_cai_genericcontacts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_cai_genericcontact` |
| `opportunity_cai_genericcontacts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_cai_genericcontact` |
| `quote_cai_genericcontacts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_cai_genericcontact` |
| `salesorder_cai_genericcontacts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_cai_genericcontact` |
| `msdyn_postalbum_cai_genericcontacts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_cai_genericcontact` |
| `msdyn_swarm_cai_genericcontacts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_cai_genericcontact` |
| `msdyn_salessuggestion_cai_genericcontacts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_cai_genericcontact` |
| `cai_genericcontact_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_cai_genericcontact` |
| `cai_genericcontact_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_cai_genericcontact` |
| `cai_genericcontact_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_cai_genericcontact` |
| `cai_genericcontact_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_cai_genericcontact` |
| `cai_genericcontact_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_cai_genericcontact` |
| `activity_pointer_cai_genericcontact` | [activitypointer](activitypointer.md) | `activityid` | `activityid_cai_genericcontact` |
| `cai_genericcontact_orgunitid_cai_orgunit` | [cai_orgunit](cai_orgunit.md) | `cai_orgunitid` | `cai_orgunitid_cai_genericcontact` |

### One-to-Many (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_leadoutcomeactivitycssession_genericcontactid_cai_genericcontact` | [cai_genericcontact](cai_genericcontact.md) | `cai_genericcontactid` | `cai_genericcontactid` |
| `cai_genericcontact_activity_parties` | [cai_genericcontact](cai_genericcontact.md) | `activityid` | `activityid_cai_genericcontact_activityparty` |
| `CampaignResponse_cai_genericcontacts` | [cai_genericcontact](cai_genericcontact.md) | `originatingactivityid` | `originatingactivityid_cai_genericcontact_campaignresponse` |
| `cai_genericcontact_ActionCards` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_SyncErrors` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_DuplicateMatchingRecord` | [cai_genericcontact](cai_genericcontact.md) | `duplicaterecordid` | `duplicaterecordid_cai_genericcontact` |
| `cai_genericcontact_DuplicateBaseRecord` | [cai_genericcontact](cai_genericcontact.md) | `baserecordid` | `baserecordid_cai_genericcontact` |
| `cai_genericcontact_AsyncOperations` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_MailboxTrackingFolders` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_UserEntityInstanceDatas` | [cai_genericcontact](cai_genericcontact.md) | `objectid` | `objectid_cai_genericcontact` |
| `cai_genericcontact_ProcessSession` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_BulkDeleteFailures` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_genericcontact_PrincipalObjectAttributeAccesses` | [cai_genericcontact](cai_genericcontact.md) | `objectid` | `objectid_cai_genericcontact` |
| `cai_genericcontact_connections1` | [cai_genericcontact](cai_genericcontact.md) | `record1id` | `record1id_cai_genericcontact` |
| `cai_genericcontact_connections2` | [cai_genericcontact](cai_genericcontact.md) | `record2id` | `record2id_cai_genericcontact` |
| `cai_genericcontact_QueueItems` | [cai_genericcontact](cai_genericcontact.md) | `objectid` | `objectid_cai_genericcontact` |
| `cai_genericcontact_Annotations` | [cai_genericcontact](cai_genericcontact.md) | `objectid` | `objectid_cai_genericcontact` |
| `cai_genericcontact_Feedback` | [cai_genericcontact](cai_genericcontact.md) | `regardingobjectid` | `regardingobjectid_cai_genericcontact` |
| `cai_cai_genericcontact_cai_leadoutcomeactivity_genericcontactid` | [cai_genericcontact](cai_genericcontact.md) | `cai_genericcontactid` | `cai_genericcontactid` |


## Source

Generated from [cai_genericcontact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_genericcontact')) on 2026-05-07.