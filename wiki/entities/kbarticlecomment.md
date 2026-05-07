---
logical: "kbarticlecomment"
display: "Article Comment"
entitySetName: "kbarticlecomments"
primaryId: "kbarticlecommentid"
primaryName: "title"
tableType: "Standard"
ownership: "None"
---

# Article Comment

Comment on a knowledge base article.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `kbarticlecomment` |
| Display name | Article Comment |
| Display (plural) | Article Comments |
| Schema name | `KbArticleComment` |
| Entity set (Web API) | `kbarticlecomments` |
| Primary id attribute | `kbarticlecommentid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/kbarticlecomments?$select=title&$top=10
GET /api/data/v9.2/kbarticlecomments(<guid>)
POST /api/data/v9.2/kbarticlecomments
PATCH /api/data/v9.2/kbarticlecomments(<guid>)
DELETE /api/data/v9.2/kbarticlecomments(<guid>)
```

## Attributes

Writable: **4** · Read-only: **8**

### Writable

`CommentText`, `KbArticleCommentId`, `KbArticleId`, `Title`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `kbarticle_comments` | [kbarticle](kbarticle.md) | `kbarticleid` | `kbarticleid` |
| `lk_kbarticlecomment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_kbarticlecomment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_kbarticlecommentbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_kbarticlecommentbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `KbArticleComment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticleComment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticleComment_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [kbarticlecomment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/kbarticlecomment.md) on 2026-05-06.