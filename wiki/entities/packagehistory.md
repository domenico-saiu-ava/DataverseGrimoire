---
logical: "packagehistory"
display: "Package History"
entitySetName: "packagehistories"
primaryId: "packagehistoryid"
primaryName: "executionname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Package History

## Identity

| Property | Value |
| --- | --- |
| Logical name | `packagehistory` |
| Display name | Package History |
| Display (plural) | Package Histories |
| Schema name | `packagehistory` |
| Entity set (Web API) | `packagehistories` |
| Primary id attribute | `packagehistoryid` |
| Primary name attribute | `executionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/packagehistories?$select=executionname&$top=10
GET /api/data/v9.2/packagehistories(<guid>)
POST /api/data/v9.2/packagehistories
PATCH /api/data/v9.2/packagehistories(<guid>)
DELETE /api/data/v9.2/packagehistories(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ApplicationId`, `ApplicationName`, `CatalogId`, `CorrelationId`, `DeployAsUserId`, `DeploymentMessageId`, `ExecutionName`, `ImportSequenceNumber`, `IsClusterOperation`, `OperationId`, `OverriddenCreatedOn`, `packagehistoryId`, `PackageId`, `PackageInstanceId`, `PackageType`, `Priority`, `PublisherId`, `PublisherName`, `Settings`, `StageValue`, `statecode`, `statuscode`, `StatusMessage`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeploymentLog`, `DeploymentLog_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `PackageFile`, `PackageFile_Name`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_packagehistory_DeploymentLog` | [fileattachment](fileattachment.md) | `deploymentlog` | `deploymentlog` |
| `FileAttachment_packagehistory_PackageFile` | [fileattachment](fileattachment.md) | `packagefile` | `packagefile` |
| `lk_packagehistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_packagehistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_packagehistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_packagehistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_packagehistory` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `packagehistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `packagehistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `packagehistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `packagehistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `packagehistory_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `packagehistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `packagehistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `packagehistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `packagehistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [packagehistory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/packagehistory.md) on 2026-05-06.