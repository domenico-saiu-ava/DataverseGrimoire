---
logical: "msdyn_dataanalyticsreport_copilot"
display: "Analisi di Copilot"
entitySetName: "msdyn_dataanalyticsreport_copilots"
primaryId: "msdyn_dataanalyticsreport_copilotid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi di Copilot

Analisi interazione Copilot e-mail, conversazione, caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_copilot` |
| Display name | Analisi di Copilot |
| Display (plural) | Analisi di Copilot |
| Schema name | `msdyn_dataanalyticsreport_copilot` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_copilots` |
| Primary id attribute | `msdyn_dataanalyticsreport_copilotid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_copilots?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_copilots
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_copilotid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_copilot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_copilot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_copilot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_copilot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_copilot` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_copilot_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_copilot_SyncErrors` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_AsyncOperations` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_ProcessSession` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_BulkDeleteFailures` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_copilot` |
| `msdyn_dataanalyticsreport_copilot_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_copilot](msdyn_dataanalyticsreport_copilot.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_copilot` |


## Source

Generated from [msdyn_dataanalyticsreport_copilot (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_copilot')) on 2026-05-07.