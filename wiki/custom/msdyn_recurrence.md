---
logical: "msdyn_recurrence"
display: "Forecast Recurrence"
entitySetName: "msdyn_recurrences"
primaryId: "msdyn_recurrenceid"
primaryName: "msdyn_forecastrecurrencename"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Forecast Recurrence

Forecast Recurrence

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recurrence` |
| Display name | Forecast Recurrence |
| Display (plural) | Forecast Recurrences |
| Schema name | `msdyn_recurrence` |
| Entity set (Web API) | `msdyn_recurrences` |
| Primary id attribute | `msdyn_recurrenceid` |
| Primary name attribute | `msdyn_forecastrecurrencename` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recurrences?$select=msdyn_forecastrecurrencename&$top=10
GET /api/data/v9.2/msdyn_recurrences(<guid>)
POST /api/data/v9.2/msdyn_recurrences
PATCH /api/data/v9.2/msdyn_recurrences(<guid>)
DELETE /api/data/v9.2/msdyn_recurrences(<guid>)
```

## Attributes

Writable: **18** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_forecastconfigurationid`, `msdyn_forecastrecurrencename`, `msdyn_lastcomputedon`, `msdyn_recomputationstarttime`, `msdyn_recomputeexecutorid`, `msdyn_recomputepriority`, `msdyn_recomputestatus`, `msdyn_recomputestatuschangedon`, `msdyn_recurrencefailureinfo`, `msdyn_recurrenceid`, `msdyn_recurrenceindex`, `msdyn_recurrencestate`, `msdyn_validfrom`, `msdyn_validto`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recurrence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recurrence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recurrence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recurrence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_recurrence_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_recurrence_msdyn_forecastpredictiondata_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `msdyn_msdyn_recurrence_msdyn_forecastinsight_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |
| `msdyn_msdyn_recurrence_msdyn_forecast_forecastrecurrenceid` | [msdyn_recurrence](msdyn_recurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |


## Source

Generated from [msdyn_recurrence (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recurrence')) on 2026-05-07.