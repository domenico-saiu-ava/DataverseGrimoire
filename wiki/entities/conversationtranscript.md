---
logical: "conversationtranscript"
display: "ConversationTranscript"
entitySetName: "conversationtranscripts"
primaryId: "conversationtranscriptid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# ConversationTranscript

Contains the transcripts of conversations between participants such as customers, Virtual Agents or Human agents.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `conversationtranscript` |
| Display name | ConversationTranscript |
| Display (plural) | ConversationTranscripts |
| Schema name | `conversationtranscript` |
| Entity set (Web API) | `conversationtranscripts` |
| Primary id attribute | `conversationtranscriptid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/conversationtranscripts?$select=name&$top=10
GET /api/data/v9.2/conversationtranscripts(<guid>)
POST /api/data/v9.2/conversationtranscripts
PATCH /api/data/v9.2/conversationtranscripts(<guid>)
DELETE /api/data/v9.2/conversationtranscripts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`bot_conversationtranscriptId`, `Content`, `ConversationStartTime`, `conversationtranscriptId`, `ImportSequenceNumber`, `metadata`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SchemaType`, `SchemaVersion`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_conversationtranscript` | [bot](bot.md) | `bot_conversationtranscriptid` | `bot_conversationtranscriptId` |
| `business_unit_conversationtranscript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_conversationtranscript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_conversationtranscript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_conversationtranscript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_conversationtranscript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_conversationtranscript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_conversationtranscript` | [team](team.md) | `owningteam` | `owningteam` |
| `user_conversationtranscript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `conversationtranscript_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `conversationtranscript_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `conversationtranscript_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `conversationtranscript_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `conversationtranscript_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `conversationtranscript_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `conversationtranscript_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `conversationtranscript_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [conversationtranscript.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/conversationtranscript.md) on 2026-05-06.