---
logical: "msfp_project"
display: "Customer Voice project"
entitySetName: "msfp_projects"
primaryId: "msfp_projectid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice project

Set of surveys to collect feedback.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_project` |
| Display name | Customer Voice project |
| Display (plural) | Customer Voice projects |
| Schema name | `msfp_project` |
| Entity set (Web API) | `msfp_projects` |
| Primary id attribute | `msfp_projectid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_projects?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_projects(<guid>)
POST /api/data/v9.2/msfp_projects
PATCH /api/data/v9.2/msfp_projects(<guid>)
DELETE /api/data/v9.2/msfp_projects(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_customerinsightsconfiguration`, `msfp_dataclassification`, `msfp_description`, `msfp_environmentid`, `msfp_environmentregion`, `msfp_isgroupdeleted`, `msfp_isgroupproject`, `msfp_issharedproject`, `msfp_name`, `msfp_permanentID`, `msfp_projectId`, `msfp_status`, `msfp_templateid`, `msfp_templateversion`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_project` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_project_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_project_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_project_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_project_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msfp_project` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_project` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_project` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_msfp_project_msfp_alert_project` | _n/a_ | `msfp_project` | _n/a_ |
| `msfp_msfp_project_msfp_alertrule_project` | _n/a_ | `msfp_project` | _n/a_ |
| `msfp_msfp_project_msfp_customervoiceuseractivity_project` | _n/a_ | `msfp_project` | _n/a_ |
| `msfp_msfp_project_msfp_satisfactionmetric_project` | _n/a_ | `msfp_project` | _n/a_ |
| `msfp_msfp_project_msfp_survey_project` | _n/a_ | `msfp_project` | _n/a_ |
| `msfp_project_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_project_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_project_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_project_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_project_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_project_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_projectid_msfp_project` | _n/a_ | `msfp_projectid` | _n/a_ |


## Source

Generated from [msfp_project.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_project.md) on 2026-05-06.