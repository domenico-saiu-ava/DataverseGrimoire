---
logical: "msdyn_evaluationplanbatch"
display: "Evaluation Plan Batch"
entitySetName: "msdyn_evaluationplanbatchs"
primaryId: "msdyn_evaluationplanbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Plan Batch

Contains a batch of records to create Evaluations in Bulk for an Evaluation Plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanbatch` |
| Display name | Evaluation Plan Batch |
| Display (plural) | Evaluation Plan Batches |
| Schema name | `msdyn_EvaluationPlanBatch` |
| Entity set (Web API) | `msdyn_evaluationplanbatchs` |
| Primary id attribute | `msdyn_evaluationplanbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanbatchs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanbatchs
PATCH /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AssignedTo`, `msdyn_BatchProcessingCompletedOn`, `msdyn_BatchProcessingStartedOn`, `msdyn_BatchSize`, `msdyn_CriteriaJson`, `msdyn_Evaluationmethod`, `msdyn_EvaluationPlanBatchId`, `msdyn_evaluationplanbatchids`, `msdyn_EvaluationPlanRun`, `msdyn_EvaluationsCreated`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationplanbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationplanbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationplanbatch_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplanbatch_EvaluationPlanRun_msdyn_evaluationplanrun` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `msdyn_evaluationplanrun` | `msdyn_EvaluationPlanRun` |
| `owner_msdyn_evaluationplanbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationplanbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationplanbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanbatch_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanbatch_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanbatch_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_evaluationplanbatch_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_evaluationplanbatch_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanbatch_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationplanbatch_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationplanbatch_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationplanbatch.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationplanbatch.md) on 2026-05-06.