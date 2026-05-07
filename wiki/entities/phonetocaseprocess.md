---
logical: "phonetocaseprocess"
display: "Phone To Case Process"
entitySetName: "phonetocaseprocesses"
primaryId: "businessprocessflowinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Phone To Case Process

Phone To Case Process Business Process Flow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `phonetocaseprocess` |
| Display name | Phone To Case Process |
| Display (plural) | Phone To Case Process |
| Schema name | `PhoneToCaseProcess` |
| Entity set (Web API) | `phonetocaseprocesses` |
| Primary id attribute | `businessprocessflowinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/phonetocaseprocesses?$select=name&$top=10
GET /api/data/v9.2/phonetocaseprocesses(<guid>)
POST /api/data/v9.2/phonetocaseprocesses
PATCH /api/data/v9.2/phonetocaseprocesses(<guid>)
DELETE /api/data/v9.2/phonetocaseprocesses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`ActiveStageId`, `ActiveStageStartedOn`, `BusinessProcessFlowInstanceId`, `CompletedOn`, `ImportSequenceNumber`, `IncidentId`, `Name`, `OverriddenCreatedOn`, `ProcessId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Duration`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_phonetocaseprocess_activestageid` | [processstage](processstage.md) | `activestageid` | `activestageid` |
| `lk_phonetocaseprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_phonetocaseprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_phonetocaseprocess_incidentid` | [incident](incident.md) | `incidentid` | `incidentid` |
| `lk_phonetocaseprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_phonetocaseprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `lk_phonetocaseprocess_processid` | [workflow](workflow.md) | `processid` | `processid` |
| `organization_phonetocaseprocess` | [organization](organization.md) | `organizationid` | `organizationid` |
| `transactioncurrency_phonetocaseprocess` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_phonetocaseprocess_workflowlogs` | _n/a_ | `asyncoperationid` | _n/a_ |
| `phonetocaseprocess_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonetocaseprocess_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonetocaseprocess_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonetocaseprocess_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `phonetocaseprocess_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PhoneToCaseProcess_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [phonetocaseprocess.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/phonetocaseprocess.md) on 2026-05-06.