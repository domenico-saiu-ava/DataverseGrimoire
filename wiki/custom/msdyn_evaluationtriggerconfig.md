---
logical: "msdyn_evaluationtriggerconfig"
display: "Configurazione trigger valutazione"
entitySetName: "msdyn_evaluationtriggerconfigs"
primaryId: "msdyn_evaluationtriggerconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione trigger valutazione

Nella tabella Configurazione trigger valutazione sono archiviate le regole di configurazione che definiscono quando i flussi di valutazione devono essere attivati in Dataverse. Ogni record specifica l'entità, il tipo di evento (creazione/aggiornamento) e le condizioni in cui deve essere eseguito un flusso.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationtriggerconfig` |
| Display name | Configurazione trigger valutazione |
| Display (plural) | Configurazioni trigger valutazione |
| Schema name | `msdyn_EvaluationTriggerConfig` |
| Entity set (Web API) | `msdyn_evaluationtriggerconfigs` |
| Primary id attribute | `msdyn_evaluationtriggerconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationtriggerconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationtriggerconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationtriggerconfigs
PATCH /api/data/v9.2/msdyn_evaluationtriggerconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationtriggerconfigs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_entitylogicalname`, `msdyn_evaluationtriggerconfigid`, `msdyn_name`, `msdyn_powerautomateflowid`, `msdyn_recordtype`, `msdyn_triggerconditions`, `msdyn_triggertype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationtriggerconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationtriggerconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationtriggerconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationtriggerconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationtriggerconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationtriggerconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationtriggerconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationtriggerconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationtriggerconfig_SyncErrors` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_DuplicateMatchingRecord` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_DuplicateBaseRecord` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `baserecordid` | `baserecordid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_AsyncOperations` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_MailboxTrackingFolders` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_UserEntityInstanceDatas` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `objectid` | `objectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_ProcessSession` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_BulkDeleteFailures` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationtriggerconfig_PrincipalObjectAttributeAccesses` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `objectid` | `objectid_msdyn_evaluationtriggerconfig` |
| `msdyn_evaluationplan_EvaluationTriggerConfig_msdyn_evaluationtriggerconfig` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `msdyn_evaluationtriggerconfig` | `msdyn_EvaluationTriggerConfig` |


## Source

Generated from [msdyn_evaluationtriggerconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationtriggerconfig')) on 2026-05-07.