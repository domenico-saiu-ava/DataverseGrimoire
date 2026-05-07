---
logical: "processstage"
display: "Process Stage"
entitySetName: "processstages"
primaryId: "processstageid"
primaryName: "stagename"
tableType: "Standard"
ownership: "None"
---

# Process Stage

Stage associated with a process.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processstage` |
| Display name | Process Stage |
| Display (plural) | Process Stages |
| Schema name | `ProcessStage` |
| Entity set (Web API) | `processstages` |
| Primary id attribute | `processstageid` |
| Primary name attribute | `stagename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/processstages?$select=stagename&$top=10
GET /api/data/v9.2/processstages(<guid>)
POST /api/data/v9.2/processstages
PATCH /api/data/v9.2/processstages(<guid>)
DELETE /api/data/v9.2/processstages(<guid>)
```

## Attributes

Writable: **13** · Read-only: **5**

### Writable

`Connector`, `IsTrigger`, `OperationId`, `OperationKind`, `OperationType`, `ParameterName`, `ParameterValue`, `ParentProcessStageId`, `PrimaryEntityTypeCode`, `ProcessId`, `ProcessStageId`, `StageCategory`, `StageName`

### Read-only

`ClientData`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `process_processstage` | [workflow](workflow.md) | `processid` | `processid` |
| `processstage_parentprocessstage` | [processstage](processstage.md) | `parentprocessstageid` | `ParentProcessStageId` |

### One-to-Many (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_expiredprocess_activestageid` | _n/a_ | `activestageid` | _n/a_ |
| `lk_newprocess_activestageid` | _n/a_ | `activestageid` | _n/a_ |
| `lk_translationprocess_activestageid` | _n/a_ | `activestageid` | _n/a_ |
| `processstage_account` | _n/a_ | `stageid` | _n/a_ |
| `processstage_adx_portalcomment` | _n/a_ | `stageid` | _n/a_ |
| `processstage_appointments` | _n/a_ | `stageid` | _n/a_ |
| `processstage_contact` | _n/a_ | `stageid` | _n/a_ |
| `processstage_emails` | _n/a_ | `stageid` | _n/a_ |
| `processstage_faxes` | _n/a_ | `stageid` | _n/a_ |
| `processstage_knowledgearticle` | _n/a_ | `stageid` | _n/a_ |
| `processstage_letters` | _n/a_ | `stageid` | _n/a_ |
| `processstage_parentprocessstage` | _n/a_ | `parentprocessstageid` | _n/a_ |
| `processstage_phonecalls` | _n/a_ | `stageid` | _n/a_ |
| `processstage_processstageparameter` | _n/a_ | `processstageid` | _n/a_ |
| `processstage_recurringappointmentmasters` | _n/a_ | `stageid` | _n/a_ |
| `ProcessStage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processstage_systemusers` | _n/a_ | `stageid` | _n/a_ |
| `processstage_tasks` | _n/a_ | `stageid` | _n/a_ |
| `processstage_teams` | _n/a_ | `stageid` | _n/a_ |


## Source

Generated from [processstage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/processstage.md) on 2026-05-06.