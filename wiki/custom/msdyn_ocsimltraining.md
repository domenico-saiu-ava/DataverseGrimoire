---
logical: "msdyn_ocsimltraining"
display: "Dettagli training modello"
entitySetName: "msdyn_ocsimltrainings"
primaryId: "msdyn_ocsimltrainingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli training modello

Indica i dettagli di training del modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsimltraining` |
| Display name | Dettagli training modello |
| Display (plural) | Dettagli training modelli |
| Schema name | `msdyn_ocsimltraining` |
| Entity set (Web API) | `msdyn_ocsimltrainings` |
| Primary id attribute | `msdyn_ocsimltrainingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsimltrainings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
POST /api/data/v9.2/msdyn_ocsimltrainings
PATCH /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
DELETE /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_errordetails`, `msdyn_mltrainingstatus`, `msdyn_name`, `msdyn_ocsimltrainingid`, `msdyn_ocskillidentmlmodelid`, `msdyn_publishaiconfiguration`, `msdyn_publishedon`, `msdyn_trainaiconfiguration`, `msdyn_trainedon`, `msdyn_trainingdatacount`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsimltraining_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsimltraining_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsimltraining_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsimltraining_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsimltraining` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsimltraining` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsimltraining` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsimltraining` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocsimltraining_ocskillidentmlmodeli` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `msdyn_ocsimltraining_publishaiconfigurati` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_ocsimltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsimltraining_SyncErrors` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_DuplicateMatchingRecord` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_DuplicateBaseRecord` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `baserecordid` | `baserecordid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_AsyncOperations` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_MailboxTrackingFolders` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_UserEntityInstanceDatas` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `objectid` | `objectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_ProcessSession` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_BulkDeleteFailures` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsimltraining` |
| `msdyn_ocsimltraining_PrincipalObjectAttributeAccesses` | [msdyn_ocsimltraining](msdyn_ocsimltraining.md) | `objectid` | `objectid_msdyn_ocsimltraining` |


## Source

Generated from [msdyn_ocsimltraining (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsimltraining')) on 2026-05-07.