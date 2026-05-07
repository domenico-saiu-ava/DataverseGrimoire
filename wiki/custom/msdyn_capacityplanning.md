---
logical: "msdyn_capacityplanning"
display: "Piano di capacità"
entitySetName: "msdyn_capacityplannings"
primaryId: "msdyn_capacityplanningid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Piano di capacità

Un piano di capacità rappresenta un set di risorse e allocazioni per la generazione della richiesta di risorse.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_capacityplanning` |
| Display name | Piano di capacità |
| Display (plural) | Piani di capacità |
| Schema name | `msdyn_capacityplanning` |
| Entity set (Web API) | `msdyn_capacityplannings` |
| Primary id attribute | `msdyn_capacityplanningid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_capacityplannings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_capacityplannings(<guid>)
POST /api/data/v9.2/msdyn_capacityplannings
PATCH /api/data/v9.2/msdyn_capacityplannings(<guid>)
DELETE /api/data/v9.2/msdyn_capacityplannings(<guid>)
```

## Attributes

Writable: **28** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_capacityplanningid`, `msdyn_configconcurrency`, `msdyn_configservicelevel`, `msdyn_configshrinkage`, `msdyn_configtargetanswertime`, `msdyn_currentstatus`, `msdyn_dataprocessingconfigurationid`, `msdyn_externalforecastfileid`, `msdyn_forecastchannelsandqueues`, `msdyn_forecastrecurrencedetails`, `msdyn_forecastscenariodayoftheweek`, `msdyn_forecastscenarioname`, `msdyn_interval`, `msdyn_isrecurring`, `msdyn_lastrunon`, `msdyn_name`, `msdyn_parameteroverridefileid`, `msdyn_source`, `msdyn_targetentity`, `msdyn_timezone`, `msdyn_wemreportforcapacityplan`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemforecast_msdyn_capacityplanning_forecastscenarioname` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenarioname` | `msdyn_forecastscenarioname` |
| `msdyn_capacityplanning_forecastchannelsandqueues_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastchannelsandqueues` | `msdyn_forecastchannelsandqueues` |
| `msdyn_capacityplanning_forecastrecurrencedetails_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastrecurrencedetails` | `msdyn_forecastrecurrencedetails` |
| `msdyn_capacityplanning_forecastscenariodayoftheweek_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenariodayoftheweek` | `msdyn_forecastscenariodayoftheweek` |
| `msdyn_capacityplanning_msdyn_wemreportforcapacityplan_msdyn_wemreport` | [msdyn_wemreport](msdyn_wemreport.md) | `msdyn_wemreportforcapacityplan` | `msdyn_wemreportforcapacityplan` |
| `lk_msdyn_capacityplanning_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_capacityplanning_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_capacityplanning_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_capacityplanning_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_capacityplanning` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_capacityplanning` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_capacityplanning` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_capacityplanning` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_capacityplanning_externalforecastfileidfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_externalforecastfileid` | `msdyn_externalforecastfileid` |
| `msdyn_capacityplanning_parameteroverridefileidfileuploadrelationship_msdyn_wemfileupload` | [msdyn_wemfileupload](msdyn_wemfileupload.md) | `msdyn_parameteroverridefileid` | `msdyn_parameteroverridefileid` |
| `msdyn_capacityplanning_dataprocessingconfigurationid_dataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_dataprocessingconfigurationid` | `msdyn_dataprocessingconfigurationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shiftplan_capacityplan_msdyn_capacityplan` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `msdyn_capacityplan` | `msdyn_capacityplan` |
| `msdyn_capacityplanning_DuplicateMatchingRecord` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_DuplicateBaseRecord` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `baserecordid` | `baserecordid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_SyncErrors` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_AsyncOperations` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_MailboxTrackingFolders` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_UserEntityInstanceDatas` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `objectid` | `objectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_ProcessSession` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_BulkDeleteFailures` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanning` |
| `msdyn_capacityplanning_PrincipalObjectAttributeAccesses` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `objectid` | `objectid_msdyn_capacityplanning` |


## Source

Generated from [msdyn_capacityplanning (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_capacityplanning')) on 2026-05-07.