---
logical: "msdyn_forecastpredictiondata"
display: "Forecast Prediction Data"
entitySetName: "msdyn_forecastpredictiondatas"
primaryId: "msdyn_forecastpredictiondataid"
primaryName: "msdyn_hierarchyrecordid"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Forecast Prediction Data

Forecast Prediction Data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastpredictiondata` |
| Display name | Forecast Prediction Data |
| Display (plural) | Forecast Prediction Data |
| Schema name | `msdyn_forecastpredictiondata` |
| Entity set (Web API) | `msdyn_forecastpredictiondatas` |
| Primary id attribute | `msdyn_forecastpredictiondataid` |
| Primary name attribute | `msdyn_hierarchyrecordid` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastpredictiondatas?$select=msdyn_hierarchyrecordid&$top=10
GET /api/data/v9.2/msdyn_forecastpredictiondatas(<guid>)
POST /api/data/v9.2/msdyn_forecastpredictiondatas
PATCH /api/data/v9.2/msdyn_forecastpredictiondatas(<guid>)
DELETE /api/data/v9.2/msdyn_forecastpredictiondatas(<guid>)
```

## Attributes

Writable: **12** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_childgranularpredictions`, `msdyn_forecastconfigurationid`, `msdyn_forecastid`, `msdyn_forecastpredictiondataid`, `msdyn_forecastrecurrenceid`, `msdyn_hierarchyrecordid`, `msdyn_parentgranularpredictions`, `msdyn_predictionon`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastpredictiondata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastpredictiondata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastpredictiondata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastpredictiondata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_recurrence_msdyn_forecastpredictiondata_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `msdyn_msdyn_forecast_msdyn_forecastpredictiondata_forecastid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_forecastid` | `msdyn_forecastid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictiondata_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |



## Source

Generated from [msdyn_forecastpredictiondata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastpredictiondata')) on 2026-05-07.