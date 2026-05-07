---
logical: "processtrigger"
display: "Process Trigger"
entitySetName: "processtriggers"
primaryId: "processtriggerid"
tableType: "Standard"
ownership: "None"
---

# Process Trigger

Trigger that invoke a rule.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processtrigger` |
| Display name | Process Trigger |
| Display (plural) | Process Triggers |
| Schema name | `ProcessTrigger` |
| Entity set (Web API) | `processtriggers` |
| Primary id attribute | `processtriggerid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/processtriggers?$select=&$top=10
GET /api/data/v9.2/processtriggers(<guid>)
POST /api/data/v9.2/processtriggers
PATCH /api/data/v9.2/processtriggers(<guid>)
DELETE /api/data/v9.2/processtriggers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **17**

### Writable

`ControlName`, `ControlType`, `Event`, `FormId`, `IsCustomizable`, `MethodId`, `PipelineStage`, `PrimaryEntityTypeCode`, `ProcessId`, `ProcessTriggerId`, `Scope`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `ProcessTriggerIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_processtriggerbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_processtriggerbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_processtriggerbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_processtriggerbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `process_processtrigger` | [workflow](workflow.md) | `processid` | `processid` |
| `processtrigger_systemform` | [systemform](systemform.md) | `formid` | `formid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ProcessTrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [processtrigger.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/processtrigger.md) on 2026-05-06.