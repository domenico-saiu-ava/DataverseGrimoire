---
logical: "msdyn_customerasset"
display: "Customer Asset"
entitySetName: "msdyn_customerassets"
primaryId: "msdyn_customerassetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Asset

Specify Customer Asset.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerasset` |
| Display name | Customer Asset |
| Display (plural) | Customer Assets |
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

Writable: **24** · Read-only: **19**

### Writable

`ImportSequenceNumber`, `msdyn_Account`, `msdyn_AssetTag`, `msdyn_CustomerAssetCategory`, `msdyn_customerassetId`, `msdyn_DeviceId`, `msdyn_FunctionalLocation`, `msdyn_LastCommandSent`, `msdyn_LastCommandSentTime`, `msdyn_Latitude`, `msdyn_Longitude`, `msdyn_ManufacturingDate`, `msdyn_MasterAsset`, `msdyn_name`, `msdyn_ParentAsset`, `msdyn_Product`, `msdyn_RegistrationStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_alert`, `msdyn_alertcount`, `msdyn_alertcount_Date`, `msdyn_alertcount_State`, `msdyn_LastAlertTime`, `msdyn_LastAlertTime_Date`, `msdyn_LastAlertTime_State`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customerasset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customerasset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerasset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerasset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerasset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_customerasset_Account` | [account](account.md) | `msdyn_account` | `msdyn_account` |
| `msdyn_customerasset_FunctionalLocation_ms` | [msdyn_functionallocation](msdyn_functionallocation.md) | `msdyn_functionallocation` | `msdyn_FunctionalLocation` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_masterasset` | `msdyn_masterasset_msdyn_customerasset` |
| `msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_parentasset` | `msdyn_parentasset_msdyn_customerasset` |
| `msdyn_msdyn_customerassetcategory_msdyn_customerasset_CustomerAssetCategory` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_CustomerAssetCategory` |
| `msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `msdyn_product_msdyn_customerasset_Product` | [product](product.md) | `msdyn_product` | `msdyn_product` |
| `owner_msdyn_customerasset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customerasset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customerasset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (41)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerasset_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_customerasset_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_customerasset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerasset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerasset_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerasset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerasset_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset` | _n/a_ | `msdyn_customerasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset` | _n/a_ | `msdyn_masterasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset` | _n/a_ | `msdyn_parentasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset` | _n/a_ | `msdyn_customerasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset` | _n/a_ | `msdyn_customerasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset` | _n/a_ | `msdyn_customerasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset` | _n/a_ | `msdyn_customerasset` | _n/a_ |
| `msdyn_msdyn_customerasset_msdyn_propertylog_customerasset` | _n/a_ | `msdyn_customerasset` | _n/a_ |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_knowledgebaserecord` | [msdyn_customerassetid](msdyn_customerassetid.md) | _n/a_ | _n/a_ |
| `msdyn_incident_msdyn_customerasset` | [msdyn_customerassetid](msdyn_customerassetid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_customerasset_knowledgearticle` | [msdyn_customerassetid](msdyn_customerassetid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_warranty_msdyn_customerasset` | [msdyn_customerassetid](msdyn_customerassetid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_customerasset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerasset.md) on 2026-05-06.