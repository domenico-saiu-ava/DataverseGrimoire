---
logical: "datalakeworkspacepermission"
display: "Data Lake Workspace Permission"
entitySetName: "datalakeworkspacepermissions"
primaryId: "datalakeworkspacepermissionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Data Lake Workspace Permission

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakeworkspacepermission` |
| Display name | Data Lake Workspace Permission |
| Display (plural) | Data Lake Workspace Permissions |
| Schema name | `datalakeworkspacepermission` |
| Entity set (Web API) | `datalakeworkspacepermissions` |
| Primary id attribute | `datalakeworkspacepermissionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/datalakeworkspacepermissions?$select=name&$top=10
GET /api/data/v9.2/datalakeworkspacepermissions(<guid>)
POST /api/data/v9.2/datalakeworkspacepermissions
PATCH /api/data/v9.2/datalakeworkspacepermissions(<guid>)
DELETE /api/data/v9.2/datalakeworkspacepermissions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`appid`, `canexecute`, `canread`, `canwrite`, `datalakeworkspacepermission_UniqueName`, `datalakeworkspacepermissionId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `tenantid`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `whitelistedappid`, `workspaceid`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `statecode`, `statuscode`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakeworkspace_workspacepermission` | [datalakeworkspace](datalakeworkspace.md) | `workspaceid` | `workspaceid` |
| `lk_datalakeworkspacepermission_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakeworkspacepermission_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakeworkspacepermission_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakeworkspacepermission_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_datalakeworkspacepermission` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakeworkspacepermission_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspacepermission_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspacepermission_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `datalakeworkspacepermission_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `datalakeworkspacepermission_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspacepermission_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `datalakeworkspacepermission_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakeworkspacepermission_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [datalakeworkspacepermission.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/datalakeworkspacepermission.md) on 2026-05-06.