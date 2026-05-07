---
logical: "msdyn_surveysetting"
display: "Impostazione sondaggio"
entitySetName: "msdyn_surveysettings"
primaryId: "msdyn_surveysettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione sondaggio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_surveysetting` |
| Display name | Impostazione sondaggio |
| Display (plural) | surveysettings |
| Schema name | `msdyn_surveysetting` |
| Entity set (Web API) | `msdyn_surveysettings` |
| Primary id attribute | `msdyn_surveysettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_surveysettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_surveysettings(<guid>)
POST /api/data/v9.2/msdyn_surveysettings
PATCH /api/data/v9.2/msdyn_surveysettings(<guid>)
DELETE /api/data/v9.2/msdyn_surveysettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_casesurveyurl`, `msdyn_customerfeedbacksurvey`, `msdyn_emailtemplate`, `msdyn_name`, `msdyn_survey`, `msdyn_surveysettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_surveysetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_surveysetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_surveysetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_surveysetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_surveysetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msfp_survey_msdyn_surveysetting_survey` | [msfp_survey](msfp_survey.md) | `msdyn_survey` | `msdyn_survey` |
| `msdyn_customerfeedbacksurvey_msdyn_surveysetting` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurvey` | `msdyn_customerfeedbacksurvey` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_surveysetting_SyncErrors` | [msdyn_surveysetting](msdyn_surveysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveysetting` |
| `msdyn_surveysetting_DuplicateMatchingRecord` | [msdyn_surveysetting](msdyn_surveysetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_surveysetting` |
| `msdyn_surveysetting_DuplicateBaseRecord` | [msdyn_surveysetting](msdyn_surveysetting.md) | `baserecordid` | `baserecordid_msdyn_surveysetting` |
| `msdyn_surveysetting_AsyncOperations` | [msdyn_surveysetting](msdyn_surveysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveysetting` |
| `msdyn_surveysetting_MailboxTrackingFolders` | [msdyn_surveysetting](msdyn_surveysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveysetting` |
| `msdyn_surveysetting_UserEntityInstanceDatas` | [msdyn_surveysetting](msdyn_surveysetting.md) | `objectid` | `objectid_msdyn_surveysetting` |
| `msdyn_surveysetting_ProcessSession` | [msdyn_surveysetting](msdyn_surveysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveysetting` |
| `msdyn_surveysetting_BulkDeleteFailures` | [msdyn_surveysetting](msdyn_surveysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveysetting` |
| `msdyn_surveysetting_PrincipalObjectAttributeAccesses` | [msdyn_surveysetting](msdyn_surveysetting.md) | `objectid` | `objectid_msdyn_surveysetting` |


## Source

Generated from [msdyn_surveysetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_surveysetting')) on 2026-05-07.