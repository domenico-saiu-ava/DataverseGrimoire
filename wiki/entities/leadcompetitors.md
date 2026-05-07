---
logical: "leadcompetitors"
display: "LeadCompetitors"
entitySetName: "leadcompetitorscollection"
primaryId: "leadcompetitorid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# LeadCompetitors

## Identity

| Property | Value |
| --- | --- |
| Logical name | `leadcompetitors` |
| Display name | LeadCompetitors |
| Display (plural) | LeadCompetitors |
| Schema name | `LeadCompetitors` |
| Entity set (Web API) | `leadcompetitorscollection` |
| Primary id attribute | `leadcompetitorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/leadcompetitorscollection?$select=name&$top=10
GET /api/data/v9.2/leadcompetitorscollection(<guid>)
POST /api/data/v9.2/leadcompetitorscollection
PATCH /api/data/v9.2/leadcompetitorscollection(<guid>)
DELETE /api/data/v9.2/leadcompetitorscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `LeadCompetitorId`, `Name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompetitorId`, `LeadId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadcompetitors_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadcompetitors_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadcompetitors_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadcompetitors_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadcompetitors_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [leadcompetitors.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/leadcompetitors.md) on 2026-05-06.