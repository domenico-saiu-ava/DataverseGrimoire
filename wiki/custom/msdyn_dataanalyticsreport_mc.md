---
logical: "msdyn_dataanalyticsreport_mc"
display: "Analisi personalizzazione modello"
entitySetName: "msdyn_dataanalyticsreport_mcs"
primaryId: "msdyn_dataanalyticsreport_mcid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi personalizzazione modello

Analisi personalizzazione modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_mc` |
| Display name | Analisi personalizzazione modello |
| Display (plural) | Analisi personalizzazione modello |
| Schema name | `msdyn_dataanalyticsreport_mc` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_mcs` |
| Primary id attribute | `msdyn_dataanalyticsreport_mcid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_mcs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_mcs
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsreport_mcid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_displayorder`, `msdyn_isvisible`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_mc_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_mc_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_mc_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_mc_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_dataanalyticsreport_mc` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_dasfeature_dasmc_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_mc_SyncErrors` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_AsyncOperations` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_MailboxTrackingFolders` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_ProcessSession` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_BulkDeleteFailures` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport_mc` |
| `msdyn_dataanalyticsreport_mc_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport_mc](msdyn_dataanalyticsreport_mc.md) | `objectid` | `objectid_msdyn_dataanalyticsreport_mc` |


## Source

Generated from [msdyn_dataanalyticsreport_mc (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport_mc')) on 2026-05-07.