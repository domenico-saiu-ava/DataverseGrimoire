---
logical: "msdyn_dataanalyticsreport"
display: "Report di analisi dei dati"
entitySetName: "msdyn_dataanalyticsreports"
primaryId: "msdyn_dataanalyticsreportid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report di analisi dei dati

Report di analisi dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport` |
| Display name | Report di analisi dei dati |
| Display (plural) | Report di analisi dei dati |
| Schema name | `msdyn_dataanalyticsreport` |
| Entity set (Web API) | `msdyn_dataanalyticsreports` |
| Primary id attribute | `msdyn_dataanalyticsreportid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports
PATCH /api/data/v9.2/msdyn_dataanalyticsreports(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_analyticschecksum`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_datasetid`, `msdyn_dataversereportid`, `msdyn_displayname`, `msdyn_displayorder`, `msdyn_isenabled`, `msdyn_name`, `msdyn_provisionstatus`, `msdyn_reportentityname`, `msdyn_reportgroup`, `msdyn_reportid`, `msdyn_reportpage`, `msdyn_reporttemplateid`, `msdyn_workspaceid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataanalyticsreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataanalyticsreport` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataanalyticsreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataanalyticsreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_SyncErrors` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_AsyncOperations` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_MailboxTrackingFolders` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_UserEntityInstanceDatas` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `objectid` | `objectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_ProcessSession` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_BulkDeleteFailures` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `objectid` | `objectid_msdyn_dataanalyticsreport` |
| `msdyn_dataanalyticsreport_dataanalyticscustomizedreport_dataanalyticsreportid` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `msdyn_dataanalyticsreportid` | `msdyn_dataanalyticsreportid` |


## Source

Generated from [msdyn_dataanalyticsreport (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsreport')) on 2026-05-07.