---
logical: "invoicedetail"
display: "Invoice Product"
entitySetName: "invoicedetails"
primaryId: "invoicedetailid"
primaryName: "invoicedetailname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["riga fattura", "voce fattura", "dettaglio fattura"]
synonyms_en: ["invoice line", "invoice detail", "invoice item"]
---

# Invoice Product

Line item in an invoice containing detailed billing information for a product.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `invoicedetail` |
| Display name | Invoice Product |
| Display (plural) | Invoice Products |
| Schema name | `InvoiceDetail` |
| Entity set (Web API) | `invoicedetails` |
| Primary id attribute | `invoicedetailid` |
| Primary name attribute | `invoicedetailname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/invoicedetails?$select=invoicedetailname&$top=10
GET /api/data/v9.2/invoicedetails(<guid>)
POST /api/data/v9.2/invoicedetails
PATCH /api/data/v9.2/invoicedetails(<guid>)
DELETE /api/data/v9.2/invoicedetails(<guid>)
```

## Attributes

Writable: **50** · Read-only: **25**

### Writable

`ActualDeliveryOn`, `BaseAmount`, `Description`, `ExtendedAmount`, `ImportSequenceNumber`, `InvoiceDetailId`, `InvoiceDetailName`, `InvoiceId`, `IsCopied`, `IsPriceOverridden`, `IsProductOverridden`, `LineItemNumber`, `ManualDiscountAmount`, `OverriddenCreatedOn`, `ParentBundleId`, `ParentBundleIdRef`, `PricePerUnit`, `PricingErrorCode`, `ProductAssociationId`, `ProductDescription`, `ProductId`, `ProductName`, `ProductTypeCode`, `PropertyConfigurationStatus`, `Quantity`, `QuantityBackordered`, `QuantityCancelled`, `QuantityShipped`, `SalesOrderDetailId`, `SalesRepId`, `SequenceNumber`, `ShippingTrackingNumber`, `ShipTo_City`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `Tax`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UoMId`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`BaseAmount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ExtendedAmount_Base`, `InvoiceIsPriceLocked`, `InvoiceStateCode`, `ManualDiscountAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PricePerUnit_Base`, `ProductNumber`, `Tax_Base`, `VersionNumber`, `VolumeDiscountAmount`, `VolumeDiscountAmount_Base`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `invoice_details` | [invoice](invoice.md) | `invoiceid` | `invoiceid` |
| `invoicedetail_parent_invoicedetail` | [invoicedetail](invoicedetail.md) | `parentbundleid` | `parentbundleid_invoicedetail` |
| `invoicedetail_parentref_invoicedetail` | [invoicedetail](invoicedetail.md) | `parentbundleidref` | `parentbundleidref_invoicedetail` |
| `lk_invoicedetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_invoicedetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_invoicedetailbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_invoicedetailbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `msdyn_salesorderdetail_invoicedetail` | [salesorderdetail](salesorderdetail.md) | `salesorderdetailid` | `SalesOrderDetailId` |
| `product_invoice_details` | [product](product.md) | `productid` | `productid` |
| `productAssociation_invoice_details` | [productassociation](productassociation.md) | `productassociationid` | `productassociationid_productassociation` |
| `system_user_invoicedetail` | [systemuser](systemuser.md) | `salesrepid` | `salesrepid` |
| `team_invoicedetail` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_invoicedetail` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_invoice_details` | [uom](uom.md) | `uomid` | `uomid` |
| `user_invoicedetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `InvoiceDetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `InvoiceDetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `InvoiceDetail_Dynamicpropertyinstance` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoicedetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoicedetail_parent_invoicedetail` | _n/a_ | `parentbundleid` | _n/a_ |
| `invoicedetail_parentref_invoicedetail` | _n/a_ | `parentbundleidref` | _n/a_ |
| `invoicedetail_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `InvoiceDetail_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `InvoiceDetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [invoicedetail.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/invoicedetail.md) on 2026-05-06.