---
logical: "entitlementproducts"
display: "Entitlement Product"
entitySetName: "entitlementproductscollection"
primaryId: "entitlementproductid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entitlement Product

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementproducts` |
| Display name | Entitlement Product |
| Display (plural) | Entitlement Products |
| Schema name | `EntitlementProducts` |
| Entity set (Web API) | `entitlementproductscollection` |
| Primary id attribute | `entitlementproductid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entitlementproductscollection?$select=name&$top=10
GET /api/data/v9.2/entitlementproductscollection(<guid>)
POST /api/data/v9.2/entitlementproductscollection
PATCH /api/data/v9.2/entitlementproductscollection(<guid>)
DELETE /api/data/v9.2/entitlementproductscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`EntitlementProductId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`EntitlementId`, `ProductId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementproducts_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementproducts_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementproducts_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementproducts_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `product_entitlement_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [entitlementproducts.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementproducts.md) on 2026-05-06.