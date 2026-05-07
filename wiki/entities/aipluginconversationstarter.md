---
logical: "aipluginconversationstarter"
display: "AI Plugin Conversation Starter"
entitySetName: "aipluginconversationstarters"
primaryId: "aipluginconversationstarterid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **12** · Read-only: **18**

### Writable

`AIPluginConversationStarterId`, `Content`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_aipluginconversationstarter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginconversationstarter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginconversationstarter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginconversationstarter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginconversationstarter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginconversationstarter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginconversationstarter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginconversationstarter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginConversationStarter_AIPluginConversationStarterMapping` | _n/a_ | `aipluginconversationstarter` | _n/a_ |
| `aipluginconversationstarter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstarter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstarter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstarter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginconversationstarter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstarter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginconversationstarter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginconversationstarter.md) on 2026-05-06.