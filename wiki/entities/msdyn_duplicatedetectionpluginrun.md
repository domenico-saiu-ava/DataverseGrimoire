---
logical: "msdyn_duplicatedetectionpluginrun"
display: "Duplicate Detection Plugin Run"
entitySetName: "msdyn_duplicatedetectionpluginruns"
primaryId: "msdyn_duplicatedetectionpluginrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Duplicate Detection Plugin Run

Duplicate Detection Plugin Run used to track successful and failure state of the Duplicate Detection Plugin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_duplicatedetectionpluginrun` |
| Display name | Duplicate Detection Plugin Run |
| Display (plural) | Duplicate Detection Plugin Runs |
| Schema name | `msdyn_duplicatedetectionpluginrun` |
| Entity set (Web API) | `msdyn_duplicatedetectionpluginruns` |
| Primary id attribute | `msdyn_duplicatedetectionpluginrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_duplicatedetectionpluginruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
POST /api/data/v9.2/msdyn_duplicatedetectionpluginruns
PATCH /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
DELETE /api/data/v9.2/msdyn_duplicatedetectionpluginruns(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_baserecordid`, `msdyn_duplicatedetectionpluginrunId`, `msdyn_entityname`, `msdyn_failurereason`, `msdyn_iscompleted`, `msdyn_messagename`, `msdyn_name`, `msdyn_reruncompleted`, `msdyn_retrycount`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_duplicatedetectionpluginrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_duplicatedetectionpluginrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_duplicatedetectionpluginrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_duplicatedetectionpluginrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid` | [lead](lead.md) | `msdyn_baserecordid` | `msdyn_baserecordid` |
| `organization_msdyn_duplicatedetectionpluginrun` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_duplicatedetectionpluginrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicatedetectionpluginrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_duplicatedetectionpluginrun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_duplicatedetectionpluginrun.md) on 2026-05-06.