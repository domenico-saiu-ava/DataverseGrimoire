---
logical: "msdyn_ocskillidentmlmodel"
display: "Modello di ricerca competenze"
entitySetName: "msdyn_ocskillidentmlmodels"
primaryId: "msdyn_ocskillidentmlmodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di ricerca competenze

Indica il modello Multicanale per il modello di intelligenza artificiale corrispondente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocskillidentmlmodel` |
| Display name | Modello di ricerca competenze |
| Display (plural) | Modelli di ricerca competenze |
| Schema name | `msdyn_ocskillidentmlmodel` |
| Entity set (Web API) | `msdyn_ocskillidentmlmodels` |
| Primary id attribute | `msdyn_ocskillidentmlmodelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocskillidentmlmodels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
POST /api/data/v9.2/msdyn_ocskillidentmlmodels
PATCH /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
DELETE /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aimodelid`, `msdyn_name`, `msdyn_ocskillidentmlmodelid`, `msdyn_ocskillidentmlmodelstatus`, `msdyn_ocskillidentmlmodeltrainingstatus`, `msdyn_trainingconfiguration`, `msdyn_uniquename`, `msdyn_wizzarddata`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocskillidentmlmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocskillidentmlmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocskillidentmlmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocskillidentmlmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocskillidentmlmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocskillidentmlmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocskillidentmlmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocskillidentmlmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocskillidentmlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocskillidentmlmodel_SyncErrors` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_DuplicateMatchingRecord` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_DuplicateBaseRecord` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `baserecordid` | `baserecordid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_AsyncOperations` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_MailboxTrackingFolders` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_UserEntityInstanceDatas` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `objectid` | `objectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_ProcessSession` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_BulkDeleteFailures` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `objectid` | `objectid_msdyn_ocskillidentmlmodel` |
| `msdyn_ocsimltraining_ocskillidentmlmodeli` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `msdyn_ocsitdimportconfig_ocskillidentmlmo` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `msdyn_ocsitrainingdata_ocskillidentmlmode` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |


## Source

Generated from [msdyn_ocskillidentmlmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocskillidentmlmodel')) on 2026-05-07.