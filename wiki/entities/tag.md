---
logical: "tag"
display: "Tag"
entitySetName: "tags"
primaryId: "tagid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `tag` |
| Display name | Tag |
| Display (plural) | Tags |
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

Writable: **12** · Read-only: **18**

### Writable

`Description`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `tagId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_tag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_tag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_tag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_tag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_tag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_tag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_tag` | [team](team.md) | `owningteam` | `owningteam` |
| `user_tag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `tag_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `tag_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `tag_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `tag_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `tag_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `tag_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `taggedflowsession_tag_tag` | _n/a_ | `tag` | _n/a_ |
| `taggedprocess_tag_tag` | _n/a_ | `tag` | _n/a_ |


## Source

Generated from [tag.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/tag.md) on 2026-05-06.