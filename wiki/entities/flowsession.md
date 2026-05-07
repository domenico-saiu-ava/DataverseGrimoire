---
logical: "flowsession"
display: "Flow Session"
entitySetName: "flowsessions"
primaryId: "flowsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Session

Entity to store the information that is generated when a Power Automate Desktop flow runs.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowsession` |
| Display name | Flow Session |
| Display (plural) | Flow Sessions |
| Schema name | `flowsession` |
| Entity set (Web API) | `flowsessions` |
| Primary id attribute | `flowsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowsessions?$select=name&$top=10
GET /api/data/v9.2/flowsessions(<guid>)
POST /api/data/v9.2/flowsessions
PATCH /api/data/v9.2/flowsessions(<guid>)
DELETE /api/data/v9.2/flowsessions(<guid>)
```

## Attributes

Writable: **45** · Read-only: **18**

### Writable

`CallbackUrl`, `ClientTrackingId`, `CompletedOn`, `ConnectionId`, `Context`, `CorrelationId`, `Credentials`, `ErrorCode`, `ErrorDetails`, `ErrorInnerError`, `ErrorMessage`, `flowsessionId`, `Gateway`, `ImportSequenceNumber`, `MachineGroupId`, `MachineId`, `MachinePercentCpuUsage`, `MachinePercentRamUsage`, `MachineRamUsage`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentCloudFlowRunSequenceId`, `ParentDesktopFlowRunGuid`, `ParentDesktopFlowRunId`, `ParentWorkflowId`, `ProcessVersion`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RunDetails`, `RunDuration`, `RunExecutionDuration`, `RunMode`, `RunSessionMode`, `RunWaitDuration`, `SessionUsername`, `SessionUserSID`, `StartedOn`, `statecode`, `statuscode`, `SubCategory`, `TimeZoneRuleVersionNumber`, `TriggerType`, `UTCConversionTimeZoneCode`

### Read-only

`AdditionalContext`, `AdditionalContext_Name`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Inputs`, `Inputs_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Outputs`, `Outputs_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_FlowSession_AdditionalContext` | [fileattachment](fileattachment.md) | `additionalcontext` | `additionalcontext` |
| `FileAttachment_FlowSession_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `FileAttachment_FlowSession_Outputs` | [fileattachment](fileattachment.md) | `outputs` | `outputs` |
| `flowmachine_flowsession_MachineId` | [flowmachine](flowmachine.md) | `machineid` | `MachineId` |
| `flowmachinegroup_flowsession_MachineGroupId` | [flowmachinegroup](flowmachinegroup.md) | `machinegroupid` | `MachineGroupId` |
| `flowsession_flowsession_parentdesktopflowrunid` | [flowsession](flowsession.md) | `parentdesktopflowrunid` | `parentdesktopflowrunid` |
| `lk_flowsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `regardingobjectid_process` | [workflow](workflow.md) | `regardingobjectid` | `regardingobjectid_process` |
| `team_flowsession` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowevent_flowsession` | _n/a_ | `parentobjectid` | _n/a_ |
| `flowsession_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsession_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsession_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `flowsession_flowlog_flowsessionid` | _n/a_ | `flowsessionid` | _n/a_ |
| `flowsession_flowlog_parentobjectid` | _n/a_ | `parentobjectid` | _n/a_ |
| `flowsession_flowsession_parentdesktopflowrunid` | _n/a_ | `parentdesktopflowrunid` | _n/a_ |
| `flowsession_flowsessionbinary_FlowSessionId` | _n/a_ | `flowsessionid` | _n/a_ |
| `flowsession_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsession_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowsession_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowsession_workflowbinary_FlowSessionId` | _n/a_ | `flowsessionid` | _n/a_ |
| `taggedflowsession_FlowSession_flowsession` | _n/a_ | `flowsession` | _n/a_ |


## Source

Generated from [flowsession.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowsession.md) on 2026-05-06.