---
logical: "msdyn_iotdevice"
display: "Dispositivo IoT"
entitySetName: "msdyn_iotdevices"
primaryId: "msdyn_iotdeviceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dispositivo IoT

Rappresenta un dispositivo connesso che può essere registrato con un provider IoT.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevice` |
| Display name | Dispositivo IoT |
| Display (plural) | Dispositivi IoT |
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

Writable: **24** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_account`, `msdyn_category`, `msdyn_connectionstate`, `msdyn_deviceid`, `msdyn_devicereportedproperties`, `msdyn_devicesettings`, `msdyn_iotdeviceid`, `msdyn_iotproviderinstance`, `msdyn_issimulated`, `msdyn_lastactivitytime`, `msdyn_lastcommandsent`, `msdyn_lastcommandsenttime`, `msdyn_name`, `msdyn_registrationmessage`, `msdyn_registrationstatus`, `msdyn_tags`, `msdyn_timezone`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdevice_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevice_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevice_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevice_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevice` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevice` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevice` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevice` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_account_msdyn_iotdevice_Account` | [account](account.md) | `msdyn_account` | `msdyn_Account` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdevice_Category` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_category` | `msdyn_Category` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_iotproviderinstance` | `msdyn_IoTProviderInstance` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevice_SyncErrors` | [msdyn_iotdevice](msdyn_iotdevice.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevice` |
| `msdyn_iotdevice_DuplicateMatchingRecord` | [msdyn_iotdevice](msdyn_iotdevice.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevice` |
| `msdyn_iotdevice_DuplicateBaseRecord` | [msdyn_iotdevice](msdyn_iotdevice.md) | `baserecordid` | `baserecordid_msdyn_iotdevice` |
| `msdyn_iotdevice_AsyncOperations` | [msdyn_iotdevice](msdyn_iotdevice.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevice` |
| `msdyn_iotdevice_MailboxTrackingFolders` | [msdyn_iotdevice](msdyn_iotdevice.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevice` |
| `msdyn_iotdevice_UserEntityInstanceDatas` | [msdyn_iotdevice](msdyn_iotdevice.md) | `objectid` | `objectid_msdyn_iotdevice` |
| `msdyn_iotdevice_ProcessSession` | [msdyn_iotdevice](msdyn_iotdevice.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevice` |
| `msdyn_iotdevice_BulkDeleteFailures` | [msdyn_iotdevice](msdyn_iotdevice.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevice` |
| `msdyn_iotdevice_PrincipalObjectAttributeAccesses` | [msdyn_iotdevice](msdyn_iotdevice.md) | `objectid` | `objectid_msdyn_iotdevice` |
| `msdyn_iotdevice_connections1` | [msdyn_iotdevice](msdyn_iotdevice.md) | `record1id` | `record1id_msdyn_iotdevice` |
| `msdyn_iotdevice_connections2` | [msdyn_iotdevice](msdyn_iotdevice.md) | `record2id` | `record2id_msdyn_iotdevice` |
| `msdyn_iotdevice_Annotations` | [msdyn_iotdevice](msdyn_iotdevice.md) | `objectid` | `objectid_msdyn_iotdevice` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevice` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_iotdevice` | `msdyn_IoTDevice` |
| `msdyn_msdyn_iotdevice_msdyn_iotalert_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |


## Source

Generated from [msdyn_iotdevice (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevice')) on 2026-05-07.