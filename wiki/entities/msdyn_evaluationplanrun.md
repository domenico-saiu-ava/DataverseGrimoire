---
logical: "msdyn_evaluationplanrun"
display: "Evaluation Plan Run"
entitySetName: "msdyn_evaluationplanruns"
primaryId: "msdyn_evaluationplanrunid"
primaryName: "msdyn_planname"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Plan Run

Contains configuration for creating evaluations in Bulk for Evaluation Plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanrun` |
| Display name | Evaluation Plan Run |
| Display (plural) | Evaluation Plan Runs |
| Schema name | `msdyn_EvaluationPlanRun` |
| Entity set (Web API) | `msdyn_evaluationplanruns` |
| Primary id attribute | `msdyn_evaluationplanrunid` |
| Primary name attribute | `msdyn_planname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanruns?$select=msdyn_planname&$top=10
GET /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanruns
PATCH /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AssignedTo`, `msdyn_DueDate`, `msdyn_EvaluationCriteria`, `msdyn_Evaluationmethod`, `msdyn_EvaluationPlan`, `msdyn_EvaluationPlanEndDate`, `msdyn_EvaluationPlanRunId`, `msdyn_EvaluationPlanStartDate`, `msdyn_FilterRulesXML`, `msdyn_PageIndex`, `msdyn_PaginationMarker`, `msdyn_PlanName`, `msdyn_RecordsIdentificationCompletedOn`, `msdyn_RecordType`, `msdyn_TotalRecordsDiscovered`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationplanrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationplanrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationplanrun_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplanrun_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationplanrun_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |
| `owner_msdyn_evaluationplanrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationplanrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationplanrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanbatch_EvaluationPlanRun_msdyn_evaluationplanrun` | _n/a_ | `msdyn_evaluationplanrun` | _n/a_ |
| `msdyn_evaluationplanrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanrun_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_evaluationplanrun_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_evaluationplanrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationplanrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationplanrun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationplanrun.md) on 2026-05-06.