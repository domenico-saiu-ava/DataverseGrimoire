---
logical: "msdyn_saruninstance"
display: "SARunInstance"
entitySetName: "msdyn_saruninstances"
primaryId: "msdyn_saruninstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SARunInstance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_saruninstance` |
| Display name | SARunInstance |
| Display (plural) | SARunInstances |
| Schema name | `msdyn_saruninstance` |
| Entity set (Web API) | `msdyn_saruninstances` |
| Primary id attribute | `msdyn_saruninstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_saruninstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_saruninstances(<guid>)
POST /api/data/v9.2/msdyn_saruninstances
PATCH /api/data/v9.2/msdyn_saruninstances(<guid>)
DELETE /api/data/v9.2/msdyn_saruninstances(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_Endtime`, `msdyn_entityname`, `msdyn_InstanceType`, `msdyn_name`, `msdyn_recordids`, `msdyn_RecordsFailedCount`, `msdyn_RecordsSuccededCount`, `msdyn_saruninstanceId`, `msdyn_SegmentId`, `msdyn_StartTime`, `msdyn_TotalRecords`, `msdyn_TriggerType`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_saruninstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_saruninstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_saruninstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_saruninstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_segment_msdyn_saruninstance` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_SegmentId` |
| `organization_msdyn_saruninstance` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_saruninstance_msdyn_sabatchinstance` | _n/a_ | `msdyn_saruninstanceid` | _n/a_ |
| `msdyn_msdyn_saruninstance_msdyn_salesroutingrun_saruninstanceid` | _n/a_ | `msdyn_saruninstanceid` | _n/a_ |
| `msdyn_saruninstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_saruninstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_saruninstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_saruninstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_saruninstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_saruninstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_saruninstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_saruninstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_saruninstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_saruninstance.md) on 2026-05-06.