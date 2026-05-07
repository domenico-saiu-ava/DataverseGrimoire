---
logical: "datalakefolderpermission"
display: "Data Lake Folder Permission"
entitySetName: "datalakefolderpermissions"
primaryId: "datalakefolderpermissionid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Data Lake Folder Permission

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakefolderpermission` |
| Display name | Data Lake Folder Permission |
| Display (plural) | Data Lake Folder Permissions |
| Schema name | `datalakefolderpermission` |
| Entity set (Web API) | `datalakefolderpermissions` |
| Primary id attribute | `datalakefolderpermissionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/datalakefolderpermissions?$select=name&$top=10
GET /api/data/v9.2/datalakefolderpermissions(<guid>)
POST /api/data/v9.2/datalakefolderpermissions
PATCH /api/data/v9.2/datalakefolderpermissions(<guid>)
DELETE /api/data/v9.2/datalakefolderpermissions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **20**

### Writable

`appid`, `canexecute`, `canread`, `canwrite`, `datalakefolderpermission_UniqueName`, `datalakefolderpermissionId`, `folderid`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `statecode`, `statuscode`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakefolder_datalakefolderpermission` | [datalakefolder](datalakefolder.md) | `folderid` | `folderid` |
| `lk_datalakefolderpermission_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakefolderpermission_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakefolderpermission_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakefolderpermission_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakefolderpermission_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolderpermission_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolderpermission_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `datalakefolderpermission_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `datalakefolderpermission_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolderpermission_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `datalakefolderpermission_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolderpermission_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [datalakefolderpermission.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/datalakefolderpermission.md) on 2026-05-06.