---
logical: "msdyn_customerasset"
display: "Cespite cliente"
entitySetName: "msdyn_customerassets"
primaryId: "msdyn_customerassetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cespite cliente

Specifica cespite cliente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerasset` |
| Display name | Cespite cliente |
| Display (plural) | Cespiti cliente |
| Schema name | `msdyn_customerasset` |
| Entity set (Web API) | `msdyn_customerassets` |
| Primary id attribute | `msdyn_customerassetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerassets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customerassets(<guid>)
POST /api/data/v9.2/msdyn_customerassets
PATCH /api/data/v9.2/msdyn_customerassets(<guid>)
DELETE /api/data/v9.2/msdyn_customerassets(<guid>)
```

## Attributes

Writable: **23** · Read-only: **17**

### Writable

`importsequencenumber`, `msdyn_account`, `msdyn_assettag`, `msdyn_customerassetcategory`, `msdyn_customerassetid`, `msdyn_deviceid`, `msdyn_functionallocation`, `msdyn_lastcommandsent`, `msdyn_lastcommandsenttime`, `msdyn_latitude`, `msdyn_longitude`, `msdyn_manufacturingdate`, `msdyn_masterasset`, `msdyn_name`, `msdyn_parentasset`, `msdyn_product`, `msdyn_registrationstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_alert`, `msdyn_alertcount`, `msdyn_alertcount_date`, `msdyn_alertcount_state`, `msdyn_lastalerttime`, `msdyn_lastalerttime_date`, `msdyn_lastalerttime_state`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerasset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerasset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerasset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerasset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customerasset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customerasset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customerasset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customerasset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_account_msdyn_customerasset_Account` | [account](account.md) | `msdyn_account` | `msdyn_account` |
| `msdyn_customerasset_FunctionalLocation_ms` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_masterasset` | `msdyn_masterasset_msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_parentasset` | `msdyn_parentasset_msdyn_customerasset` |
| `msdyn_msdyn_customerassetcategory_msdyn_customerasset_CustomerAssetCategory` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_CustomerAssetCategory` |
| `msdyn_product_msdyn_customerasset_Product` | [product](product.md) | `msdyn_product` | `msdyn_product` |
| `msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |

### One-to-Many (44)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_msdyn_bookingalerts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_bookingalert` |
| `msdyn_customerasset_ActivityPointers` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_adx_inviteredemptions` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_adx_inviteredemption` |
| `msdyn_customerasset_adx_portalcomments` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_adx_portalcomment` |
| `msdyn_customerasset_chats` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_chat` |
| `msdyn_customerasset_SyncErrors` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_DuplicateMatchingRecord` | [msdyn_customerasset](msdyn_customerasset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerasset` |
| `msdyn_customerasset_DuplicateBaseRecord` | [msdyn_customerasset](msdyn_customerasset.md) | `baserecordid` | `baserecordid_msdyn_customerasset` |
| `msdyn_customerasset_AsyncOperations` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_MailboxTrackingFolders` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_UserEntityInstanceDatas` | [msdyn_customerasset](msdyn_customerasset.md) | `objectid` | `objectid_msdyn_customerasset` |
| `msdyn_customerasset_ProcessSession` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_BulkDeleteFailures` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset` |
| `msdyn_customerasset_PrincipalObjectAttributeAccesses` | [msdyn_customerasset](msdyn_customerasset.md) | `objectid` | `objectid_msdyn_customerasset` |
| `msdyn_customerasset_Appointments` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_appointment` |
| `msdyn_customerasset_Emails` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_email` |
| `msdyn_customerasset_Faxes` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_fax` |
| `msdyn_customerasset_Letters` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_letter` |
| `msdyn_customerasset_PhoneCalls` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_phonecall` |
| `msdyn_customerasset_Tasks` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_task` |
| `msdyn_customerasset_RecurringAppointmentMasters` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_recurringappointmentmaster` |
| `msdyn_customerasset_SocialActivities` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_socialactivity` |
| `msdyn_customerasset_connections1` | [msdyn_customerasset](msdyn_customerasset.md) | `record1id` | `record1id_msdyn_customerasset` |
| `msdyn_customerasset_connections2` | [msdyn_customerasset](msdyn_customerasset.md) | `record2id` | `record2id_msdyn_customerasset` |
| `msdyn_customerasset_Annotations` | [msdyn_customerasset](msdyn_customerasset.md) | `objectid` | `objectid_msdyn_customerasset` |
| `msdyn_customerasset_ServiceAppointments` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_serviceappointment` |
| `msdyn_customerasset_OpportunityCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_opportunityclose` |
| `msdyn_customerasset_OrderCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_orderclose` |
| `msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_masterasset` | `msdyn_masterasset_msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_parentasset` | `msdyn_parentasset_msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_propertylog_customerasset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_customerasset` |
| `msdyn_customerasset_QuoteCloses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_quoteclose` |
| `msdyn_customerasset_msdyn_copilottranscripts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_copilottranscript` |
| `msdyn_customerasset_msdyn_ocliveworkitems` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem` |
| `msdyn_customerasset_msdyn_ocsessions` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msdyn_ocsession` |
| `msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_customerasset_cai_genericcontacts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_cai_genericcontact` |
| `msdyn_customerasset_msfp_alerts` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_alert` |
| `msdyn_customerasset_msfp_surveyinvites` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyinvite` |
| `msdyn_customerasset_msfp_surveyresponses` | [msdyn_customerasset](msdyn_customerasset.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerasset_msfp_surveyresponse` |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_knowledgebaserecord` | [knowledgebaserecord](knowledgebaserecord.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_customerasset_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_warranty_msdyn_customerasset` | [msdyn_warranty](msdyn_warranty.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_customerasset` |
| `msdyn_incident_msdyn_customerasset` | [incident](incident.md) | _n/a_ | `msdyn_incident_msdyn_customerasset` |

## Source

Generated from [msdyn_customerasset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerasset')) on 2026-05-07.