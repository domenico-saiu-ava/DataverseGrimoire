---
logical: "bookableresourcecategoryassn"
display: "Bookable Resource Category Assn"
entitySetName: "bookableresourcecategoryassns"
primaryId: "bookableresourcecategoryassnid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Category Assn

Association entity to model the categorization of resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcecategoryassn` |
| Display name | Bookable Resource Category Assn |
| Display (plural) | Bookable Resource Category Assns |
| Schema name | `BookableResourceCategoryAssn` |
| Entity set (Web API) | `bookableresourcecategoryassns` |
| Primary id attribute | `bookableresourcecategoryassnid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcecategoryassns?$select=name&$top=10
GET /api/data/v9.2/bookableresourcecategoryassns(<guid>)
POST /api/data/v9.2/bookableresourcecategoryassns
PATCH /api/data/v9.2/bookableresourcecategoryassns(<guid>)
DELETE /api/data/v9.2/bookableresourcecategoryassns(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`BookableResourceCategoryAssnId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Resource`, `ResourceCategory`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresource_bookableresourcecategoryassn_Resource` | [bookableresource](bookableresource.md) | `resource` | `Resource` |
| `bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory` | [bookableresourcecategory](bookableresourcecategory.md) | `resourcecategory` | `ResourceCategory` |
| `business_unit_bookableresourcecategoryassn` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookableresourcecategoryassn_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcecategoryassn_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcecategoryassn_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcecategoryassn_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcecategoryassn` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_bookableresourcecategoryassn` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcecategoryassn` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcecategoryassn` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcecategoryassn_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcecategoryassn_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategoryassn_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategoryassn_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcecategoryassn_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcecategoryassn_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcecategoryassn_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcecategoryassn_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceCategoryAssn_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcecategoryassn.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcecategoryassn.md) on 2026-05-06.