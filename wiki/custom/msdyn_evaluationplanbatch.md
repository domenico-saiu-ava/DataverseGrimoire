---
logical: "msdyn_evaluationplanbatch"
display: "Batch piano di valutazione"
entitySetName: "msdyn_evaluationplanbatchs"
primaryId: "msdyn_evaluationplanbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Batch piano di valutazione

Contiene un batch di record per creare valutazioni in blocco per un piano di valutazione 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanbatch` |
| Display name | Batch piano di valutazione |
| Display (plural) | Batch piano di valutazione |
| Schema name | `msdyn_EvaluationPlanBatch` |
| Entity set (Web API) | `msdyn_evaluationplanbatchs` |
| Primary id attribute | `msdyn_evaluationplanbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanbatchs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanbatchs
PATCH /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanbatchs(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assignedto`, `msdyn_batchprocessingcompletedon`, `msdyn_batchprocessingstartedon`, `msdyn_batchsize`, `msdyn_criteriajson`, `msdyn_evaluationmethod`, `msdyn_evaluationplanbatchid`, `msdyn_evaluationplanbatchids`, `msdyn_evaluationplanrun`, `msdyn_evaluationscreated`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanbatch_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `lk_msdyn_evaluationplanbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationplanbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationplanbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationplanbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationplanbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationplanbatch_EvaluationPlanRun_msdyn_evaluationplanrun` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `msdyn_evaluationplanrun` | `msdyn_EvaluationPlanRun` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanbatch_SyncErrors` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_DuplicateMatchingRecord` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_DuplicateBaseRecord` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `baserecordid` | `baserecordid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_AsyncOperations` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_MailboxTrackingFolders` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_UserEntityInstanceDatas` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `objectid` | `objectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_ProcessSession` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_BulkDeleteFailures` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanbatch` |
| `msdyn_evaluationplanbatch_PrincipalObjectAttributeAccesses` | [msdyn_evaluationplanbatch](msdyn_evaluationplanbatch.md) | `objectid` | `objectid_msdyn_evaluationplanbatch` |


## Source

Generated from [msdyn_evaluationplanbatch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationplanbatch')) on 2026-05-07.