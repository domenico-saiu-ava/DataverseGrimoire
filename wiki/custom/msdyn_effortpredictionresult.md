---
logical: "msdyn_effortpredictionresult"
display: "Stima lavoro richiesto"
entitySetName: "msdyn_effortpredictionresults"
primaryId: "msdyn_effortpredictionresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stima lavoro richiesto

Entità per salvare in modo permanente i risultati della previsione del modello di lavoro richiesto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_effortpredictionresult` |
| Display name | Stima lavoro richiesto |
| Display (plural) | Stime lavoro richiesto |
| Schema name | `msdyn_effortpredictionresult` |
| Entity set (Web API) | `msdyn_effortpredictionresults` |
| Primary id attribute | `msdyn_effortpredictionresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_effortpredictionresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
POST /api/data/v9.2/msdyn_effortpredictionresults
PATCH /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
DELETE /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aimodelid`, `msdyn_effortconfidencescore`, `msdyn_effortpredictionresultid`, `msdyn_liveworkitemid`, `msdyn_name`, `msdyn_predictedeffort`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_effortpredictionresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_effortpredictionresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_effortpredictionresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_effortpredictionresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_effortpredictionresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_effortpredictionresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_effortpredictionresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_effortpredictionresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_effortpredictionresult_SyncErrors` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_DuplicateMatchingRecord` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_DuplicateBaseRecord` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `baserecordid` | `baserecordid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_AsyncOperations` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_MailboxTrackingFolders` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_UserEntityInstanceDatas` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `objectid` | `objectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_ProcessSession` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_BulkDeleteFailures` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_effortpredictionresult` |
| `msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `objectid` | `objectid_msdyn_effortpredictionresult` |
| `msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult` | [msdyn_effortpredictionresult](msdyn_effortpredictionresult.md) | `msdyn_effortpredictionresult` | `msdyn_effortpredictionresult_msdyn_ocliveworkitem` |


## Source

Generated from [msdyn_effortpredictionresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_effortpredictionresult')) on 2026-05-07.