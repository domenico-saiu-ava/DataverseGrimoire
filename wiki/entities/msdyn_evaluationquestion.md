---
logical: "msdyn_evaluationquestion"
display: "Evaluation question"
entitySetName: "msdyn_evaluationquestions"
primaryId: "msdyn_evaluationquestionid"
primaryName: "msdyn_text"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation question

The questions linking to an EvaluationCategory or directly to the EvaluationCriteria.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationquestion` |
| Display name | Evaluation question |
| Display (plural) | Evaluation questions |
| Schema name | `msdyn_EvaluationQuestion` |
| Entity set (Web API) | `msdyn_evaluationquestions` |
| Primary id attribute | `msdyn_evaluationquestionid` |
| Primary name attribute | `msdyn_text` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationquestions?$select=msdyn_text&$top=10
GET /api/data/v9.2/msdyn_evaluationquestions(<guid>)
POST /api/data/v9.2/msdyn_evaluationquestions
PATCH /api/data/v9.2/msdyn_evaluationquestions(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationquestions(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Description`, `msdyn_DescriptionMetadataID`, `msdyn_EvaluationCategory`, `msdyn_EvaluationCriteria`, `msdyn_EvaluationQuestionId`, `msdyn_IsAIResponseEnabled`, `msdyn_OptionsJson`, `msdyn_QuestionInstructions`, `msdyn_QuestionType`, `msdyn_Required`, `msdyn_Text`, `msdyn_TextMetadataID`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationquestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationquestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationquestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationquestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationquestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationquestion_EvaluationCategory_msdyn_evaluationcategory` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `msdyn_evaluationcategory` | `msdyn_EvaluationCategory` |
| `msdyn_evaluationquestion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `owner_msdyn_evaluationquestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationquestion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationquestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationquestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationquestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationquestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationquestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationquestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationquestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationquestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationquestion.md) on 2026-05-06.