---
logical: "msdyn_sabatchruninstance"
display: "SABatchRunInstance"
entitySetName: "msdyn_sabatchruninstances"
primaryId: "msdyn_sabatchruninstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SABatchRunInstance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sabatchruninstance` |
| Display name | SABatchRunInstance |
| Display (plural) | SABatchRunInstances |
| Schema name | `msdyn_sabatchruninstance` |
| Entity set (Web API) | `msdyn_sabatchruninstances` |
| Primary id attribute | `msdyn_sabatchruninstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sabatchruninstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
POST /api/data/v9.2/msdyn_sabatchruninstances
PATCH /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
DELETE /api/data/v9.2/msdyn_sabatchruninstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_runinfo`, `msdyn_sabatchruninstanceId`, `msdyn_SARunInstanceId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sabatchruninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sabatchruninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sabatchruninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sabatchruninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_saruninstance_msdyn_sabatchinstance` | [msdyn_saruninstance](msdyn_saruninstance.md) | `msdyn_saruninstanceid` | `msdyn_SARunInstanceId` |
| `organization_msdyn_sabatchruninstance` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sabatchruninstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabatchruninstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabatchruninstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sabatchruninstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sabatchruninstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabatchruninstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sabatchruninstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabatchruninstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sabatchruninstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sabatchruninstance.md) on 2026-05-06.