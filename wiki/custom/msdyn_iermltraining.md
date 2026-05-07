---
logical: "msdyn_iermltraining"
display: "Dettagli training modello di lavoro richiesto"
entitySetName: "msdyn_iermltrainings"
primaryId: "msdyn_iermltrainingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli training modello di lavoro richiesto

Indica i dettagli di training del modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iermltraining` |
| Display name | Dettagli training modello di lavoro richiesto |
| Display (plural) | Dettagli training modelli |
| Schema name | `msdyn_iermltraining` |
| Entity set (Web API) | `msdyn_iermltrainings` |
| Primary id attribute | `msdyn_iermltrainingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iermltrainings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iermltrainings(<guid>)
POST /api/data/v9.2/msdyn_iermltrainings
PATCH /api/data/v9.2/msdyn_iermltrainings(<guid>)
DELETE /api/data/v9.2/msdyn_iermltrainings(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_errordetails`, `msdyn_iermlmodelid`, `msdyn_iermltrainingid`, `msdyn_mltrainingstatus`, `msdyn_name`, `msdyn_publishaiconfiguration`, `msdyn_publishedon`, `msdyn_trainaiconfiguration`, `msdyn_trainedon`, `msdyn_trainingdatacount`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iermltraining_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iermltraining_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iermltraining_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iermltraining_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iermltraining` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iermltraining` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iermltraining` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iermltraining` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_iermltraining_iermlmodel` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `msdyn_iermlmodelid` | `msdyn_iermlmodelid` |
| `msdyn_iermltraining_publishaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_iermltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iermltraining_SyncErrors` | [msdyn_iermltraining](msdyn_iermltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermltraining` |
| `msdyn_iermltraining_DuplicateMatchingRecord` | [msdyn_iermltraining](msdyn_iermltraining.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iermltraining` |
| `msdyn_iermltraining_DuplicateBaseRecord` | [msdyn_iermltraining](msdyn_iermltraining.md) | `baserecordid` | `baserecordid_msdyn_iermltraining` |
| `msdyn_iermltraining_AsyncOperations` | [msdyn_iermltraining](msdyn_iermltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermltraining` |
| `msdyn_iermltraining_MailboxTrackingFolders` | [msdyn_iermltraining](msdyn_iermltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermltraining` |
| `msdyn_iermltraining_UserEntityInstanceDatas` | [msdyn_iermltraining](msdyn_iermltraining.md) | `objectid` | `objectid_msdyn_iermltraining` |
| `msdyn_iermltraining_ProcessSession` | [msdyn_iermltraining](msdyn_iermltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermltraining` |
| `msdyn_iermltraining_BulkDeleteFailures` | [msdyn_iermltraining](msdyn_iermltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermltraining` |
| `msdyn_iermltraining_PrincipalObjectAttributeAccesses` | [msdyn_iermltraining](msdyn_iermltraining.md) | `objectid` | `objectid_msdyn_iermltraining` |


## Source

Generated from [msdyn_iermltraining (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iermltraining')) on 2026-05-07.