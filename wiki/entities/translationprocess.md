---
logical: "translationprocess"
display: "Translation Process"
entitySetName: "translationprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Translation Process

Translation Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `translationprocess` |
| Display name | Translation Process |
| Display (plural) | Translation Process |
| Schema name | `TranslationProcess` |
| Entity set (Web API) | `translationprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/translationprocesses?$select=name&$top=10
GET /api/data/v9.2/translationprocesses(<guid>)
POST /api/data/v9.2/translationprocesses
PATCH /api/data/v9.2/translationprocesses(<guid>)
DELETE /api/data/v9.2/translationprocesses(<guid>)
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
| `lk_translationprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_translationprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_translationprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_translationprocess_knowledgearticleid` | [knowledgearticle](knowledgearticle.md) | `knowledgearticleid` | `knowledgearticleid` |
| `lk_translationprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_translationprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_translationprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_translationprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_translationprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_translationprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |
| `TranslationProcess_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `TranslationProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [translationprocess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/translationprocess.md) on 2026-05-06.