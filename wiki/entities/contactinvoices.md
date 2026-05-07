---
logical: "contactinvoices"
display: "ContactInvoices"
entitySetName: "contactinvoicescollection"
primaryId: "contactinvoiceid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# ContactInvoices

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contactinvoices` |
| Display name | ContactInvoices |
| Display (plural) | ContactInvoices |
| Schema name | `ContactInvoices` |
| Entity set (Web API) | `contactinvoicescollection` |
| Primary id attribute | `contactinvoiceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/contactinvoicescollection?$select=name&$top=10
GET /api/data/v9.2/contactinvoicescollection(<guid>)
POST /api/data/v9.2/contactinvoicescollection
PATCH /api/data/v9.2/contactinvoicescollection(<guid>)
DELETE /api/data/v9.2/contactinvoicescollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ContactInvoiceId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `InvoiceId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactinvoices_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactinvoices_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactinvoices_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactinvoices_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactinvoices_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [contactinvoices.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contactinvoices.md) on 2026-05-06.