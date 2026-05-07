---
logical: "msdyn_aioptimizationprivatedata"
display: "AI Optimization Private Data"
entitySetName: "msdyn_aioptimizationprivatedatas"
primaryId: "msdyn_aioptimizationprivatedataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Optimization Private Data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aioptimizationprivatedata` |
| Display name | AI Optimization Private Data |
| Display (plural) | AI Optimization Private Datas |
| Schema name | `msdyn_AIOptimizationPrivateData` |
| Entity set (Web API) | `msdyn_aioptimizationprivatedatas` |
| Primary id attribute | `msdyn_aioptimizationprivatedataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aioptimizationprivatedatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aioptimizationprivatedatas(<guid>)
POST /api/data/v9.2/msdyn_aioptimizationprivatedatas
PATCH /api/data/v9.2/msdyn_aioptimizationprivatedatas(<guid>)
DELETE /api/data/v9.2/msdyn_aioptimizationprivatedatas(<guid>)
```

## Attributes

Writable: **11** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aioptimizationprivatedataid`, `msdyn_currentgradient`, `msdyn_currenttestscores`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_tests`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aioptimizationprivatedata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aioptimizationprivatedata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aioptimizationprivatedata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aioptimizationprivatedata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aioptimizationprivatedata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aioptimizationprivatedata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aioptimizationprivatedata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aioptimizationprivatedata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIOptimizationPrivateData_msdyn_Tests` | [fileattachment](fileattachment.md) | `msdyn_tests` | `msdyn_tests` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aioptimizationprivatedata_SyncErrors` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_DuplicateMatchingRecord` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_DuplicateBaseRecord` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `baserecordid` | `baserecordid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_AsyncOperations` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_MailboxTrackingFolders` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_UserEntityInstanceDatas` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `objectid` | `objectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_ProcessSession` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_BulkDeleteFailures` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_PrincipalObjectAttributeAccesses` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `objectid` | `objectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_FileAttachments` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `objectid` | `objectid_msdyn_aioptimizationprivatedata` |
| `msdyn_aioptimizationprivatedata_msdyn_aioptimization` | [msdyn_aioptimizationprivatedata](msdyn_aioptimizationprivatedata.md) | `msdyn_aioptimizationprivatedataid` | `msdyn_AIOptimizationPrivateDataId` |


## Source

Generated from [msdyn_aioptimizationprivatedata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aioptimizationprivatedata')) on 2026-05-07.