---
logical: "msdyn_iermlmodel"
display: "Modello di stima lavoro richiesto"
entitySetName: "msdyn_iermlmodels"
primaryId: "msdyn_iermlmodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di stima lavoro richiesto

Indica il modello Multicanale per il modello di intelligenza artificiale corrispondente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iermlmodel` |
| Display name | Modello di stima lavoro richiesto |
| Display (plural) | Modello di stima lavoro richiesto |
| Schema name | `msdyn_iermlmodel` |
| Entity set (Web API) | `msdyn_iermlmodels` |
| Primary id attribute | `msdyn_iermlmodelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iermlmodels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iermlmodels(<guid>)
POST /api/data/v9.2/msdyn_iermlmodels
PATCH /api/data/v9.2/msdyn_iermlmodels(<guid>)
DELETE /api/data/v9.2/msdyn_iermlmodels(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aimodelid`, `msdyn_iermlmodelid`, `msdyn_iermlmodelstatus`, `msdyn_iermlmodeltrainingstatus`, `msdyn_name`, `msdyn_trainingconfiguration`, `msdyn_uniquename`, `msdyn_wizarddata`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iermlmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iermlmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iermlmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iermlmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iermlmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iermlmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iermlmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iermlmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_iermlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iermlmodel_SyncErrors` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_DuplicateMatchingRecord` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_DuplicateBaseRecord` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `baserecordid` | `baserecordid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_AsyncOperations` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_MailboxTrackingFolders` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_UserEntityInstanceDatas` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `objectid` | `objectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_ProcessSession` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_BulkDeleteFailures` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_iermlmodel` |
| `msdyn_iermlmodel_PrincipalObjectAttributeAccesses` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `objectid` | `objectid_msdyn_iermlmodel` |
| `msdyn_iermltraining_iermlmodel` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `msdyn_iermlmodelid` | `msdyn_iermlmodelid` |


## Source

Generated from [msdyn_iermlmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iermlmodel')) on 2026-05-07.