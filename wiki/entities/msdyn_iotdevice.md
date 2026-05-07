---
logical: "msdyn_iotdevice"
display: "IoT Device"
entitySetName: "msdyn_iotdevices"
primaryId: "msdyn_iotdeviceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device

Represents a connected device that can be registered with an IoT provider.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevice` |
| Display name | IoT Device |
| Display (plural) | IoT Devices |
| Schema name | `msdyn_iotdevice` |
| Entity set (Web API) | `msdyn_iotdevices` |
| Primary id attribute | `msdyn_iotdeviceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevices?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevices(<guid>)
POST /api/data/v9.2/msdyn_iotdevices
PATCH /api/data/v9.2/msdyn_iotdevices(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevices(<guid>)
```

## Attributes

Writable: **25** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Account`, `msdyn_Category`, `msdyn_ConnectionState`, `msdyn_DeviceId`, `msdyn_DeviceReportedProperties`, `msdyn_DeviceSettings`, `msdyn_iotdeviceId`, `msdyn_IoTProviderInstance`, `msdyn_IsSimulated`, `msdyn_LastActivityTime`, `msdyn_LastCommandSent`, `msdyn_LastCommandSentTime`, `msdyn_name`, `msdyn_RegistrationMessage`, `msdyn_RegistrationStatus`, `msdyn_Tags`, `msdyn_Timezone`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevice` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevice_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevice_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevice_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevice_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_iotdevice_Account` | [account](account.md) | `msdyn_account` | `msdyn_Account` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdevice_Category` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_category` | `msdyn_Category` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_iotproviderinstance` | `msdyn_IoTProviderInstance` |
| `owner_msdyn_iotdevice` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevice` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevice` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevice_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevice_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevice_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevice_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_iotdevice_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_iotdevice_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevice_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevice_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevice_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevice_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevice_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_iotdevice` | _n/a_ | `msdyn_iotdevice` | _n/a_ |
| `msdyn_msdyn_iotdevice_msdyn_iotalert_Device` | _n/a_ | `msdyn_device` | _n/a_ |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device` | _n/a_ | `msdyn_device` | _n/a_ |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device` | _n/a_ | `msdyn_device` | _n/a_ |
| `msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device` | _n/a_ | `msdyn_device` | _n/a_ |


## Source

Generated from [msdyn_iotdevice.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevice.md) on 2026-05-06.