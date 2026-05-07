---
logical: "opportunitysalesprocess"
display: "Opportunity Sales Process"
entitySetName: "opportunitysalesprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Opportunity Sales Process

Opportunity Sales Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `opportunitysalesprocess` |
| Display name | Opportunity Sales Process |
| Display (plural) | Opportunity Sales Process |
| Schema name | `OpportunitySalesProcess` |
| Entity set (Web API) | `opportunitysalesprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/opportunitysalesprocesses?$select=name&$top=10
GET /api/data/v9.2/opportunitysalesprocesses(<guid>)
POST /api/data/v9.2/opportunitysalesprocesses
PATCH /api/data/v9.2/opportunitysalesprocesses(<guid>)
DELETE /api/data/v9.2/opportunitysalesprocesses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`ActiveStageId`, `ActiveStageStartedOn`, `BusinessProcessFlowInstanceId`, `CompletedOn`, `ImportSequenceNumber`, `Name`, `OpportunityId`, `OverriddenCreatedOn`, `ProcessId`, `QuoteId`, `SalesOrderId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Duration`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_opportunitysalesprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_opportunitysalesprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_opportunitysalesprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_opportunitysalesprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_opportunitysalesprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_opportunitysalesprocess_opportunityid` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `lk_opportunitysalesprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `lk_opportunitysalesprocess_quoteid` | [quote](quote.md) | `quoteid` | `quoteid` |
| `lk_opportunitysalesprocess_salesorderid` | [salesorder](salesorder.md) | `salesorderid` | `salesorderid` |
| `organization_opportunitysalesprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_opportunitysalesprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_opportunitysalesprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |
| `opportunitysalesprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitysalesprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitysalesprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunitysalesprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `opportunitysalesprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OpportunitySalesProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [opportunitysalesprocess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/opportunitysalesprocess.md) on 2026-05-06.