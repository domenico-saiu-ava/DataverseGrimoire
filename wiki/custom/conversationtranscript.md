---
logical: "conversationtranscript"
display: "ConversationTranscript"
entitySetName: "conversationtranscripts"
primaryId: "conversationtranscriptid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ConversationTranscript

Contiene le trascrizioni delle conversazioni tra partecipanti, ad esempio clienti, agenti virtuali o agenti umani.

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

Writable: **15** · Read-only: **10**

### Writable

`bot_conversationtranscriptid`, `content`, `conversationstarttime`, `conversationtranscriptid`, `importsequencenumber`, `metadata`, `name`, `overriddencreatedon`, `ownerid`, `schematype`, `schemaversion`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_conversationtranscript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_conversationtranscript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_conversationtranscript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_conversationtranscript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_conversationtranscript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_conversationtranscript` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_conversationtranscript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_conversationtranscript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `bot_conversationtranscript` | [bot](bot.md) | `bot_conversationtranscriptid` | `bot_conversationtranscriptId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `conversationtranscript_SyncErrors` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `conversationtranscript_DuplicateMatchingRecord` | [conversationtranscript](conversationtranscript.md) | `duplicaterecordid` | `duplicaterecordid_conversationtranscript` |
| `conversationtranscript_DuplicateBaseRecord` | [conversationtranscript](conversationtranscript.md) | `baserecordid` | `baserecordid_conversationtranscript` |
| `conversationtranscript_AsyncOperations` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `conversationtranscript_MailboxTrackingFolders` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `conversationtranscript_UserEntityInstanceDatas` | [conversationtranscript](conversationtranscript.md) | `objectid` | `objectid_conversationtranscript` |
| `conversationtranscript_ProcessSession` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `conversationtranscript_BulkDeleteFailures` | [conversationtranscript](conversationtranscript.md) | `regardingobjectid` | `regardingobjectid_conversationtranscript` |
| `conversationtranscript_PrincipalObjectAttributeAccesses` | [conversationtranscript](conversationtranscript.md) | `objectid` | `objectid_conversationtranscript` |


## Source

Generated from [conversationtranscript (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='conversationtranscript')) on 2026-05-07.