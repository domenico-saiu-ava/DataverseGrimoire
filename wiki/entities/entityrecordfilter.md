---
logical: "entityrecordfilter"
display: "EntityRecordFilter"
entitySetName: "entityrecordfilters"
primaryId: "entityrecordfilterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# EntityRecordFilter

RecordFilter Object Type Codes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityrecordfilter` |
| Display name | EntityRecordFilter |
| Display (plural) | EntityRecordFilters |
| Schema name | `EntityRecordFilter` |
| Entity set (Web API) | `entityrecordfilters` |
| Primary id attribute | `entityrecordfilterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entityrecordfilters?$select=name&$top=10
GET /api/data/v9.2/entityrecordfilters(<guid>)
POST /api/data/v9.2/entityrecordfilters
PATCH /api/data/v9.2/entityrecordfilters(<guid>)
DELETE /api/data/v9.2/entityrecordfilters(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`EntityRecordFilterId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `ObjectTypeCode`, `OverriddenCreatedOn`, `RecordFilterId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_entityrecordfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entityrecordfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entityrecordfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entityrecordfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_entityrecordfilter` | [organization](organization.md) | `organizationid` | `organizationid` |
| `recordfilter_entityrecordfilter` | [recordfilter](recordfilter.md) | `recordfilterid` | `RecordFilterId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityrecordfilter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityrecordfilter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityrecordfilter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `entityrecordfilter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `entityrecordfilter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityrecordfilter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entityrecordfilter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityrecordfilter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entityrecordfilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityrecordfilter.md) on 2026-05-06.