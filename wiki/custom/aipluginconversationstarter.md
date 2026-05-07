---
logical: "aipluginconversationstarter"
display: "AI Plugin Conversation Starter"
entitySetName: "aipluginconversationstarters"
primaryId: "aipluginconversationstarterid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Plugin Conversation Starter

Conversation Starters for AI Plugins.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginconversationstarter` |
| Display name | AI Plugin Conversation Starter |
| Display (plural) | AI Plugin Conversation Starters |
| Schema name | `AIPluginConversationStarter` |
| Entity set (Web API) | `aipluginconversationstarters` |
| Primary id attribute | `aipluginconversationstarterid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginconversationstarters?$select=title&$top=10
GET /api/data/v9.2/aipluginconversationstarters(<guid>)
POST /api/data/v9.2/aipluginconversationstarters
PATCH /api/data/v9.2/aipluginconversationstarters(<guid>)
DELETE /api/data/v9.2/aipluginconversationstarters(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`aipluginconversationstarterid`, `content`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginconversationstarter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginconversationstarter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginconversationstarter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginconversationstarter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginconversationstarter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginconversationstarter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginconversationstarter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginconversationstarter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginconversationstarter_SyncErrors` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstarter_AsyncOperations` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstarter_MailboxTrackingFolders` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstarter_UserEntityInstanceDatas` | [aipluginconversationstarter](aipluginconversationstarter.md) | `objectid` | `objectid_aipluginconversationstarter` |
| `aipluginconversationstarter_ProcessSession` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstarter_BulkDeleteFailures` | [aipluginconversationstarter](aipluginconversationstarter.md) | `regardingobjectid` | `regardingobjectid_aipluginconversationstarter` |
| `aipluginconversationstarter_PrincipalObjectAttributeAccesses` | [aipluginconversationstarter](aipluginconversationstarter.md) | `objectid` | `objectid_aipluginconversationstarter` |
| `AIPluginConversationStarter_AIPluginConversationStarterMapping` | [aipluginconversationstarter](aipluginconversationstarter.md) | `aipluginconversationstarter` | `AIPluginConversationStarter` |


## Source

Generated from [aipluginconversationstarter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginconversationstarter')) on 2026-05-07.