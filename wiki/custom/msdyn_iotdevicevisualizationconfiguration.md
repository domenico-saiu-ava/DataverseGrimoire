---
logical: "msdyn_iotdevicevisualizationconfiguration"
display: "Configurazione visualizzazione dispositivo IoT"
entitySetName: "msdyn_iotdevicevisualizationconfigurations"
primaryId: "msdyn_iotdevicevisualizationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione visualizzazione dispositivo IoT

Configurazione visualizzazione dispositivo IoT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicevisualizationconfiguration` |
| Display name | Configurazione visualizzazione dispositivo IoT |
| Display (plural) | Configurazione visualizzazione dispositivo IoT |
| Schema name | `msdyn_iotdevicevisualizationconfiguration` |
| Entity set (Web API) | `msdyn_iotdevicevisualizationconfigurations` |
| Primary id attribute | `msdyn_iotdevicevisualizationconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicevisualizationconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicevisualizationconfigurations(<guid>)
POST /api/data/v9.2/msdyn_iotdevicevisualizationconfigurations
PATCH /api/data/v9.2/msdyn_iotdevicevisualizationconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicevisualizationconfigurations(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionname`, `msdyn_aggregation`, `msdyn_deviceevent`, `msdyn_iotdevice`, `msdyn_iotdevicecategory`, `msdyn_iotdevicevisualizationconfigurationid`, `msdyn_measurement`, `msdyn_name`, `msdyn_position`, `msdyn_timerangetype`, `msdyn_timerangevalue`, `msdyn_visualizationconfigurationtype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdevicevisualizationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevicevisualizationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevicevisualizationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevicevisualizationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevicevisualizationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevice` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_iotdevice` | `msdyn_IoTDevice` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevicecategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_iotdevicecategory` | `msdyn_IoTDeviceCategory` |
| `msdyn_iotdevicevisualizationconfiguration_measurement` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_measurement` | `msdyn_Measurement` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicevisualizationconfiguration_SyncErrors` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `baserecordid` | `baserecordid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_AsyncOperations` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_UserEntityInstanceDatas` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `objectid` | `objectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_ProcessSession` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicevisualizationconfiguration` |
| `msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_iotdevicevisualizationconfiguration](msdyn_iotdevicevisualizationconfiguration.md) | `objectid` | `objectid_msdyn_iotdevicevisualizationconfiguration` |


## Source

Generated from [msdyn_iotdevicevisualizationconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicevisualizationconfiguration')) on 2026-05-07.