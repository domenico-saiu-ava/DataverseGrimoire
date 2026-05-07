---
logical: "msdyn_recurringsalesaction"
display: "Recurring Sales Action"
entitySetName: "msdyn_recurringsalesactions"
primaryId: "msdyn_recurringsalesactionid"
primaryName: "msdyn_triggername"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Recurring Sales Action

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recurringsalesaction` |
| Display name | Recurring Sales Action |
| Display (plural) | Recurring Sales Actions |
| Schema name | `msdyn_recurringsalesaction` |
| Entity set (Web API) | `msdyn_recurringsalesactions` |
| Primary id attribute | `msdyn_recurringsalesactionid` |
| Primary name attribute | `msdyn_triggername` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recurringsalesactions?$select=msdyn_triggername&$top=10
GET /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
POST /api/data/v9.2/msdyn_recurringsalesactions
PATCH /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
DELETE /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CustomActionName`, `msdyn_FailureCount`, `msdyn_FeatureName`, `msdyn_IsRecurrencePatternSchedule`, `msdyn_LastExecutionInfo`, `msdyn_Payload`, `msdyn_RecordState`, `msdyn_recurringsalesactionId`, `msdyn_RetryCount`, `msdyn_Schedule`, `msdyn_StartDate`, `msdyn_TriggerName`, `msdyn_WorkloadName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recurringsalesaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recurringsalesaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recurringsalesaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recurringsalesaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recurringsalesaction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recurringsalesaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_recurringsalesaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_recurringsalesaction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_recurringsalesaction.md) on 2026-05-06.