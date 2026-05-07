---
logical: "msdyn_digitalsellingcompletedtask"
display: "DigitalSellingCompletedTask"
entitySetName: "msdyn_digitalsellingcompletedtasks"
primaryId: "msdyn_digitalsellingcompletedtaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# DigitalSellingCompletedTask

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_digitalsellingcompletedtask` |
| Display name | DigitalSellingCompletedTask |
| Display (plural) | DigitalSellingCompletedTasks |
| Schema name | `msdyn_digitalsellingcompletedtask` |
| Entity set (Web API) | `msdyn_digitalsellingcompletedtasks` |
| Primary id attribute | `msdyn_digitalsellingcompletedtaskid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_digitalsellingcompletedtasks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
POST /api/data/v9.2/msdyn_digitalsellingcompletedtasks
PATCH /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
DELETE /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_correlationid`, `msdyn_customapiname`, `msdyn_digitalsellingcompletedtaskId`, `msdyn_endtime`, `msdyn_inputparameters`, `msdyn_inputtime`, `msdyn_name`, `msdyn_retentiontime`, `msdyn_starttime`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_digitalsellingcompletedtask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_digitalsellingcompletedtask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_digitalsellingcompletedtask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_digitalsellingcompletedtask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_digitalsellingcompletedtask` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_digitalsellingcompletedtask_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingcompletedtask_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_digitalsellingcompletedtask.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_digitalsellingcompletedtask.md) on 2026-05-06.