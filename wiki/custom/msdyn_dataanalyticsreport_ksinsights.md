---
logical: "msdyn_dataanalyticsreport_ksinsights"
display: "Analisi della Knowledge Base"
entitySetName: "msdyn_dataanalyticsreports_ksinsights"
primaryId: "msdyn_dataanalyticsreport_ksinsightsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi della Knowledge Base

Analisi della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_ksinsights` |
| Display name | Analisi della Knowledge Base |
| Display (plural) | Analisi della Knowledge Base |
| Schema name | `msdyn_dataanalyticsreport_ksinsights` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_ksinsights` |
| Primary id attribute | `msdyn_dataanalyticsreport_ksinsightsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_ksinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_ksinsights(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_ksinsights
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_ksinsights(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_ksinsights(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_ksinsightsid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_ksinsights_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_ksinsights_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_ksinsights_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_ksinsights_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_ksinsights` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_ksinsights_SyncErrors` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_AsyncOperations` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_ProcessSession` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_BulkDeleteFailures` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_ksinsights` |
| `msdyn_dataanalyticsreport_ksinsights_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_ksinsights](msdyn_dataanalyticsreport_ksinsights.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_ksinsights` |


## Source

Generated from [msdyn_dataanalyticsreport_ksinsights (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_ksinsights')) on 2026-05-07.