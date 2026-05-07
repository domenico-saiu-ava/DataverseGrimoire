---
logical: "msdyn_surveysetting"
display: "Survey setting"
entitySetName: "msdyn_surveysettings"
primaryId: "msdyn_surveysettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Survey setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_surveysetting` |
| Display name | Survey setting |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_casesurveyurl`, `msdyn_customerfeedbacksurvey`, `msdyn_emailtemplate`, `msdyn_name`, `msdyn_survey`, `msdyn_surveysettingId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_surveysetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_surveysetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_surveysetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_surveysetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customerfeedbacksurvey_msdyn_surveysetting` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurvey` | `msdyn_customerfeedbacksurvey` |
| `msdyn_msfp_survey_msdyn_surveysetting_survey` | [msfp_survey](msfp_survey.md) | `msdyn_survey` | `msdyn_survey` |
| `organization_msdyn_surveysetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_surveysetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_surveysetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_surveysetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_surveysetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_surveysetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_surveysetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_surveysetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_surveysetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_surveysetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_surveysetting.md) on 2026-05-06.