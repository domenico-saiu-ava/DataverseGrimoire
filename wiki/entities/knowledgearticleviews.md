---
logical: "knowledgearticleviews"
display: "Knowledge Article Views"
entitySetName: "knowledgearticleviews"
primaryId: "knowledgearticleviewsid"
primaryName: "knowledgearticleidname"
tableType: "Standard"
ownership: "None"
---

# Knowledge Article Views

No of times an article is viewed per day

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgearticleviews` |
| Display name | Knowledge Article Views |
| Display (plural) | Knowledge Article Views |
| Schema name | `KnowledgeArticleViews` |
| Entity set (Web API) | `knowledgearticleviews` |
| Primary id attribute | `knowledgearticleviewsid` |
| Primary name attribute | `knowledgearticleidname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/knowledgearticleviews?$select=knowledgearticleidname&$top=10
GET /api/data/v9.2/knowledgearticleviews(<guid>)
POST /api/data/v9.2/knowledgearticleviews
PATCH /api/data/v9.2/knowledgearticleviews(<guid>)
DELETE /api/data/v9.2/knowledgearticleviews(<guid>)
```

## Attributes

Writable: **11** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `KnowledgeArticleId`, `KnowledgeArticleView`, `KnowledgeArticleViewsId`, `Location`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `ViewDate`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticle_views` | [knowledgearticle](knowledgearticle.md) | `knowledgearticleid` | `knowledgearticleid` |
| `lk_knowledgearticleviews_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgearticleviews_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgearticleviews_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgearticleviews_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `transactioncurrency_knowledgearticleviews` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticleview_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeArticleViews_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [knowledgearticleviews.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/knowledgearticleviews.md) on 2026-05-06.