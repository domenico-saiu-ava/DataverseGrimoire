---
logical: "kbarticle"
display: "Article"
entitySetName: "kbarticles"
primaryId: "kbarticleid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Article

Structured content that is part of the knowledge base.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `kbarticle` |
| Display name | Article |
| Display (plural) | Articles |
| Schema name | `KbArticle` |
| Entity set (Web API) | `kbarticles` |
| Primary id attribute | `kbarticleid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/kbarticles?$select=title&$top=10
GET /api/data/v9.2/kbarticles(<guid>)
POST /api/data/v9.2/kbarticles
PATCH /api/data/v9.2/kbarticles(<guid>)
DELETE /api/data/v9.2/kbarticles(<guid>)
```

## Attributes

Writable: **22** · Read-only: **15**

### Writable

`adx_averagerating`, `adx_averagerating_int`, `adx_downvotes`, `adx_ratingcount`, `adx_ratingsum`, `adx_upvotes`, `ArticleXml`, `Comments`, `Description`, `EntityImage`, `ImportSequenceNumber`, `KbArticleId`, `KbArticleTemplateId`, `KeyWords`, `LanguageCode`, `msa_publishtoweb`, `OverriddenCreatedOn`, `StateCode`, `StatusCode`, `SubjectId`, `Title`, `TransactionCurrencyId`

### Read-only

`Content`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `KbArticleTemplateIdTitle`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Number`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `kb_article_template_kb_articles` | [kbarticletemplate](kbarticletemplate.md) | `kbarticletemplateid` | `kbarticletemplateid` |
| `lk_kbarticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_kbarticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_kbarticlebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_kbarticlebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_kb_articles` | [organization](organization.md) | `organizationid` | `organizationid` |
| `subject_kb_articles` | [subject](subject.md) | `subjectid` | `subjectid` |
| `TransactionCurrency_KbArticle` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `KbArticle_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `KbArticle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `kbarticle_comments` | _n/a_ | `kbarticleid` | _n/a_ |
| `KbArticle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `KbArticle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `kbarticle_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `KbArticle_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticle_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_kbarticle_kbarticle` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [kbarticle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/kbarticle.md) on 2026-05-06.