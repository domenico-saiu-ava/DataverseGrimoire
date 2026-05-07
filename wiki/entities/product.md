---
logical: "product"
display: "Product"
entitySetName: "products"
primaryId: "productid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["prodotto", "prodotti", "articolo", "articoli", "sku"]
synonyms_en: ["product", "item", "sku"]
---

# Product

Information about products and their pricing information.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `product` |
| Display name | Product |
| Display (plural) | Products |
| Schema name | `Product` |
| Entity set (Web API) | `products` |
| Primary id attribute | `productid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/products?$select=name&$top=10
GET /api/data/v9.2/products(<guid>)
POST /api/data/v9.2/products
PATCH /api/data/v9.2/products(<guid>)
DELETE /api/data/v9.2/products(<guid>)
```

## Attributes

Writable: **44** · Read-only: **18**

### Writable

`CurrentCost`, `DefaultUoMId`, `DefaultUoMScheduleId`, `Description`, `DMTImportState`, `EntityImage`, `ImportSequenceNumber`, `IsKit`, `IsReparented`, `IsStockItem`, `msdyn_AlsoKnownAs`, `msdyn_gdproptout`, `msdyn_scopes`, `Name`, `OverriddenCreatedOn`, `ParentProductId`, `Price`, `PriceLevelId`, `ProcessId`, `ProductId`, `ProductNumber`, `ProductStructure`, `ProductTypeCode`, `ProductUrl`, `QuantityDecimal`, `QuantityOnHand`, `Size`, `StageId`, `StandardCost`, `StateCode`, `StatusCode`, `StockVolume`, `StockWeight`, `SubjectId`, `SupplierName`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `ValidFromDate`, `ValidToDate`, `VendorID`, `VendorName`, `VendorPartNumber`

### Read-only

`CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `CurrentCost_Base`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `HierarchyPath`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `Price_Base`, `StandardCost_Base`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_product_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_product_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_productbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_productbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_products` | [organization](organization.md) | `organizationid` | `organizationid` |
| `price_level_products` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_products` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `product_parent_product` | [product](product.md) | `parentproductid` | `parentproductid` |
| `subject_products` | [subject](subject.md) | `subjectid` | `subjectid` |
| `transactioncurrency_product` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_products` | [uom](uom.md) | `defaultuomid` | `defaultuomid` |
| `unit_of_measurement_schedule_products` | [uomschedule](uomschedule.md) | `defaultuomscheduleid` | `defaultuomscheduleid` |

### One-to-Many (26)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_product_msdyn_customerasset_Product` | _n/a_ | `msdyn_product` | _n/a_ |
| `msdyn_productmap_msdyn_productid_product` | _n/a_ | `msdyn_productid` | _n/a_ |
| `opportunity_products` | _n/a_ | `productid` | _n/a_ |
| `Product_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Product_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Product_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `product_connections1` | _n/a_ | `record1id` | _n/a_ |
| `product_connections2` | _n/a_ | `record2id` | _n/a_ |
| `product_contract_line_items` | _n/a_ | `productid` | _n/a_ |
| `Product_DynamicProperty` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Product_DynamicPropertyAssociation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `product_incidents` | _n/a_ | `productid` | _n/a_ |
| `product_invoice_details` | _n/a_ | `productid` | _n/a_ |
| `product_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `product_order_details` | _n/a_ | `productid` | _n/a_ |
| `product_parent_product` | _n/a_ | `parentproductid` | _n/a_ |
| `product_price_levels` | _n/a_ | `productid` | _n/a_ |
| `product_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Product_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Product_ProductAssociation_AssocProd` | _n/a_ | `associatedproduct` | _n/a_ |
| `Product_ProductAssociation_Prod` | _n/a_ | `productid` | _n/a_ |
| `product_ProductSubstitute_productid` | _n/a_ | `productid` | _n/a_ |
| `product_ProductSubstitute_substitutedproductid` | _n/a_ | `substitutedproductid` | _n/a_ |
| `product_quote_details` | _n/a_ | `productid` | _n/a_ |
| `Product_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Product_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignproduct_association` | [entityid](entityid.md) | _n/a_ | _n/a_ |
| `competitorproduct_association` | [productid](productid.md) | _n/a_ | _n/a_ |
| `leadproduct_association` | [productid](productid.md) | _n/a_ | _n/a_ |
| `msdyn_product_knowledgearticle` | [productid](productid.md) | _n/a_ | _n/a_ |
| `product_entitlement_association` | [productid](productid.md) | _n/a_ | _n/a_ |
| `product_entitlementtemplate_association` | [productid](productid.md) | _n/a_ | _n/a_ |
| `product_knowledgebaserecord` | [productid](productid.md) | _n/a_ | _n/a_ |
| `productsalesliterature_association` | [productid](productid.md) | _n/a_ | _n/a_ |

## Source

Generated from [product.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/product.md) on 2026-05-06.