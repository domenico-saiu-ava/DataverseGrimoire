---
logical: "productassociation"
display: "Product Association"
entitySetName: "productassociations"
primaryId: "productassociationid"
primaryName: "productidname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Product Association

Instance of a product added to a bundle or kit.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `productassociation` |
| Display name | Product Association |
| Display (plural) | Product Associations |
| Schema name | `ProductAssociation` |
| Entity set (Web API) | `productassociations` |
| Primary id attribute | `productassociationid` |
| Primary name attribute | `productidname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/productassociations?$select=productidname&$top=10
GET /api/data/v9.2/productassociations(<guid>)
POST /api/data/v9.2/productassociations
PATCH /api/data/v9.2/productassociations(<guid>)
DELETE /api/data/v9.2/productassociations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **9**

### Writable

`AssociatedProduct`, `DMTImportState`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `ProductAssociationId`, `ProductId`, `ProductIsRequired`, `PropertyCustomizationStatus`, `Quantity`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UoMId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ProductAssociate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ProductAssociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ProductAssociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ProductAssociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_ProductAssociation` | [organization](organization.md) | `organizationid` | `organizationid` |
| `Product_ProductAssociation_AssocProd` | [product](product.md) | `associatedproduct` | `associatedproduct` |
| `Product_ProductAssociation_Prod` | [product](product.md) | `productid` | `productid` |
| `transactioncurrency_ProductAssociation` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `unit_of_measurement_productassociation` | [uom](uom.md) | `uomid` | `uomid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ProductAssociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductAssociation_DynamicProperty` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ProductAssociation_DynamicPropertyAssociation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productAssociation_invoice_details` | _n/a_ | `productassociationid` | _n/a_ |
| `productassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productAssociation_opportunity_product` | _n/a_ | `productassociationid` | _n/a_ |
| `ProductAssociation_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `ProductAssociation_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productAssociation_quote_details` | _n/a_ | `productassociationid` | _n/a_ |
| `productAssociation_salesorder_details` | _n/a_ | `productassociationid` | _n/a_ |
| `ProductAssociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [productassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/productassociation.md) on 2026-05-06.