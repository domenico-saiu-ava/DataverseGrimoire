---
logical: "msdyn_predictioncomputationoperation"
display: "Operazione di calcolo previsione"
entitySetName: "msdyn_predictioncomputationoperations"
primaryId: "msdyn_predictioncomputationoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione di calcolo previsione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictioncomputationoperation` |
| Display name | Operazione di calcolo previsione |
| Display (plural) | Operazioni di calcolo della previsione |
| Schema name | `msdyn_predictioncomputationoperation` |
| Entity set (Web API) | `msdyn_predictioncomputationoperations` |
| Primary id attribute | `msdyn_predictioncomputationoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictioncomputationoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
POST /api/data/v9.2/msdyn_predictioncomputationoperations
PATCH /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
DELETE /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_computationtriggerid`, `msdyn_created`, `msdyn_dockerimagename`, `msdyn_expirydatetime`, `msdyn_explanationpath`, `msdyn_finished`, `msdyn_islandurl`, `msdyn_jobid`, `msdyn_modelid`, `msdyn_modelpath`, `msdyn_name`, `msdyn_operationguid`, `msdyn_operationid`, `msdyn_predictioncomputationoperationid`, `msdyn_predictionguid`, `msdyn_predictionname`, `msdyn_resultpath`, `msdyn_retrycounter`, `msdyn_state`, `msdyn_timespentcrmsyncsijobid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictioncomputationoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictioncomputationoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictioncomputationoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictioncomputationoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_predictioncomputationoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_predictioncomputationoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_predictioncomputationoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_predictioncomputationoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictioncomputationoperation_SyncErrors` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_DuplicateMatchingRecord` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_DuplicateBaseRecord` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `baserecordid` | `baserecordid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_AsyncOperations` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_MailboxTrackingFolders` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_UserEntityInstanceDatas` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `objectid` | `objectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_ProcessSession` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_BulkDeleteFailures` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictioncomputationoperation` |
| `msdyn_predictioncomputationoperation_PrincipalObjectAttributeAccesses` | [msdyn_predictioncomputationoperation](msdyn_predictioncomputationoperation.md) | `objectid` | `objectid_msdyn_predictioncomputationoperation` |


## Source

Generated from [msdyn_predictioncomputationoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictioncomputationoperation')) on 2026-05-07.