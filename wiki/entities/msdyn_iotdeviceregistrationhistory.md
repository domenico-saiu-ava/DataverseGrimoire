---
logical: "msdyn_iotdeviceregistrationhistory"
display: "IoT Device Registration History"
entitySetName: "msdyn_iotdeviceregistrationhistories"
primaryId: "msdyn_iotdeviceregistrationhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Registration History

Tracks registration activities on an IoT device.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdeviceregistrationhistory` |
| Display name | IoT Device Registration History |
| Display (plural) | IoT Device Registration History |
| Schema name | `msdyn_iotdeviceregistrationhistory` |
| Entity set (Web API) | `msdyn_iotdeviceregistrationhistories` |
| Primary id attribute | `msdyn_iotdeviceregistrationhistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdeviceregistrationhistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
POST /api/data/v9.2/msdyn_iotdeviceregistrationhistories
PATCH /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
DELETE /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Action`, `msdyn_Device`, `msdyn_iotdeviceregistrationhistoryId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdeviceregistrationhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdeviceregistrationhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdeviceregistrationhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdeviceregistrationhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdeviceregistrationhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `owner_msdyn_iotdeviceregistrationhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdeviceregistrationhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdeviceregistrationhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdeviceregistrationhistory_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdeviceregistrationhistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotdeviceregistrationhistory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdeviceregistrationhistory.md) on 2026-05-06.