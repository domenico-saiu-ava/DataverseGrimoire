---
logical: "msdyn_dataflow_datalakefolder"
display: "Dataflow DatalakeFolder"
entitySetName: "msdyn_dataflow_datalakefolders"
primaryId: "msdyn_dataflow_datalakefolderid"
primaryName: "msdyn_dataflow_datalakefolder"
tableType: "Standard"
ownership: "UserOwned"
---

# Dataflow DatalakeFolder

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflow_datalakefolder` |
| Display name | Dataflow DatalakeFolder |
| Display (plural) | Dataflow DatalakeFolders |
| Schema name | `msdyn_dataflow_datalakefolder` |
| Entity set (Web API) | `msdyn_dataflow_datalakefolders` |
| Primary id attribute | `msdyn_dataflow_datalakefolderid` |
| Primary name attribute | `msdyn_dataflow_datalakefolder` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflow_datalakefolders?$select=msdyn_dataflow_datalakefolder&$top=10
GET /api/data/v9.2/msdyn_dataflow_datalakefolders(<guid>)
POST /api/data/v9.2/msdyn_dataflow_datalakefolders
PATCH /api/data/v9.2/msdyn_dataflow_datalakefolders(<guid>)
DELETE /api/data/v9.2/msdyn_dataflow_datalakefolders(<guid>)
```

## Attributes

Writable: **15** · Read-only: **19**

### Writable

`dataflowid`, `datalakefolderid`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataflow_datalakefolder`, `msdyn_dataflow_datalakefolderId`, `msdyn_DatalakeFolder`, `originaldataflowid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_Dataflow`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataflow_datalakefolder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataflow_datalakefolder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflow_datalakefolder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflow_datalakefolder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflow_datalakefolder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dataflow_datalakefolder_dataflow` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |
| `msdyn_dataflow_datalakefolder_dlfolder` | [datalakefolder](datalakefolder.md) | `msdyn_datalakefolder` | `msdyn_DatalakeFolder` |
| `owner_msdyn_dataflow_datalakefolder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataflow_datalakefolder` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataflow_datalakefolder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflow_datalakefolder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataflow_datalakefolder.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dataflow_datalakefolder.md) on 2026-05-06.