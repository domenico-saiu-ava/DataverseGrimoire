---
logical: "discounttype"
display: "Discount List"
entitySetName: "discounttypes"
primaryId: "discounttypeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["tipo sconto", "tipologia sconto"]
synonyms_en: ["discount type", "discounttype"]
---

# Discount List

Type of discount specified as either a percentage or an amount.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `discounttype` |
| Display name | Discount List |
| Display (plural) | Discount Lists |
| Schema name | `DiscountType` |
| Entity set (Web API) | `discounttypes` |
| Primary id attribute | `discounttypeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/discounttypes?$select=name&$top=10
GET /api/data/v9.2/discounttypes(<guid>)
POST /api/data/v9.2/discounttypes
PATCH /api/data/v9.2/discounttypes(<guid>)
DELETE /api/data/v9.2/discounttypes(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`Description`, `DiscountTypeId`, `ImportSequenceNumber`, `IsAmountType`, `Name`, `OverriddenCreatedOn`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_discounttype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_discounttype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_discounttypebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_discounttypebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_discount_types` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_discounttype` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `discount_type_discounts` | _n/a_ | `discounttypeid` | _n/a_ |
| `discount_type_product_price_levels` | _n/a_ | `discounttypeid` | _n/a_ |
| `DiscountType_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DiscountType_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `discounttype_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `discounttype_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `DiscountType_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `DiscountType_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [discounttype.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/discounttype.md) on 2026-05-06.