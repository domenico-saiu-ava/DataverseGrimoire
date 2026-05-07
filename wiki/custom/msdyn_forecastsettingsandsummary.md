---
logical: "msdyn_forecastsettingsandsummary"
display: "Impostazione e riepilogo delle previsioni"
entitySetName: "msdyn_forecastsettingsandsummaries"
primaryId: "msdyn_forecastsettingsandsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione e riepilogo delle previsioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastsettingsandsummary` |
| Display name | Impostazione e riepilogo delle previsioni |
| Display (plural) | Impostazione e riepilogo delle previsioni |
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

`importsequencenumber`, `iscustomizable`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_forecastjobstatus`, `msdyn_forecastlastrun`, `msdyn_forecastsettingsandsummaryid`, `msdyn_historicalstartdate`, `msdyn_holidaycalendarenabled`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastsettingsandsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastsettingsandsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastsettingsandsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastsettingsandsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_forecastsettingsandsummary` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_datainsightsandanalyticsfeature_msdyn_forecastsettingsandsummary_diafeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastsettingsandsummary_SyncErrors` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_DuplicateMatchingRecord` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_DuplicateBaseRecord` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `baserecordid` | `baserecordid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_AsyncOperations` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_MailboxTrackingFolders` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_UserEntityInstanceDatas` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `objectid` | `objectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_ProcessSession` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_BulkDeleteFailures` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastsettingsandsummary` |
| `msdyn_forecastsettingsandsummary_PrincipalObjectAttributeAccesses` | [msdyn_forecastsettingsandsummary](msdyn_forecastsettingsandsummary.md) | `objectid` | `objectid_msdyn_forecastsettingsandsummary` |


## Source

Generated from [msdyn_forecastsettingsandsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastsettingsandsummary')) on 2026-05-07.