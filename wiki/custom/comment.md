---
logical: "comment"
display: "Commento"
entitySetName: "comments"
primaryId: "commentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Commento

Commento collaborativo di un artefatto di creazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `comment` |
| Display name | Commento |
| Display (plural) | Commenti |
| Schema name | `Comment` |
| Entity set (Web API) | `comments` |
| Primary id attribute | `commentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/comments?$select=name&$top=10
GET /api/data/v9.2/comments(<guid>)
POST /api/data/v9.2/comments
PATCH /api/data/v9.2/comments(<guid>)
DELETE /api/data/v9.2/comments(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`anchor`, `artifactid`, `artifacttype`, `body`, `commentid`, `container`, `importsequencenumber`, `kind`, `name`, `originalauthoraadid`, `originalauthoremail`, `originalauthorfullname`, `overriddencreatedon`, `ownerid`, `parent`, `state`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_comment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_comment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_comment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_comment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_comment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_comment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_comment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_comment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `Comment_Container_Comment` | [comment](comment.md) | `container` | `Container` |
| `Comment_Parent_Comment` | [comment](comment.md) | `parent` | `Parent` |
| `Comment_Artifact_Workflow` | [workflow](workflow.md) | `parent` | `Workflow` |
| `Comment_Artifact_AppModule` | [appmodule](appmodule.md) | `parent` | `AppModule` |
| `Comment_Artifact_CanvasApp` | [canvasapp](canvasapp.md) | `parent` | `CanvasApp` |
| `Comment_Artifact_Bot` | [bot](bot.md) | `parent` | `Bot` |
| `Comment_Artifact_BotComponent` | [botcomponent](botcomponent.md) | `parent` | `BotComponent` |
| `Comment_Artifact_PowerPageSite` | [powerpagesite](powerpagesite.md) | `parent` | `PowerPageSite` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `comment_SyncErrors` | [comment](comment.md) | `regardingobjectid` | `regardingobjectid_comment` |
| `comment_AsyncOperations` | [comment](comment.md) | `regardingobjectid` | `regardingobjectid_comment` |
| `comment_MailboxTrackingFolders` | [comment](comment.md) | `regardingobjectid` | `regardingobjectid_comment` |
| `comment_UserEntityInstanceDatas` | [comment](comment.md) | `objectid` | `objectid_comment` |
| `comment_ProcessSession` | [comment](comment.md) | `regardingobjectid` | `regardingobjectid_comment` |
| `comment_BulkDeleteFailures` | [comment](comment.md) | `regardingobjectid` | `regardingobjectid_comment` |
| `comment_PrincipalObjectAttributeAccesses` | [comment](comment.md) | `objectid` | `objectid_comment` |
| `Comment_Container_Comment` | [comment](comment.md) | `container` | `Container` |
| `Comment_Parent_Comment` | [comment](comment.md) | `parent` | `Parent` |


## Source

Generated from [comment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='comment')) on 2026-05-07.