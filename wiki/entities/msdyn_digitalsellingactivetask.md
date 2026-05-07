---
logical: "msdyn_digitalsellingactivetask"
display: "DigitalSellingActiveTask"
entitySetName: "msdyn_digitalsellingactivetasks"
primaryId: "msdyn_digitalsellingactivetaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# DigitalSellingActiveTask

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_digitalsellingactivetask` |
| Display name | DigitalSellingActiveTask |
| Display (plural) | DigitalSellingActiveTasks |
| Schema name | `msdyn_digitalsellingactivetask` |
| Entity set (Web API) | `msdyn_digitalsellingactivetasks` |
| Primary id attribute | `msdyn_digitalsellingactivetaskid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_digitalsellingactivetasks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
POST /api/data/v9.2/msdyn_digitalsellingactivetasks
PATCH /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
DELETE /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_correlationid`, `msdyn_currentstate`, `msdyn_customapiname`, `msdyn_digitalsellingactivetaskId`, `msdyn_entitytype`, `msdyn_inputparameters`, `msdyn_inputtime`, `msdyn_name`, `msdyn_recordid`, `msdyn_retentiontimeindays`, `msdyn_tasktype`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_digitalsellingactivetask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_digitalsellingactivetask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_digitalsellingactivetask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_digitalsellingactivetask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_digitalsellingactivetask` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_digitalsellingactivetask_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingactivetask_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingactivetask_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_digitalsellingactivetask_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_digitalsellingactivetask_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingactivetask_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_digitalsellingactivetask_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_digitalsellingactivetask_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_digitalsellingactivetask.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_digitalsellingactivetask.md) on 2026-05-06.