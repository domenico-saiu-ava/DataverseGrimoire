---
logical: "slaitem"
display: "SLA Item"
entitySetName: "slaitems"
primaryId: "slaitemid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# SLA Item

Contains information about a tracked support KPI for a specific customer.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `slaitem` |
| Display name | SLA Item |
| Display (plural) | SLA Items |
| Schema name | `SLAItem` |
| Entity set (Web API) | `slaitems` |
| Primary id attribute | `slaitemid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/slaitems?$select=name&$top=10
GET /api/data/v9.2/slaitems(<guid>)
POST /api/data/v9.2/slaitems
PATCH /api/data/v9.2/slaitems(<guid>)
DELETE /api/data/v9.2/slaitems(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`actionflowuniquename`, `ActionURL`, `AllowPauseResume`, `ApplicableEntity`, `ApplicableWhenXml`, `BusinessHoursId`, `ChangedAttributeList`, `Description`, `FailureAfter`, `msdyn_AdvancedPauseConfiguration`, `msdyn_CustomTimeCalculation`, `msdyn_CustomTimeCalculationWorkflowId`, `msdyn_PauseConfigurationXml`, `msdyn_slakpiid`, `Name`, `OwnerId`, `OwnerIdType`, `OwningUser`, `RelatedField`, `SequenceNumber`, `SLAId`, `SLAItemId`, `SuccessConditionsXml`, `WarnAfter`, `WorkflowId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwningBusinessUnit`, `SLAItemIdUnique`, `SolutionId`, `SupportingSolutionId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `calendar_slaitem` | [calendar](calendar.md) | `businesshoursid` | `businesshoursid` |
| `lk_slaitembase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_slaitembase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_slaitembase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_slaitembase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_slakpi_slaitem` | [msdyn_slakpi](msdyn_slakpi.md) | `msdyn_slakpiid` | `msdyn_SLAKPIID` |
| `msdyn_workflow_slaitem_customtimecalculationworkflowid` | [workflow](workflow.md) | `msdyn_customtimecalculationworkflowid` | `msdyn_customtimecalculationworkflowid` |
| `sla_slaitem_slaId` | [sla](sla.md) | `slaid` | `slaid` |
| `slaitembase_workflowid` | [workflow](workflow.md) | `workflowid` | `workflowid` |
| `TransactionCurrency_SLAItem` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_slaitem_slakpiinstance` | _n/a_ | `msdyn_slaitemid` | _n/a_ |
| `SLAItem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [slaitem.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/slaitem.md) on 2026-05-06.