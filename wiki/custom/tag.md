---
logical: "tag"
display: "Tag"
entitySetName: "tags"
primaryId: "tagid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `tag` |
| Display name | Tag |
| Display (plural) | Tag |
| Schema name | `tag` |
| Entity set (Web API) | `tags` |
| Primary id attribute | `tagid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/tags?$select=name&$top=10
GET /api/data/v9.2/tags(<guid>)
POST /api/data/v9.2/tags
PATCH /api/data/v9.2/tags(<guid>)
DELETE /api/data/v9.2/tags(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `tagid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_tag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_tag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_tag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_tag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_tag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_tag` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_tag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_tag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `tag_SyncErrors` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `tag_AsyncOperations` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `tag_MailboxTrackingFolders` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `tag_UserEntityInstanceDatas` | [tag](tag.md) | `objectid` | `objectid_tag` |
| `tag_ProcessSession` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `tag_BulkDeleteFailures` | [tag](tag.md) | `regardingobjectid` | `regardingobjectid_tag` |
| `tag_PrincipalObjectAttributeAccesses` | [tag](tag.md) | `objectid` | `objectid_tag` |
| `taggedprocess_tag_tag` | [tag](tag.md) | `tag` | `tag` |
| `taggedflowsession_tag_tag` | [tag](tag.md) | `tag` | `tag` |


## Source

Generated from [tag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='tag')) on 2026-05-07.