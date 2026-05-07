---
logical: "stagedmetadataasyncoperation"
display: "Staged Metadata Async Operation"
entitySetName: "stagedmetadataasyncoperations"
primaryId: "stagedmetadataasyncoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Staged Metadata Async Operation

Stores staged entity metadata to be processed before fully created.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedmetadataasyncoperation` |
| Display name | Staged Metadata Async Operation |
| Display (plural) | Staged Metadata Async Operations |
| Schema name | `StagedMetadataAsyncOperation` |
| Entity set (Web API) | `stagedmetadataasyncoperations` |
| Primary id attribute | `stagedmetadataasyncoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedmetadataasyncoperations?$select=name&$top=10
GET /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
POST /api/data/v9.2/stagedmetadataasyncoperations
PATCH /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
DELETE /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
```

## Attributes

Writable: **6** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`AsyncJobStatus`, `AsyncOperationId`, `ComponentType`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `ObjectId`, `StagedMetadataAsyncOperationId`, `UnprocessedDependencies`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedmetadataasyncoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedmetadataasyncoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedmetadataasyncoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedmetadataasyncoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedmetadataasyncoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedmetadataasyncoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedmetadataasyncoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedmetadataasyncoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `stagedmetadataasyncoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedmetadataasyncoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [stagedmetadataasyncoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/stagedmetadataasyncoperation.md) on 2026-05-06.