---
logical: "msdyn_overflowactionconfig"
display: "Configurazione azione di overflow"
entitySetName: "msdyn_overflowactionconfigs"
primaryId: "msdyn_overflowactionconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione azione di overflow

Configurazioni dell'azione di overflow.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_overflowactionconfig` |
| Display name | Configurazione azione di overflow |
| Display (plural) | Configurazioni azione di overflow |
| Schema name | `msdyn_overflowactionconfig` |
| Entity set (Web API) | `msdyn_overflowactionconfigs` |
| Primary id attribute | `msdyn_overflowactionconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_overflowactionconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
POST /api/data/v9.2/msdyn_overflowactionconfigs
PATCH /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_overflowactionconfigs(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_botfailureactiontype`, `msdyn_directcallbackaction`, `msdyn_directcallbackdedupsetting`, `msdyn_directcallbackqueuesetting`, `msdyn_name`, `msdyn_overflowactionconfigid`, `msdyn_overflowactiondata`, `msdyn_overflowactiontype`, `msdyn_schedulecallbackoutboundworkstream`, `msdyn_stoptranscriptionandrecordingaftercalltransfer`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_overflowactionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_overflowactionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_overflowactionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_overflowactionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_overflowactionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_overflowactionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_overflowactionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_overflowactionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_overflowactionconfig_schedulecallbackoutboundworkstream_msdyn_liveworkstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_schedulecallbackoutboundworkstream` | `msdyn_schedulecallbackoutboundworkstream` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_liveworkstream_BotFailureActionConfig_msdyn_overflowactionconfig` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `msdyn_botfailureactionconfig` | `msdyn_BotFailureActionConfig` |
| `msdyn_overflowactionconfig_SyncErrors` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_DuplicateMatchingRecord` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_DuplicateBaseRecord` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `baserecordid` | `baserecordid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_AsyncOperations` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_MailboxTrackingFolders` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_UserEntityInstanceDatas` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `objectid` | `objectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_ProcessSession` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_BulkDeleteFailures` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `objectid` | `objectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_QueueItems` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `objectid` | `objectid_msdyn_overflowactionconfig` |
| `msdyn_overflowactionconfig_Annotations` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `objectid` | `objectid_msdyn_overflowactionconfig` |
| `msdyn_rulesetdependencymapping_msdyn_overflowactionconfig_msdyn_referencedpolymorphicentityid` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_overflowactionconfig` |


## Source

Generated from [msdyn_overflowactionconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_overflowactionconfig')) on 2026-05-07.