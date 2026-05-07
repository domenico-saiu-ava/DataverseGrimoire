---
logical: "powerbireport"
display: "Power BI Report"
entitySetName: "powerbireports"
primaryId: "powerbireportid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Power BI Report

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbireport` |
| Display name | Power BI Report |
| Display (plural) | Power BI Reports |
| Schema name | `powerbireport` |
| Entity set (Web API) | `powerbireports` |
| Primary id attribute | `powerbireportid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbireports?$select=name&$top=10
GET /api/data/v9.2/powerbireports(<guid>)
POST /api/data/v9.2/powerbireports
PATCH /api/data/v9.2/powerbireports(<guid>)
DELETE /api/data/v9.2/powerbireports(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`DatasetId`, `Etag`, `ImportPowerBIComponentSequenceNumber`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerbireportId`, `ReportObjectId`, `ReportOriginalObjectId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `WorkspaceObjectId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Package`, `Package_Name`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerbireport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerbireport_Package` | [fileattachment](fileattachment.md) | `package` | `package` |
| `lk_powerbireport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbireport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbireport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbireport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerbireport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerbidataset_powerbireport` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |
| `team_powerbireport` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerbireport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbireport_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireport_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireport_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerbireport_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerbireport_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerbireport_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireport_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerbireport_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbireport_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerbireport.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerbireport.md) on 2026-05-06.