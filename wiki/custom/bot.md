---
logical: "bot"
display: "Copilota"
entitySetName: "bots"
primaryId: "botid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilota

Rappresenta un copilota creato in Copilot Studio. https://copilotstudio.microsoft.com/

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bot` |
| Display name | Copilota |
| Display (plural) | Copiloti |
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

Writable: **28** · Read-only: **16**

### Writable

`accesscontrolpolicy`, `applicationmanifestinformation`, `authenticationconfiguration`, `authenticationmode`, `authenticationtrigger`, `authorizedsecuritygroupids`, `botid`, `configuration`, `iconbase64`, `importsequencenumber`, `iscustomizable`, `language`, `name`, `origin`, `overriddencreatedon`, `ownerid`, `providerconnectionreferenceid`, `publishedby`, `publishedon`, `runtimeprovider`, `schemaname`, `statecode`, `statuscode`, `supportedlanguages`, `synchronizationstatus`, `template`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_bot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_bot` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_bot` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_bot` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_bot` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `bot_connectionreference` | [connectionreference](connectionreference.md) | `providerconnectionreferenceid` | `ProviderConnectionReferenceId` |
| `systemuser_bot_publishedby` | [systemuser](systemuser.md) | `publishedby` | `publishedby` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofileaiagent_msdyn_botid_bot` | [bot](bot.md) | `msdyn_botid` | `msdyn_botid` |
| `msdyn_msdyn_botsession_botid_bot` | [bot](bot.md) | `msdyn_botid` | `msdyn_botid` |
| `Comment_Artifact_Bot` | [bot](bot.md) | `parent` | `Bot` |
| `msdyn_bot_msfp_survey_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |
| `bot_msdyn_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |
| `bot_appelement_objectid` | [bot](bot.md) | `objectid` | `objectid` |
| `bot_SyncErrors` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `bot_AsyncOperations` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `bot_MailboxTrackingFolders` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `bot_UserEntityInstanceDatas` | [bot](bot.md) | `objectid` | `objectid_bot` |
| `bot_ProcessSession` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `bot_BulkDeleteFailures` | [bot](bot.md) | `regardingobjectid` | `regardingobjectid_bot` |
| `bot_PrincipalObjectAttributeAccesses` | [bot](bot.md) | `objectid` | `objectid_bot` |
| `botcomponent_parent_bot` | [bot](bot.md) | `parentbotid` | `parentbotid` |
| `bot_conversationtranscript` | [bot](bot.md) | `bot_conversationtranscriptid` | `bot_conversationtranscriptId` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | [botcomponent](botcomponent.md) | _n/a_ | `bot_botcomponent` |
| `bot_environmentvariabledefinition` | [environmentvariabledefinition](environmentvariabledefinition.md) | _n/a_ | `bot_environmentvariabledefinition` |
| `bot_botcomponentcollection` | [botcomponentcollection](botcomponentcollection.md) | _n/a_ | `bot_botcomponentcollection` |

## Source

Generated from [bot (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bot')) on 2026-05-07.