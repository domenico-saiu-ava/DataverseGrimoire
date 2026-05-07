---
logical: "opportunitycompetitors"
display: "OpportunityCompetitors"
entitySetName: "opportunitycompetitorscollection"
primaryId: "opportunitycompetitorid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# OpportunityCompetitors

## Identity

| Property | Value |
| --- | --- |
| Logical name | `opportunitycompetitors` |
| Display name | OpportunityCompetitors |
| Display (plural) | OpportunityCompetitors |
| Schema name | `OpportunityCompetitors` |
| Entity set (Web API) | `opportunitycompetitorscollection` |
| Primary id attribute | `opportunitycompetitorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/opportunitycompetitorscollection?$select=name&$top=10
GET /api/data/v9.2/opportunitycompetitorscollection(<guid>)
POST /api/data/v9.2/opportunitycompetitorscollection
PATCH /api/data/v9.2/opportunitycompetitorscollection(<guid>)
DELETE /api/data/v9.2/opportunitycompetitorscollection(<guid>)
```

## Attributes

Writable: **6** · Read-only: **3**

### Writable

`ImportSequenceNumber`, `Name`, `OpportunityCompetitorId`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CompetitorId`, `OpportunityId`, `VersionNumber`

## Relationships


### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `opportunitycompetitors_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitycompetitors_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitycompetitors_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitycompetitors_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `opportunitycompetitors_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [opportunitycompetitors.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/opportunitycompetitors.md) on 2026-05-06.