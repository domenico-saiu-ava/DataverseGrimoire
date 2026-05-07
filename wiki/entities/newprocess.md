---
logical: "newprocess"
display: "New Process"
entitySetName: "newprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# New Process

New Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `newprocess` |
| Display name | New Process |
| Display (plural) | New Process |
| Schema name | `NewProcess` |
| Entity set (Web API) | `newprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/newprocesses?$select=name&$top=10
GET /api/data/v9.2/newprocesses(<guid>)
POST /api/data/v9.2/newprocesses
PATCH /api/data/v9.2/newprocesses(<guid>)
DELETE /api/data/v9.2/newprocesses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`ActiveStageId`, `ActiveStageStartedOn`, `BusinessProcessFlowInstanceId`, `CompletedOn`, `ImportSequenceNumber`, `KnowledgeArticleId`, `Name`, `OverriddenCreatedOn`, `ProcessId`, `StateCode`, `StatusCode`, `TransactionCurrencyId`, `TraversedPath`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Duration`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_newprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_newprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_newprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_newprocess_knowledgearticleid` | [knowledgearticle](knowledgearticle.md) | `knowledgearticleid` | `knowledgearticleid` |
| `lk_newprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_newprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_newprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_newprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_newprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_newprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |
| `NewProcess_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `NewProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [newprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/newprocess.md) on 2026-05-06.