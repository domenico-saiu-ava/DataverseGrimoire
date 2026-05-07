---
logical: "msfp_project"
display: "Progetto di Customer Voice"
entitySetName: "msfp_projects"
primaryId: "msfp_projectid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Progetto di Customer Voice

Set di sondaggi per raccogliere commenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_project` |
| Display name | Progetto di Customer Voice |
| Display (plural) | Progetti di Customer Voice |
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

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_customerinsightsconfiguration`, `msfp_dataclassification`, `msfp_description`, `msfp_environmentid`, `msfp_environmentregion`, `msfp_isgroupdeleted`, `msfp_isgroupproject`, `msfp_issharedproject`, `msfp_name`, `msfp_permanentid`, `msfp_projectid`, `msfp_status`, `msfp_templateid`, `msfp_templateversion`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_project_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_project_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_project_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_project_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_project` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_project` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_project` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_project` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricsurveymapping_projectid_msfp_project` | [msfp_project](msfp_project.md) | `msfp_projectid` | `msfp_projectid` |
| `msfp_project_SyncErrors` | [msfp_project](msfp_project.md) | `regardingobjectid` | `regardingobjectid_msfp_project` |
| `msfp_project_AsyncOperations` | [msfp_project](msfp_project.md) | `regardingobjectid` | `regardingobjectid_msfp_project` |
| `msfp_project_MailboxTrackingFolders` | [msfp_project](msfp_project.md) | `regardingobjectid` | `regardingobjectid_msfp_project` |
| `msfp_project_UserEntityInstanceDatas` | [msfp_project](msfp_project.md) | `objectid` | `objectid_msfp_project` |
| `msfp_project_ProcessSession` | [msfp_project](msfp_project.md) | `regardingobjectid` | `regardingobjectid_msfp_project` |
| `msfp_project_BulkDeleteFailures` | [msfp_project](msfp_project.md) | `regardingobjectid` | `regardingobjectid_msfp_project` |
| `msfp_project_PrincipalObjectAttributeAccesses` | [msfp_project](msfp_project.md) | `objectid` | `objectid_msfp_project` |
| `msfp_msfp_project_msfp_customervoiceuseractivity_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_project_msfp_satisfactionmetric_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_project_msfp_survey_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_project_msfp_alert_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_project_msfp_alertrule_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |


## Source

Generated from [msfp_project (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_project')) on 2026-05-07.