---
logical: "sideloadedaiplugin"
display: "SideloadedAIPlugin"
entitySetName: "sideloadedaiplugins"
primaryId: "sideloadedaipluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SideloadedAIPlugin

Sideloaded AIPlugins metadata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sideloadedaiplugin` |
| Display name | SideloadedAIPlugin |
| Display (plural) | SideloadedAIPlugins |
| Schema name | `sideloadedaiplugin` |
| Entity set (Web API) | `sideloadedaiplugins` |
| Primary id attribute | `sideloadedaipluginid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/sideloadedaiplugins?$select=name&$top=10
GET /api/data/v9.2/sideloadedaiplugins(<guid>)
POST /api/data/v9.2/sideloadedaiplugins
PATCH /api/data/v9.2/sideloadedaiplugins(<guid>)
DELETE /api/data/v9.2/sideloadedaiplugins(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`aiplugin`, `aipluginobject`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `sideloadedaipluginid`, `sideloadedpluginownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sideloadedaiplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sideloadedaiplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sideloadedaiplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sideloadedaiplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_sideloadedaiplugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_sideloadedaiplugin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_sideloadedaiplugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_sideloadedaiplugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `sideloadedaiplugin_AIPlugin_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `sideloadedaiplugin_sideloadedpluginownerid` | [systemuser](systemuser.md) | `sideloadedpluginownerid` | `sideloadedpluginownerid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sideloadedaiplugin_SyncErrors` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `sideloadedaiplugin_AsyncOperations` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `sideloadedaiplugin_MailboxTrackingFolders` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `sideloadedaiplugin_UserEntityInstanceDatas` | [sideloadedaiplugin](sideloadedaiplugin.md) | `objectid` | `objectid_sideloadedaiplugin` |
| `sideloadedaiplugin_ProcessSession` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `sideloadedaiplugin_BulkDeleteFailures` | [sideloadedaiplugin](sideloadedaiplugin.md) | `regardingobjectid` | `regardingobjectid_sideloadedaiplugin` |
| `sideloadedaiplugin_PrincipalObjectAttributeAccesses` | [sideloadedaiplugin](sideloadedaiplugin.md) | `objectid` | `objectid_sideloadedaiplugin` |


## Source

Generated from [sideloadedaiplugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sideloadedaiplugin')) on 2026-05-07.