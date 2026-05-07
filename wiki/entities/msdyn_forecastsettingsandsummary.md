---
logical: "msdyn_forecastsettingsandsummary"
display: "Forecast Summary and Setting"
entitySetName: "msdyn_forecastsettingsandsummaries"
primaryId: "msdyn_forecastsettingsandsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Forecast Summary and Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastsettingsandsummary` |
| Display name | Forecast Summary and Setting |
| Display (plural) | Forecast Summary and Setting |
| Schema name | `msdyn_forecastsettingsandsummary` |
| Entity set (Web API) | `msdyn_forecastsettingsandsummaries` |
| Primary id attribute | `msdyn_forecastsettingsandsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastsettingsandsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_forecastsettingsandsummaries(<guid>)
POST /api/data/v9.2/msdyn_forecastsettingsandsummaries
PATCH /api/data/v9.2/msdyn_forecastsettingsandsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_forecastsettingsandsummaries(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_forecastjobstatus`, `msdyn_forecastlastrun`, `msdyn_forecastsettingsandsummaryId`, `msdyn_historicalstartdate`, `msdyn_holidaycalendarenabled`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastsettingsandsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastsettingsandsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastsettingsandsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastsettingsandsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_datainsightsandanalyticsfeature_msdyn_forecastsettingsandsummary_diafeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `organization_msdyn_forecastsettingsandsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastsettingsandsummary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastsettingsandsummary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_forecastsettingsandsummary.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastsettingsandsummary.md) on 2026-05-06.