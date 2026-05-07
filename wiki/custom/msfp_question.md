---
logical: "msfp_question"
display: "Domanda del sondaggio Customer Voice"
entitySetName: "msfp_questions"
primaryId: "msfp_questionid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Domanda del sondaggio Customer Voice

Domanda in un sondaggio per raccogliere commenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_question` |
| Display name | Domanda del sondaggio Customer Voice |
| Display (plural) | Domande del sondaggio Customer Voice |
| Schema name | `msfp_question` |
| Entity set (Web API) | `msfp_questions` |
| Primary id attribute | `msfp_questionid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_questions?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_questions(<guid>)
POST /api/data/v9.2/msfp_questions
PATCH /api/data/v9.2/msfp_questions(<guid>)
DELETE /api/data/v9.2/msfp_questions(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_choicetype`, `msfp_correctanswer`, `msfp_imageproperties`, `msfp_maximumrating`, `msfp_multiline`, `msfp_name`, `msfp_order`, `msfp_otherproperties`, `msfp_permanentid`, `msfp_questionchoices`, `msfp_questionid`, `msfp_questiontext`, `msfp_questiontype`, `msfp_responserequired`, `msfp_sequence`, `msfp_sourceparentquestionidentifier`, `msfp_sourcequestionidentifier`, `msfp_sourcesurveyidentifier`, `msfp_subtitle`, `msfp_survey`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_question_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_question_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_question_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_question_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_question` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_question` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_question` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_question` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_survey_msfp_question_Survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_Survey` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_satisfactionmetricsurveymapping_surveyquestionid_msfp_question` | [msfp_question](msfp_question.md) | `msfp_surveyquestionid` | `msfp_surveyquestionid` |
| `msfp_question_SyncErrors` | [msfp_question](msfp_question.md) | `regardingobjectid` | `regardingobjectid_msfp_question` |
| `msfp_question_AsyncOperations` | [msfp_question](msfp_question.md) | `regardingobjectid` | `regardingobjectid_msfp_question` |
| `msfp_question_MailboxTrackingFolders` | [msfp_question](msfp_question.md) | `regardingobjectid` | `regardingobjectid_msfp_question` |
| `msfp_question_UserEntityInstanceDatas` | [msfp_question](msfp_question.md) | `objectid` | `objectid_msfp_question` |
| `msfp_question_ProcessSession` | [msfp_question](msfp_question.md) | `regardingobjectid` | `regardingobjectid_msfp_question` |
| `msfp_question_BulkDeleteFailures` | [msfp_question](msfp_question.md) | `regardingobjectid` | `regardingobjectid_msfp_question` |
| `msfp_question_PrincipalObjectAttributeAccesses` | [msfp_question](msfp_question.md) | `objectid` | `objectid_msfp_question` |
| `msfp_question_Annotations` | [msfp_question](msfp_question.md) | `objectid` | `objectid_msfp_question` |
| `msfp_msfp_question_msfp_fileresponse_question` | [msfp_question](msfp_question.md) | `msfp_question` | `msfp_question` |
| `msfp_msfp_question_msfp_questionresponse_questionid` | [msfp_question](msfp_question.md) | `msfp_questionid` | `msfp_questionid` |


## Source

Generated from [msfp_question (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_question')) on 2026-05-07.