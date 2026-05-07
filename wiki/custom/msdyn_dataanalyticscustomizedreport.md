---
logical: "msdyn_dataanalyticscustomizedreport"
display: "Report personalizzato dell'utente di analisi dei dati"
entitySetName: "msdyn_dataanalyticscustomizedreports"
primaryId: "msdyn_dataanalyticscustomizedreportid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report personalizzato dell'utente di analisi dei dati

Report personalizzato dell'utente di analisi dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticscustomizedreport` |
| Display name | Report personalizzato dell'utente di analisi dei dati |
| Display (plural) | Report personalizzato dell'utente di analisi dei dati |
| Schema name | `msdyn_dataanalyticscustomizedreport` |
| Entity set (Web API) | `msdyn_dataanalyticscustomizedreports` |
| Primary id attribute | `msdyn_dataanalyticscustomizedreportid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticscustomizedreports?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticscustomizedreports(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticscustomizedreports
PATCH /api/data/v9.2/msdyn_dataanalyticscustomizedreports(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticscustomizedreports(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dataanalyticscustomizedreportid`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_dataversereportid`, `msdyn_isenabled`, `msdyn_name`, `msdyn_reportgroup`, `msdyn_reportid`, `msdyn_reportpage`, `msdyn_reporttemplateid`, `msdyn_reporttype`, `msdyn_workspaceid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticscustomizedreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticscustomizedreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticscustomizedreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticscustomizedreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataanalyticscustomizedreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataanalyticscustomizedreport` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataanalyticscustomizedreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataanalyticscustomizedreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataanalyticsreport_dataanalyticscustomizedreport_dataanalyticsreportid` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `msdyn_dataanalyticsreportid` | `msdyn_dataanalyticsreportid` |
| `msdyn_feature_customizedreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticscustomizedreport_SyncErrors` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_AsyncOperations` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_MailboxTrackingFolders` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_UserEntityInstanceDatas` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `objectid` | `objectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_ProcessSession` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_BulkDeleteFailures` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticscustomizedreport` |
| `msdyn_dataanalyticscustomizedreport_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticscustomizedreport](msdyn_dataanalyticscustomizedreport.md) | `objectid` | `objectid_msdyn_dataanalyticscustomizedreport` |


## Source

Generated from [msdyn_dataanalyticscustomizedreport (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticscustomizedreport')) on 2026-05-07.