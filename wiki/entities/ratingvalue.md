---
logical: "ratingvalue"
display: "Rating Value"
entitySetName: "ratingvalues"
primaryId: "ratingvalueid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rating Value

A unique value associated with a rating model that allows providing a user friendly rating value.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ratingvalue` |
| Display name | Rating Value |
| Display (plural) | Rating Values |
| Schema name | `RatingValue` |
| Entity set (Web API) | `ratingvalues` |
| Primary id attribute | `ratingvalueid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ratingvalues?$select=name&$top=10
GET /api/data/v9.2/ratingvalues(<guid>)
POST /api/data/v9.2/ratingvalues
PATCH /api/data/v9.2/ratingvalues(<guid>)
DELETE /api/data/v9.2/ratingvalues(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RatingModel`, `RatingValueId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`, `Value`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_ratingvalue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_ratingvalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_ratingvalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_ratingvalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_ratingvalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_ratingvalue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `ratingmodel_ratingvalue_RatingModel` | [ratingmodel](ratingmodel.md) | `ratingmodel` | `RatingModel` |
| `team_ratingvalue` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_ratingvalue` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_ratingvalue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue` | _n/a_ | `msdyn_ratingvalue` | _n/a_ |
| `msdyn_ratingvalue_skillattachmenttarget` | _n/a_ | `msdyn_ratingvalueid` | _n/a_ |
| `ratingvalue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingvalue_bookableresourcecharacteristic_RatingValue` | _n/a_ | `ratingvalue` | _n/a_ |
| `ratingvalue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingvalue_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `ratingvalue_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `ratingvalue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingvalue_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `ratingvalue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `RatingValue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [ratingvalue.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/ratingvalue.md) on 2026-05-06.