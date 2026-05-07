---
logical: "msdyn_customerfeedbacksurvey"
display: "Customer feedback survey"
entitySetName: "msdyn_customerfeedbacksurveys"
primaryId: "msdyn_customerfeedbacksurveyid"
primaryName: "msdyn_customerfeedbacksurveyname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Customer feedback survey

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurvey` |
| Display name | Customer feedback survey |
| Display (plural) | Customer feedback surveys |
| Schema name | `msdyn_customerfeedbacksurvey` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveys` |
| Primary id attribute | `msdyn_customerfeedbacksurveyid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveys?$select=msdyn_customerfeedbacksurveyname&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveys
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_customconfig`, `msdyn_customerfeedbackbotstatus`, `msdyn_customerfeedbacksurveyId`, `msdyn_customerfeedbacksurveyname`, `msdyn_customerfeedbacksurveyprovider`, `msdyn_customerfeedbacksurveyurl`, `msdyn_customhosturl`, `msdyn_microsoftcopilotstudiobot`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_msdyn_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |
| `lk_msdyn_customerfeedbacksurvey_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurvey_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurvey_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurvey_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_customerfeedbacksurvey` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerfeedbacksurvey_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyinvite` | _n/a_ | `msdyn_customerfeedbacksurveyid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyresponse` | _n/a_ | `msdyn_customerfeedbacksurveyid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_msdyn_surveysetting` | _n/a_ | `msdyn_customerfeedbacksurvey` | _n/a_ |
| `msdyn_customerfeedbacksurvey_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerfeedbacksurvey_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customerfeedbacksurvey.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerfeedbacksurvey.md) on 2026-05-06.