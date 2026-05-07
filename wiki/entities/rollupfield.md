---
logical: "rollupfield"
display: "Rollup Field"
entitySetName: "rollupfields"
primaryId: "rollupfieldid"
tableType: "Standard"
ownership: "None"
---

# Rollup Field

Field to be rolled up to calculate the actual and in-progress values against the goal.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `rollupfield` |
| Display name | Rollup Field |
| Display (plural) | Rollup Fields |
| Schema name | `RollupField` |
| Entity set (Web API) | `rollupfields` |
| Primary id attribute | `rollupfieldid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/rollupfields?$select=&$top=10
GET /api/data/v9.2/rollupfields(<guid>)
POST /api/data/v9.2/rollupfields
PATCH /api/data/v9.2/rollupfields(<guid>)
DELETE /api/data/v9.2/rollupfields(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`DateAttribute`, `EntityForDateAttribute`, `GoalAttribute`, `ImportSequenceNumber`, `IsStateParentEntityAttribute`, `MetricId`, `RollupFieldId`, `SourceAttribute`, `SourceEntity`, `SourceState`, `SourceStatus`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_rollupfield_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_rollupfield_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_rollupfield_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_rollupfield_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `metric_rollupfield` | [metric](metric.md) | `metricid` | `metricid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `rollupfield_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `rollupfield_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `RollupField_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [rollupfield.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/rollupfield.md) on 2026-05-06.