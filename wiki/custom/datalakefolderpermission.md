---
logical: "datalakefolderpermission"
display: "Autorizzazione della cartella Data Lake"
entitySetName: "datalakefolderpermissions"
primaryId: "datalakefolderpermissionid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Autorizzazione della cartella Data Lake

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakefolderpermission` |
| Display name | Autorizzazione della cartella Data Lake |
| Display (plural) | Autorizzazioni della cartella Data Lake |
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

Writable: **13** · Read-only: **19**

### Writable

`appid`, `canexecute`, `canread`, `canwrite`, `datalakefolderpermission_uniquename`, `datalakefolderpermissionid`, `folderid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_datalakefolderpermission_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakefolderpermission_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakefolderpermission_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakefolderpermission_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `datalakefolder_datalakefolderpermission` | [datalakefolder](datalakefolder.md) | `folderid` | `folderid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakefolderpermission_SyncErrors` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakefolderpermission_DuplicateMatchingRecord` | [datalakefolderpermission](datalakefolderpermission.md) | `duplicaterecordid` | `duplicaterecordid_datalakefolderpermission` |
| `datalakefolderpermission_DuplicateBaseRecord` | [datalakefolderpermission](datalakefolderpermission.md) | `baserecordid` | `baserecordid_datalakefolderpermission` |
| `datalakefolderpermission_AsyncOperations` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakefolderpermission_MailboxTrackingFolders` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakefolderpermission_UserEntityInstanceDatas` | [datalakefolderpermission](datalakefolderpermission.md) | `objectid` | `objectid_datalakefolderpermission` |
| `datalakefolderpermission_ProcessSession` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakefolderpermission_BulkDeleteFailures` | [datalakefolderpermission](datalakefolderpermission.md) | `regardingobjectid` | `regardingobjectid_datalakefolderpermission` |
| `datalakefolderpermission_PrincipalObjectAttributeAccesses` | [datalakefolderpermission](datalakefolderpermission.md) | `objectid` | `objectid_datalakefolderpermission` |


## Source

Generated from [datalakefolderpermission (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='datalakefolderpermission')) on 2026-05-07.