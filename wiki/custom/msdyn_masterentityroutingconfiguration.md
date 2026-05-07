---
logical: "msdyn_masterentityroutingconfiguration"
display: "Configurazione distribuzione entità master"
entitySetName: "msdyn_masterentityroutingconfigurations"
primaryId: "msdyn_masterentityroutingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione distribuzione entità master

Definisce i dettagli di distribuzione master per l'entità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_masterentityroutingconfiguration` |
| Display name | Configurazione distribuzione entità master |
| Display (plural) | Configurazioni distribuzione entità master |
| Schema name | `msdyn_masterentityroutingconfiguration` |
| Entity set (Web API) | `msdyn_masterentityroutingconfigurations` |
| Primary id attribute | `msdyn_masterentityroutingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_masterentityroutingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_masterentityroutingconfigurations
PATCH /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_masterentityroutingconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entitylogicalname`, `msdyn_masterentityroutingconfigurationid`, `msdyn_name`, `msdyn_rulesetid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_masterentityroutingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_masterentityroutingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_masterentityroutingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_masterentityroutingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_masterentityroutingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_masterentityroutingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_masterentityroutingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_masterentityroutingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_masterentityroutingconfiguration_msdyn_liveworkstream` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `msdyn_masterentityroutingconfigurationid` | `msdyn_masterentityroutingconfigurationId` |
| `msdyn_masterentityroutingconfiguration_SyncErrors` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_DuplicateMatchingRecord` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_DuplicateBaseRecord` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `baserecordid` | `baserecordid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_AsyncOperations` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_MailboxTrackingFolders` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_UserEntityInstanceDatas` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `objectid` | `objectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_ProcessSession` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_BulkDeleteFailures` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_masterentityroutingconfiguration` |
| `msdyn_masterentityroutingconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `objectid` | `objectid_msdyn_masterentityroutingconfiguration` |


## Source

Generated from [msdyn_masterentityroutingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_masterentityroutingconfiguration')) on 2026-05-07.