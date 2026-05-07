---
logical: "sla"
display: "SLA"
entitySetName: "slas"
primaryId: "slaid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# SLA

Contains information about the tracked service-level KPIs for cases that belong to different customers.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sla` |
| Display name | SLA |
| Display (plural) | SLAs |
| Schema name | `SLA` |
| Entity set (Web API) | `slas` |
| Primary id attribute | `slaid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/slas?$select=name&$top=10
GET /api/data/v9.2/slas(<guid>)
POST /api/data/v9.2/slas
PATCH /api/data/v9.2/slas(<guid>)
DELETE /api/data/v9.2/slas(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`AllowPauseResume`, `ApplicableFrom`, `ApplicableFromPickList`, `BusinessHoursId`, `ChangedAttributeList`, `Description`, `IsDefault`, `Name`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PrimaryEntityOTC`, `SLAId`, `SLAType`, `slaversion`, `StateCode`, `StatusCode`, `WorkflowId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `ObjectTypeCode`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `SLAIdUnique`, `SolutionId`, `SupportingSolutionId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_slabase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_slabase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_slabase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_slabase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_slabase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_slas` | [owner](owner.md) | `ownerid` | `ownerid` |
| `slabase_businesshoursid` | [calendar](calendar.md) | `businesshoursid` | `businesshoursid` |
| `slabase_workflowid` | [workflow](workflow.md) | `workflowid` | `workflowid` |
| `team_slaBase` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_SLA` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_slabase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (32)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_sla_slaid` | _n/a_ | `slaid` | _n/a_ |
| `adx_inviteredemption_sla_slainvokedid` | _n/a_ | `slainvokedid` | _n/a_ |
| `adx_portalcomment_sla_slaid` | _n/a_ | `slaid` | _n/a_ |
| `adx_portalcomment_sla_slainvokedid` | _n/a_ | `slainvokedid` | _n/a_ |
| `chat_sla_slaid` | _n/a_ | `slaid` | _n/a_ |
| `chat_sla_slainvokedid` | _n/a_ | `slainvokedid` | _n/a_ |
| `manualsla_account` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_activitypointer` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_appointment` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_contact` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_email` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_fax` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_letter` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_phonecall` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_socialactivity` | _n/a_ | `slaid` | _n/a_ |
| `manualsla_task` | _n/a_ | `slaid` | _n/a_ |
| `sla_account` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_activitypointer` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `sla_appointment` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_contact` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_email` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_fax` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_letter` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_phonecall` | _n/a_ | `slainvokedid` | _n/a_ |
| `sla_slaitem_slaId` | _n/a_ | `slaid` | _n/a_ |
| `sla_socialactivity` | _n/a_ | `slainvokedid` | _n/a_ |
| `SLA_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sla_task` | _n/a_ | `slainvokedid` | _n/a_ |
| `slabase_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slabase_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slabase_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sla.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sla.md) on 2026-05-06.