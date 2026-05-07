---
logical: "plugin"
display: "Plug-in"
entitySetName: "plugins"
primaryId: "pluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Plug-in

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plugin` |
| Display name | Plug-in |
| Display (plural) | Plug-ins |
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

Writable: **15** · Read-only: **18**

### Writable

`CustomAPI`, `ImportSequenceNumber`, `IsCustomizable`, `Language`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `pluginId`, `SdkMessageProcessingStep`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TriggerType`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_plugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `customapi_plugin_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `lk_plugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_plugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_plugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_plugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_plugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `sdkmessageprocessingstep_plugin_SdkMessageProcessingStep` | [sdkmessageprocessingstep](sdkmessageprocessingstep.md) | `sdkmessageprocessingstep` | `SdkMessageProcessingStep` |
| `team_plugin` | [team](team.md) | `owningteam` | `owningteam` |
| `user_plugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plugin_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plugin_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plugin_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plugin_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `plugin_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plugin_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [plugin.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/plugin.md) on 2026-05-06.