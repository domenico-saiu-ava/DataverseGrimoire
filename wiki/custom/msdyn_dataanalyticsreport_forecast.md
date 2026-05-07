---
logical: "msdyn_dataanalyticsreport_forecast"
display: "Previsione"
entitySetName: "msdyn_dataanalyticsreports_forecast"
primaryId: "msdyn_dataanalyticsreport_forecastid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Previsione

Caso, analisi previsione volume conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_forecast` |
| Display name | Previsione |
| Display (plural) | Previsione |
| Schema name | `msdyn_dataanalyticsreport_forecast` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_forecast` |
| Primary id attribute | `msdyn_dataanalyticsreport_forecastid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_forecast?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_forecast(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_forecast
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_forecast(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_forecast(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_forecastid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_forecast_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_forecast_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_forecast_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_forecast_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_forecast` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasforecast_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_forecast_SyncErrors` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_AsyncOperations` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_ProcessSession` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_BulkDeleteFailures` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_forecast` |
| `msdyn_dataanalyticsreport_forecast_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_forecast](msdyn_dataanalyticsreport_forecast.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_forecast` |


## Source

Generated from [msdyn_dataanalyticsreport_forecast (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_forecast')) on 2026-05-07.