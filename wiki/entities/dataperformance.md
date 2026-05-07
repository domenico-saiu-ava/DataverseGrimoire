---
logical: "dataperformance"
display: "Data Performance Dashboard"
entitySetName: "dataperformances"
primaryId: "dataperformanceid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Data Performance Dashboard

Data Performance Dashboard.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dataperformance` |
| Display name | Data Performance Dashboard |
| Display (plural) | Data Performance Collection |
| Schema name | `DataPerformance` |
| Entity set (Web API) | `dataperformances` |
| Primary id attribute | `dataperformanceid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dataperformances?$select=&$top=10
GET /api/data/v9.2/dataperformances(<guid>)
POST /api/data/v9.2/dataperformances
PATCH /api/data/v9.2/dataperformances(<guid>)
DELETE /api/data/v9.2/dataperformances(<guid>)
```

## Attributes

Writable: **0** · Read-only: **19**

### Read-only

`AnyOptimizationApplied`, `AnyOptimizationAvailable`, `Component`, `Count`, `Entity`, `EstimatedOptimizationImpact`, `ExecutionPeriod`, `LastActionResult`, `LastOptimizationDate`, `MaxTime`, `MedianTime`, `MinTime`, `Operation`, `OptimizationStatus`, `OptimizationStorage`, `OrganizationId`, `RealizedOptimizationImpact`, `Solution`, `Weight`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dataperformance_organizationid` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [dataperformance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dataperformance.md) on 2026-05-06.