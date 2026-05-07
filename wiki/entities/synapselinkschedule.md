---
logical: "synapselinkschedule"
display: "Synapse Link Schedule"
entitySetName: "synapselinkschedules"
primaryId: "synapselinkscheduleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Synapse Link Schedule

Synapse link schedules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkschedule` |
| Display name | Synapse Link Schedule |
| Display (plural) | Synapse Link Schedules |
| Schema name | `synapselinkschedule` |
| Entity set (Web API) | `synapselinkschedules` |
| Primary id attribute | `synapselinkscheduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkschedules?$select=name&$top=10
GET /api/data/v9.2/synapselinkschedules(<guid>)
POST /api/data/v9.2/synapselinkschedules
PATCH /api/data/v9.2/synapselinkschedules(<guid>)
DELETE /api/data/v9.2/synapselinkschedules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`EntityName`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `profile`, `RecurrenceInterval`, `RecurrenceUnit`, `StartTime`, `statecode`, `statuscode`, `synapselinkscheduleId`, `TimeZoneRuleVersionNumber`, `Type`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkschedule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkschedule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkschedule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkschedule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkschedule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `profileschedules` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkschedule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkschedule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkschedule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapselinkschedule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapselinkschedule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkschedule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapselinkschedule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkschedule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapselinkschedule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapselinkschedule.md) on 2026-05-06.