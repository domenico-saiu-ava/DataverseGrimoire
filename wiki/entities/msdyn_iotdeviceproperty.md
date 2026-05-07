---
logical: "msdyn_iotdeviceproperty"
display: "IoT Device Property"
entitySetName: "msdyn_iotdeviceproperties"
primaryId: "msdyn_iotdevicepropertyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Property

Link entity between IoT Device Category and IoT Property Definition. This is used to model properties and tags for devices.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdeviceproperty` |
| Display name | IoT Device Property |
| Display (plural) | IoT Device Properties |
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DeviceCategory`, `msdyn_iotdevicepropertyId`, `msdyn_IsTag`, `msdyn_name`, `msdyn_Property`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdeviceproperty` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdeviceproperty_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdeviceproperty_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdeviceproperty_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdeviceproperty_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdeviceproperty_DeviceCategory` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | `msdyn_devicecategory` | `msdyn_DeviceCategory` |
| `msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property` | [msdyn_iotpropertydefinition](msdyn_iotpropertydefinition.md) | `msdyn_property` | `msdyn_Property` |
| `owner_msdyn_iotdeviceproperty` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdeviceproperty` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdeviceproperty` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdeviceproperty_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceproperty_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceproperty_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdeviceproperty_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdeviceproperty_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdeviceproperty_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceproperty_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotdeviceproperty.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdeviceproperty.md) on 2026-05-06.