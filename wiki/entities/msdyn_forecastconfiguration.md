---
logical: "msdyn_forecastconfiguration"
display: "Forecast Configuration"
entitySetName: "msdyn_forecastconfigurations"
primaryId: "msdyn_forecastconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Forecast Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastconfiguration` |
| Display name | Forecast Configuration |
| Display (plural) | Forecast configurations |
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

Writable: **43** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_addedWeekIndex`, `msdyn_additionalfilter`, `msdyn_advancedsettings`, `msdyn_CalendarTemplate`, `msdyn_columns`, `msdyn_enddate`, `msdyn_entitymetadata`, `msdyn_errormessage`, `msdyn_FiscalYearStartDate`, `msdyn_forecastcategoryattribute`, `msdyn_forecastconfigurationId`, `msdyn_hierarchyentity`, `msdyn_hierarchyfilter`, `msdyn_hierarchyrelationship`, `msdyn_isdefault`, `msdyn_issnapshotscheduled`, `msdyn_moneyattrcache`, `msdyn_name`, `msdyn_numberofrecurrences`, `msdyn_periodtype`, `msdyn_permissionsdata`, `msdyn_pivots`, `msdyn_previewFlags`, `msdyn_publisheddatetime`, `msdyn_relatedentities`, `msdyn_rollupdefaultviewid`, `msdyn_rollupentity`, `msdyn_rootentityrecordid`, `msdyn_snapshotschedule`, `msdyn_snapshottimezone`, `msdyn_startdate`, `msdyn_startingfiscalmonth`, `msdyn_startingfiscalquarter`, `msdyn_startingfiscalyear`, `msdyn_templatetype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_forecastconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_forecastconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_forecastconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_forecastconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_forecastconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastconfiguration_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_forecastconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_forecastconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_adjustmenthistory_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_distributedlock_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_fileuploadstatustracker_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecast_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastinsight_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictiondata_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_forecastpredictionstatus_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_recomputetracker_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_recurrence_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |
| `msdyn_msdyn_forecastconfiguration_msdyn_shareasconfiguration_forecastconfigurationid` | _n/a_ | `msdyn_forecastconfigurationid` | _n/a_ |


## Source

Generated from [msdyn_forecastconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastconfiguration.md) on 2026-05-06.