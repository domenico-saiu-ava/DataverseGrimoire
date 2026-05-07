---
logical: "msdyn_ocliveworkitemcharacteristic"
display: "Conversation Characteristic"
entitySetName: "msdyn_ocliveworkitemcharacteristics"
primaryId: "msdyn_ocliveworkitemcharacteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Characteristic

Characteristic associated to Omnichannel conversation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcharacteristic` |
| Display name | Conversation Characteristic |
| Display (plural) | Conversation Characteristics |
| Schema name | `msdyn_ocliveworkitemcharacteristic` |
| Entity set (Web API) | `msdyn_ocliveworkitemcharacteristics` |
| Primary id attribute | `msdyn_ocliveworkitemcharacteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcharacteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcharacteristics
PATCH /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcharacteristics(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_characteristic`, `msdyn_characteristicsource`, `msdyn_confidence`, `msdyn_createdon`, `msdyn_mlmodelid`, `msdyn_modifiedon`, `msdyn_name`, `msdyn_ocliveworkitemcharacteristicId`, `msdyn_ocliveworkitemid`, `msdyn_ratingvalue`, `msdyn_skilladdedby`, `msdyn_status`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocliveworkitemcharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocliveworkitemcharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic` | [characteristic](characteristic.md) | `msdyn_characteristic` | `msdyn_characteristic` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_ocliveworkitemcharacteristic_mlmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_mlmodelid` | `msdyn_mlmodelid` |
| `msdyn_ocliveworkitemcharacteristic_skilladdedby` | [systemuser](systemuser.md) | `msdyn_skilladdedby` | `msdyn_skilladdedby` |
| `msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue` | [ratingvalue](ratingvalue.md) | `msdyn_ratingvalue` | `msdyn_ratingvalue` |
| `owner_msdyn_ocliveworkitemcharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocliveworkitemcharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocliveworkitemcharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic` | _n/a_ | `msdyn_ocliveworkitemcharacteristic` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocliveworkitemcharacteristic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocliveworkitemcharacteristic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocliveworkitemcharacteristic.md) on 2026-05-06.