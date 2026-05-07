---
logical: "msdyn_iotprovider"
display: "IoT Provider"
entitySetName: "msdyn_iotproviders"
primaryId: "msdyn_iotproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Provider

The IoT Provider where a device is registered and through which all interactions with the device take place

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotprovider` |
| Display name | IoT Provider |
| Display (plural) | IoT Providers |
| Schema name | `msdyn_iotprovider` |
| Entity set (Web API) | `msdyn_iotproviders` |
| Primary id attribute | `msdyn_iotproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotproviders(<guid>)
POST /api/data/v9.2/msdyn_iotproviders
PATCH /api/data/v9.2/msdyn_iotproviders(<guid>)
DELETE /api/data/v9.2/msdyn_iotproviders(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_GetAggregatedDeviceReadingsAction`, `msdyn_iotproviderId`, `msdyn_IoTSource`, `msdyn_name`, `msdyn_PullDeviceDataAction`, `msdyn_QueryDeviceReadingsAction`, `msdyn_RegisterAction`, `msdyn_SendCommandAction`, `msdyn_UpdateDeviceDataAction`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_iotprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider` | _n/a_ | `msdyn_iotprovider` | _n/a_ |


## Source

Generated from [msdyn_iotprovider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotprovider.md) on 2026-05-06.