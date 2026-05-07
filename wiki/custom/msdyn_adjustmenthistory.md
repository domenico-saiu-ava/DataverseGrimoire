---
logical: "msdyn_adjustmenthistory"
display: "Forecast Manual Adjustment History"
entitySetName: "msdyn_adjustmenthistories"
primaryId: "msdyn_adjustmenthistoryid"
primaryName: "msdyn_forecastconfigurationcolumnid"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Forecast Manual Adjustment History

Forecast Manual Adjustment History

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_adjustmenthistory` |
| Display name | Forecast Manual Adjustment History |
| Display (plural) | Forecast Manual Adjustment History |
| Schema name | `msdyn_adjustmenthistory` |
| Entity set (Web API) | `msdyn_adjustmenthistories` |
| Primary id attribute | `msdyn_adjustmenthistoryid` |
| Primary name attribute | `msdyn_forecastconfigurationcolumnid` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_adjustmenthistories?$select=msdyn_forecastconfigurationcolumnid&$top=10
GET /api/data/v9.2/msdyn_adjustmenthistories(<guid>)
POST /api/data/v9.2/msdyn_adjustmenthistories
PATCH /api/data/v9.2/msdyn_adjustmenthistories(<guid>)
DELETE /api/data/v9.2/msdyn_adjustmenthistories(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_adjustmenthistory`, `msdyn_adjustmenthistoryid`, `msdyn_forecastconfigurationcolumnid`, `msdyn_forecastconfigurationid`, `msdyn_forecastid`, `msdyn_forecastinstancecolumngrouptype`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_adjustmenthistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_adjustmenthistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_adjustmenthistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_adjustmenthistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_adjustmenthistory_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecast_msdyn_adjustmenthistory_forecastid` | [msdyn_forecast](msdyn_forecast.md) | `msdyn_forecastid` | `msdyn_forecastid` |



## Source

Generated from [msdyn_adjustmenthistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_adjustmenthistory')) on 2026-05-07.