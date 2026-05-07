---
logical: "datalakefolder"
display: "Cartella Data Lake"
entitySetName: "datalakefolders"
primaryId: "datalakefolderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cartella Data Lake

Una cartella è un luogo per archiviare i dati in Azure Data Lake.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakefolder` |
| Display name | Cartella Data Lake |
| Display (plural) | Cartelle Data Lake |
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

Writable: **34** · Read-only: **16**

### Writable

`accesstype`, `cdmpath`, `compliancelakelocation`, `containerendpoint`, `contributorsecuritygroupid`, `datalakefolder_uniquename`, `datalakefolderid`, `deltaLakePath`, `extendedproperties`, `importsequencenumber`, `iscompliancelake`, `iscustomercapacity`, `iscustomizable`, `isdeepcopyenabled`, `isexternallake`, `isexternallakereadonly`, `isprivate`, `name`, `overriddencreatedon`, `ownerid`, `owningappid`, `parentfolderid`, `path`, `readersecuritygroupid`, `resourcegroup`, `sharedforreadaccess`, `statecode`, `statuscode`, `subscription`, `synchronizeschematodataverse`, `synchronizeschematosynapsedb`, `tenant`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_datalakefolder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakefolder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakefolder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakefolder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_datalakefolder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_datalakefolder` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_datalakefolder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_datalakefolder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `datalakefolder_datalakesubfolder` | [datalakefolder](datalakefolder.md) | `parentfolderid` | `parentfolderid` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkexternaltablestates` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |
| `synapselinkprofiles` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |
| `msdyn_dataflow_datalakefolder_dlfolder` | [datalakefolder](datalakefolder.md) | `msdyn_datalakefolder` | `msdyn_DatalakeFolder` |
| `datalakefolder_SyncErrors` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolder_DuplicateMatchingRecord` | [datalakefolder](datalakefolder.md) | `duplicaterecordid` | `duplicaterecordid_datalakefolder` |
| `datalakefolder_DuplicateBaseRecord` | [datalakefolder](datalakefolder.md) | `baserecordid` | `baserecordid_datalakefolder` |
| `datalakefolder_AsyncOperations` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolder_MailboxTrackingFolders` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolder_UserEntityInstanceDatas` | [datalakefolder](datalakefolder.md) | `objectid` | `objectid_datalakefolder` |
| `datalakefolder_ProcessSession` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolder_BulkDeleteFailures` | [datalakefolder](datalakefolder.md) | `regardingobjectid` | `regardingobjectid_datalakefolder` |
| `datalakefolder_PrincipalObjectAttributeAccesses` | [datalakefolder](datalakefolder.md) | `objectid` | `objectid_datalakefolder` |
| `datalakefolder_datalakefolderpermission` | [datalakefolder](datalakefolder.md) | `folderid` | `folderid` |
| `datalakefolder_datalakesubfolder` | [datalakefolder](datalakefolder.md) | `parentfolderid` | `parentfolderid` |
| `synapsedatabases` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |


## Source

Generated from [datalakefolder (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='datalakefolder')) on 2026-05-07.