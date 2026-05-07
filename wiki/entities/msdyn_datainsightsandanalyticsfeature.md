---
logical: "msdyn_datainsightsandanalyticsfeature"
display: "Insights"
entitySetName: "msdyn_datainsightsandanalyticsfeatures"
primaryId: "msdyn_datainsightsandanalyticsfeatureid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Insights

Analytics and insights feature entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_datainsightsandanalyticsfeature` |
| Display name | Insights |
| Display (plural) | Insights |
| Schema name | `msdyn_datainsightsandanalyticsfeature` |
| Entity set (Web API) | `msdyn_datainsightsandanalyticsfeatures` |
| Primary id attribute | `msdyn_datainsightsandanalyticsfeatureid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_datainsightsandanalyticsfeatures?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_datainsightsandanalyticsfeatures(<guid>)
POST /api/data/v9.2/msdyn_datainsightsandanalyticsfeatures
PATCH /api/data/v9.2/msdyn_datainsightsandanalyticsfeatures(<guid>)
DELETE /api/data/v9.2/msdyn_datainsightsandanalyticsfeatures(<guid>)
```

## Attributes

Writable: **24** · Read-only: **15**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_analyticschecksum`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_datasourcemode`, `msdyn_isdemoenabled`, `msdyn_isenabled`, `msdyn_lastaccesstime`, `msdyn_lastprovisionsenttime`, `msdyn_lastreportrefreshtime`, `msdyn_name`, `msdyn_provisionerrorcode`, `msdyn_provisionstatus`, `msdyn_provisionstatusdetail`, `msdyn_provisionsubstatus`, `msdyn_reporttype`, `msdyn_schedule`, `msdyn_templateid`, `msdyn_timezonecode`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_iscustomizationsupported`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_datainsightsandanalyticsfeature_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_datainsightsandanalyticsfeature_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_datainsightsandanalyticsfeature_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_datainsightsandanalyticsfeature_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_datainsightsandanalyticsfeature` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dasfeature_copilot_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dascaseprocessingagent_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasemail_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasforecast_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasmc_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasoc_rt_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dassareporting_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dasfeature_dasurrt_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_dataanalyticsdataset_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_datainsightsandanalyticsfeature_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_feature_customizedreport_datainsightsandanalyticsfeatureId` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_msdyn_dataanalyticsworkspace_datainsightsandanalyticsfeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |
| `msdyn_msdyn_datainsightsandanalyticsfeature_msdyn_forecastsettingsandsummary_diafeatureid` | _n/a_ | `msdyn_datainsightsandanalyticsfeatureid` | _n/a_ |


## Source

Generated from [msdyn_datainsightsandanalyticsfeature.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_datainsightsandanalyticsfeature.md) on 2026-05-06.