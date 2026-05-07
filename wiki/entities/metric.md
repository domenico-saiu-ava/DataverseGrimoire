---
logical: "metric"
display: "Goal Metric"
entitySetName: "metrics"
primaryId: "metricid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Goal Metric

Type of measurement for a goal, such as money amount or count.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `metric` |
| Display name | Goal Metric |
| Display (plural) | Goal Metrics |
| Schema name | `Metric` |
| Entity set (Web API) | `metrics` |
| Primary id attribute | `metricid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/metrics?$select=name&$top=10
GET /api/data/v9.2/metrics(<guid>)
POST /api/data/v9.2/metrics
PATCH /api/data/v9.2/metrics(<guid>)
DELETE /api/data/v9.2/metrics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`AmountDataType`, `Description`, `ImportSequenceNumber`, `IsAmount`, `IsStretchTracked`, `MetricId`, `Name`, `OverriddenCreatedOn`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_metric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_metric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_metric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_metric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_metric` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `metric_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metric_goal` | _n/a_ | `metricid` | _n/a_ |
| `metric_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metric_rollupfield` | _n/a_ | `metricid` | _n/a_ |
| `Metric_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [metric.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/metric.md) on 2026-05-06.