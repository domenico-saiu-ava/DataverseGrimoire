---
logical: "flowrun"
display: "Flow Run"
entitySetName: "flowruns"
primaryId: "flowrunid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Flow Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowrun` |
| Display name | Flow Run |
| Display (plural) | Flow Runs |
| Schema name | `flowrun` |
| Entity set (Web API) | `flowruns` |
| Primary id attribute | `flowrunid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowruns?$select=name&$top=10
GET /api/data/v9.2/flowruns(<guid>)
POST /api/data/v9.2/flowruns
PATCH /api/data/v9.2/flowruns(<guid>)
DELETE /api/data/v9.2/flowruns(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`CallingProductResourceId`, `CallingProductRunId`, `CallingProductType`, `ClientTrackingId`, `ConversationId`, `DurationInMs`, `EndTime`, `ErrorCode`, `ErrorMessage`, `flowrunId`, `ImportSequenceNumber`, `IsPrimary`, `ModernFlowType`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `parentRunId`, `PartitionId`, `resourceId`, `StartTime`, `Status`, `TimeZoneRuleVersionNumber`, `TriggerType`, `TTLInSeconds`, `UTCConversionTimeZoneCode`, `Workflow`, `WorkflowId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_flowrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_flowrun_Workflow` | [workflow](workflow.md) | `workflow` | `Workflow` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowrun_flowlog_cloudflowrunid` | _n/a_ | `cloudflowrunid` | _n/a_ |


## Source

Generated from [flowrun.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowrun.md) on 2026-05-06.