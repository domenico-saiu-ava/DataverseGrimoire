---
logical: "aiplugininstance"
display: "AIPluginInstance"
entitySetName: "aiplugininstances"
primaryId: "aiplugininstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginInstance

AI Plugin Instances Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiplugininstance` |
| Display name | AIPluginInstance |
| Display (plural) | AIPluginInstance |
| Schema name | `AIPluginInstance` |
| Entity set (Web API) | `aiplugininstances` |
| Primary id attribute | `aiplugininstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiplugininstances?$select=name&$top=10
GET /api/data/v9.2/aiplugininstances(<guid>)
POST /api/data/v9.2/aiplugininstances
PATCH /api/data/v9.2/aiplugininstances(<guid>)
DELETE /api/data/v9.2/aiplugininstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`aiplugin`, `aiplugininstanceid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiplugininstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugininstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugininstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugininstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiplugininstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiplugininstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiplugininstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiplugininstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPluginInstance_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugininstance_SyncErrors` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aiplugininstance_AsyncOperations` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aiplugininstance_MailboxTrackingFolders` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aiplugininstance_UserEntityInstanceDatas` | [aiplugininstance](aiplugininstance.md) | `objectid` | `objectid_aiplugininstance` |
| `aiplugininstance_ProcessSession` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aiplugininstance_BulkDeleteFailures` | [aiplugininstance](aiplugininstance.md) | `regardingobjectid` | `regardingobjectid_aiplugininstance` |
| `aiplugininstance_PrincipalObjectAttributeAccesses` | [aiplugininstance](aiplugininstance.md) | `objectid` | `objectid_aiplugininstance` |


## Source

Generated from [aiplugininstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiplugininstance')) on 2026-05-07.