---
logical: "sideloadedaiplugin"
display: "SideloadedAIPlugin"
entitySetName: "sideloadedaiplugins"
primaryId: "sideloadedaipluginid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# SideloadedAIPlugin

Sideloaded AIPlugins metadata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sideloadedaiplugin` |
| Display name | SideloadedAIPlugin |
| Display (plural) | SideloadedAIPlugins |
| Schema name | `sideloadedaiplugin` |
| Entity set (Web API) | `sideloadedaiplugins` |
| Primary id attribute | `sideloadedaipluginid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/sideloadedaiplugins?$select=name&$top=10
GET /api/data/v9.2/sideloadedaiplugins(<guid>)
POST /api/data/v9.2/sideloadedaiplugins
PATCH /api/data/v9.2/sideloadedaiplugins(<guid>)
DELETE /api/data/v9.2/sideloadedaiplugins(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`AIPlugin`, `AIPluginObject`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `sideloadedaipluginId`, `sideloadedpluginownerid`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_sideloadedaiplugin` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_sideloadedaiplugin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sideloadedaiplugin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sideloadedaiplugin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sideloadedaiplugin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_sideloadedaiplugin` | [owner](owner.md) | `ownerid` | `ownerid` |
| `sideloadedaiplugin_AIPlugin_aiplugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `sideloadedaiplugin_sideloadedpluginownerid` | [systemuser](systemuser.md) | `sideloadedpluginownerid` | `sideloadedpluginownerid` |
| `team_sideloadedaiplugin` | [team](team.md) | `owningteam` | `owningteam` |
| `user_sideloadedaiplugin` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sideloadedaiplugin_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sideloadedaiplugin_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sideloadedaiplugin_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sideloadedaiplugin_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sideloadedaiplugin_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sideloadedaiplugin_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sideloadedaiplugin.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sideloadedaiplugin.md) on 2026-05-06.