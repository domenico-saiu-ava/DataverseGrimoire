---
logical: "msdyn_dataanalyticsreport_caseprocessingagent"
display: "Analisi Agente di gestione dei casi"
entitySetName: "msdyn_dataanalyticsreports_caseprocessingagent"
primaryId: "msdyn_dataanalyticsreport_caseprocessingagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi Agente di gestione dei casi

Analisi Agente di gestione dei casi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_caseprocessingagent` |
| Display name | Analisi Agente di gestione dei casi |
| Display (plural) | Analisi Agente di gestione dei casi |
| Schema name | `msdyn_dataanalyticsreport_caseprocessingagent` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_caseprocessingagent` |
| Primary id attribute | `msdyn_dataanalyticsreport_caseprocessingagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_caseprocessingagent?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_caseprocessingagent(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_caseprocessingagent
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_caseprocessingagent(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_caseprocessingagent(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_caseprocessingagentid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_caseprocessingagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_caseprocessingagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_caseprocessingagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_caseprocessingagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_caseprocessingagent` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dascaseprocessingagent_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_caseprocessingagent_SyncErrors` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_AsyncOperations` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_ProcessSession` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_BulkDeleteFailures` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_caseprocessingagent` |
| `msdyn_dataanalyticsreport_caseprocessingagent_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_caseprocessingagent](msdyn_dataanalyticsreport_caseprocessingagent.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_caseprocessingagent` |


## Source

Generated from [msdyn_dataanalyticsreport_caseprocessingagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_caseprocessingagent')) on 2026-05-07.