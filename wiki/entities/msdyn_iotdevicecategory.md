---
logical: "msdyn_iotdevicecategory"
display: "IoT Device Category"
entitySetName: "msdyn_iotdevicecategories"
primaryId: "msdyn_iotdevicecategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Category

Used to categorize IoT devices.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecategory` |
| Display name | IoT Device Category |
| Display (plural) | IoT Device Categories |
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

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_iotdevicecategoryId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevicecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevicecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_iotdevicecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevicecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevicecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategory_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicecategory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecategory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecategory_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_iotdevicecategory_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_iotdevicecategory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevicecategory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevicecategory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecategory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicecategory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicevisualizationconfiguration_iotdevicecategory` | _n/a_ | `msdyn_iotdevicecategory` | _n/a_ |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdevice_Category` | _n/a_ | `msdyn_category` | _n/a_ |
| `msdyn_msdyn_iotdevicecategory_msdyn_iotdeviceproperty_DeviceCategory` | _n/a_ | `msdyn_devicecategory` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategorycommands` | [msdyn_iotdevicecategoryid](msdyn_iotdevicecategoryid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_iotdevicecategory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevicecategory.md) on 2026-05-06.