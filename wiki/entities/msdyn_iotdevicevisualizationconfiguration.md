---
logical: "msdyn_iotdevicevisualizationconfiguration"
display: "IoT Device Visualization Configuration"
entitySetName: "msdyn_iotdevicevisualizationconfigurations"
primaryId: "msdyn_iotdevicevisualizationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Visualization Configuration

IoT Device Visualization Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicevisualizationconfiguration` |
| Display name | IoT Device Visualization Configuration |
| Display (plural) | IoT Device Visualization Configuration |
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

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actionname`, `msdyn_Aggregation`, `msdyn_DeviceEvent`, `msdyn_IoTDevice`, `msdyn_IoTDeviceCategory`, `msdyn_iotdevicevisualizationconfigurationId`, `msdyn_Measurement`, `msdyn_name`, `msdyn_Position`, `msdyn_TimeRangeType`, `msdyn_TimeRangeValue`, `msdyn_VisualizationConfigurationType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevicevisualizationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevicevisualizationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicevisualizationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevice` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_iotdevice` | `msdyn_IoTDevice` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevicecategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_iotdevicecategory` | `msdyn_IoTDeviceCategory` |
| `msdyn_iotdevicevisualizationconfiguration_measurement` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_measurement` | `msdyn_Measurement` |
| `owner_msdyn_iotdevicevisualizationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevicevisualizationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevicevisualizationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicevisualizationconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotdevicevisualizationconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevicevisualizationconfiguration.md) on 2026-05-06.