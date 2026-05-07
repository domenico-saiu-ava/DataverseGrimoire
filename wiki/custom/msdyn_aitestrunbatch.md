---
logical: "msdyn_aitestrunbatch"
display: "AI Test Run Batch"
entitySetName: "msdyn_aitestrunbatches"
primaryId: "msdyn_aitestrunbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Test Run Batch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestrunbatch` |
| Display name | AI Test Run Batch |
| Display (plural) | AI Test Run Batch |
| Schema name | `msdyn_AITestRunBatch` |
| Entity set (Web API) | `msdyn_aitestrunbatches` |
| Primary id attribute | `msdyn_aitestrunbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestrunbatches?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
POST /api/data/v9.2/msdyn_aitestrunbatches
PATCH /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
DELETE /api/data/v9.2/msdyn_aitestrunbatches(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accuracyscore`, `msdyn_aiobjectid`, `msdyn_aiobjecttype`, `msdyn_aitestrunbatchid`, `msdyn_batchrunstatus`, `msdyn_completedon`, `msdyn_description`, `msdyn_errormessage`, `msdyn_lastreviewedon`, `msdyn_name`, `msdyn_runduration`, `msdyn_startedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitestrunbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestrunbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestrunbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestrunbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitestrunbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitestrunbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitestrunbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitestrunbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestrunbatch_SyncErrors` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_DuplicateMatchingRecord` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_DuplicateBaseRecord` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `baserecordid` | `baserecordid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_AsyncOperations` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_MailboxTrackingFolders` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_UserEntityInstanceDatas` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `objectid` | `objectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_ProcessSession` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_BulkDeleteFailures` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_PrincipalObjectAttributeAccesses` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `objectid` | `objectid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_msdyn_aitestrun` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `msdyn_aitestrunbatchid` | `msdyn_AITestRunBatchId` |


## Source

Generated from [msdyn_aitestrunbatch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitestrunbatch')) on 2026-05-07.