---
logical: "discount"
display: "Discount"
entitySetName: "discounts"
primaryId: "discountid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
synonyms_it: ["sconto", "sconti"]
synonyms_en: ["discount"]
---

# Discount

Price reduction made from the list price of a product or service based on the quantity purchased.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `discount` |
| Display name | Discount |
| Display (plural) | Discounts |
| Schema name | `Discount` |
| Entity set (Web API) | `discounts` |
| Primary id attribute | `discountid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/discounts?$select=name&$top=10
GET /api/data/v9.2/discounts(<guid>)
POST /api/data/v9.2/discounts
PATCH /api/data/v9.2/discounts(<guid>)
DELETE /api/data/v9.2/discounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`Amount`, `DiscountId`, `DiscountTypeId`, `HighQuantity`, `ImportSequenceNumber`, `LowQuantity`, `Name`, `OverriddenCreatedOn`, `Percentage`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`Amount_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsAmountType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `discount_type_discounts` | [discounttype](discounttype.md) | `discounttypeid` | `discounttypeid` |
| `lk_discount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_discount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_discountbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_discountbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `transactioncurrency_discount` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Discount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Discount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `discount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `discount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `Discount_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Discount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [discount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/discount.md) on 2026-05-06.