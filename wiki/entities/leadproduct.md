---
logical: "leadproduct"
display: "LeadProduct"
entitySetName: "leadproducts"
primaryId: "leadproductid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# LeadProduct

## Identity

| Property | Value |
| --- | --- |
| Logical name | `leadproduct` |
| Display name | LeadProduct |
| Display (plural) | LeadProduct |
| Schema name | `LeadProduct` |
| Entity set (Web API) | `leadproducts` |
| Primary id attribute | `leadproductid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/leadproducts?$select=name&$top=10
GET /api/data/v9.2/leadproducts(<guid>)
POST /api/data/v9.2/leadproducts
PATCH /api/data/v9.2/leadproducts(<guid>)
DELETE /api/data/v9.2/leadproducts(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `LeadProductId`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`LeadId`, `ProductId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadproduct_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadproduct_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadproduct_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadproduct_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadproduct_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [leadproduct.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/leadproduct.md) on 2026-05-06.