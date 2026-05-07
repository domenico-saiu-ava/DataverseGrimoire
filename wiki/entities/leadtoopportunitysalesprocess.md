---
logical: "leadtoopportunitysalesprocess"
display: "Lead To Opportunity Sales Process"
entitySetName: "leadtoopportunitysalesprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Lead To Opportunity Sales Process

Lead To Opportunity Sales Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `leadtoopportunitysalesprocess` |
| Display name | Lead To Opportunity Sales Process |
| Display (plural) | Lead To Opportunity Sales Process |
| Schema name | `LeadToOpportunitySalesProcess` |
| Entity set (Web API) | `leadtoopportunitysalesprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/leadtoopportunitysalesprocesses?$select=name&$top=10
GET /api/data/v9.2/leadtoopportunitysalesprocesses(<guid>)
POST /api/data/v9.2/leadtoopportunitysalesprocesses
PATCH /api/data/v9.2/leadtoopportunitysalesprocesses(<guid>)
DELETE /api/data/v9.2/leadtoopportunitysalesprocesses(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`ActiveStageId`, `ActiveStageStartedOn`, `BusinessProcessFlowInstanceId`, `CompletedOn`, `ImportSequenceNumber`, `LeadId`, `Name`, `OpportunityId`, `OverriddenCreatedOn`, `ProcessId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Duration`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_leadtoopportunitysalesprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_leadtoopportunitysalesprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_leadtoopportunitysalesprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_leadtoopportunitysalesprocess_leadid` | [lead](lead.md) | `leadid` | `leadId` |
| `lk_leadtoopportunitysalesprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_leadtoopportunitysalesprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_leadtoopportunitysalesprocess_opportunityid` | [opportunity](opportunity.md) | `opportunityid` | `opportunityId` |
| `lk_leadtoopportunitysalesprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_leadtoopportunitysalesprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_leadtoopportunitysalesprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadtoopportunitysalesprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadtoopportunitysalesprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadtoopportunitysalesprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadtoopportunitysalesprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `leadtoopportunitysalesprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `LeadToOpportunitySalesProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_leadtoopportunitysalesprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |


## Source

Generated from [leadtoopportunitysalesprocess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/leadtoopportunitysalesprocess.md) on 2026-05-06.