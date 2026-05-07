---
logical: "chat"
display: "Chat di Teams"
entitySetName: "chats"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Chat di Teams

Solo per uso interno. Entità che archivia i dati di associazione dei record Dynamics 365 con la chat di Microsoft Teams

## Identity

| Property | Value |
| --- | --- |
| Logical name | `chat` |
| Display name | Chat di Teams |
| Display (plural) | Chat di Teams |
| Schema name | `chat` |
| Entity set (Web API) | `chats` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/chats?$select=subject&$top=10
GET /api/data/v9.2/chats(<guid>)
POST /api/data/v9.2/chats
PATCH /api/data/v9.2/chats(<guid>)
DELETE /api/data/v9.2/chats(<guid>)
```

## Attributes

Writable: **50** · Read-only: **26**

### Writable

`activityadditionalparams`, `activityid`, `actualdurationminutes`, `actualend`, `actualstart`, `bcc`, `cc`, `community`, `customers`, `deliveryprioritycode`, `description`, `exchangeitemid`, `exchangeweblink`, `from`, `importsequencenumber`, `isbilled`, `ismapiprivate`, `isworkflowcreated`, `lastonholdtime`, `lastsyncerror`, `leftvoicemail`, `modifiedinteamsby`, `modifiedinteamsbyactivitypartyid`, `modifiedinteamson`, `optionalattendees`, `organizer`, `overriddencreatedon`, `ownerid`, `partners`, `prioritycode`, `processid`, `regardingobjectid`, `requiredattendees`, `resources`, `scheduleddurationminutes`, `scheduledend`, `scheduledstart`, `slaid`, `sortdate`, `stageid`, `statecode`, `statuscode`, `subject`, `syncstatus`, `teamschatid`, `timezoneruleversionnumber`, `to`, `transactioncurrencyid`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`activitytypecode`, `createdby`, `createdon`, `createdonbehalfby`, `deliverylastattemptedon`, `eventssummary`, `exchangerate`, `instancetypecode`, `isregularactivity`, `linkedby`, `linkedon`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `onholdtime`, `owningbusinessunit`, `owningteam`, `owninguser`, `postponeactivityprocessinguntil`, `sendermailboxid`, `senton`, `seriesid`, `slainvokedid`, `unlinkedby`, `unlinkedon`, `versionnumber`

## Relationships

### Many-to-One (54)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `invoice_chats` | [invoice](invoice.md) | `regardingobjectid` | `regardingobjectid_invoice_chat` |
| `interactionforemail_chats` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_chat` |
| `knowledgebaserecord_chats` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_chat` |
| `account_chats` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_chat` |
| `chat_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_chat` |
| `contact_chats` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_chat` |
| `chat_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_chat` |
| `chat_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_chat` |
| `chat_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_chat` |
| `chat_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_chat` |
| `chat_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_chat` |
| `chat_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_chat` |
| `knowledgearticle_chats` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_chat` |
| `chat_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_chat` |
| `chat_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_chat` |
| `chat_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_chat` |
| `chat_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_chat` |
| `chat_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_chat` |
| `activity_pointer_chat` | [activitypointer](activitypointer.md) | `activityid` | `activityid_chat` |
| `contract_chats` | [contract](contract.md) | `regardingobjectid` | `regardingobjectid_contract_chat` |
| `msdyn_bookingalertstatus_chats` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_chat` |
| `teams_chat_activity_linkrecord_systemUser` | [systemuser](systemuser.md) | `linkedby` | `LinkedBy` |
| `teams_chat_activity_unlinkrecord_systemUser` | [systemuser](systemuser.md) | `unlinkedby` | `UnLinkedBy` |
| `msdyn_customerasset_chats` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_chat` |
| `opportunity_chats` | [opportunity](opportunity.md) | `regardingobjectid` | `regardingobjectid_opportunity_chat` |
| `entitlement_chats` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_chat` |
| `msdyn_bookingrule_chats` | [msdyn_bookingrule](msdyn_bookingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingrule_chat` |
| `entitlementtemplate_chats` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_chat` |
| `incident_chats` | [incident](incident.md) | `regardingobjectid` | `regardingobjectid_incident_chat` |
| `quote_chats` | [quote](quote.md) | `regardingobjectid` | `regardingobjectid_quote_chat` |
| `service_chats` | [service](service.md) | `regardingobjectid` | `regardingobjectid_service_chat` |
| `salesorder_chats` | [salesorder](salesorder.md) | `regardingobjectid` | `regardingobjectid_salesorder_chat` |
| `lead_chats` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_chat` |
| `msdyn_resourceterritory_chats` | [msdyn_resourceterritory](msdyn_resourceterritory.md) | `regardingobjectid` | `regardingobjectid_msdyn_resourceterritory_chat` |
| `bulkoperation_chats` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_chat` |
| `campaign_chats` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_chat` |
| `adx_invitation_chats` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_chat` |
| `site_chats` | [site](site.md) | `regardingobjectid` | `regardingobjectid_site_chat` |
| `campaignactivity_chats` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_chat` |
| `msdyn_systemuserschedulersetting_chats` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_chat` |
| `msdyn_timegroup_chats` | [msdyn_timegroup](msdyn_timegroup.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroup_chat` |
| `bookableresourcebooking_chats` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_chat` |
| `msdyn_postalbum_chats` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_chat` |
| `msdyn_timegroupdetail_chats` | [msdyn_timegroupdetail](msdyn_timegroupdetail.md) | `regardingobjectid` | `regardingobjectid_msdyn_timegroupdetail_chat` |
| `msdyn_playbookinstance_chats` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_chat` |
| `bookableresourcebookingheader_chats` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_chat` |
| `msdyn_swarm_chats` | [msdyn_swarm](msdyn_swarm.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarm_chat` |
| `msdyn_salessuggestion_chats` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_chat` |
| `mspp_adplacement_chats` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_chat` |
| `mspp_pollplacement_chats` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_chat` |
| `mspp_publishingstatetransitionrule_chats` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_chat` |
| `mspp_redirect_chats` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_chat` |
| `mspp_shortcut_chats` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_chat` |
| `mspp_website_chats` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_chat` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `chat_activity_parties` | [chat](chat.md) | `activityid` | `activityid_chat_activityparty` |
| `chat_ActionCards` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_SyncErrors` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_AsyncOperations` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_MailboxTrackingFolders` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_UserEntityInstanceDatas` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `chat_ProcessSession` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_BulkDeleteFailures` | [chat](chat.md) | `regardingobjectid` | `regardingobjectid_chat` |
| `chat_PrincipalObjectAttributeAccesses` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `chat_QueueItems` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `chat_Annotations` | [chat](chat.md) | `objectid` | `objectid_chat` |


## Source

Generated from [chat (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='chat')) on 2026-05-07.