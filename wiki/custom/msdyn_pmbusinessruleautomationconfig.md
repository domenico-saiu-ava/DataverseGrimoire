---
logical: "msdyn_pmbusinessruleautomationconfig"
display: "Configurazione dell'automazione della regola di business PM"
entitySetName: "msdyn_pmbusinessruleautomationconfigs"
primaryId: "msdyn_pmbusinessruleautomationconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione dell'automazione della regola di business PM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmbusinessruleautomationconfig` |
| Display name | Configurazione dell'automazione della regola di business PM |
| Display (plural) | Configurazioni dell'automazione della regola di business PM |
| Schema name | `msdyn_pmbusinessruleautomationconfig` |
| Entity set (Web API) | `msdyn_pmbusinessruleautomationconfigs` |
| Primary id attribute | `msdyn_pmbusinessruleautomationconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
POST /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs
PATCH /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_pmbusinessruleautomationconfigs(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`customapiid`, `importsequencenumber`, `iscustomizable`, `msdyn_businessruleid`, `msdyn_isenabled`, `msdyn_name`, `msdyn_pmbusinessruleautomationconfigid`, `msdyn_pminferredtaskid`, `msdyn_selectedcustomattributes`, `msdyn_shouldincludeallemitsinnextrun`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmbusinessruleautomationconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmbusinessruleautomationconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmbusinessruleautomationconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmbusinessruleautomationconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmbusinessruleautomationconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmbusinessruleautomationconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmbusinessruleautomationconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmbusinessruleautomationconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_PMInferredTaskId` |
| `msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmbusinessruleautomationconfig_SyncErrors` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_DuplicateMatchingRecord` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_DuplicateBaseRecord` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `baserecordid` | `baserecordid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_AsyncOperations` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_MailboxTrackingFolders` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_UserEntityInstanceDatas` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `objectid` | `objectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_ProcessSession` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_BulkDeleteFailures` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_PrincipalObjectAttributeAccesses` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `objectid` | `objectid_msdyn_pmbusinessruleautomationconfig` |


## Source

Generated from [msdyn_pmbusinessruleautomationconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmbusinessruleautomationconfig')) on 2026-05-07.