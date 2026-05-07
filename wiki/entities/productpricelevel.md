---
logical: "productpricelevel"
display: "Price List Item"
entitySetName: "productpricelevels"
primaryId: "productpricelevelid"
primaryName: "productidname"
tableType: "Standard"
ownership: "None"
synonyms_it: ["riga listino", "voce listino", "prezzo prodotto"]
synonyms_en: ["price list item", "product price"]
---

# Price List Item

Information about how to price a product in the specified price level, including pricing method, rounding option, and discount type based on a specified product unit.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `productpricelevel` |
| Display name | Price List Item |
| Display (plural) | Price List Items |
| Schema name | `ProductPriceLevel` |
| Entity set (Web API) | `productpricelevels` |
| Primary id attribute | `productpricelevelid` |
| Primary name attribute | `productidname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/productpricelevels?$select=productidname&$top=10
GET /api/data/v9.2/productpricelevels(<guid>)
POST /api/data/v9.2/productpricelevels
PATCH /api/data/v9.2/productpricelevels(<guid>)
DELETE /api/data/v9.2/productpricelevels(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`Amount`, `DiscountTypeId`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `Percentage`, `PriceLevelId`, `PricingMethodCode`, `ProcessId`, `ProductId`, `ProductPriceLevelId`, `QuantitySellingCode`, `RoundingOptionAmount`, `RoundingOptionCode`, `RoundingPolicyCode`, `StageId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UoMId`, `UoMScheduleId`, `UTCConversionTimeZoneCode`

### Read-only

`Amount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `ProductNumber`, `RoundingOptionAmount_Base`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `discount_type_product_price_levels` | [discounttype](discounttype.md) | `discounttypeid` | `discounttypeid` |
| `lk_productpricelevel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_productpricelevel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_productpricelevelbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_productpricelevelbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `price_level_product_price_levels` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_productpricelevels` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `product_price_levels` | [product](product.md) | `productid` | `productid` |
| `transactioncurrency_productpricelevel` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measure_schedule_product_price_level` | [uomschedule](uomschedule.md) | `uomscheduleid` | `uomscheduleid` |
| `unit_of_measurement_product_price_levels` | [uom](uom.md) | `uomid` | `uomid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ProductPriceLevel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductPriceLevel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productpricelevel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productpricelevel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `ProductPriceLevel_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductPriceLevel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [productpricelevel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/productpricelevel.md) on 2026-05-06.