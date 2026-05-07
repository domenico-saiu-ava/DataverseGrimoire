---
logical: "competitorsalesliterature"
display: "CompetitorSalesLiterature"
entitySetName: "competitorsalesliteratures"
primaryId: "competitorsalesliteratureid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# CompetitorSalesLiterature

## Identity

| Property | Value |
| --- | --- |
| Logical name | `competitorsalesliterature` |
| Display name | CompetitorSalesLiterature |
| Display (plural) | CompetitorSalesLiterature |
| Schema name | `CompetitorSalesLiterature` |
| Entity set (Web API) | `competitorsalesliteratures` |
| Primary id attribute | `competitorsalesliteratureid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/competitorsalesliteratures?$select=name&$top=10
GET /api/data/v9.2/competitorsalesliteratures(<guid>)
POST /api/data/v9.2/competitorsalesliteratures
PATCH /api/data/v9.2/competitorsalesliteratures(<guid>)
DELETE /api/data/v9.2/competitorsalesliteratures(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`CompetitorSalesLiteratureId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompetitorId`, `SalesLiteratureId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitorsalesliterature_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorsalesliterature_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorsalesliterature_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitorsalesliterature_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitorsalesliterature_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [competitorsalesliterature.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/competitorsalesliterature.md) on 2026-05-06.