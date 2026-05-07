---
logical: "workflowlog"
display: "Process Log"
entitySetName: "workflowlogs"
primaryId: "workflowlogid"
tableType: "Standard"
ownership: "None"
---

# Process Log

Log used to track process execution.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowlog` |
| Display name | Process Log |
| Display (plural) | Process Logs |
| Schema name | `WorkflowLog` |
| Entity set (Web API) | `workflowlogs` |
| Primary id attribute | `workflowlogid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/workflowlogs?$select=&$top=10
GET /api/data/v9.2/workflowlogs(<guid>)
POST /api/data/v9.2/workflowlogs
PATCH /api/data/v9.2/workflowlogs(<guid>)
DELETE /api/data/v9.2/workflowlogs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`ActivityName`, `AsyncOperationId`, `ChildWorkflowInstanceId`, `ChildWorkflowInstanceObjectTypeCode`, `CompletedOn`, `Description`, `ErrorCode`, `ErrorText`, `InteractionActivityResult`, `IterationCount`, `Message`, `ObjectTypeCode`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RepetitionCount`, `RepetitionId`, `StageName`, `StartedOn`, `Status`, `StepName`, `WorkflowLogId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Duration`, `Inputs`, `Inputs_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Outputs`, `Outputs_Name`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workflowlogs` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_WorkflowLog_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `FileAttachment_WorkflowLog_Outputs` | [fileattachment](fileattachment.md) | `outputs` | `outputs` |
| `lk_expiredprocess_workflowlogs` | [expiredprocess](expiredprocess.md) | `asyncoperationid` | `ExpiredProcess_asyncoperationid` |
| `lk_newprocess_workflowlogs` | [newprocess](newprocess.md) | `asyncoperationid` | `NewProcess_asyncoperationid` |
| `lk_translationprocess_workflowlogs` | [translationprocess](translationprocess.md) | `asyncoperationid` | `TranslationProcess_asyncoperationid` |
| `lk_workflowlog_asyncoperation_childworkflow` | [asyncoperation](asyncoperation.md) | `childworkflowinstanceid` | `childworkflowinstanceid_asyncoperation` |
| `lk_workflowlog_asyncoperations` | [asyncoperation](asyncoperation.md) | `asyncoperationid` | `asyncoperationid_asyncoperation` |
| `lk_workflowlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workflowlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workflowlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workflowlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_workflowlog_processsession` | [processsession](processsession.md) | `asyncoperationid` | `asyncoperationid_processsession` |
| `lk_workflowlog_processsession_childworkflow` | [processsession](processsession.md) | `childworkflowinstanceid` | `childworkflowinstanceid_processsession` |
| `team_workflowlog` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflowlog_FileAttachments` | _n/a_ | `objectid` | _n/a_ |


## Source

Generated from [workflowlog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workflowlog.md) on 2026-05-06.