---
logical: "expiredprocess"
display: "Expired Process"
entitySetName: "expiredprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Expired Process

Expired Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `expiredprocess` |
| Display name | Expired Process |
| Display (plural) | Expired Process |
| Schema name | `ExpiredProcess` |
| Entity set (Web API) | `expiredprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/expiredprocesses?$select=name&$top=10
GET /api/data/v9.2/expiredprocesses(<guid>)
POST /api/data/v9.2/expiredprocesses
PATCH /api/data/v9.2/expiredprocesses(<guid>)
DELETE /api/data/v9.2/expiredprocesses(<guid>)
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
| `lk_expiredprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_expiredprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_expiredprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_expiredprocess_knowledgearticleid` | [knowledgearticle](knowledgearticle.md) | `knowledgearticleid` | `knowledgearticleid` |
| `lk_expiredprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_expiredprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_expiredprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_expiredprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_expiredprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ExpiredProcess_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ExpiredProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_expiredprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |


## Source

Generated from [expiredprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/expiredprocess.md) on 2026-05-06.