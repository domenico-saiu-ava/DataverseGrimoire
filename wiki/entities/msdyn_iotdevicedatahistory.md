---
logical: "msdyn_iotdevicedatahistory"
display: "IoT Device Data History"
entitySetName: "msdyn_iotdevicedatahistory"
primaryId: "msdyn_iotdevicedatahistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Data History

The name of the entity that holds the device data every time a device data pull occurs between Dynamics 365 and an IoT provider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicedatahistory` |
| Display name | IoT Device Data History |
| Display (plural) | IoT Device Data History |
| Schema name | `msdyn_iotdevicedatahistory` |
| Entity set (Web API) | `msdyn_iotdevicedatahistory` |
| Primary id attribute | `msdyn_iotdevicedatahistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicedatahistory?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
POST /api/data/v9.2/msdyn_iotdevicedatahistory
PATCH /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ConnectionState`, `msdyn_ConnectionStateUpdatedTime`, `msdyn_Device`, `msdyn_DeviceReportedProperties`, `msdyn_iotdevicedatahistoryId`, `msdyn_IoTHubDeviceId`, `msdyn_LastActivityTime`, `msdyn_name`, `msdyn_Status`, `msdyn_StatusReason`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevicedatahistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevicedatahistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicedatahistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicedatahistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicedatahistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `owner_msdyn_iotdevicedatahistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevicedatahistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevicedatahistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicedatahistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicedatahistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicedatahistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevicedatahistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevicedatahistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicedatahistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicedatahistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotdevicedatahistory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevicedatahistory.md) on 2026-05-06.