---
logical: "datalakefolder"
display: "Data Lake Folder"
entitySetName: "datalakefolders"
primaryId: "datalakefolderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Lake Folder

A folder is a place to store data in Azure Data Lake.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakefolder` |
| Display name | Data Lake Folder |
| Display (plural) | Data Lake Folders |
| Schema name | `datalakefolder` |
| Entity set (Web API) | `datalakefolders` |
| Primary id attribute | `datalakefolderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/datalakefolders?$select=name&$top=10
GET /api/data/v9.2/datalakefolders(<guid>)
POST /api/data/v9.2/datalakefolders
PATCH /api/data/v9.2/datalakefolders(<guid>)
DELETE /api/data/v9.2/datalakefolders(<guid>)
```

## Attributes

Writable: **35** · Read-only: **18**

### Writable

`AccessType`, `CDMPath`, `ComplianceLakeLocation`, `containerendpoint`, `ContributorSecurityGroupId`, `datalakefolder_UniqueName`, `datalakefolderId`, `deltaLakePath`, `extendedproperties`, `ImportSequenceNumber`, `IsComplianceLake`, `iscustomercapacity`, `IsCustomizable`, `isdeepcopyenabled`, `IsExternalLake`, `IsExternalLakeReadOnly`, `isprivate`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `owningappid`, `parentfolderid`, `path`, `ReaderSecurityGroupId`, `ResourceGroup`, `sharedforreadaccess`, `statecode`, `statuscode`, `Subscription`, `SynchronizeSchemaToDataverse`, `SynchronizeSchemaToSynapseDb`, `Tenant`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_datalakefolder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `datalakefolder_datalakesubfolder` | [datalakefolder](datalakefolder.md) | `parentfolderid` | `parentfolderid` |
| `lk_datalakefolder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakefolder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakefolder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakefolder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_datalakefolder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_datalakefolder` | [team](team.md) | `owningteam` | `owningteam` |
| `user_datalakefolder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakefolder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolder_datalakefolderpermission` | _n/a_ | `folderid` | _n/a_ |
| `datalakefolder_datalakesubfolder` | _n/a_ | `parentfolderid` | _n/a_ |
| `datalakefolder_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `datalakefolder_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `datalakefolder_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolder_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `datalakefolder_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `datalakefolder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_datalakefolder_dlfolder` | _n/a_ | `msdyn_datalakefolder` | _n/a_ |
| `synapsedatabases` | _n/a_ | `datalakefolder` | _n/a_ |
| `synapselinkexternaltablestates` | _n/a_ | `datalakefolder` | _n/a_ |
| `synapselinkprofiles` | _n/a_ | `datalakefolder` | _n/a_ |


## Source

Generated from [datalakefolder.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/datalakefolder.md) on 2026-05-06.