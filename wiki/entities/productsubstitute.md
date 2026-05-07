---
logical: "productsubstitute"
display: "Product Relationship"
entitySetName: "productsubstitutes"
primaryId: "productsubstituteid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Product Relationship

Information about the selling relationship between two products, including the relationship type, such as up-sell, cross-sell, substitute, or accessory.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `productsubstitute` |
| Display name | Product Relationship |
| Display (plural) | Product Relationships |
| Schema name | `ProductSubstitute` |
| Entity set (Web API) | `productsubstitutes` |
| Primary id attribute | `productsubstituteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/productsubstitutes?$select=name&$top=10
GET /api/data/v9.2/productsubstitutes(<guid>)
POST /api/data/v9.2/productsubstitutes
PATCH /api/data/v9.2/productsubstitutes(<guid>)
DELETE /api/data/v9.2/productsubstitutes(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`Direction`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `ProductId`, `ProductSubstituteId`, `SalesRelationshipType`, `statuscode`, `SubstitutedProductId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `statecode`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ProductSubstitute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ProductSubstitute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ProductSubstitute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ProductSubstitute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_ProductSubstitute` | [organization](organization.md) | `organizationid` | `organizationid` |
| `product_ProductSubstitute_productid` | [product](product.md) | `productid` | `productid` |
| `product_ProductSubstitute_substitutedproductid` | [product](product.md) | `substitutedproductid` | `substitutedproductid` |
| `transactioncurrency_ProductSubstitute` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ProductSubstitute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductSubstitute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productsubstitute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductSubstitute_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `ProductSubstitute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductSubstitute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [productsubstitute.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/productsubstitute.md) on 2026-05-06.