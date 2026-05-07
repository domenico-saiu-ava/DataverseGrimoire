---
logical: "postlike"
display: "Like"
entitySetName: "postlikes"
primaryId: "postlikeid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Like

A like on an activity feed post.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `postlike` |
| Display name | Like |
| Display (plural) | Likes |
| Schema name | `PostLike` |
| Entity set (Web API) | `postlikes` |
| Primary id attribute | `postlikeid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/postlikes?$select=&$top=10
GET /api/data/v9.2/postlikes(<guid>)
POST /api/data/v9.2/postlikes
PATCH /api/data/v9.2/postlikes(<guid>)
DELETE /api/data/v9.2/postlikes(<guid>)
```

## Attributes

Writable: **4** · Read-only: **4**

### Writable

`PostId`, `PostLikeId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `OrganizationId`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_postlike_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_postlike_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `organization_postlike` | [organization](organization.md) | `organizationid` | `organizationid` |
| `Post_Likes` | [post](post.md) | `postid` | `postid` |



## Source

Generated from [postlike.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/postlike.md) on 2026-05-06.