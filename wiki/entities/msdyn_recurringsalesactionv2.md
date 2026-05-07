---
logical: "msdyn_recurringsalesactionv2"
display: "Recurring Sales Action V2"
entitySetName: "msdyn_recurringsalesactionsv2"
primaryId: "msdyn_recurringsalesactionv2id"
primaryName: "msdyn_triggername"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Recurring Sales Action V2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recurringsalesactionv2` |
| Display name | Recurring Sales Action V2 |
| Display (plural) | Recurring Sales Actions V2 |
| Schema name | `msdyn_recurringsalesactionv2` |
| Entity set (Web API) | `msdyn_recurringsalesactionsv2` |
| Primary id attribute | `msdyn_recurringsalesactionv2id` |
| Primary name attribute | `msdyn_triggername` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recurringsalesactionsv2?$select=msdyn_triggername&$top=10
GET /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
POST /api/data/v9.2/msdyn_recurringsalesactionsv2
PATCH /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
DELETE /api/data/v9.2/msdyn_recurringsalesactionsv2(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_CustomActionName`, `msdyn_FailureCount`, `msdyn_FeatureName`, `msdyn_IsRecurrencePatternSchedule`, `msdyn_LastExecutionInfo`, `msdyn_Payload`, `msdyn_RecordState`, `msdyn_recurringsalesactionv2Id`, `msdyn_RetryCount`, `msdyn_Schedule`, `msdyn_StartDate`, `msdyn_TriggerName`, `msdyn_WorkloadName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recurringsalesactionv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recurringsalesactionv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recurringsalesactionv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recurringsalesactionv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recurringsalesactionv2` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recurringsalesactionv2_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesactionv2_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesactionv2_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesactionv2_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_recurringsalesactionv2_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recurringsalesactionv2_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_recurringsalesactionv2.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_recurringsalesactionv2.md) on 2026-05-06.