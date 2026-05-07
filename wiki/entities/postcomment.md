---
logical: "postcomment"
display: "Comment"
entitySetName: "postcomments"
primaryId: "postcommentid"
primaryName: "text"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Comment

A comment on an activity feed post.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `postcomment` |
| Display name | Comment |
| Display (plural) | Comments |
| Schema name | `PostComment` |
| Entity set (Web API) | `postcomments` |
| Primary id attribute | `postcommentid` |
| Primary name attribute | `text` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/postcomments?$select=text&$top=10
GET /api/data/v9.2/postcomments(<guid>)
POST /api/data/v9.2/postcomments
PATCH /api/data/v9.2/postcomments(<guid>)
DELETE /api/data/v9.2/postcomments(<guid>)
```

## Attributes

Writable: **6** · Read-only: **4**

### Writable

`LargeText`, `PostCommentId`, `PostId`, `Text`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `OrganizationId`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_postcomment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_postcomment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `organization_PostComment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `Post_Comments` | [post](post.md) | `postid` | `postid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `post_comment_activity_file_attachment` | _n/a_ | `parentid` | _n/a_ |


## Source

Generated from [postcomment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/postcomment.md) on 2026-05-06.