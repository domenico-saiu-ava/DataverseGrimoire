---
logical: "msdyn_salesagentconfigurationv2"
display: "SalesAgentConfigurationV2"
entitySetName: "msdyn_salesagentconfigurationsv2"
primaryId: "msdyn_salesagentconfigurationv2id"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SalesAgentConfigurationV2

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentconfigurationv2` |
| Display name | SalesAgentConfigurationV2 |
| Display (plural) | salesagentconfigurationsv2 |
| Schema name | `msdyn_salesagentconfigurationv2` |
| Entity set (Web API) | `msdyn_salesagentconfigurationsv2` |
| Primary id attribute | `msdyn_salesagentconfigurationv2id` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentconfigurationsv2?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
POST /api/data/v9.2/msdyn_salesagentconfigurationsv2
PATCH /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentconfigurationsv2(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_microagentconfiguration`, `msdyn_microagenttype`, `msdyn_name`, `msdyn_salesagentconfigurationv2id`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentconfigurationv2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentconfigurationv2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentconfigurationv2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentconfigurationv2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentconfigurationv2` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentconfigurationv2` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentconfigurationv2` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentconfigurationv2` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentconfigurationv2_SyncErrors` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_DuplicateMatchingRecord` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_DuplicateBaseRecord` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `baserecordid` | `baserecordid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_AsyncOperations` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_MailboxTrackingFolders` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_UserEntityInstanceDatas` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `objectid` | `objectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_ProcessSession` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_BulkDeleteFailures` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentconfigurationv2` |
| `msdyn_salesagentconfigurationv2_PrincipalObjectAttributeAccesses` | [msdyn_salesagentconfigurationv2](msdyn_salesagentconfigurationv2.md) | `objectid` | `objectid_msdyn_salesagentconfigurationv2` |


## Source

Generated from [msdyn_salesagentconfigurationv2 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentconfigurationv2')) on 2026-05-07.