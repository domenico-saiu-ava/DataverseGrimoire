---
logical: "contactquotes"
display: "ContactQuotes"
entitySetName: "contactquotescollection"
primaryId: "contactquoteid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# ContactQuotes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `contactquotes` |
| Display name | ContactQuotes |
| Display (plural) | ContactQuotes |
| Schema name | `ContactQuotes` |
| Entity set (Web API) | `contactquotescollection` |
| Primary id attribute | `contactquoteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/contactquotescollection?$select=name&$top=10
GET /api/data/v9.2/contactquotescollection(<guid>)
POST /api/data/v9.2/contactquotescollection
PATCH /api/data/v9.2/contactquotescollection(<guid>)
DELETE /api/data/v9.2/contactquotescollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ContactQuoteId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ContactId`, `QuoteId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactquotes_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactquotes_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactquotes_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `contactquotes_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactquotes_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [contactquotes.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/contactquotes.md) on 2026-05-06.