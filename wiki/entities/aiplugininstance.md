---
logical: "aiplugininstance"
display: "AIPluginInstance"
entitySetName: "aiplugininstances"
primaryId: "aiplugininstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **12** · Read-only: **18**

### Writable

`AIPlugin`, `AIPluginInstanceId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginInstance_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `business_unit_aiplugininstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aiplugininstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiplugininstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiplugininstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiplugininstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aiplugininstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aiplugininstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aiplugininstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiplugininstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugininstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugininstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugininstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aiplugininstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aiplugininstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aiplugininstance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aiplugininstance.md) on 2026-05-06.