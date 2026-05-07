---
logical: "slakpiinstance"
display: "SLA KPI Instance"
entitySetName: "slakpiinstances"
primaryId: "slakpiinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# SLA KPI Instance

Service level agreement (SLA) key performance indicator (KPI) instance that is tracked for an individual case

## Identity

| Property | Value |
| --- | --- |
| Logical name | `slakpiinstance` |
| Display name | SLA KPI Instance |
| Display (plural) | SLA KPI Instances |
| Schema name | `SLAKPIInstance` |
| Entity set (Web API) | `slakpiinstances` |
| Primary id attribute | `slakpiinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/slakpiinstances?$select=name&$top=10
GET /api/data/v9.2/slakpiinstances(<guid>)
POST /api/data/v9.2/slakpiinstances
PATCH /api/data/v9.2/slakpiinstances(<guid>)
DELETE /api/data/v9.2/slakpiinstances(<guid>)
```

## Attributes

Writable: **31** · Read-only: **10**

### Writable

`ApplicableFromValue`, `ComputedFailureTime`, `ComputedWarningTime`, `Description`, `ElapsedTime`, `FailureTime`, `LastResumeTime`, `msdyn_ActionExecutionStatus`, `msdyn_activeduration`, `msdyn_calendarid`, `msdyn_prevslakpiinstanceid`, `msdyn_slaitemid`, `Name`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PausedOn`, `Regarding`, `RegardingEntityID`, `RegardingObjectTypeCode`, `SLAKPIInstanceId`, `Status`, `SucceededOn`, `SuccessCheckedAt`, `TerminalStateReached`, `TerminalStateTime`, `TransactionCurrencyId`, `WarningTime`, `WarningTimeReached`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `VersionNumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_slakpiinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_slakpiinstancebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_slakpiinstancebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_slakpiinstancebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_slakpiinstancebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_slaitem_slakpiinstance` | [slaitem](slaitem.md) | `msdyn_slaitemid` | `msdyn_slaitemid` |
| `slakpiinstance_account` | [account](account.md) | `regarding` | `regarding_account` |
| `slakpiinstance_activitypointer` | [activitypointer](activitypointer.md) | `regarding` | `regarding_activitypointer` |
| `slakpiinstance_appointment` | [appointment](appointment.md) | `regarding` | `regarding_appointment` |
| `slakpiinstance_contact` | [contact](contact.md) | `regarding` | `regarding_contact` |
| `slakpiinstance_email` | [email](email.md) | `regarding` | `regarding_email` |
| `slakpiinstance_fax` | [fax](fax.md) | `regarding` | `regarding_fax` |
| `slakpiinstance_letter` | [letter](letter.md) | `regarding` | `regarding_letter` |
| `slakpiinstance_owner` | [owner](owner.md) | `ownerid` | `ownerid` |
| `slakpiinstance_phonecall` | [phonecall](phonecall.md) | `regarding` | `regarding_phonecall` |
| `slakpiinstance_socialactivity` | [socialactivity](socialactivity.md) | `regarding` | `regarding_socialactivity` |
| `slakpiinstance_task` | [task](task.md) | `regarding` | `regarding_task` |
| `TransactionCurrency_slakpiinstance` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SLAKPIInstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [slakpiinstance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/slakpiinstance.md) on 2026-05-06.