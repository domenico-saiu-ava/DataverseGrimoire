---
logical: "msdyn_recomputetracker"
display: "Recompute Tracker"
entitySetName: "msdyn_recomputetrackers"
primaryId: "msdyn_recomputetrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Recompute Tracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recomputetracker` |
| Display name | Recompute Tracker |
| Display (plural) | Recompute Tracker |
| Schema name | `msdyn_recomputetracker` |
| Entity set (Web API) | `msdyn_recomputetrackers` |
| Primary id attribute | `msdyn_recomputetrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recomputetrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_recomputetrackers(<guid>)
POST /api/data/v9.2/msdyn_recomputetrackers
PATCH /api/data/v9.2/msdyn_recomputetrackers(<guid>)
DELETE /api/data/v9.2/msdyn_recomputetrackers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_forecastconfigurationid`, `msdyn_lastprocessedchangestill`, `msdyn_name`, `msdyn_recomputetrackerId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recomputetracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recomputetracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recomputetracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recomputetracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_recomputetracker_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `organization_msdyn_recomputetracker` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recomputetracker_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recomputetracker_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recomputetracker_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_recomputetracker_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_recomputetracker_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recomputetracker_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_recomputetracker_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_recomputetracker_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_recomputetracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_recomputetracker.md) on 2026-05-06.