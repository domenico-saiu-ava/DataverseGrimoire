---
logical: "msdyn_dataanalyticsreport_csrmanager"
display: "Analisi cronologica di Customer Service"
entitySetName: "msdyn_dataanalyticsreports_csrmanager"
primaryId: "msdyn_dataanalyticsreport_csrmanagerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi cronologica di Customer Service

Analisi cronologica di Customer Service

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_csrmanager` |
| Display name | Analisi cronologica di Customer Service |
| Display (plural) | Analisi cronologica di Customer Service |
| Schema name | `msdyn_dataanalyticsreport_csrmanager` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_csrmanager` |
| Primary id attribute | `msdyn_dataanalyticsreport_csrmanagerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_csrmanager?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_csrmanager(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_csrmanager
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_csrmanager(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_csrmanager(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_csrmanagerid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_csrmanager_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_csrmanager_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_csrmanager_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_csrmanager_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_csrmanager` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_csrmanager_SyncErrors` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_AsyncOperations` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_ProcessSession` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_BulkDeleteFailures` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_csrmanager` |
| `msdyn_dataanalyticsreport_csrmanager_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_csrmanager](msdyn_dataanalyticsreport_csrmanager.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_csrmanager` |


## Source

Generated from [msdyn_dataanalyticsreport_csrmanager (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_csrmanager')) on 2026-05-07.