---
logical: "msdyn_forecast"
display: "Forecast"
entitySetName: "msdyn_forecasts"
primaryId: "msdyn_forecastid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Forecast

Forecast

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecast` |
| Display name | Forecast |
| Display (plural) | Forecasts |
| Schema name | `msdyn_forecast` |
| Entity set (Web API) | `msdyn_forecasts` |
| Primary id attribute | `msdyn_forecastid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecasts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_forecasts(<guid>)
POST /api/data/v9.2/msdyn_forecasts
PATCH /api/data/v9.2/msdyn_forecasts(<guid>)
DELETE /api/data/v9.2/msdyn_forecasts(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_aggregatedcolumns`, `msdyn_forecastconfigurationid`, `msdyn_forecastId`, `msdyn_forecastrecurrenceid`, `msdyn_forecastrecurrenceidPId`, `msdyn_hierarchyentityrecord`, `msdyn_name`, `msdyn_ownerid`, `msdyn_parentinstanceid`, `msdyn_parentinstanceidPId`, `msdyn_rolledupcolumns`, `OverriddenCreatedOn`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecast_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecast_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecast_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecast_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecast_msdyn_forecast_parentinstanceid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_parentinstanceid` | `msdyn_parentinstanceid` |
| `msdyn_msdyn_forecast_ownerid` | [systemuser](systemuser.md) | `msdyn_ownerid` | `msdyn_ownerid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecast_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_recurrence_msdyn_forecast_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_forecast_msdyn_adjustmenthistory_forecastid` | _n/a_ | `msdyn_forecastid` | _n/a_ |
| `msdyn_msdyn_forecast_msdyn_forecast_parentinstanceid` | _n/a_ | `msdyn_parentinstanceid` | _n/a_ |
| `msdyn_msdyn_forecast_msdyn_forecastpredictiondata_forecastid` | _n/a_ | `msdyn_forecastid` | _n/a_ |


## Source

Generated from [msdyn_forecast.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecast.md) on 2026-05-06.