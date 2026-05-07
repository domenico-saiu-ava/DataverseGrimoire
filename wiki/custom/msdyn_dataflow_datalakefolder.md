---
logical: "msdyn_dataflow_datalakefolder"
display: "DatalakeFolder flusso di dati"
entitySetName: "msdyn_dataflow_datalakefolders"
primaryId: "msdyn_dataflow_datalakefolderid"
primaryName: "msdyn_dataflow_datalakefolder"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DatalakeFolder flusso di dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflow_datalakefolder` |
| Display name | DatalakeFolder flusso di dati |
| Display (plural) | DatalakeFolders flusso di dati |
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

Writable: **14** · Read-only: **17**

### Writable

`dataflowid`, `datalakefolderid`, `importsequencenumber`, `iscustomizable`, `msdyn_dataflow_datalakefolder`, `msdyn_dataflow_datalakefolderid`, `msdyn_datalakefolder`, `originaldataflowid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_dataflow`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataflow_datalakefolder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflow_datalakefolder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflow_datalakefolder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflow_datalakefolder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataflow_datalakefolder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataflow_datalakefolder` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataflow_datalakefolder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataflow_datalakefolder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataflow_datalakefolder_dataflow` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |
| `msdyn_dataflow_datalakefolder_dlfolder` | [datalakefolder](datalakefolder.md) | `msdyn_datalakefolder` | `msdyn_DatalakeFolder` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflow_datalakefolder_SyncErrors` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_DuplicateMatchingRecord` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_DuplicateBaseRecord` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `baserecordid` | `baserecordid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_AsyncOperations` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_MailboxTrackingFolders` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_UserEntityInstanceDatas` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `objectid` | `objectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_ProcessSession` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_BulkDeleteFailures` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_PrincipalObjectAttributeAccesses` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `objectid` | `objectid_msdyn_dataflow_datalakefolder` |


## Source

Generated from [msdyn_dataflow_datalakefolder (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataflow_datalakefolder')) on 2026-05-07.