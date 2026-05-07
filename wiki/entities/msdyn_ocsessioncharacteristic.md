---
logical: "msdyn_ocsessioncharacteristic"
display: "Session Characteristic"
entitySetName: "msdyn_ocsessioncharacteristics"
primaryId: "msdyn_ocsessioncharacteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session Characteristic

Characteristic associated to Omnichannel session

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessioncharacteristic` |
| Display name | Session Characteristic |
| Display (plural) | Session Characteristics |
| Schema name | `msdyn_ocsessioncharacteristic` |
| Entity set (Web API) | `msdyn_ocsessioncharacteristics` |
| Primary id attribute | `msdyn_ocsessioncharacteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessioncharacteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
POST /api/data/v9.2/msdyn_ocsessioncharacteristics
PATCH /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessioncharacteristics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_ocliveworkitemcharacteristic`, `msdyn_ocsession`, `msdyn_ocsessioncharacteristicId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsessioncharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsessioncharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessioncharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessioncharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessioncharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic` | [msdyn_ocliveworkitemcharacteristic](msdyn_ocliveworkitemcharacteristic.md) | `msdyn_ocliveworkitemcharacteristic` | `msdyn_ocliveworkitemcharacteristic` |
| `msdyn_ocsession_sessioncharacteristic_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_ocsession` | `msdyn_ocsession` |
| `owner_msdyn_ocsessioncharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsessioncharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsessioncharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessioncharacteristic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessioncharacteristic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsessioncharacteristic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsessioncharacteristic.md) on 2026-05-06.