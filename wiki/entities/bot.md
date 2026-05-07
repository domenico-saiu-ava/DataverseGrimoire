---
logical: "bot"
display: "Copilot"
entitySetName: "bots"
primaryId: "botid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot

Represents a copilot created in Copilot Studio. https://copilotstudio.microsoft.com/

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bot` |
| Display name | Copilot |
| Display (plural) | Copilots |
| Schema name | `bot` |
| Entity set (Web API) | `bots` |
| Primary id attribute | `botid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bots?$select=name&$top=10
GET /api/data/v9.2/bots(<guid>)
POST /api/data/v9.2/bots
PATCH /api/data/v9.2/bots(<guid>)
DELETE /api/data/v9.2/bots(<guid>)
```

## Attributes

Writable: **29** · Read-only: **18**

### Writable

`accesscontrolpolicy`, `applicationmanifestinformation`, `authenticationconfiguration`, `authenticationmode`, `authenticationtrigger`, `authorizedsecuritygroupids`, `botId`, `Configuration`, `iconbase64`, `ImportSequenceNumber`, `IsCustomizable`, `Language`, `name`, `Origin`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProviderConnectionReferenceId`, `publishedby`, `publishedon`, `RuntimeProvider`, `SchemaName`, `statecode`, `statuscode`, `SupportedLanguages`, `SynchronizationStatus`, `Template`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_connectionreference` | [connectionreference](connectionreference.md) | `providerconnectionreferenceid` | `ProviderConnectionReferenceId` |
| `business_unit_bot` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_bot` | [owner](owner.md) | `ownerid` | `ownerid` |
| `systemuser_bot_publishedby` | [systemuser](systemuser.md) | `publishedby` | `publishedby` |
| `team_bot` | [team](team.md) | `owningteam` | `owningteam` |
| `user_bot` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bot_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bot_conversationtranscript` | _n/a_ | `bot_conversationtranscriptid` | _n/a_ |
| `bot_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bot_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `bot_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bot_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponent_parent_bot` | _n/a_ | `parentbotid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | [botid](botid.md) | _n/a_ | _n/a_ |
| `bot_botcomponentcollection` | [botid](botid.md) | _n/a_ | _n/a_ |
| `bot_environmentvariabledefinition` | [botid](botid.md) | _n/a_ | _n/a_ |

## Source

Generated from [bot.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bot.md) on 2026-05-06.