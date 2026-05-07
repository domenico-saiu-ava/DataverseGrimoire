---
logical: "salesorderdetail"
display: "Order Product"
entitySetName: "salesorderdetails"
primaryId: "salesorderdetailid"
primaryName: "salesorderdetailname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["riga ordine", "voce ordine", "dettaglio ordine"]
synonyms_en: ["order line", "order detail", "order item"]
---

# Order Product

Line item in a sales order.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `salesorderdetail` |
| Display name | Order Product |
| Display (plural) | Order Products |
| Schema name | `SalesOrderDetail` |
| Entity set (Web API) | `salesorderdetails` |
| Primary id attribute | `salesorderdetailid` |
| Primary name attribute | `salesorderdetailname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/salesorderdetails?$select=salesorderdetailname&$top=10
GET /api/data/v9.2/salesorderdetails(<guid>)
POST /api/data/v9.2/salesorderdetails
PATCH /api/data/v9.2/salesorderdetails(<guid>)
DELETE /api/data/v9.2/salesorderdetails(<guid>)
```

## Attributes

Writable: **52** · Read-only: **25**

### Writable

`BaseAmount`, `Description`, `ExtendedAmount`, `ImportSequenceNumber`, `IsCopied`, `IsPriceOverridden`, `IsProductOverridden`, `LineItemNumber`, `ManualDiscountAmount`, `OrderCreationMethod`, `OverriddenCreatedOn`, `ParentBundleId`, `ParentBundleIdRef`, `PricePerUnit`, `PricingErrorCode`, `ProductAssociationId`, `ProductDescription`, `ProductId`, `ProductName`, `ProductTypeCode`, `PropertyConfigurationStatus`, `Quantity`, `QuantityBackordered`, `QuantityCancelled`, `QuantityShipped`, `QuoteDetailId`, `RequestDeliveryBy`, `SalesOrderDetailId`, `SalesOrderDetailName`, `SalesOrderId`, `SalesRepId`, `SequenceNumber`, `ShipTo_AddressId`, `ShipTo_City`, `ShipTo_ContactName`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `Tax`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UoMId`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`BaseAmount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ExtendedAmount_Base`, `ManualDiscountAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PricePerUnit_Base`, `ProductNumber`, `SalesOrderIsPriceLocked`, `SalesOrderStateCode`, `Tax_Base`, `VersionNumber`, `VolumeDiscountAmount`, `VolumeDiscountAmount_Base`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_salesorderdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_salesorderdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_salesorderdetailbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_salesorderdetailbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `msdyn_quotedetail_salesorderdetail` | [quotedetail](quotedetail.md) | `quotedetailid` | `QuoteDetailId` |
| `order_details` | [salesorder](salesorder.md) | `salesorderid` | `salesorderid` |
| `product_order_details` | [product](product.md) | `productid` | `productid` |
| `productAssociation_salesorder_details` | [productassociation](productassociation.md) | `productassociationid` | `productassociationid_productassociation` |
| `salesorderdetail_parent_salesorderdetail` | [salesorderdetail](salesorderdetail.md) | `parentbundleid` | `parentbundleid_salesorderdetail` |
| `salesorderdetail_parentref_salesorderdetail` | [salesorderdetail](salesorderdetail.md) | `parentbundleidref` | `parentbundleidref_salesorderdetail` |
| `system_user_salesorderdetail` | [systemuser](systemuser.md) | `salesrepid` | `salesrepid` |
| `team_salesorderdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_salesorderdetail` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_order_details` | [uom](uom.md) | `uomid` | `uomid` |
| `user_salesorderdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesorderdetail_invoicedetail` | _n/a_ | `salesorderdetailid` | _n/a_ |
| `SalesOrderDetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrderDetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrderDetail_Dynamicpropertyinstance` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorderdetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorderdetail_parent_salesorderdetail` | _n/a_ | `parentbundleid` | _n/a_ |
| `salesorderdetail_parentref_salesorderdetail` | _n/a_ | `parentbundleidref` | _n/a_ |
| `salesorderdetail_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SalesOrderDetail_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrderDetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [salesorderdetail.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/salesorderdetail.md) on 2026-05-06.