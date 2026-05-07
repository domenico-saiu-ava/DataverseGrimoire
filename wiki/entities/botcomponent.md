---
logical: "botcomponent"
display: "Copilot component"
entitySetName: "botcomponents"
primaryId: "botcomponentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Copilot component

Holds key authoring components of a Copilot such a topics, entities, variables, etc.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent` |
| Display name | Copilot component |
| Display (plural) | Copilot components |
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

Writable: **27** · Read-only: **20**

### Writable

`AccentColor`, `botcomponentId`, `canmodifystate`, `Category`, `ComponentType`, `Content`, `Data`, `Dependencies`, `Description`, `HelpLink`, `IconUrl`, `ImportSequenceNumber`, `IsCustomizable`, `Language`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentBotComponentCollectionId`, `ParentBotComponentId`, `ParentBotId`, `ReusePolicy`, `SchemaName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileData`, `FileData_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_parent_bot` | [bot](bot.md) | `parentbotid` | `parentbotid` |
| `botcomponent_parent_botcomponent` | [botcomponent](botcomponent.md) | `parentbotcomponentid` | `ParentBotComponentId` |
| `botcomponent_parent_botcomponentcollection` | [botcomponentcollection](botcomponentcollection.md) | `parentbotcomponentcollectionid` | `ParentBotComponentCollectionId` |
| `business_unit_botcomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_botcomponent_FileData` | [fileattachment](fileattachment.md) | `filedata` | `filedata` |
| `lk_botcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_botcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_botcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_botcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_botcomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_botcomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_botcomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponent_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `botcomponent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponent_parent_botcomponent` | _n/a_ | `parentbotcomponentid` | _n/a_ |
| `botcomponent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `botcomponent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `botcomponent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponent` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_aipluginoperation` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_botcomponent` | _n/a_ | _n/a_ | _n/a_ |
| `botcomponent_connectionreference` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_dvtablesearch` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_environmentvariabledefinition` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_msdyn_aimodel` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |
| `botcomponent_workflow` | [botcomponentid](botcomponentid.md) | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent.md) on 2026-05-06.