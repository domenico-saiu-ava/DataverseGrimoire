---
logical: "pricelevel"
display: "Price List"
entitySetName: "pricelevels"
primaryId: "pricelevelid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["listino", "listini", "listino prezzi"]
synonyms_en: ["price list", "pricelevel", "price level"]
---

# Price List

Entity that defines pricing levels.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `pricelevel` |
| Display name | Price List |
| Display (plural) | Price Lists |
| Schema name | `PriceLevel` |
| Entity set (Web API) | `pricelevels` |
| Primary id attribute | `pricelevelid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/pricelevels?$select=name&$top=10
GET /api/data/v9.2/pricelevels(<guid>)
POST /api/data/v9.2/pricelevels
PATCH /api/data/v9.2/pricelevels(<guid>)
DELETE /api/data/v9.2/pricelevels(<guid>)
```

## Attributes

Writable: **15** · Read-only: **9**

### Writable

`BeginDate`, `Description`, `EndDate`, `FreightTermsCode`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `PaymentMethodCode`, `PriceLevelId`, `ShippingMethodCode`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_pricelevel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_pricelevel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_pricelevelbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_pricelevelbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_price_levels` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_pricelevel` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `price_level_accounts` | _n/a_ | `defaultpricelevelid` | _n/a_ |
| `price_level_contacts` | _n/a_ | `defaultpricelevelid` | _n/a_ |
| `price_level_invoices` | _n/a_ | `pricelevelid` | _n/a_ |
| `price_level_opportunties` | _n/a_ | `pricelevelid` | _n/a_ |
| `price_level_orders` | _n/a_ | `pricelevelid` | _n/a_ |
| `price_level_product_price_levels` | _n/a_ | `pricelevelid` | _n/a_ |
| `price_level_products` | _n/a_ | `pricelevelid` | _n/a_ |
| `price_level_quotes` | _n/a_ | `pricelevelid` | _n/a_ |
| `PriceLevel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PriceLevel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `pricelevel_connections1` | _n/a_ | `record1id` | _n/a_ |
| `pricelevel_connections2` | _n/a_ | `record2id` | _n/a_ |
| `pricelevel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `pricelevel_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `PriceLevel_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PriceLevel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PriceList_Campaigns` | _n/a_ | `pricelistid` | _n/a_ |


## Source

Generated from [pricelevel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/pricelevel.md) on 2026-05-06.