---
logical: "entitlementtemplateproducts"
display: "Entitlement Template Product"
entitySetName: "entitlementtemplateproductscollection"
primaryId: "entitlementtemplateproductid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entitlement Template Product

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlementtemplateproducts` |
| Display name | Entitlement Template Product |
| Display (plural) | Entitlement Template Products |
| Schema name | `EntitlementTemplateProducts` |
| Entity set (Web API) | `entitlementtemplateproductscollection` |
| Primary id attribute | `entitlementtemplateproductid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entitlementtemplateproductscollection?$select=name&$top=10
GET /api/data/v9.2/entitlementtemplateproductscollection(<guid>)
POST /api/data/v9.2/entitlementtemplateproductscollection
PATCH /api/data/v9.2/entitlementtemplateproductscollection(<guid>)
DELETE /api/data/v9.2/entitlementtemplateproductscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`EntitlementTemplateProductId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`EntitlementTemplateId`, `ProductId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlementtemplateproducts_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplateproducts_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplateproducts_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entitlementtemplateproducts_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `product_entitlementtemplate_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [entitlementtemplateproducts.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/entitlementtemplateproducts.md) on 2026-05-06.