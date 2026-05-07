---
logical: "msdyn_bookingalert"
display: "Avviso prenotazione"
entitySetName: "msdyn_bookingalerts"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Avviso prenotazione

Avvisi che notificano problemi di prenotazione o informazioni agli utenti della scheda di pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookingalert` |
| Display name | Avviso prenotazione |
| Display (plural) | Avvisi prenotazione |
| Schema name | `msdyn_bookingalert` |
| Entity set (Web API) | `msdyn_bookingalerts` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookingalerts?$select=subject&$top=10
GET /api/data/v9.2/msdyn_bookingalerts(<guid>)
POST /api/data/v9.2/msdyn_bookingalerts
PATCH /api/data/v9.2/msdyn_bookingalerts(<guid>)
DELETE /api/data/v9.2/msdyn_bookingalerts(<guid>)
```

## Attributes

Writable: **45** · Read-only: **21**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `leftvoicemail`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `serviceid`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `exchangerate`, `instancetypecode`, `isregularactivity`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `versionnumber`

## Relationships

### Many-to-One (52)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `interactionforemail_msdyn_bookingalerts` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_msdyn_bookingalert` |
| `knowledgebaserecord_msdyn_bookingalerts` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_msdyn_bookingalert` |
| `account_msdyn_bookingalerts` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_msdyn_bookingalert` |
| `msdyn_bookingalert_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_msdyn_bookingalert` |
| `contact_msdyn_bookingalerts` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_msdyn_bookingalert` |
| `msdyn_bookingalert_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_msdyn_bookingalert` |
| `msdyn_bookingalert_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_msdyn_bookingalert` |
| `msdyn_bookingalert_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_msdyn_bookingalert` |
| `msdyn_bookingalert_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_msdyn_bookingalert` |
| `msdyn_bookingalert_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_msdyn_bookingalert` |
| `msdyn_bookingalert_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_msdyn_bookingalert` |
| `knowledgearticle_msdyn_bookingalerts` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_msdyn_bookingalert` |
| `adx_invitation_msdyn_bookingalerts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_bookingalert` |
| `mspp_adplacement_msdyn_bookingalerts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_bookingalert` |
| `mspp_pollplacement_msdyn_bookingalerts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_bookingalert` |
| `mspp_publishingstatetransitionrule_msdyn_bookingalerts` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_msdyn_bookingalert` |
| `mspp_redirect_msdyn_bookingalerts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_bookingalert` |
| `mspp_shortcut_msdyn_bookingalerts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_bookingalert` |
| `mspp_website_msdyn_bookingalerts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_bookingalert` |
| `lead_msdyn_bookingalerts` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_msdyn_bookingalert` |
| `bookableresourcebooking_msdyn_bookingalerts` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_msdyn_bookingalert` |
| `bookableresourcebookingheader_msdyn_bookingalerts` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_msdyn_bookingalert` |
| `bulkoperation_msdyn_bookingalerts` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_msdyn_bookingalert` |
| `campaign_msdyn_bookingalerts` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_msdyn_bookingalert` |
| `campaignactivity_msdyn_bookingalerts` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_msdyn_bookingalert` |
| `contract_msdyn_bookingalerts` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_msdyn_bookingalert` |
| `entitlement_msdyn_bookingalerts` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_msdyn_bookingalert` |
| `entitlementtemplate_msdyn_bookingalerts` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_msdyn_bookingalert` |
| `incident_msdyn_bookingalerts` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_msdyn_bookingalert` |
| `site_msdyn_bookingalerts` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_msdyn_bookingalert` |
| `msdyn_bookingalert_service_serviceid` | [service](service.md) | `serviceid` | `serviceid_msdyn_bookingalert` |
| `msdyn_customerasset_msdyn_bookingalerts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_bookingalert` |
| `msdyn_playbookinstance_msdyn_bookingalerts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_bookingalert` |
| `invoice_msdyn_bookingalerts` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_msdyn_bookingalert` |
| `opportunity_msdyn_bookingalerts` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_msdyn_bookingalert` |
| `quote_msdyn_bookingalerts` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_msdyn_bookingalert` |
| `salesorder_msdyn_bookingalerts` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_msdyn_bookingalert` |
| `msdyn_postalbum_msdyn_bookingalerts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_bookingalert` |
| `msdyn_swarm_msdyn_bookingalerts` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_msdyn_bookingalert` |
| `msdyn_salessuggestion_msdyn_bookingalerts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_bookingalert` |
| `msdyn_bookingalert_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_msdyn_bookingalert` |
| `msdyn_bookingalert_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_msdyn_bookingalert` |
| `msdyn_bookingalert_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_msdyn_bookingalert` |
| `msdyn_bookingalert_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_msdyn_bookingalert` |
| `msdyn_bookingalert_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_msdyn_bookingalert` |
| `activity_pointer_msdyn_bookingalert` | [activitypointer](activitypointer.md) | `activityid` | `activityid_msdyn_bookingalert` |
| `msdyn_bookingalertstatus_msdyn_bookingalerts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_bookingalert` |
| `msdyn_bookingrule_msdyn_bookingalerts` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_msdyn_bookingalert` |
| `msdyn_resourceterritory_msdyn_bookingalerts` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_msdyn_bookingalert` |
| `msdyn_systemuserschedulersetting_msdyn_bookingalerts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_bookingalert` |
| `msdyn_timegroup_msdyn_bookingalerts` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_msdyn_bookingalert` |
| `msdyn_timegroupdetail_msdyn_bookingalerts` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_msdyn_bookingalert` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalert_activity_parties` | [msdyn_bookingalert](msdyn_bookingalert.md) | `activityid` | `activityid_msdyn_bookingalert_activityparty` |
| `CampaignResponse_msdyn_bookingalerts` | [msdyn_bookingalert](msdyn_bookingalert.md) | `originatingactivityid` | `originatingactivityid_msdyn_bookingalert_campaignresponse` |
| `msdyn_bookingalert_ActionCards` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_SyncErrors` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_DuplicateMatchingRecord` | [msdyn_bookingalert](msdyn_bookingalert.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bookingalert` |
| `msdyn_bookingalert_DuplicateBaseRecord` | [msdyn_bookingalert](msdyn_bookingalert.md) | `baserecordid` | `baserecordid_msdyn_bookingalert` |
| `msdyn_bookingalert_AsyncOperations` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_MailboxTrackingFolders` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_UserEntityInstanceDatas` | [msdyn_bookingalert](msdyn_bookingalert.md) | `objectid` | `objectid_msdyn_bookingalert` |
| `msdyn_bookingalert_ProcessSession` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_BulkDeleteFailures` | [msdyn_bookingalert](msdyn_bookingalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalert` |
| `msdyn_bookingalert_PrincipalObjectAttributeAccesses` | [msdyn_bookingalert](msdyn_bookingalert.md) | `objectid` | `objectid_msdyn_bookingalert` |
| `msdyn_bookingalert_connections1` | [msdyn_bookingalert](msdyn_bookingalert.md) | `record1id` | `record1id_msdyn_bookingalert` |
| `msdyn_bookingalert_connections2` | [msdyn_bookingalert](msdyn_bookingalert.md) | `record2id` | `record2id_msdyn_bookingalert` |
| `msdyn_bookingalert_QueueItems` | [msdyn_bookingalert](msdyn_bookingalert.md) | `objectid` | `objectid_msdyn_bookingalert` |
| `msdyn_bookingalert_Annotations` | [msdyn_bookingalert](msdyn_bookingalert.md) | `objectid` | `objectid_msdyn_bookingalert` |
| `msdyn_msdyn_bookingalert_msdyn_bookingalertstatus_BookingAlert` | [msdyn_bookingalert](msdyn_bookingalert.md) | `msdyn_bookingalert` | `msdyn_bookingalert` |


## Source

Generated from [msdyn_bookingalert (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookingalert')) on 2026-05-07.