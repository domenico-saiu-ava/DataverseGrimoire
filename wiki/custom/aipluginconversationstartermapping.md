---
logical: "aipluginconversationstartermapping"
display: "AI Plugin Conversation Starter Mapping"
entitySetName: "aipluginconversationstartermappings"
primaryId: "aipluginconversationstartermappingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Plugin Conversation Starter Mapping

AIPlugins component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginconversationstartermapping` |
| Display name | AI Plugin Conversation Starter Mapping |
| Display (plural) | AI Plugin Conversation Starter Mappings |
| Schema name | `AIPluginConversationStarterMapping` |
| Entity set (Web API) | `aipluginconversationstartermappings` |
| Primary id attribute | `aipluginconversationstartermappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginconversationstartermappings?$select=name&$top=10
GET /api/data/v9.2/aipluginconversationstartermappings(<guid>)
POST /api/data/v9.2/aipluginconversationstartermappings
PATCH /api/data/v9.2/aipluginconversationstartermappings(<guid>)
DELETE /api/data/v9.2/aipluginconversationstartermappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`aiplugin`, `aipluginconversationstarter`, `aipluginconversationstartermappingid`, `displayorder`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginconversationstartermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginconversationstartermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginconversationstartermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginconversationstartermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginconversationstartermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginconversationstartermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginconversationstartermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginconversationstartermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPluginConversationStarter_AIPluginConversationStarterMapping` | [aipluginconversationstarter](aipluginconversationstarter.md) | `aipluginconversationstarter` | `AIPluginConversationStarter` |
| `AIPlugin_AIPluginConversationStarterMapping` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginconversationstartermapping_SyncErrors` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_AsyncOperations` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_MailboxTrackingFolders` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_UserEntityInstanceDatas` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `objectid` | `objectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_ProcessSession` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_BulkDeleteFailures` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstartermapping` |
| `aipluginconversationstartermapping_PrincipalObjectAttributeAccesses` | [aipluginconversationstartermapping](aipluginconversationstartermapping.md) | `objectid` | `objectid_aipluginconversationstartermapping` |


## Source

Generated from [aipluginconversationstartermapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginconversationstartermapping')) on 2026-05-07.