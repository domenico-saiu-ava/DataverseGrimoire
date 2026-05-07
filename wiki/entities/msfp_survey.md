---
logical: "msfp_survey"
display: "Customer Voice survey"
entitySetName: "msfp_surveies"
primaryId: "msfp_surveyid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey

Set of questions to collect feedback.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_survey` |
| Display name | Customer Voice survey |
| Display (plural) | Customer Voice surveys |
| Schema name | `msfp_survey` |
| Entity set (Web API) | `msfp_surveies` |
| Primary id attribute | `msfp_surveyid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_surveies?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_surveies(<guid>)
POST /api/data/v9.2/msfp_surveies
PATCH /api/data/v9.2/msfp_surveies(<guid>)
DELETE /api/data/v9.2/msfp_surveies(<guid>)
```

## Attributes

Writable: **33** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_mcsbotstatus`, `msdyn_microsoftcopilotstudiobot`, `msdyn_surveyprovider`, `msfp_acceptanonymousresponses`, `msfp_anonymousurl`, `msfp_description`, `msfp_embedcode`, `msfp_enddate`, `msfp_friendlyname`, `msfp_latestsurveyidentifier`, `msfp_name`, `msfp_otherproperties`, `msfp_PermanentID`, `msfp_project`, `msfp_publishedby`, `msfp_publishedon`, `msfp_sourcesurveyidentifier`, `msfp_sourcesurveymodifieddate`, `msfp_sourcesurveyversion`, `msfp_startdate`, `msfp_surveyId`, `msfp_surveysource`, `msfp_surveytableid`, `msfp_surveyurl`, `msfp_variables`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_survey` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_survey_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_survey_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_survey_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_survey_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_bot_msfp_survey_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |
| `msfp_msfp_project_msfp_survey_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_systemuser_msfp_survey_publishedby` | [systemuser](systemuser.md) | `msfp_publishedby` | `msfp_publishedby` |
| `owner_msfp_survey` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_survey` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_survey` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msfp_survey_msdyn_surveysetting_survey` | _n/a_ | `msdyn_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_alert_survey` | _n/a_ | `msfp_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_emailtemplate_surveyid` | _n/a_ | `msfp_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_fileresponse_survey` | _n/a_ | `msfp_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_question_Survey` | _n/a_ | `msfp_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_surveyinvite_surveyid` | _n/a_ | `msfp_surveyid` | _n/a_ |
| `msfp_msfp_survey_msfp_surveyreminder_survey` | _n/a_ | `msfp_survey` | _n/a_ |
| `msfp_msfp_survey_msfp_surveyresponse_surveyid` | _n/a_ | `msfp_surveyid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_surveyid_msfp_survey` | _n/a_ | `msfp_surveyid` | _n/a_ |
| `msfp_shorturl_surveyid_msfp_survey` | _n/a_ | `msfp_surveyid` | _n/a_ |
| `msfp_survey_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_survey_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_survey_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_survey_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_survey_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_survey_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvitesummary_surveyid_msfp_survey` | _n/a_ | `msfp_surveyid` | _n/a_ |


## Source

Generated from [msfp_survey.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_survey.md) on 2026-05-06.