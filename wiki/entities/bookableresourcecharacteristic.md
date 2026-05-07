---
logical: "bookableresourcecharacteristic"
display: "Bookable Resource Characteristic"
entitySetName: "bookableresourcecharacteristics"
primaryId: "bookableresourcecharacteristicid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Characteristic

Associates resources with their characteristics and specifies the proficiency level of a resource for that characteristic.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcecharacteristic` |
| Display name | Bookable Resource Characteristic |
| Display (plural) | Bookable Resource Characteristics |
| Schema name | `BookableResourceCharacteristic` |
| Entity set (Web API) | `bookableresourcecharacteristics` |
| Primary id attribute | `bookableresourcecharacteristicid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcecharacteristics?$select=name&$top=10
GET /api/data/v9.2/bookableresourcecharacteristics(<guid>)
POST /api/data/v9.2/bookableresourcecharacteristics
PATCH /api/data/v9.2/bookableresourcecharacteristics(<guid>)
DELETE /api/data/v9.2/bookableresourcecharacteristics(<guid>)
```

## Attributes

Writable: **17** · Read-only: **13**

### Writable

`BookableResourceCharacteristicId`, `Characteristic`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `RatingValue`, `Resource`, `StageId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresource_bookableresourcecharacteristic_Resource` | [bookableresource](bookableresource.md) | `resource` | `Resource` |
| `business_unit_bookableresourcecharacteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `characteristic_bookableresourcecharacteristic_Characteristic` | [characteristic](characteristic.md) | `characteristic` | `Characteristic` |
| `lk_bookableresourcecharacteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcecharacteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcecharacteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcecharacteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcecharacteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_BookableResourceCharacteristic` | [processstage](processstage.md) | `stageid` | `stageid` |
| `ratingvalue_bookableresourcecharacteristic_RatingValue` | [ratingvalue](ratingvalue.md) | `ratingvalue` | `RatingValue` |
| `team_bookableresourcecharacteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcecharacteristic` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcecharacteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcecharacteristic_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcecharacteristic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecharacteristic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecharacteristic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcecharacteristic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcecharacteristic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecharacteristic_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcecharacteristic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceCharacteristic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcecharacteristic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcecharacteristic.md) on 2026-05-06.