---
logical: "powerbidataset"
display: "Power BI Dataset"
entitySetName: "powerbidatasets"
primaryId: "powerbidatasetid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Power BI Dataset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbidataset` |
| Display name | Power BI Dataset |
| Display (plural) | Power BI Datasets |
| Schema name | `powerbidataset` |
| Entity set (Web API) | `powerbidatasets` |
| Primary id attribute | `powerbidatasetid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbidatasets?$select=name&$top=10
GET /api/data/v9.2/powerbidatasets(<guid>)
POST /api/data/v9.2/powerbidatasets
PATCH /api/data/v9.2/powerbidatasets(<guid>)
DELETE /api/data/v9.2/powerbidatasets(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`DatasetObjectId`, `DatasetOriginalObjectId`, `DataverseConnectionUpdateEnabled`, `Etag`, `ImportPowerBIComponentSequenceNumber`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerbidatasetId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `WorkspaceObjectId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Package`, `Package_Name`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerbidataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerbidataset_Package` | [fileattachment](fileattachment.md) | `package` | `package` |
| `lk_powerbidataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbidataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbidataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbidataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerbidataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerbidataset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerbidataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbidataset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidataset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidataset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerbidataset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerbidataset_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerbidataset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidataset_powerbimashupparameter` | _n/a_ | `datasetid` | _n/a_ |
| `powerbidataset_powerbireport` | _n/a_ | `datasetid` | _n/a_ |
| `powerbidataset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerbidataset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbidataset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerbidataset.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerbidataset.md) on 2026-05-06.