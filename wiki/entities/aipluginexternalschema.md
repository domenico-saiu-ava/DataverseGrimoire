---
logical: "aipluginexternalschema"
display: "AIPluginExternalSchema"
entitySetName: "aipluginexternalschemas"
primaryId: "aipluginexternalschemaid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# AIPluginExternalSchema

AIPluginExternalSchemas component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginexternalschema` |
| Display name | AIPluginExternalSchema |
| Display (plural) | AIPluginExternalSchemas |
| Schema name | `AIPluginExternalSchema` |
| Entity set (Web API) | `aipluginexternalschemas` |
| Primary id attribute | `aipluginexternalschemaid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginexternalschemas?$select=name&$top=10
GET /api/data/v9.2/aipluginexternalschemas(<guid>)
POST /api/data/v9.2/aipluginexternalschemas
PATCH /api/data/v9.2/aipluginexternalschemas(<guid>)
DELETE /api/data/v9.2/aipluginexternalschemas(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`AIPluginExternalSchemaId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_aipluginexternalschema` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginexternalschema_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginexternalschema_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginexternalschema_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginexternalschema_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginexternalschema` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginexternalschema` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginexternalschema` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginexternalschema_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschema_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschema_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschema_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginexternalschema_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginexternalschema_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginexternalschema.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginexternalschema.md) on 2026-05-06.