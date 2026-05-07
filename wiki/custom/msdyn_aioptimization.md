---
logical: "msdyn_aioptimization"
display: "AI Optimization"
entitySetName: "msdyn_aioptimizations"
primaryId: "msdyn_aioptimizationid"
primaryName: "msdyn_aiobjectid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Optimization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aioptimization` |
| Display name | AI Optimization |
| Display (plural) | AI Optimizations |
| Schema name | `msdyn_AIOptimization` |
| Entity set (Web API) | `msdyn_aioptimizations` |
| Primary id attribute | `msdyn_aioptimizationid` |
| Primary name attribute | `msdyn_aiobjectid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aioptimizations?$select=msdyn_aiobjectid&$top=10
GET /api/data/v9.2/msdyn_aioptimizations(<guid>)
POST /api/data/v9.2/msdyn_aioptimizations
PATCH /api/data/v9.2/msdyn_aioptimizations(<guid>)
DELETE /api/data/v9.2/msdyn_aioptimizations(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aimodelid`, `msdyn_aiobjectid`, `msdyn_aioptimizationid`, `msdyn_aioptimizationprivatedataid`, `msdyn_currentiteration`, `msdyn_currentprompt`, `msdyn_currentscore`, `msdyn_enddate`, `msdyn_evaluationcriteria`, `msdyn_explanation`, `msdyn_modelsettings`, `msdyn_oldscore`, `msdyn_prompthistory`, `msdyn_runstatus`, `msdyn_startdate`, `msdyn_totaliterations`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aioptimization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aioptimization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aioptimization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aioptimization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aioptimization` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aioptimization` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aioptimization` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aioptimization` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aioptimizationprivatedata_msdyn_aioptimization` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `msdyn_aioptimizationprivatedataid` | `msdyn_AIOptimizationPrivateDataId` |
| `msdyn_aioptimization_aimodelid_msdyn_aimodel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aioptimization_SyncErrors` | [msdyn_aioptimization](msdyn_aioptimization.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimization` |
| `msdyn_aioptimization_DuplicateMatchingRecord` | [msdyn_aioptimization](msdyn_aioptimization.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aioptimization` |
| `msdyn_aioptimization_DuplicateBaseRecord` | [msdyn_aioptimization](msdyn_aioptimization.md) | `baserecordid` | `baserecordid_msdyn_aioptimization` |
| `msdyn_aioptimization_AsyncOperations` | [msdyn_aioptimization](msdyn_aioptimization.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimization` |
| `msdyn_aioptimization_MailboxTrackingFolders` | [msdyn_aioptimization](msdyn_aioptimization.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimization` |
| `msdyn_aioptimization_UserEntityInstanceDatas` | [msdyn_aioptimization](msdyn_aioptimization.md) | `objectid` | `objectid_msdyn_aioptimization` |
| `msdyn_aioptimization_ProcessSession` | [msdyn_aioptimization](msdyn_aioptimization.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimization` |
| `msdyn_aioptimization_BulkDeleteFailures` | [msdyn_aioptimization](msdyn_aioptimization.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimization` |
| `msdyn_aioptimization_PrincipalObjectAttributeAccesses` | [msdyn_aioptimization](msdyn_aioptimization.md) | `objectid` | `objectid_msdyn_aioptimization` |


## Source

Generated from [msdyn_aioptimization (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aioptimization')) on 2026-05-07.