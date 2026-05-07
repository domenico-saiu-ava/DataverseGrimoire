---
logical: "msdyn_evaluationcriteria"
display: "Evaluation criteria"
entitySetName: "msdyn_evaluationcriterias"
primaryId: "msdyn_evaluationcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation criteria

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcriteria` |
| Display name | Evaluation criteria |
| Display (plural) | Evaluation criteria |
| Schema name | `msdyn_EvaluationCriteria` |
| Entity set (Web API) | `msdyn_evaluationcriterias` |
| Primary id attribute | `msdyn_evaluationcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
POST /api/data/v9.2/msdyn_evaluationcriterias
PATCH /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ActiveVersion`, `msdyn_CriteriaJson`, `msdyn_Description`, `msdyn_EvaluationCriteriaId`, `msdyn_Name`, `msdyn_Numberofassociatedplans`, `msdyn_NumberofQuestions`, `msdyn_ParentEvaluationCriteria`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationcriteria_ActiveVersion_msdyn_evaluationcriteriaversion` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `msdyn_activeversion` | `msdyn_ActiveVersion` |
| `msdyn_evaluationcriteria_ParentEvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_parentevaluationcriteria` | `msdyn_ParentEvaluationCriteria` |
| `owner_msdyn_evaluationcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |
| `msdyn_evaluationcategory_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |
| `msdyn_evaluationcriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteria_ParentEvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_parentevaluationcriteria` | _n/a_ |
| `msdyn_evaluationcriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationcriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |
| `msdyn_evaluationplan_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |
| `msdyn_evaluationplanrun_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |
| `msdyn_evaluationquestion_EvaluationCriteria_msdyn_evaluationcriteria` | _n/a_ | `msdyn_evaluationcriteria` | _n/a_ |


## Source

Generated from [msdyn_evaluationcriteria.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationcriteria.md) on 2026-05-06.