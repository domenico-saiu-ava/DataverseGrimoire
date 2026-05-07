---
logical: "quotedetail"
display: "Quote Product"
entitySetName: "quotedetails"
primaryId: "quotedetailid"
primaryName: "quotedetailname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["riga preventivo", "voce preventivo", "dettaglio preventivo"]
synonyms_en: ["quote line", "quote detail", "quote item"]
---

# Quote Product

Product line item in a quote. The details include such information as product ID, description, quantity, and cost.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `quotedetail` |
| Display name | Quote Product |
| Display (plural) | Quote Products |
| Schema name | `QuoteDetail` |
| Entity set (Web API) | `quotedetails` |
| Primary id attribute | `quotedetailid` |
| Primary name attribute | `quotedetailname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/quotedetails?$select=quotedetailname&$top=10
GET /api/data/v9.2/quotedetails(<guid>)
POST /api/data/v9.2/quotedetails
PATCH /api/data/v9.2/quotedetails(<guid>)
DELETE /api/data/v9.2/quotedetails(<guid>)
```

## Attributes

Writable: **47** · Read-only: **24**

### Writable

`BaseAmount`, `Description`, `ExtendedAmount`, `ImportSequenceNumber`, `IsPriceOverridden`, `IsProductOverridden`, `LineItemNumber`, `ManualDiscountAmount`, `OverriddenCreatedOn`, `ParentBundleId`, `ParentBundleIdRef`, `PricePerUnit`, `PricingErrorCode`, `ProductAssociationId`, `ProductDescription`, `ProductId`, `ProductName`, `ProductTypeCode`, `PropertyConfigurationStatus`, `Quantity`, `QuoteCreationMethod`, `QuoteDetailId`, `QuoteDetailName`, `QuoteId`, `RequestDeliveryBy`, `SalesRepId`, `SequenceNumber`, `ShipTo_AddressId`, `ShipTo_City`, `ShipTo_ContactName`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `Tax`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UoMId`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`BaseAmount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ExtendedAmount_Base`, `ManualDiscountAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PricePerUnit_Base`, `ProductNumber`, `QuoteStateCode`, `Tax_Base`, `VersionNumber`, `VolumeDiscountAmount`, `VolumeDiscountAmount_Base`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_quotedetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_quotedetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_quotedetailbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_quotedetailbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `product_quote_details` | [product](product.md) | `productid` | `productid` |
| `productAssociation_quote_details` | [productassociation](productassociation.md) | `productassociationid` | `productassociationid_productassociation` |
| `quote_details` | [quote](quote.md) | `quoteid` | `quoteid` |
| `quotedetail_parent_quotedetail` | [quotedetail](quotedetail.md) | `parentbundleid` | `parentbundleid_quotedetail` |
| `quotedetail_parentref_quotedetail` | [quotedetail](quotedetail.md) | `parentbundleidref` | `parentbundleidref_quotedetail` |
| `system_user_quotedetail` | [systemuser](systemuser.md) | `salesrepid` | `salesrepid` |
| `team_quotedetail` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_quotedetail` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_quote_details` | [uom](uom.md) | `uomid` | `uomid` |
| `user_quotedetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_quotedetail_salesorderdetail` | _n/a_ | `quotedetailid` | _n/a_ |
| `QuoteDetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QuoteDetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QuoteDetail_Dynamicpropertyinstance` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quotedetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quotedetail_parent_quotedetail` | _n/a_ | `parentbundleid` | _n/a_ |
| `quotedetail_parentref_quotedetail` | _n/a_ | `parentbundleidref` | _n/a_ |
| `quotedetail_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `QuoteDetail_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QuoteDetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [quotedetail.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/quotedetail.md) on 2026-05-06.