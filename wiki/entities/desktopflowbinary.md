---
logical: "desktopflowbinary"
display: "Desktop Flow Binary"
entitySetName: "desktopflowbinaries"
primaryId: "desktopflowbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Desktop Flow Binary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `desktopflowbinary` |
| Display name | Desktop Flow Binary |
| Display (plural) | Desktop Flow Binaries |
| Schema name | `desktopflowbinary` |
| Entity set (Web API) | `desktopflowbinaries` |
| Primary id attribute | `desktopflowbinaryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/desktopflowbinaries?$select=name&$top=10
GET /api/data/v9.2/desktopflowbinaries(<guid>)
POST /api/data/v9.2/desktopflowbinaries
PATCH /api/data/v9.2/desktopflowbinaries(<guid>)
DELETE /api/data/v9.2/desktopflowbinaries(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`desktopflowbinaryId`, `DesktopFlowModule`, `ImportSequenceNumber`, `IsCustomizable`, `Metadata`, `MimeType`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Process`, `Reference`, `ReferenceName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Data`, `Data_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_desktopflowbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `dfm_desktopflowbinary_DFM` | [desktopflowmodule](desktopflowmodule.md) | `desktopflowmodule` | `desktopflowmodule` |
| `FileAttachment_desktopflowbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `lk_desktopflowbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_desktopflowbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_desktopflowbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_desktopflowbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_desktopflowbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_desktopflowbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `user_desktopflowbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_desktopflowbinary_Process` | [workflow](workflow.md) | `process` | `Process` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowbinary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowbinary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowbinary_componentversionnrddatasourceset` | _n/a_ | `component` | _n/a_ |
| `desktopflowbinary_componentversions` | _n/a_ | `component` | _n/a_ |
| `desktopflowbinary_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `desktopflowbinary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowbinary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `desktopflowbinary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `desktopflowbinary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [desktopflowbinary.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/desktopflowbinary.md) on 2026-05-06.