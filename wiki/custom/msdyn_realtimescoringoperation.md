---
logical: "msdyn_realtimescoringoperation"
display: "Operazione punteggio in tempo reale"
entitySetName: "msdyn_realtimescoringoperations"
primaryId: "msdyn_realtimescoringoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione punteggio in tempo reale

Archivia i metadati per il processo di assegnazione dei punteggi in tempo reale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_realtimescoringoperation` |
| Display name | Operazione punteggio in tempo reale |
| Display (plural) | Operazioni di punteggio in tempo reale |
| Schema name | `msdyn_realtimescoringoperation` |
| Entity set (Web API) | `msdyn_realtimescoringoperations` |
| Primary id attribute | `msdyn_realtimescoringoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_realtimescoringoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
POST /api/data/v9.2/msdyn_realtimescoringoperations
PATCH /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
DELETE /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
```

## Attributes

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_created`, `msdyn_dockerimagename`, `msdyn_expirydatetime`, `msdyn_explanationpath`, `msdyn_finished`, `msdyn_islandurl`, `msdyn_jobid`, `msdyn_modelid`, `msdyn_modelpath`, `msdyn_name`, `msdyn_operationguid`, `msdyn_operationid`, `msdyn_predictionguid`, `msdyn_predictionname`, `msdyn_realtimescoringoperationid`, `msdyn_retrycounter`, `msdyn_rtsadditionalparameters`, `msdyn_rtstriggerid`, `msdyn_state`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_realtimescoringoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_realtimescoringoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_realtimescoringoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_realtimescoringoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_realtimescoringoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_realtimescoringoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_realtimescoringoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_realtimescoringoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_realtimescoringoperation_SyncErrors` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_DuplicateMatchingRecord` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_DuplicateBaseRecord` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `baserecordid` | `baserecordid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_AsyncOperations` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_MailboxTrackingFolders` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_UserEntityInstanceDatas` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `objectid` | `objectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_ProcessSession` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_BulkDeleteFailures` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoringoperation` |
| `msdyn_realtimescoringoperation_PrincipalObjectAttributeAccesses` | [msdyn_realtimescoringoperation](msdyn_realtimescoringoperation.md) | `objectid` | `objectid_msdyn_realtimescoringoperation` |


## Source

Generated from [msdyn_realtimescoringoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_realtimescoringoperation')) on 2026-05-07.