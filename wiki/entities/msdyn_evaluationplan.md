---
logical: "msdyn_evaluationplan"
display: "Evaluation Plan"
entitySetName: "msdyn_evaluationplans"
primaryId: "msdyn_evaluationplanid"
primaryName: "msdyn_planname"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Plan

Has configuration for executing evaluations in Bulk for an entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplan` |
| Display name | Evaluation Plan |
| Display (plural) | Evaluation Plans |
| Schema name | `msdyn_EvaluationPlan` |
| Entity set (Web API) | `msdyn_evaluationplans` |
| Primary id attribute | `msdyn_evaluationplanid` |
| Primary name attribute | `msdyn_planname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplans?$select=msdyn_planname&$top=10
GET /api/data/v9.2/msdyn_evaluationplans(<guid>)
POST /api/data/v9.2/msdyn_evaluationplans
PATCH /api/data/v9.2/msdyn_evaluationplans(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplans(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AssignedTo`, `msdyn_AssignedToIdType`, `msdyn_Description`, `msdyn_DueDate`, `msdyn_EvaluationCriteria`, `msdyn_EvaluationFilterRulesXML`, `msdyn_EvaluationMethod`, `msdyn_EvaluationPlanId`, `msdyn_Event`, `msdyn_Frequency`, `msdyn_Occurrence`, `msdyn_PlanEndDate`, `msdyn_planname`, `msdyn_PlanStartDate`, `msdyn_RecordType`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationplan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationplan_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplan_AssignedTo_team` | [team](team.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplan_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `owner_msdyn_evaluationplan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationplan` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationplan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationPlan_msdyn_evaluationplan` | _n/a_ | `msdyn_evaluationplan` | _n/a_ |
| `msdyn_evaluationnotificationconfiguration_msdyn_evaluationplan` | _n/a_ | `msdyn_evaluationplanid` | _n/a_ |
| `msdyn_evaluationplan_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplan_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplan_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_evaluationplan_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_evaluationplan_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplan_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationplan_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplan_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanrun_EvaluationPlan_msdyn_evaluationplan` | _n/a_ | `msdyn_evaluationplan` | _n/a_ |


## Source

Generated from [msdyn_evaluationplan.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationplan.md) on 2026-05-06.