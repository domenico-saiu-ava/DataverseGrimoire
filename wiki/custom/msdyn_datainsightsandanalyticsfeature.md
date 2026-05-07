---
logical: "msdyn_datainsightsandanalyticsfeature"
display: "Informazioni dettagliate"
entitySetName: "msdyn_datainsightsandanalyticsfeatures"
primaryId: "msdyn_datainsightsandanalyticsfeatureid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate

Entità funzionalità analisi e informazioni dettagliate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_datainsightsandanalyticsfeature` |
| Display name | Informazioni dettagliate |
| Display (plural) | Informazioni dettagliate |
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

`importsequencenumber`, `iscustomizable`, `msdyn_analyticschecksum`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_datasourcemode`, `msdyn_isdemoenabled`, `msdyn_isenabled`, `msdyn_lastaccesstime`, `msdyn_lastprovisionsenttime`, `msdyn_lastreportrefreshtime`, `msdyn_name`, `msdyn_provisionerrorcode`, `msdyn_provisionstatus`, `msdyn_provisionstatusdetail`, `msdyn_provisionsubstatus`, `msdyn_reporttype`, `msdyn_schedule`, `msdyn_templateid`, `msdyn_timezonecode`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_iscustomizationsupported`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_datainsightsandanalyticsfeature_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_datainsightsandanalyticsfeature_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_datainsightsandanalyticsfeature_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_datainsightsandanalyticsfeature_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_datainsightsandanalyticsfeature` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (26)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dascaseprocessingagent_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_datainsightsandanalyticsfeature_SyncErrors` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `regardingobjectid` | `regardingobjectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_AsyncOperations` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `regardingobjectid` | `regardingobjectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `regardingobjectid` | `regardingobjectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_UserEntityInstanceDatas` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `objectid` | `objectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_ProcessSession` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `regardingobjectid` | `regardingobjectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `regardingobjectid` | `regardingobjectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `objectid` | `objectid_msdyn_datainsightsandanalyticsfeature` |
| `msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_feature_customizedreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dataanalyticsdataset_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_msdyn_dataanalyticsworkspace_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasoc_rt_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dassareporting_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasforecast_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasmc_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasurrt_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasemail_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_msdyn_datainsightsandanalyticsfeature_msdyn_forecastsettingsandsummary_diafeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_dasfeature_copilot_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `msdyn_dasfeature_dasocmodern_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |


## Source

Generated from [msdyn_datainsightsandanalyticsfeature (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_datainsightsandanalyticsfeature')) on 2026-05-07.