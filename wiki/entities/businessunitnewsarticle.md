---
logical: "businessunitnewsarticle"
display: "Announcement"
entitySetName: "businessunitnewsarticles"
primaryId: "businessunitnewsarticleid"
primaryName: "articletitle"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Announcement

Announcement associated with an organization.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `businessunitnewsarticle` |
| Display name | Announcement |
| Display (plural) | Announcements |
| Schema name | `BusinessUnitNewsArticle` |
| Entity set (Web API) | `businessunitnewsarticles` |
| Primary id attribute | `businessunitnewsarticleid` |
| Primary name attribute | `articletitle` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/businessunitnewsarticles?$select=articletitle&$top=10
GET /api/data/v9.2/businessunitnewsarticles(<guid>)
POST /api/data/v9.2/businessunitnewsarticles
PATCH /api/data/v9.2/businessunitnewsarticles(<guid>)
DELETE /api/data/v9.2/businessunitnewsarticles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ActiveOn`, `ActiveUntil`, `ArticleTitle`, `ArticleTypeCode`, `ArticleUrl`, `BusinessUnitNewsArticleId`, `ImportSequenceNumber`, `NewsArticle`, `OverriddenCreatedOn`, `ShowOnHomepage`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_businessunitnewsarticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_businessunitnewsarticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_businessunitnewsarticlebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_businessunitnewsarticlebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_business_unit_news_articles` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnitNewsArticle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BusinessUnitNewsArticle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BusinessUnitNewsArticle_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [businessunitnewsarticle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/businessunitnewsarticle.md) on 2026-05-06.