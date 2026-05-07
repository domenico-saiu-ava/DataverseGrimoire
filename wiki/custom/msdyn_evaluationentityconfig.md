---
logical: "msdyn_evaluationentityconfig"
display: "Configurazione entità di valutazione"
entitySetName: "msdyn_evaluationentityconfigs"
primaryId: "msdyn_evaluationentityconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione entità di valutazione

Entità di configurazione per gestire le entità abilitate per l'Agente di valutazione qualità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationentityconfig` |
| Display name | Configurazione entità di valutazione |
| Display (plural) | Configurazioni entità di valutazione |
| Schema name | `msdyn_EvaluationEntityConfig` |
| Entity set (Web API) | `msdyn_evaluationentityconfigs` |
| Primary id attribute | `msdyn_evaluationentityconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationentityconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationentityconfigs
PATCH /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entityallowedforevaluation`, `msdyn_entitylogicalname`, `msdyn_evaluationentityconfigid`, `msdyn_evaluationrecordtype`, `msdyn_isenabled`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationentityconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationentityconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationentityconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationentityconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationentityconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationentityconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationentityconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationentityconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationentityconfig_SyncErrors` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_DuplicateMatchingRecord` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_DuplicateBaseRecord` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `baserecordid` | `baserecordid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_AsyncOperations` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_MailboxTrackingFolders` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_UserEntityInstanceDatas` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `objectid` | `objectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_ProcessSession` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_BulkDeleteFailures` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationentityconfig` |
| `msdyn_evaluationentityconfig_PrincipalObjectAttributeAccesses` | [msdyn_evaluationentityconfig](msdyn_evaluationentityconfig.md) | `objectid` | `objectid_msdyn_evaluationentityconfig` |


## Source

Generated from [msdyn_evaluationentityconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationentityconfig')) on 2026-05-07.