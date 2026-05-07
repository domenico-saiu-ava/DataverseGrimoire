---
logical: "msfp_question"
display: "Customer Voice survey question"
entitySetName: "msfp_questions"
primaryId: "msfp_questionid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey question

Question in a survey to collect feedback.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_question` |
| Display name | Customer Voice survey question |
| Display (plural) | Customer Voice survey  questions |
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

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_choicetype`, `msfp_correctanswer`, `msfp_imageproperties`, `msfp_Maximumrating`, `msfp_multiline`, `msfp_name`, `msfp_order`, `msfp_otherproperties`, `msfp_PermanentID`, `msfp_questionchoices`, `msfp_questionId`, `msfp_questiontext`, `msfp_questiontype`, `msfp_responserequired`, `msfp_sequence`, `msfp_sourceparentquestionidentifier`, `msfp_Sourcequestionidentifier`, `msfp_sourcesurveyidentifier`, `msfp_subtitle`, `msfp_Survey`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_question` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_question_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_question_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_question_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_question_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_survey_msfp_question_Survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_Survey` |
| `owner_msfp_question` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_question` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_question` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_msfp_question_msfp_fileresponse_question` | _n/a_ | `msfp_question` | _n/a_ |
| `msfp_msfp_question_msfp_questionresponse_questionid` | _n/a_ | `msfp_questionid` | _n/a_ |
| `msfp_question_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msfp_question_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_question_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_question_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_question_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_question_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_question_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_satisfactionmetricsurveymapping_surveyquestionid_msfp_question` | _n/a_ | `msfp_surveyquestionid` | _n/a_ |


## Source

Generated from [msfp_question.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_question.md) on 2026-05-06.