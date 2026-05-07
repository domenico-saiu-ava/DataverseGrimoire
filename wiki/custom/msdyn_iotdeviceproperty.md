---
logical: "msdyn_iotdeviceproperty"
display: "Proprietà del dispositivo IoT"
entitySetName: "msdyn_iotdeviceproperties"
primaryId: "msdyn_iotdevicepropertyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Proprietà del dispositivo IoT

Entità di collegamento tra Categoria dispositivo IoT e Definizione della proprietà IoT. Utilizzata per modellare proprietà e tag per i dispositivi.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdeviceproperty` |
| Display name | Proprietà del dispositivo IoT |
| Display (plural) | Proprietà del dispositivo IoT |
| Schema name | `msdyn_iotdeviceproperty` |
| Entity set (Web API) | `msdyn_iotdeviceproperties` |
| Primary id attribute | `msdyn_iotdevicepropertyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdeviceproperties?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdeviceproperties(<guid>)
POST /api/data/v9.2/msdyn_iotdeviceproperties
PATCH /api/data/v9.2/msdyn_iotdeviceproperties(<guid>)
DELETE /api/data/v9.2/msdyn_iotdeviceproperties(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_devicecategory`, `msdyn_iotdevicepropertyid`, `msdyn_istag`, `msdyn_name`, `msdyn_property`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdeviceproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdeviceproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdeviceproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdeviceproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdeviceproperty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdeviceproperty` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdeviceproperty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdeviceproperty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdeviceproperty_DeviceCategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_devicecategory` | `msdyn_DeviceCategory` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_property` | `msdyn_Property` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdeviceproperty_SyncErrors` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_DuplicateMatchingRecord` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_DuplicateBaseRecord` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `baserecordid` | `baserecordid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_AsyncOperations` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_MailboxTrackingFolders` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_UserEntityInstanceDatas` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `objectid` | `objectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_ProcessSession` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_BulkDeleteFailures` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceproperty` |
| `msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses` | [msdyn_iotdeviceproperty](msdyn_iotdeviceproperty.md) | `objectid` | `objectid_msdyn_iotdeviceproperty` |


## Source

Generated from [msdyn_iotdeviceproperty (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdeviceproperty')) on 2026-05-07.