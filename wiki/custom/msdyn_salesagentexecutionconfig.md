---
logical: "msdyn_salesagentexecutionconfig"
display: "SalesAgentExecutionConfig"
entitySetName: "msdyn_salesagentexecutionconfigs"
primaryId: "msdyn_salesagentexecutionconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SalesAgentExecutionConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentexecutionconfig` |
| Display name | SalesAgentExecutionConfig |
| Display (plural) | SalesAgentExecutionConfigs |
| Schema name | `msdyn_salesagentexecutionconfig` |
| Entity set (Web API) | `msdyn_salesagentexecutionconfigs` |
| Primary id attribute | `msdyn_salesagentexecutionconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentexecutionconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
POST /api/data/v9.2/msdyn_salesagentexecutionconfigs
PATCH /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentexecutionconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_config_key`, `msdyn_config_value`, `msdyn_name`, `msdyn_salesagentexecutionconfigid`, `msdyn_salesagentprofileid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentexecutionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentexecutionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentexecutionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentexecutionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentexecutionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentexecutionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentexecutionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentexecutionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesagentexecutionconfig_msdyn_salesagentprofileid_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentexecutionconfig_SyncErrors` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_DuplicateMatchingRecord` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_DuplicateBaseRecord` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `baserecordid` | `baserecordid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_AsyncOperations` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_MailboxTrackingFolders` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_UserEntityInstanceDatas` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `objectid` | `objectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_ProcessSession` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_BulkDeleteFailures` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentexecutionconfig` |
| `msdyn_salesagentexecutionconfig_PrincipalObjectAttributeAccesses` | [msdyn_salesagentexecutionconfig](msdyn_salesagentexecutionconfig.md) | `objectid` | `objectid_msdyn_salesagentexecutionconfig` |


## Source

Generated from [msdyn_salesagentexecutionconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentexecutionconfig')) on 2026-05-07.