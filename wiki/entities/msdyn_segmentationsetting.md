---
logical: "msdyn_segmentationsetting"
display: "segmentsetting"
entitySetName: "msdyn_segmentationsettings"
primaryId: "msdyn_segmentationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# segmentsetting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segmentationsetting` |
| Display name | segmentsetting |
| Display (plural) | segmentsettings |
| Schema name | `msdyn_segmentationsetting` |
| Entity set (Web API) | `msdyn_segmentationsettings` |
| Primary id attribute | `msdyn_segmentationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segmentationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segmentationsettings(<guid>)
POST /api/data/v9.2/msdyn_segmentationsettings
PATCH /api/data/v9.2/msdyn_segmentationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_segmentationsettings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_isdiagnosticsenabled`, `msdyn_name`, `msdyn_segmentationsettingId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentationsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentationsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentationsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_segmentationsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_segmentationsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentationsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_segmentationsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentationsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_segmentationsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_segmentationsetting.md) on 2026-05-06.