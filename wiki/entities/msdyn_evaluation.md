---
logical: "msdyn_evaluation"
display: "Evaluation"
entitySetName: "msdyn_evaluations"
primaryId: "msdyn_evaluationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluation` |
| Display name | Evaluation |
| Display (plural) | Evaluations |
| Schema name | `msdyn_Evaluation` |
| Entity set (Web API) | `msdyn_evaluations` |
| Primary id attribute | `msdyn_evaluationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluations(<guid>)
POST /api/data/v9.2/msdyn_evaluations
PATCH /api/data/v9.2/msdyn_evaluations(<guid>)
DELETE /api/data/v9.2/msdyn_evaluations(<guid>)
```

## Attributes

Writable: **36** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalDetails`, `msdyn_AgentEndDate`, `msdyn_AgentResponseJson`, `msdyn_CreateType`, `msdyn_ErrorDetails`, `msdyn_EvaluationCriteria`, `msdyn_EvaluationCriteriaParentVersion`, `msdyn_EvaluationCriteriaVersion`, `msdyn_EvaluationExtension`, `msdyn_EvaluationExtensionPId`, `msdyn_EvaluationId`, `msdyn_EvaluationMethod`, `msdyn_EvaluationPlan`, `msdyn_EvaluatorCompletionDate`, `msdyn_EvaluatorDueDate`, `msdyn_Name`, `msdyn_QualityAgentStatus`, `msdyn_RegardingObjectId`, `msdyn_RegardingObjectIdType`, `msdyn_RegardingObjectOwner`, `msdyn_RegardingObjectOwnerIdType`, `msdyn_Relatedrecordtype`, `msdyn_RequestedBy`, `msdyn_ResponseJson`, `msdyn_Schema`, `msdyn_Score`, `msdyn_ScoreJson`, `msdyn_ScoringEnabledOnCreation`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluation_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluation_EvaluationExtension_msdyn_evaluationextension` | [msdyn_evaluationextension](msdyn_evaluationextension.md) | `msdyn_evaluationextension` | `msdyn_EvaluationExtension` |
| `msdyn_evaluation_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |
| `msdyn_evaluation_RequestedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_requestedby` | `msdyn_RequestedBy` |
| `msdyn_evaluation_systemuser_msdyn_RegardingObjectOwner` | [systemuser](systemuser.md) | `msdyn_regardingobjectowner` | `msdyn_RegardingObjectOwner` |
| `msdyn_evaluation_team_msdyn_RegardingObjectOwner` | [team](team.md) | `msdyn_regardingobjectowner` | `msdyn_RegardingObjectOwner` |
| `msdyn_msdyn_evaluation_incident_msdyn_RegardingObjectId` | [incident](incident.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_incident` |
| `msdyn_msdyn_evaluation_msdyn_ocliveworkitem_msdyn_RegardingObjectId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_msdyn_ocliveworkitem` |
| `owner_msdyn_evaluation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluation.md) on 2026-05-06.