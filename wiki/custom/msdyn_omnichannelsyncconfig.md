---
logical: "msdyn_omnichannelsyncconfig"
display: "Configurazione sincronizzazione Multicanale"
entitySetName: "msdyn_omnichannelsyncconfigs"
primaryId: "msdyn_omnichannelsyncconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione sincronizzazione Multicanale

Configurazione delle entità da sincronizzare in Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelsyncconfig` |
| Display name | Configurazione sincronizzazione Multicanale |
| Display (plural) | Configurazioni sincronizzazione Multicanale |
| Schema name | `msdyn_omnichannelsyncconfig` |
| Entity set (Web API) | `msdyn_omnichannelsyncconfigs` |
| Primary id attribute | `msdyn_omnichannelsyncconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelsyncconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
POST /api/data/v9.2/msdyn_omnichannelsyncconfigs
PATCH /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configjson`, `msdyn_name`, `msdyn_omnichannelsyncconfigid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_omnichannelsyncconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelsyncconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelsyncconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelsyncconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_omnichannelsyncconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_omnichannelsyncconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_omnichannelsyncconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_omnichannelsyncconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelsyncconfig_SyncErrors` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_DuplicateMatchingRecord` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_DuplicateBaseRecord` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `baserecordid` | `baserecordid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_AsyncOperations` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_MailboxTrackingFolders` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_UserEntityInstanceDatas` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `objectid` | `objectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_ProcessSession` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_BulkDeleteFailures` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelsyncconfig` |
| `msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses` | [msdyn_omnichannelsyncconfig](msdyn_omnichannelsyncconfig.md) | `objectid` | `objectid_msdyn_omnichannelsyncconfig` |


## Source

Generated from [msdyn_omnichannelsyncconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_omnichannelsyncconfig')) on 2026-05-07.