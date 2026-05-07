---
logical: "opportunityproduct"
display: "Opportunity Product"
entitySetName: "opportunityproducts"
primaryId: "opportunityproductid"
primaryName: "opportunityproductname"
tableType: "Standard"
ownership: "UserOwned"
---

# Opportunity Product

Association between an opportunity and a product.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `opportunityproduct` |
| Display name | Opportunity Product |
| Display (plural) | Opportunity Products |
| Schema name | `OpportunityProduct` |
| Entity set (Web API) | `opportunityproducts` |
| Primary id attribute | `opportunityproductid` |
| Primary name attribute | `opportunityproductname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/opportunityproducts?$select=opportunityproductname&$top=10
GET /api/data/v9.2/opportunityproducts(<guid>)
POST /api/data/v9.2/opportunityproducts
PATCH /api/data/v9.2/opportunityproducts(<guid>)
DELETE /api/data/v9.2/opportunityproducts(<guid>)
```

## Attributes

Writable: **31** · Read-only: **26**

### Writable

`BaseAmount`, `Description`, `EntityImage`, `ExtendedAmount`, `ImportSequenceNumber`, `IsPriceOverridden`, `IsProductOverridden`, `LineItemNumber`, `ManualDiscountAmount`, `OpportunityId`, `OpportunityProductId`, `OpportunityProductName`, `OverriddenCreatedOn`, `ParentBundleId`, `ParentBundleIdRef`, `PricePerUnit`, `PricingErrorCode`, `ProductAssociationId`, `ProductDescription`, `ProductId`, `ProductName`, `ProductTypeCode`, `PropertyConfigurationStatus`, `Quantity`, `SequenceNumber`, `SkipPriceCalculation`, `Tax`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UoMId`, `UTCConversionTimeZoneCode`

### Read-only

`BaseAmount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ExtendedAmount_Base`, `ManualDiscountAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OpportunityStateCode`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PricePerUnit_Base`, `Tax_Base`, `VersionNumber`, `VolumeDiscountAmount`, `VolumeDiscountAmount_Base`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_opportunityproduct_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_opportunityproduct_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_opportunityproductbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_opportunityproductbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `opportunity_products` | [product](product.md) | `productid` | `productid` |
| `opportunityproduct_parent_opportunityproduct` | [opportunityproduct](opportunityproduct.md) | `parentbundleid` | `parentbundleid_opportunityproduct` |
| `opportunityproduct_parentref_opportunityproduct` | [opportunityproduct](opportunityproduct.md) | `parentbundleidref` | `parentbundleidref_opportunityproduct` |
| `product_opportunities` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `productAssociation_opportunity_product` | [productassociation](productassociation.md) | `productassociationid` | `productassociationid_productassociation` |
| `team_opportunityproduct` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_opportunityproduct` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_opportunity_products` | [uom](uom.md) | `uomid` | `uomid` |
| `user_opportunityproduct` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `OpportunityProduct_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OpportunityProduct_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OpportunityProduct_Dynamicpropertyinstance` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunityproduct_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunityproduct_parent_opportunityproduct` | _n/a_ | `parentbundleid` | _n/a_ |
| `opportunityproduct_parentref_opportunityproduct` | _n/a_ | `parentbundleidref` | _n/a_ |
| `opportunityproduct_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `OpportunityProduct_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OpportunityProduct_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [opportunityproduct.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/opportunityproduct.md) on 2026-05-06.