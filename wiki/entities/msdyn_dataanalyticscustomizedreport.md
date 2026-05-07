---
logical: "msdyn_dataanalyticscustomizedreport"
display: "Data Analytics User Customized Report"
entitySetName: "msdyn_dataanalyticscustomizedreports"
primaryId: "msdyn_dataanalyticscustomizedreportid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Analytics User Customized Report

Data Analytics User Customized Report

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticscustomizedreport` |
| Display name | Data Analytics User Customized Report |
| Display (plural) | Data Analytics User Customized Report |
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

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_dataanalyticscustomizedreportId`, `msdyn_dataanalyticsreportid`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_dataversereportid`, `msdyn_isenabled`, `msdyn_name`, `msdyn_reportgroup`, `msdyn_reportid`, `msdyn_reportpage`, `msdyn_reporttemplateid`, `msdyn_reporttype`, `msdyn_workspaceid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataanalyticscustomizedreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataanalyticscustomizedreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticscustomizedreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticscustomizedreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticscustomizedreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dataanalyticsreport_dataanalyticscustomizedreport_dataanalyticsreportid` | [msdyn_dataanalyticsreport](msdyn_dataanalyticsreport.md) | `msdyn_dataanalyticsreportid` | `msdyn_dataanalyticsreportid` |
| `msdyn_feature_customizedreport_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `owner_msdyn_dataanalyticscustomizedreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataanalyticscustomizedreport` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataanalyticscustomizedreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticscustomizedreport_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticscustomizedreport_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticscustomizedreport_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticscustomizedreport_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticscustomizedreport_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticscustomizedreport_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticscustomizedreport.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticscustomizedreport.md) on 2026-05-06.