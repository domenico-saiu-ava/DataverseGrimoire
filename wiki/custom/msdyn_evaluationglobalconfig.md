---
logical: "msdyn_evaluationglobalconfig"
display: "Configurazione globale valutazione"
entitySetName: "msdyn_evaluationglobalconfigs"
primaryId: "msdyn_evaluationglobalconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione globale valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationglobalconfig` |
| Display name | Configurazione globale valutazione |
| Display (plural) | Configurazioni globali valutazione |
| Schema name | `msdyn_EvaluationGlobalConfig` |
| Entity set (Web API) | `msdyn_evaluationglobalconfigs` |
| Primary id attribute | `msdyn_evaluationglobalconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationglobalconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationglobalconfigs
PATCH /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_enablecase`, `msdyn_enableconversation`, `msdyn_enableevalscoring`, `msdyn_evaluationglobalconfigid`, `msdyn_id`, `msdyn_name`, `msdyn_thresholdvalue`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationglobalconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationglobalconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationglobalconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationglobalconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationglobalconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationglobalconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationglobalconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationglobalconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationglobalconfig_SyncErrors` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_AsyncOperations` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_MailboxTrackingFolders` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_UserEntityInstanceDatas` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `objectid` | `objectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_ProcessSession` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_BulkDeleteFailures` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationglobalconfig` |
| `msdyn_evaluationglobalconfig_PrincipalObjectAttributeAccesses` | [msdyn_evaluationglobalconfig](msdyn_evaluationglobalconfig.md) | `objectid` | `objectid_msdyn_evaluationglobalconfig` |


## Source

Generated from [msdyn_evaluationglobalconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationglobalconfig')) on 2026-05-07.