---
logical: "datalakeworkspace"
display: "Data Lake Workspace"
entitySetName: "datalakeworkspaces"
primaryId: "datalakeworkspaceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Data Lake Workspace

A workspace is a place to store data in Azure Data Lake.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakeworkspace` |
| Display name | Data Lake Workspace |
| Display (plural) | Data Lake Workspaces |
| Schema name | `datalakeworkspace` |
| Entity set (Web API) | `datalakeworkspaces` |
| Primary id attribute | `datalakeworkspaceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/datalakeworkspaces?$select=name&$top=10
GET /api/data/v9.2/datalakeworkspaces(<guid>)
POST /api/data/v9.2/datalakeworkspaces
PATCH /api/data/v9.2/datalakeworkspaces(<guid>)
DELETE /api/data/v9.2/datalakeworkspaces(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`datalakeworkspace_UniqueName`, `datalakeworkspaceId`, `ImportSequenceNumber`, `iscustomercapacity`, `IsCustomizable`, `isdeepcopyenabled`, `isprivate`, `name`, `OverriddenCreatedOn`, `owningappid`, `tenantid`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `whitelistedappid`

### Read-only

`ComponentIdUnique`, `ComponentState`, `containerendpoint`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `path`, `SolutionId`, `statecode`, `statuscode`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_datalakeworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakeworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakeworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakeworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_datalakeworkspace` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakeworkspace_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspace_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspace_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `datalakeworkspace_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `datalakeworkspace_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspace_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `datalakeworkspace_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspace_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspace_workspacepermission` | _n/a_ | `workspaceid` | _n/a_ |


## Source

Generated from [datalakeworkspace.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/datalakeworkspace.md) on 2026-05-06.