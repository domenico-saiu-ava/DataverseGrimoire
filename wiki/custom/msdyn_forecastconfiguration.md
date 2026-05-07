---
logical: "msdyn_forecastconfiguration"
display: "Configurazione di previsione"
entitySetName: "msdyn_forecastconfigurations"
primaryId: "msdyn_forecastconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione di previsione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastconfiguration` |
| Display name | Configurazione di previsione |
| Display (plural) | Configurazioni di previsione |
| Schema name | `msdyn_forecastconfiguration` |
| Entity set (Web API) | `msdyn_forecastconfigurations` |
| Primary id attribute | `msdyn_forecastconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_forecastconfigurations(<guid>)
POST /api/data/v9.2/msdyn_forecastconfigurations
PATCH /api/data/v9.2/msdyn_forecastconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_forecastconfigurations(<guid>)
```

## Attributes

Writable: **42** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_addedweekindex`, `msdyn_additionalfilter`, `msdyn_advancedsettings`, `msdyn_calendartemplate`, `msdyn_columns`, `msdyn_enddate`, `msdyn_entitymetadata`, `msdyn_errormessage`, `msdyn_fiscalyearstartdate`, `msdyn_forecastcategoryattribute`, `msdyn_forecastconfigurationid`, `msdyn_forecasttimezone`, `msdyn_hierarchyentity`, `msdyn_hierarchyfilter`, `msdyn_hierarchyrelationship`, `msdyn_isdefault`, `msdyn_issnapshotscheduled`, `msdyn_moneyattrcache`, `msdyn_name`, `msdyn_numberofrecurrences`, `msdyn_periodtype`, `msdyn_permissionsdata`, `msdyn_pivots`, `msdyn_previewflags`, `msdyn_publisheddatetime`, `msdyn_relatedentities`, `msdyn_rollupdefaultviewid`, `msdyn_rollupentity`, `msdyn_rootentityrecordid`, `msdyn_snapshotschedule`, `msdyn_startdate`, `msdyn_startingfiscalmonth`, `msdyn_startingfiscalquarter`, `msdyn_startingfiscalyear`, `msdyn_templatetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_forecastconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_forecastconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_forecastconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_forecastconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (20)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastconfiguration_SyncErrors` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_DuplicateMatchingRecord` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_DuplicateBaseRecord` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `baserecordid` | `baserecordid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_AsyncOperations` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_MailboxTrackingFolders` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_UserEntityInstanceDatas` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `objectid` | `objectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_ProcessSession` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_BulkDeleteFailures` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `objectid` | `objectid_msdyn_forecastconfiguration` |
| `msdyn_forecastconfiguration_Annotations` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `objectid` | `objectid_msdyn_forecastconfiguration` |
| `msdyn_msdyn_forecastconfiguration_msdyn_adjustmenthistory_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictiondata_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecast_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastinsight_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_fileuploadstatustracker_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictionstatus_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_recomputetracker_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_recurrence_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_shareasconfiguration_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_distributedlock_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |


## Source

Generated from [msdyn_forecastconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastconfiguration')) on 2026-05-07.