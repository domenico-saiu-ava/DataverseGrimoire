---
logical: "msdyn_forecastinsight"
display: "Forecast Insights"
entitySetName: "msdyn_forecastinsights"
primaryId: "msdyn_forecastinsightid"
primaryName: "msdyn_hierarchyrecordid"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Forecast Insights

Forecast Insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastinsight` |
| Display name | Forecast Insights |
| Display (plural) | Forecast Insights |
| Schema name | `msdyn_forecastinsight` |
| Entity set (Web API) | `msdyn_forecastinsights` |
| Primary id attribute | `msdyn_forecastinsightid` |
| Primary name attribute | `msdyn_hierarchyrecordid` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastinsights?$select=msdyn_hierarchyrecordid&$top=10
GET /api/data/v9.2/msdyn_forecastinsights(<guid>)
POST /api/data/v9.2/msdyn_forecastinsights
PATCH /api/data/v9.2/msdyn_forecastinsights(<guid>)
DELETE /api/data/v9.2/msdyn_forecastinsights(<guid>)
```

## Attributes

Writable: **12** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_forecastconfigurationid`, `msdyn_forecastinsightId`, `msdyn_forecastrecurrenceid`, `msdyn_forecastrecurrenceidPId`, `msdyn_hierarchyrecordid`, `msdyn_insights`, `msdyn_isrollup`, `msdyn_version`, `OverriddenCreatedOn`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastinsight_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_recurrence_msdyn_forecastinsight_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |



## Source

Generated from [msdyn_forecastinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastinsight.md) on 2026-05-06.