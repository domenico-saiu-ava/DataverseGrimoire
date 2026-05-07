---
logical: "msdyn_dataanalyticsreport_sareporting"
display: "Report di Accelerazione delle vendite"
entitySetName: "msdyn_dataanalyticsreports_sareporting"
primaryId: "msdyn_dataanalyticsreport_sareportingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report di Accelerazione delle vendite

Report di Accelerazione delle vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_sareporting` |
| Display name | Report di Accelerazione delle vendite |
| Display (plural) | Report di Accelerazione delle vendite |
| Schema name | `msdyn_dataanalyticsreport_sareporting` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_sareporting` |
| Primary id attribute | `msdyn_dataanalyticsreport_sareportingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_sareporting?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_sareporting
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_sareportingid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_sareporting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_sareporting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_sareporting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_sareporting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_sareporting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dassareporting_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_sareporting_SyncErrors` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_AsyncOperations` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_ProcessSession` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_BulkDeleteFailures` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_sareporting` |
| `msdyn_dataanalyticsreport_sareporting_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_sareporting](msdyn_dataanalyticsreport_sareporting.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_sareporting` |


## Source

Generated from [msdyn_dataanalyticsreport_sareporting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_sareporting')) on 2026-05-07.