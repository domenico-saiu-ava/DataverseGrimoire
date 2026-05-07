---
logical: "aipluginconversationstartermapping"
display: "AI Plugin Conversation Starter Mapping"
entitySetName: "aipluginconversationstartermappings"
primaryId: "aipluginconversationstartermappingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **18**

### Writable

`AIPlugin`, `AIPluginConversationStarter`, `AIPluginConversationStarterMappingId`, `DisplayOrder`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPlugin_AIPluginConversationStarterMapping` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `AIPluginConversationStarter_AIPluginConversationStarterMapping` | [aipluginconversationstarter](aipluginconversationstarter.md) | `aipluginconversationstarter` | `AIPluginConversationStarter` |
| `business_unit_aipluginconversationstartermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginconversationstartermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginconversationstartermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginconversationstartermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginconversationstartermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginconversationstartermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginconversationstartermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginconversationstartermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginconversationstartermapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstartermapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstartermapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstartermapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginconversationstartermapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginconversationstartermapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginconversationstartermapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginconversationstartermapping.md) on 2026-05-06.