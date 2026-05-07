---
logical: "botcomponent"
display: "Componente Copilota"
entitySetName: "botcomponents"
primaryId: "botcomponentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente Copilota

Contiene i componenti chiave per la modifica di un copilota, ad esempio argomenti, entità, variabili e così via.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent` |
| Display name | Componente Copilota |
| Display (plural) | Componenti del copilota |
| Schema name | `botcomponent` |
| Entity set (Web API) | `botcomponents` |
| Primary id attribute | `botcomponentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/botcomponents?$select=name&$top=10
GET /api/data/v9.2/botcomponents(<guid>)
POST /api/data/v9.2/botcomponents
PATCH /api/data/v9.2/botcomponents(<guid>)
DELETE /api/data/v9.2/botcomponents(<guid>)
```

## Attributes

Writable: **26** · Read-only: **17**

### Writable

`accentcolor`, `botcomponentid`, `canmodifystate`, `category`, `componenttype`, `content`, `data`, `dependencies`, `description`, `helplink`, `iconurl`, `importsequencenumber`, `iscustomizable`, `language`, `name`, `overriddencreatedon`, `ownerid`, `parentbotcomponentcollectionid`, `parentbotcomponentid`, `parentbotid`, `reusepolicy`, `schemaname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filedata`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_botcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_botcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_botcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_botcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_botcomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_botcomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_botcomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_botcomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_botcomponent_FileData` | [fileattachment](fileattachment.md) | `filedata` | `filedata` |
| `botcomponent_parent_bot` | [bot](bot.md) | `parentbotid` | `parentbotid` |
| `botcomponent_parent_botcomponent` | [botcomponent](botcomponent.md) | `parentbotcomponentid` | `ParentBotComponentId` |
| `botcomponent_parent_botcomponentcollection` | [botcomponentcollection](botcomponentcollection.md) | `parentbotcomponentcollectionid` | `ParentBotComponentCollectionId` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_botcomponent_msdyn_servicecopilotplugin_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |
| `msdyn_botcomponent_msdyn_servicecopilotpluginaction_botcomponentid` | [botcomponent](botcomponent.md) | `msdyn_botcomponentid` | `msdyn_botcomponentid` |
| `Comment_Artifact_BotComponent` | [botcomponent](botcomponent.md) | `parent` | `BotComponent` |
| `botcomponent_SyncErrors` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponent_AsyncOperations` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponent_MailboxTrackingFolders` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponent_UserEntityInstanceDatas` | [botcomponent](botcomponent.md) | `objectid` | `objectid_botcomponent` |
| `botcomponent_ProcessSession` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponent_BulkDeleteFailures` | [botcomponent](botcomponent.md) | `regardingobjectid` | `regardingobjectid_botcomponent` |
| `botcomponent_PrincipalObjectAttributeAccesses` | [botcomponent](botcomponent.md) | `objectid` | `objectid_botcomponent` |
| `botcomponent_FileAttachments` | [botcomponent](botcomponent.md) | `objectid` | `objectid_botcomponent` |
| `botcomponent_parent_botcomponent` | [botcomponent](botcomponent.md) | `parentbotcomponentid` | `ParentBotComponentId` |

### Many-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | [bot](bot.md) | _n/a_ | `bot_botcomponent` |
| `botcomponent_botcomponent` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_botcomponent` |
| `botcomponent_environmentvariabledefinition` | [environmentvariabledefinition](environmentvariabledefinition.md) | _n/a_ | `botcomponent_environmentvariabledefinition` |
| `botcomponent_workflow` | [workflow](workflow.md) | _n/a_ | `botcomponent_workflow` |
| `botcomponent_connectionreference` | [connectionreference](connectionreference.md) | _n/a_ | `botcomponent_connectionreference` |
| `botcomponent_aipluginoperation` | [aipluginoperation](aipluginoperation.md) | _n/a_ | `botcomponent_aipluginoperation` |
| `botcomponent_dvtablesearch` | [dvtablesearch](dvtablesearch.md) | _n/a_ | `botcomponent_dvtablesearch` |
| `botcomponent_msdyn_aimodel` | [msdyn_aimodel](msdyn_aimodel.md) | _n/a_ | `botcomponent_msdyn_aimodel` |

## Source

Generated from [botcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent')) on 2026-05-07.