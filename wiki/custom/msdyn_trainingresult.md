---
logical: "msdyn_trainingresult"
display: "Risultato training"
entitySetName: "msdyn_trainingresults"
primaryId: "msdyn_trainingresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato training

Archivia i risultati del training per il modello

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_trainingresult` |
| Display name | Risultato training |
| Display (plural) | Risultati training |
| Schema name | `msdyn_trainingresult` |
| Entity set (Web API) | `msdyn_trainingresults` |
| Primary id attribute | `msdyn_trainingresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_trainingresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_trainingresults(<guid>)
POST /api/data/v9.2/msdyn_trainingresults
PATCH /api/data/v9.2/msdyn_trainingresults(<guid>)
DELETE /api/data/v9.2/msdyn_trainingresults(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_modelaccuracymetrics`, `msdyn_modelid`, `msdyn_name`, `msdyn_predictiondistribution`, `msdyn_predictionguid`, `msdyn_predictionname`, `msdyn_trainingresultid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_trainingresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_trainingresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_trainingresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_trainingresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_trainingresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_trainingresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_trainingresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_trainingresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_trainingresult_SyncErrors` | [msdyn_trainingresult](msdyn_trainingresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_trainingresult` |
| `msdyn_trainingresult_DuplicateMatchingRecord` | [msdyn_trainingresult](msdyn_trainingresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_trainingresult` |
| `msdyn_trainingresult_DuplicateBaseRecord` | [msdyn_trainingresult](msdyn_trainingresult.md) | `baserecordid` | `baserecordid_msdyn_trainingresult` |
| `msdyn_trainingresult_AsyncOperations` | [msdyn_trainingresult](msdyn_trainingresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_trainingresult` |
| `msdyn_trainingresult_MailboxTrackingFolders` | [msdyn_trainingresult](msdyn_trainingresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_trainingresult` |
| `msdyn_trainingresult_UserEntityInstanceDatas` | [msdyn_trainingresult](msdyn_trainingresult.md) | `objectid` | `objectid_msdyn_trainingresult` |
| `msdyn_trainingresult_ProcessSession` | [msdyn_trainingresult](msdyn_trainingresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_trainingresult` |
| `msdyn_trainingresult_BulkDeleteFailures` | [msdyn_trainingresult](msdyn_trainingresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_trainingresult` |
| `msdyn_trainingresult_PrincipalObjectAttributeAccesses` | [msdyn_trainingresult](msdyn_trainingresult.md) | `objectid` | `objectid_msdyn_trainingresult` |


## Source

Generated from [msdyn_trainingresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_trainingresult')) on 2026-05-07.