---
logical: "bookableresourcecategory"
display: "Bookable Resource Category"
entitySetName: "bookableresourcecategories"
primaryId: "bookableresourcecategoryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Category

Categorize resources that have capacity into categories such as roles.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcecategory` |
| Display name | Bookable Resource Category |
| Display (plural) | Bookable Resource Categories |
| Schema name | `BookableResourceCategory` |
| Entity set (Web API) | `bookableresourcecategories` |
| Primary id attribute | `bookableresourcecategoryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcecategories?$select=name&$top=10
GET /api/data/v9.2/bookableresourcecategories(<guid>)
POST /api/data/v9.2/bookableresourcecategories
PATCH /api/data/v9.2/bookableresourcecategories(<guid>)
DELETE /api/data/v9.2/bookableresourcecategories(<guid>)
```

## Attributes

Writable: **12** · Read-only: **13**

### Writable

`BookableResourceCategoryId`, `Description`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_bookableresourcecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookableresourcecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_bookableresourcecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcecategory` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcecategory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory` | _n/a_ | `resourcecategory` | _n/a_ |
| `bookableresourcecategory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcecategory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcecategory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategory_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcecategory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceCategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcecategory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcecategory.md) on 2026-05-06.