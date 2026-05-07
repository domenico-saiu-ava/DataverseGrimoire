---
logical: "msdyn_forecast"
display: "Forecast"
entitySetName: "msdyn_forecasts"
primaryId: "msdyn_forecastid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **13** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_aggregatedcolumns`, `msdyn_forecastconfigurationid`, `msdyn_forecastid`, `msdyn_forecastrecurrenceid`, `msdyn_hierarchyentityrecord`, `msdyn_name`, `msdyn_ownerid`, `msdyn_parentinstanceid`, `msdyn_rolledupcolumns`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecast_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecast_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecast_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecast_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecast_ownerid` | [systemuser](systemuser.md) | `msdyn_ownerid` | `msdyn_ownerid` |
| `msdyn_msdyn_recurrence_msdyn_forecast_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `msdyn_msdyn_forecast_msdyn_forecast_parentinstanceid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_parentinstanceid` | `msdyn_parentinstanceid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecast_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_forecast_msdyn_adjustmenthistory_forecastid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_forecastid` | `msdyn_forecastid` |
| `msdyn_msdyn_forecast_msdyn_forecastpredictiondata_forecastid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_forecastid` | `msdyn_forecastid` |
| `msdyn_msdyn_forecast_msdyn_forecast_parentinstanceid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_parentinstanceid` | `msdyn_parentinstanceid` |


## Source

Generated from [msdyn_forecast (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecast')) on 2026-05-07.