---
logical: "msdyn_wemforecast"
display: "Scenario di previsione"
entitySetName: "msdyn_wemforecasts"
primaryId: "msdyn_wemforecastid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scenario di previsione

Uno scenario di previsione rappresenta un set di presupposti e parametri per la generazione di previsioni.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemforecast` |
| Display name | Scenario di previsione |
| Display (plural) | Scenari di previsione |
| Schema name | `msdyn_wemforecast` |
| Entity set (Web API) | `msdyn_wemforecasts` |
| Primary id attribute | `msdyn_wemforecastid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemforecasts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemforecasts(<guid>)
POST /api/data/v9.2/msdyn_wemforecasts
PATCH /api/data/v9.2/msdyn_wemforecasts(<guid>)
DELETE /api/data/v9.2/msdyn_wemforecasts(<guid>)
```

## Attributes

Writable: **29** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_caseorigincodes`, `msdyn_currentstatus`, `msdyn_dataprocessingconfigurationid`, `msdyn_dayoftheweek`, `msdyn_duration`, `msdyn_forecastchannels`, `msdyn_forecastqueues`, `msdyn_genaimodelinstruction`, `msdyn_historicaldatasourcetype`, `msdyn_historicalstartdate`, `msdyn_holidaycalendar`, `msdyn_interval`, `msdyn_isrecurring`, `msdyn_lastrunon`, `msdyn_model`, `msdyn_name`, `msdyn_recurrencetimeslot`, `msdyn_recurrencetimezone`, `msdyn_targetentity`, `msdyn_wemforecastfileupload`, `msdyn_wemforecastid`, `msdyn_wemreportforforecast`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wemforecast_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemforecast_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemforecast_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemforecast_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemforecast` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemforecast` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemforecast` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemforecast` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_wemforecast_msdyn_wemforecastfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_wemforecastfileupload` | `msdyn_wemforecastfileupload` |
| `msdyn_wemforecast_msdyn_wemreportforforecast_msdyn_wemreport` | [msdyn_wemreport](msdyn_wemreport.md) | `msdyn_wemreportforforecast` | `msdyn_wemreportforforecast` |
| `msdyn_wemforecast_dataprocessingconfigurationid_dataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_dataprocessingconfigurationid` | `msdyn_dataprocessingconfigurationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemforecast_SyncErrors` | [msdyn_wemforecast](msdyn_wemforecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemforecast` |
| `msdyn_wemforecast_AsyncOperations` | [msdyn_wemforecast](msdyn_wemforecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemforecast` |
| `msdyn_wemforecast_MailboxTrackingFolders` | [msdyn_wemforecast](msdyn_wemforecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemforecast` |
| `msdyn_wemforecast_UserEntityInstanceDatas` | [msdyn_wemforecast](msdyn_wemforecast.md) | `objectid` | `objectid_msdyn_wemforecast` |
| `msdyn_wemforecast_ProcessSession` | [msdyn_wemforecast](msdyn_wemforecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemforecast` |
| `msdyn_wemforecast_BulkDeleteFailures` | [msdyn_wemforecast](msdyn_wemforecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemforecast` |
| `msdyn_wemforecast_PrincipalObjectAttributeAccesses` | [msdyn_wemforecast](msdyn_wemforecast.md) | `objectid` | `objectid_msdyn_wemforecast` |
| `msdyn_wemmonitor_msdyn_forecastscenarioid_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenarioid` | `msdyn_forecastscenarioid` |
| `msdyn_wemforecast_msdyn_capacityplanning_forecastscenarioname` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenarioname` | `msdyn_forecastscenarioname` |
| `msdyn_capacityplanning_forecastchannelsandqueues_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastchannelsandqueues` | `msdyn_forecastchannelsandqueues` |
| `msdyn_capacityplanning_forecastrecurrencedetails_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastrecurrencedetails` | `msdyn_forecastrecurrencedetails` |
| `msdyn_capacityplanning_forecastscenariodayoftheweek_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenariodayoftheweek` | `msdyn_forecastscenariodayoftheweek` |


## Source

Generated from [msdyn_wemforecast (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemforecast')) on 2026-05-07.