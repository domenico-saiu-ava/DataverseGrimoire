---
logical: "githubappconfig"
display: "GitHubAppConfig"
entitySetName: "githubappconfigs"
primaryId: "githubappconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# GitHubAppConfig

GitHub App Configuration Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `githubappconfig` |
| Display name | GitHubAppConfig |
| Display (plural) | GitHubAppConfigs |
| Schema name | `githubappconfig` |
| Entity set (Web API) | `githubappconfigs` |
| Primary id attribute | `githubappconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/githubappconfigs?$select=name&$top=10
GET /api/data/v9.2/githubappconfigs(<guid>)
POST /api/data/v9.2/githubappconfigs
PATCH /api/data/v9.2/githubappconfigs(<guid>)
DELETE /api/data/v9.2/githubappconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`githubappconfigid`, `githubappid`, `githubclientid`, `importsequencenumber`, `keyname`, `keyvaulturi`, `managedidentityid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_githubappconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_githubappconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_githubappconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_githubappconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_githubappconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_githubappconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_githubappconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_githubappconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `managedidentity_githubappconfig_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `githubappconfig_SyncErrors` | [githubappconfig](githubappconfig.md) | `regardingobjectid` | `regardingobjectid_githubappconfig` |
| `githubappconfig_DuplicateMatchingRecord` | [githubappconfig](githubappconfig.md) | `duplicaterecordid` | `duplicaterecordid_githubappconfig` |
| `githubappconfig_DuplicateBaseRecord` | [githubappconfig](githubappconfig.md) | `baserecordid` | `baserecordid_githubappconfig` |
| `githubappconfig_AsyncOperations` | [githubappconfig](githubappconfig.md) | `regardingobjectid` | `regardingobjectid_githubappconfig` |
| `githubappconfig_MailboxTrackingFolders` | [githubappconfig](githubappconfig.md) | `regardingobjectid` | `regardingobjectid_githubappconfig` |
| `githubappconfig_UserEntityInstanceDatas` | [githubappconfig](githubappconfig.md) | `objectid` | `objectid_githubappconfig` |
| `githubappconfig_ProcessSession` | [githubappconfig](githubappconfig.md) | `regardingobjectid` | `regardingobjectid_githubappconfig` |
| `githubappconfig_BulkDeleteFailures` | [githubappconfig](githubappconfig.md) | `regardingobjectid` | `regardingobjectid_githubappconfig` |
| `githubappconfig_PrincipalObjectAttributeAccesses` | [githubappconfig](githubappconfig.md) | `objectid` | `objectid_githubappconfig` |
| `githubappconfig_sourcecontrolconfiguration_GitHubAppConfigId` | [githubappconfig](githubappconfig.md) | `githubappconfigid` | `GitHubAppConfigId` |


## Source

Generated from [githubappconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='githubappconfig')) on 2026-05-07.