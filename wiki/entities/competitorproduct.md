---
logical: "competitorproduct"
display: "Competitor Product"
entitySetName: "competitorproducts"
primaryId: "competitorproductid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Competitor Product

Association between a competitor and a product offered by the competitor.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `competitorproduct` |
| Display name | Competitor Product |
| Display (plural) | Competitor Products |
| Schema name | `CompetitorProduct` |
| Entity set (Web API) | `competitorproducts` |
| Primary id attribute | `competitorproductid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/competitorproducts?$select=name&$top=10
GET /api/data/v9.2/competitorproducts(<guid>)
POST /api/data/v9.2/competitorproducts
PATCH /api/data/v9.2/competitorproducts(<guid>)
DELETE /api/data/v9.2/competitorproducts(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`CompetitorProductId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompetitorId`, `ProductId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitorproduct_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorproduct_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorproduct_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorproduct_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitorproduct_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [competitorproduct.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/competitorproduct.md) on 2026-05-06.