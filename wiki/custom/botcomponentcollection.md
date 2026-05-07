---
logical: "botcomponentcollection"
display: "Raccolta componenti copilota"
entitySetName: "botcomponentcollections"
primaryId: "botcomponentcollectionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Raccolta componenti copilota

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponentcollection` |
| Display name | Raccolta componenti copilota |
| Display (plural) | Raccolte componenti copilota |
| Schema name | `botcomponentcollection` |
| Entity set (Web API) | `botcomponentcollections` |
| Primary id attribute | `botcomponentcollectionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/botcomponentcollections?$select=name&$top=10
GET /api/data/v9.2/botcomponentcollections(<guid>)
POST /api/data/v9.2/botcomponentcollections
PATCH /api/data/v9.2/botcomponentcollections(<guid>)
DELETE /api/data/v9.2/botcomponentcollections(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`botcomponentcollectionid`, `configuration`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `schemaname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_botcomponentcollection_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_botcomponentcollection_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_botcomponentcollection_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_botcomponentcollection_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_botcomponentcollection` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_botcomponentcollection` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_botcomponentcollection` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_botcomponentcollection` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponentcollection_SyncErrors` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `botcomponentcollection_AsyncOperations` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `botcomponentcollection_MailboxTrackingFolders` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `botcomponentcollection_UserEntityInstanceDatas` | [botcomponentcollection](botcomponentcollection.md) | `objectid` | `objectid_botcomponentcollection` |
| `botcomponentcollection_ProcessSession` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `botcomponentcollection_BulkDeleteFailures` | [botcomponentcollection](botcomponentcollection.md) | `regardingobjectid` | `regardingobjectid_botcomponentcollection` |
| `botcomponentcollection_PrincipalObjectAttributeAccesses` | [botcomponentcollection](botcomponentcollection.md) | `objectid` | `objectid_botcomponentcollection` |
| `botcomponent_parent_botcomponentcollection` | [botcomponentcollection](botcomponentcollection.md) | `parentbotcomponentcollectionid` | `ParentBotComponentCollectionId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_botcomponentcollection` | [bot](bot.md) | _n/a_ | `bot_botcomponentcollection` |

## Source

Generated from [botcomponentcollection (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponentcollection')) on 2026-05-07.