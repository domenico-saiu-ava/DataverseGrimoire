---
logical: "msdyn_dataanalyticsreport"
display: "Data Analytics Report"
entitySetName: "msdyn_dataanalyticsreports"
primaryId: "msdyn_dataanalyticsreportid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Analytics Report

Data Analytics Reports

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport` |
| Display name | Data Analytics Report |
| Display (plural) | Data Analytics Reports |
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

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_analyticschecksum`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_datasetid`, `msdyn_dataversereportid`, `msdyn_displayname`, `msdyn_displayorder`, `msdyn_isenabled`, `msdyn_name`, `msdyn_provisionstatus`, `msdyn_reportentityname`, `msdyn_reportgroup`, `msdyn_reportid`, `msdyn_reportpage`, `msdyn_reporttemplateid`, `msdyn_workspaceid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataanalyticsreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataanalyticsreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `owner_msdyn_dataanalyticsreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataanalyticsreport` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataanalyticsreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_dataanalyticscustomizedreport_dataanalyticsreportid` | _n/a_ | `msdyn_dataanalyticsreportid` | _n/a_ |
| `msdyn_dataanalyticsreport_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport.md) on 2026-05-06.