---
logical: "aiplugin"
display: "AIPlugin"
entitySetName: "aiplugins"
primaryId: "aipluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPlugin

AIPlugins component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiplugin` |
| Display name | AIPlugin |
| Display (plural) | AIPlugins |
| Schema name | `AIPlugin` |
| Entity set (Web API) | `aiplugins` |
| Primary id attribute | `aipluginid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiplugins?$select=name&$top=10
GET /api/data/v9.2/aiplugins(<guid>)
POST /api/data/v9.2/aiplugins
PATCH /api/data/v9.2/aiplugins(<guid>)
DELETE /api/data/v9.2/aiplugins(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`aipluginid`, `aiplugintitle`, `connector`, `contactemail`, `humandescription`, `humanname`, `importsequencenumber`, `iscustomizable`, `legalinfourl`, `modeldescription`, `modelname`, `name`, `overriddencreatedon`, `ownerid`, `pluginauthid`, `pluginsubtype`, `plugintype`, `privacypolicyurl`, `schemaversion`, `sharedconnector`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `upsertswagger`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiplugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiplugin` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiplugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiplugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPlugin_connector_connector` | [connector](connector.md) | `connector` | `connector` |
| `aiplugin_AIPluginTitle_aiplugintitle` | [aiplugintitle](aiplugintitle.md) | `aiplugintitle` | `AIPluginTitle` |
| `AIPluginAuth_AIPlugin` | [aipluginauth](aipluginauth.md) | `pluginauthid` | `AIPluginAuth` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiplugin_msdyn_servicecopilotplugin_aipluginid` | [aiplugin](aiplugin.md) | `msdyn_aipluginid` | `msdyn_aipluginid` |
| `aiplugin_SyncErrors` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aiplugin_AsyncOperations` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aiplugin_MailboxTrackingFolders` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aiplugin_UserEntityInstanceDatas` | [aiplugin](aiplugin.md) | `objectid` | `objectid_aiplugin` |
| `aiplugin_ProcessSession` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aiplugin_BulkDeleteFailures` | [aiplugin](aiplugin.md) | `regardingobjectid` | `regardingobjectid_aiplugin` |
| `aiplugin_PrincipalObjectAttributeAccesses` | [aiplugin](aiplugin.md) | `objectid` | `objectid_aiplugin` |
| `AIPluginInstance_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `AIPluginOperation_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `aiplugingovernance_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `AIPlugin_AIPluginConversationStarterMapping` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `sideloadedaiplugin_AIPlugin_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | [aicopilot](aicopilot.md) | _n/a_ | `AICopilot_AIPlugin_AIPlugin` |

## Source

Generated from [aiplugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiplugin')) on 2026-05-07.