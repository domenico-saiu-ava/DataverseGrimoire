---
logical: "post"
display: "Post"
entitySetName: "posts"
primaryId: "postid"
primaryName: "text"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Post

An activity feed post.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `post` |
| Display name | Post |
| Display (plural) | Posts |
| Schema name | `Post` |
| Entity set (Web API) | `posts` |
| Primary id attribute | `postid` |
| Primary name attribute | `text` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/posts?$select=text&$top=10
GET /api/data/v9.2/posts(<guid>)
POST /api/data/v9.2/posts
PATCH /api/data/v9.2/posts(<guid>)
DELETE /api/data/v9.2/posts(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`LargeText`, `PostId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Source`, `Text`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `PostRegardingId`, `PostToYammer`, `RegardingObjectOwnerId`, `RegardingObjectOwnerIdType`, `RegardingObjectOwningBusinessUnit`, `YammerPostState`, `YammerRetryCount`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_post_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_post_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_post_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_post_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_post` | [organization](organization.md) | `organizationid` | `organizationid` |
| `post_PostRegardings` | [postregarding](postregarding.md) | `postregardingid` | `postregardingid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `post_activity_file_attachment` | _n/a_ | `parentid` | _n/a_ |
| `post_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `post_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Post_Comments` | _n/a_ | `postid` | _n/a_ |
| `Post_Likes` | _n/a_ | `postid` | _n/a_ |


## Source

Generated from [post.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/post.md) on 2026-05-06.