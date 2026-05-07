---
logical: "package"
display: "Package"
entitySetName: "packages"
primaryId: "packageid"
primaryName: "packageuniquename"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Package

## Identity

| Property | Value |
| --- | --- |
| Logical name | `package` |
| Display name | Package |
| Display (plural) | Packages |
| Schema name | `package` |
| Entity set (Web API) | `packages` |
| Primary id attribute | `packageid` |
| Primary name attribute | `packageuniquename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/packages?$select=packageuniquename&$top=10
GET /api/data/v9.2/packages(<guid>)
POST /api/data/v9.2/packages
PATCH /api/data/v9.2/packages(<guid>)
DELETE /api/data/v9.2/packages(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`AppId`, `ApplicationName`, `CatalogId`, `ImportSequenceNumber`, `InstalledOn`, `OverriddenCreatedOn`, `packageId`, `PackageInstanceId`, `PackageInstanceOperationId`, `PackageUniqueName`, `PackageVersion`, `PublisherId`, `PublisherName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TPSPackageId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeploymentLog`, `DeploymentLog_Name`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_package_DeploymentLog` | [fileattachment](fileattachment.md) | `deploymentlog` | `deploymentlog` |
| `lk_package_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_package_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_package_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_package_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_package` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `package_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `package_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `package_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `package_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `package_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `package_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `package_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `package_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_solution` | [packageid](packageid.md) | _n/a_ | _n/a_ |

## Source

Generated from [package.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/package.md) on 2026-05-06.