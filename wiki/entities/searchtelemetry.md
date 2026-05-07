---
logical: "searchtelemetry"
display: "Search Telemetry"
entitySetName: "searchtelemetries"
primaryId: "searchtelemetryid"
primaryName: "userquery"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Search Telemetry

Entity to log telemetry that used to improve search quality

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchtelemetry` |
| Display name | Search Telemetry |
| Display (plural) | Search Telemetry |
| Schema name | `searchtelemetry` |
| Entity set (Web API) | `searchtelemetries` |
| Primary id attribute | `searchtelemetryid` |
| Primary name attribute | `userquery` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchtelemetries?$select=userquery&$top=10
GET /api/data/v9.2/searchtelemetries(<guid>)
POST /api/data/v9.2/searchtelemetries
PATCH /api/data/v9.2/searchtelemetries(<guid>)
DELETE /api/data/v9.2/searchtelemetries(<guid>)
```

## Attributes

Writable: **10** · Read-only: **2**

### Writable

`CorrelationId`, `EyesOnAnalyticsAllowed`, `FeedbackData`, `PartitionId`, `RequestId`, `ScenarioName`, `searchtelemetryId`, `SessionId`, `TTLInSeconds`, `UserQuery`

### Read-only

`CreatedOn`, `versionnumber`

## Relationships




## Source

Generated from [searchtelemetry.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/searchtelemetry.md) on 2026-05-06.