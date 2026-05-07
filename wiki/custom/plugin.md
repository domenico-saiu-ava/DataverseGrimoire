---
logical: "plugin"
display: "Plug-in"
entitySetName: "plugins"
primaryId: "pluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Plug-in

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plugin` |
| Display name | Plug-in |
| Display (plural) | Plug-in |
| Schema name | `plugin` |
| Entity set (Web API) | `plugins` |
| Primary id attribute | `pluginid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/plugins?$select=name&$top=10
GET /api/data/v9.2/plugins(<guid>)
POST /api/data/v9.2/plugins
PATCH /api/data/v9.2/plugins(<guid>)
DELETE /api/data/v9.2/plugins(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`customapi`, `importsequencenumber`, `iscustomizable`, `language`, `name`, `overriddencreatedon`, `ownerid`, `pluginid`, `sdkmessageprocessingstep`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `triggertype`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_plugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_plugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_plugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_plugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_plugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_plugin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_plugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_plugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `customapi_plugin_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `sdkmessageprocessingstep_plugin_SdkMessageProcessingStep` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `sdkmessageprocessingstep` | `SdkMessageProcessingStep` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plugin_SyncErrors` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `plugin_AsyncOperations` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `plugin_MailboxTrackingFolders` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `plugin_UserEntityInstanceDatas` | [plugin](plugin.md) | `objectid` | `objectid_plugin` |
| `plugin_ProcessSession` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `plugin_BulkDeleteFailures` | [plugin](plugin.md) | `regardingobjectid` | `regardingobjectid_plugin` |
| `plugin_PrincipalObjectAttributeAccesses` | [plugin](plugin.md) | `objectid` | `objectid_plugin` |


## Source

Generated from [plugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='plugin')) on 2026-05-07.