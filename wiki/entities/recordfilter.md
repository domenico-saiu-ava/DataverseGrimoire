---
logical: "recordfilter"
display: "Record Filter"
entitySetName: "recordfilters"
primaryId: "recordfilterid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Record Filter

Record Access Filter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recordfilter` |
| Display name | Record Filter |
| Display (plural) | Record Filters |
| Schema name | `RecordFilter` |
| Entity set (Web API) | `recordfilters` |
| Primary id attribute | `recordfilterid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/recordfilters?$select=displayname&$top=10
GET /api/data/v9.2/recordfilters(<guid>)
POST /api/data/v9.2/recordfilters
PATCH /api/data/v9.2/recordfilters(<guid>)
DELETE /api/data/v9.2/recordfilters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`DisplayName`, `FetchXml`, `FilterLinkedRecords`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `RecordFilterId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `IsRoleBusinessUnitQuery`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recordfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recordfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recordfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recordfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_recordfilter` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recordfilter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recordfilter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recordfilter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `recordfilter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `recordfilter_entityrecordfilter` | _n/a_ | `recordfilterid` | _n/a_ |
| `recordfilter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recordfilter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `recordfilter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recordfilter_roleprivileges` | _n/a_ | `recordfilterid` | _n/a_ |
| `recordfilter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [recordfilter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recordfilter.md) on 2026-05-06.