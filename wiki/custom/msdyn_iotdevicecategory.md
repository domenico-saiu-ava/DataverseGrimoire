---
logical: "msdyn_iotdevicecategory"
display: "Categoria dispositivo IoT"
entitySetName: "msdyn_iotdevicecategories"
primaryId: "msdyn_iotdevicecategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria dispositivo IoT

Utilizzato per classificare i dispositivi IoT.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecategory` |
| Display name | Categoria dispositivo IoT |
| Display (plural) | Categorie dispositivo IoT |
| Schema name | `msdyn_iotdevicecategory` |
| Entity set (Web API) | `msdyn_iotdevicecategories` |
| Primary id attribute | `msdyn_iotdevicecategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicecategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicecategories(<guid>)
POST /api/data/v9.2/msdyn_iotdevicecategories
PATCH /api/data/v9.2/msdyn_iotdevicecategories(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicecategories(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_iotdevicecategoryid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdevicecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevicecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevicecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevicecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevicecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategory_SyncErrors` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_DuplicateMatchingRecord` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_DuplicateBaseRecord` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `baserecordid` | `baserecordid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_AsyncOperations` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_MailboxTrackingFolders` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_UserEntityInstanceDatas` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `objectid` | `objectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_ProcessSession` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_BulkDeleteFailures` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_PrincipalObjectAttributeAccesses` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `objectid` | `objectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_connections1` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `record1id` | `record1id_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_connections2` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `record2id` | `record2id_msdyn_iotdevicecategory` |
| `msdyn_iotdevicecategory_Annotations` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `objectid` | `objectid_msdyn_iotdevicecategory` |
| `msdyn_iotdevicevisualizationconfiguration_iotdevicecategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_iotdevicecategory` | `msdyn_IoTDeviceCategory` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdevice_Category` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_category` | `msdyn_Category` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdeviceproperty_DeviceCategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_devicecategory` | `msdyn_DeviceCategory` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategorycommands` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | _n/a_ | `msdyn_iotdevicecategorycommands` |

## Source

Generated from [msdyn_iotdevicecategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicecategory')) on 2026-05-07.