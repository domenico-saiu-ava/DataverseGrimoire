---
logical: "ava_plugin"
display: "Plugin"
entitySetName: "ava_plugins"
primaryId: "ava_pluginid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Plugin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_plugin` |
| Display name | Plugin |
| Display (plural) | Plugins |
| Schema name | `ava_Plugin` |
| Entity set (Web API) | `ava_plugins` |
| Primary id attribute | `ava_pluginid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_plugins?$select=ava_name&$top=10
GET /api/data/v9.2/ava_plugins(<guid>)
POST /api/data/v9.2/ava_plugins
PATCH /api/data/v9.2/ava_plugins(<guid>)
DELETE /api/data/v9.2/ava_plugins(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`ava_cliente`, `ava_codice`, `ava_famigliaprodotto`, `ava_name`, `ava_pluginid`, `ava_prodottoserviziointeresse`, `ava_regoladefault`, `ava_regoladidistribuzioneid`, `ava_regolavariabileprospect`, `ava_regolavariabilesegmento`, `ava_tipologiaformcontattaci`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_plugin_RegolavariabileSegmento_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regolavariabilesegmento` | `ava_RegolavariabileSegmento` |
| `lk_ava_plugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_plugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_plugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_plugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_plugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_plugin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_plugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_plugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_plugin_Regoladefault_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regoladefault` | `ava_Regoladefault` |
| `ava_plugin_Regoladidistribuzioneid_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regoladidistribuzioneid` | `ava_Regoladidistribuzioneid` |
| `ava_plugin_RegolavariabileProspect_ava_regoladidistribuzione` | [ava_regoladidistribuzione](ava_regoladidistribuzione.md) | `ava_regolavariabileprospect` | `ava_RegolavariabileProspect` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_plugin_SyncErrors` | [ava_plugin](ava_plugin.md) | `regardingobjectid` | `regardingobjectid_ava_plugin` |
| `ava_plugin_AsyncOperations` | [ava_plugin](ava_plugin.md) | `regardingobjectid` | `regardingobjectid_ava_plugin` |
| `ava_plugin_MailboxTrackingFolders` | [ava_plugin](ava_plugin.md) | `regardingobjectid` | `regardingobjectid_ava_plugin` |
| `ava_plugin_UserEntityInstanceDatas` | [ava_plugin](ava_plugin.md) | `objectid` | `objectid_ava_plugin` |
| `ava_plugin_ProcessSession` | [ava_plugin](ava_plugin.md) | `regardingobjectid` | `regardingobjectid_ava_plugin` |
| `ava_plugin_BulkDeleteFailures` | [ava_plugin](ava_plugin.md) | `regardingobjectid` | `regardingobjectid_ava_plugin` |
| `ava_plugin_PrincipalObjectAttributeAccesses` | [ava_plugin](ava_plugin.md) | `objectid` | `objectid_ava_plugin` |


## Source

Generated from [ava_plugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_plugin')) on 2026-05-07.