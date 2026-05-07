---
logical: "aiplugin"
display: "AIPlugin"
entitySetName: "aiplugins"
primaryId: "aipluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **26** · Read-only: **18**

### Writable

`AIPluginId`, `AIPluginTitle`, `Connector`, `ContactEmail`, `HumanDescription`, `HumanName`, `ImportSequenceNumber`, `IsCustomizable`, `LegalInfoUrl`, `ModelDescription`, `ModelName`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PluginAuthId`, `PluginSubType`, `PluginType`, `PrivacyPolicyUrl`, `SchemaVersion`, `SharedConnector`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UpsertSwagger`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugin_AIPluginTitle_aiplugintitle` | [aiplugintitle](aiplugintitle.md) | `aiplugintitle` | `AIPluginTitle` |
| `AIPlugin_connector_connector` | [connector](connector.md) | `connector` | `connector` |
| `AIPluginAuth_AIPlugin` | [aipluginauth](aipluginauth.md) | `pluginauthid` | `AIPluginAuth` |
| `business_unit_aiplugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aiplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aiplugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aiplugin` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aiplugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPlugin_AIPluginConversationStarterMapping` | _n/a_ | `aiplugin` | _n/a_ |
| `aiplugin_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugin_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugin_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugin_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aiplugin_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugin_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugingovernance_aiplugin` | _n/a_ | `aiplugin` | _n/a_ |
| `AIPluginInstance_AIPlugin_AIPlugin` | _n/a_ | `aiplugin` | _n/a_ |
| `AIPluginOperation_AIPlugin_AIPlugin` | _n/a_ | `aiplugin` | _n/a_ |
| `sideloadedaiplugin_AIPlugin_aiplugin` | _n/a_ | `aiplugin` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | [aipluginid](aipluginid.md) | _n/a_ | _n/a_ |

## Source

Generated from [aiplugin.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aiplugin.md) on 2026-05-06.