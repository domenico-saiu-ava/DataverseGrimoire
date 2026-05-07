---
logical: "msdyn_dataanalyticsreport_sutreporting"
display: "Report telemetria utilizzo vendite"
entitySetName: "msdyn_dataanalyticsreports_sutreporting"
primaryId: "msdyn_dataanalyticsreport_sutreportingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report telemetria utilizzo vendite

Report telemetria utilizzo vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_sutreporting` |
| Display name | Report telemetria utilizzo vendite |
| Display (plural) | Report telemetria utilizzo vendite |
| Schema name | `msdyn_dataanalyticsreport_sutreporting` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_sutreporting` |
| Primary id attribute | `msdyn_dataanalyticsreport_sutreportingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_sutreporting?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_sutreporting(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_sutreporting
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_sutreporting(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_sutreporting(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_sutreportingid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `lk_msdyn_dataanalyticsreport_sutreporting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_sutreporting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_sutreporting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_sutreporting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_sutreporting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_sutreporting_SyncErrors` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_AsyncOperations` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_ProcessSession` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_BulkDeleteFailures` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sutreporting` |
| `msdyn_dataanalyticsreport_sutreporting_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_sutreporting](msdyn_dataanalyticsreport_sutreporting.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_sutreporting` |


## Source

Generated from [msdyn_dataanalyticsreport_sutreporting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_sutreporting')) on 2026-05-07.