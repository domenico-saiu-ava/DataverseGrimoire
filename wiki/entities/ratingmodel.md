---
logical: "ratingmodel"
display: "Rating Model"
entitySetName: "ratingmodels"
primaryId: "ratingmodelid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rating Model

Represents a model to evaluate skills or other related entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ratingmodel` |
| Display name | Rating Model |
| Display (plural) | Rating Models |
| Schema name | `RatingModel` |
| Entity set (Web API) | `ratingmodels` |
| Primary id attribute | `ratingmodelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ratingmodels?$select=name&$top=10
GET /api/data/v9.2/ratingmodels(<guid>)
POST /api/data/v9.2/ratingmodels
PATCH /api/data/v9.2/ratingmodels(<guid>)
DELETE /api/data/v9.2/ratingmodels(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `MaxRatingValue`, `MinRatingValue`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RatingModelId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_ratingmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_ratingmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_ratingmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_ratingmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_ratingmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_ratingmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_ratingmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_ratingmodel` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_ratingmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ratingmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `ratingmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `ratingmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingmodel_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `ratingmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ratingmodel_ratingvalue_RatingModel` | _n/a_ | `ratingmodel` | _n/a_ |
| `RatingModel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [ratingmodel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/ratingmodel.md) on 2026-05-06.