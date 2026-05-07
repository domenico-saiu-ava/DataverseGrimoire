---
logical: "desktopflowmodule"
display: "Desktop Flow Module"
entitySetName: "desktopflowmodules"
primaryId: "desktopflowmoduleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Desktop Flow Module

## Identity

| Property | Value |
| --- | --- |
| Logical name | `desktopflowmodule` |
| Display name | Desktop Flow Module |
| Display (plural) | Desktop Flow Modules |
| Schema name | `desktopflowmodule` |
| Entity set (Web API) | `desktopflowmodules` |
| Primary id attribute | `desktopflowmoduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/desktopflowmodules?$select=name&$top=10
GET /api/data/v9.2/desktopflowmodules(<guid>)
POST /api/data/v9.2/desktopflowmodules
PATCH /api/data/v9.2/desktopflowmodules(<guid>)
DELETE /api/data/v9.2/desktopflowmodules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **20**

### Writable

`description`, `desktopflowmoduleId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Data`, `Data_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_desktopflowmodule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_desktopflowmodule_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `lk_desktopflowmodule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_desktopflowmodule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_desktopflowmodule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_desktopflowmodule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_desktopflowmodule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_desktopflowmodule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_desktopflowmodule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowmodule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowmodule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowmodule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `desktopflowmodule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `desktopflowmodule_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `desktopflowmodule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowmodule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `desktopflowmodule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowmodule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dfm_desktopflowbinary_DFM` | _n/a_ | `desktopflowmodule` | _n/a_ |


## Source

Generated from [desktopflowmodule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/desktopflowmodule.md) on 2026-05-06.