---
logical: "msfp_survey"
display: "Sondaggio Customer Voice"
entitySetName: "msfp_surveies"
primaryId: "msfp_surveyid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sondaggio Customer Voice

Set di domande per raccogliere commenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_survey` |
| Display name | Sondaggio Customer Voice |
| Display (plural) | Sondaggi Customer Voice |
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

Writable: **32** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_mcsbotstatus`, `msdyn_microsoftcopilotstudiobot`, `msdyn_surveyprovider`, `msfp_acceptanonymousresponses`, `msfp_anonymousurl`, `msfp_description`, `msfp_embedcode`, `msfp_enddate`, `msfp_friendlyname`, `msfp_latestsurveyidentifier`, `msfp_name`, `msfp_otherproperties`, `msfp_permanentid`, `msfp_project`, `msfp_publishedby`, `msfp_publishedon`, `msfp_sourcesurveyidentifier`, `msfp_sourcesurveymodifieddate`, `msfp_sourcesurveyversion`, `msfp_startdate`, `msfp_surveyid`, `msfp_surveysource`, `msfp_surveytableid`, `msfp_surveyurl`, `msfp_variables`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bot_msfp_survey_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |
| `lk_msfp_survey_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_survey_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_survey_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_survey_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_survey` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_survey` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_survey` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_survey` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_project_msfp_survey_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_systemuser_msfp_survey_publishedby` | [systemuser](systemuser.md) | `msfp_publishedby` | `msfp_publishedby` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msfp_survey_msdyn_surveysetting_survey` | [msfp_survey](msfp_survey.md) | `msdyn_survey` | `msdyn_survey` |
| `msfp_satisfactionmetricsurveymapping_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `msfp_survey_SyncErrors` | [msfp_survey](msfp_survey.md) | `regardingobjectid` | `regardingobjectid_msfp_survey` |
| `msfp_survey_AsyncOperations` | [msfp_survey](msfp_survey.md) | `regardingobjectid` | `regardingobjectid_msfp_survey` |
| `msfp_survey_MailboxTrackingFolders` | [msfp_survey](msfp_survey.md) | `regardingobjectid` | `regardingobjectid_msfp_survey` |
| `msfp_survey_UserEntityInstanceDatas` | [msfp_survey](msfp_survey.md) | `objectid` | `objectid_msfp_survey` |
| `msfp_survey_ProcessSession` | [msfp_survey](msfp_survey.md) | `regardingobjectid` | `regardingobjectid_msfp_survey` |
| `msfp_survey_BulkDeleteFailures` | [msfp_survey](msfp_survey.md) | `regardingobjectid` | `regardingobjectid_msfp_survey` |
| `msfp_survey_PrincipalObjectAttributeAccesses` | [msfp_survey](msfp_survey.md) | `objectid` | `objectid_msfp_survey` |
| `msfp_shorturl_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `msfp_surveyinvitesummary_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_Surveyid` |
| `msfp_msfp_survey_msfp_alert_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_survey_msfp_emailtemplate_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_survey_msfp_fileresponse_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_survey_msfp_question_Survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_Survey` |
| `msfp_msfp_survey_msfp_surveyinvite_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyinvite` |
| `msfp_msfp_survey_msfp_surveyreminder_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `msfp_msfp_survey_msfp_surveyresponse_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid_msfp_surveyresponse` |


## Source

Generated from [msfp_survey (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_survey')) on 2026-05-07.