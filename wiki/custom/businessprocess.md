---
logical: "businessprocess"
display: "Processo aziendale"
entitySetName: "businessprocesses"
primaryId: "businessprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo aziendale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessprocess` |
| Display name | Processo aziendale |
| Display (plural) | Processi aziendali |
| Schema name | `businessprocess` |
| Entity set (Web API) | `businessprocesses` |
| Primary id attribute | `businessprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/businessprocesses?$select=name&$top=10
GET /api/data/v9.2/businessprocesses(<guid>)
POST /api/data/v9.2/businessprocesses
PATCH /api/data/v9.2/businessprocesses(<guid>)
DELETE /api/data/v9.2/businessprocesses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`businessprocessid`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `processingcontext`, `processmap`, `processmapcreatedon`, `processmapstatus`, `processmapversion`, `rootworkflowid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_businessprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_businessprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_businessprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_businessprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_businessprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_businessprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `workflow_businessprocess` | [workflow](workflow.md) | `rootworkflowid` | `rootworkflowid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `businessprocesslinkedartifact_businessprocess_businessprocess` | [businessprocess](businessprocess.md) | `businessprocess` | `businessprocess` |
| `businessprocess_SyncErrors` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessprocess_DuplicateMatchingRecord` | [businessprocess](businessprocess.md) | `duplicaterecordid` | `duplicaterecordid_businessprocess` |
| `businessprocess_DuplicateBaseRecord` | [businessprocess](businessprocess.md) | `baserecordid` | `baserecordid_businessprocess` |
| `businessprocess_AsyncOperations` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessprocess_MailboxTrackingFolders` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessprocess_UserEntityInstanceDatas` | [businessprocess](businessprocess.md) | `objectid` | `objectid_businessprocess` |
| `businessprocess_ProcessSession` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessprocess_BulkDeleteFailures` | [businessprocess](businessprocess.md) | `regardingobjectid` | `regardingobjectid_businessprocess` |
| `businessprocess_PrincipalObjectAttributeAccesses` | [businessprocess](businessprocess.md) | `objectid` | `objectid_businessprocess` |
| `msdyn_businessprocess_msdyn_pminferredtask_msdyn_businessprocessid` | [businessprocess](businessprocess.md) | `msdyn_businessprocessid` | `msdyn_businessprocessid` |


## Source

Generated from [businessprocess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='businessprocess')) on 2026-05-07.