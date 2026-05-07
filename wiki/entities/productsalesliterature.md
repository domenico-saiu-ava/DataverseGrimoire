---
logical: "productsalesliterature"
display: "ProductSalesLiterature"
entitySetName: "productsalesliteratures"
primaryId: "productsalesliteratureid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# ProductSalesLiterature

## Identity

| Property | Value |
| --- | --- |
| Logical name | `productsalesliterature` |
| Display name | ProductSalesLiterature |
| Display (plural) | ProductSalesLiterature |
| Schema name | `ProductSalesLiterature` |
| Entity set (Web API) | `productsalesliteratures` |
| Primary id attribute | `productsalesliteratureid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/productsalesliteratures?$select=name&$top=10
GET /api/data/v9.2/productsalesliteratures(<guid>)
POST /api/data/v9.2/productsalesliteratures
PATCH /api/data/v9.2/productsalesliteratures(<guid>)
DELETE /api/data/v9.2/productsalesliteratures(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `ProductSalesLiteratureId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ProductId`, `SalesLiteratureId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `productsalesliterature_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productsalesliterature_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productsalesliterature_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `productsalesliterature_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `productsalesliterature_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [productsalesliterature.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/productsalesliterature.md) on 2026-05-06.