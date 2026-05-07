---
logical: "bookingstatus"
display: "Booking Status"
entitySetName: "bookingstatuses"
primaryId: "bookingstatusid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Booking Status

Allows creation of multiple sub statuses mapped to a booking status option.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookingstatus` |
| Display name | Booking Status |
| Display (plural) | Booking Statuses |
| Schema name | `BookingStatus` |
| Entity set (Web API) | `bookingstatuses` |
| Primary id attribute | `bookingstatusid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookingstatuses?$select=name&$top=10
GET /api/data/v9.2/bookingstatuses(<guid>)
POST /api/data/v9.2/bookingstatuses
PATCH /api/data/v9.2/bookingstatuses(<guid>)
DELETE /api/data/v9.2/bookingstatuses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`BookingStatusId`, `Description`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StateCode`, `Status`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_bookingstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookingstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookingstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookingstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookingstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookingstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_bookingstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookingstatus` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookingstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookingstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookingstatus_bookableresourcebooking_BookingStatus` | _n/a_ | `bookingstatus` | _n/a_ |
| `bookingstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookingstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookingstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookingstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookingstatus_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookingstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookingStatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookingstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookingstatus.md) on 2026-05-06.