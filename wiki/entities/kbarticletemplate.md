---
logical: "kbarticletemplate"
display: "Article Template"
entitySetName: "kbarticletemplates"
primaryId: "kbarticletemplateid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Article Template

Template for a knowledge base article that contains the standard attributes of an article.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `kbarticletemplate` |
| Display name | Article Template |
| Display (plural) | Article Templates |
| Schema name | `KbArticleTemplate` |
| Entity set (Web API) | `kbarticletemplates` |
| Primary id attribute | `kbarticletemplateid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/kbarticletemplates?$select=title&$top=10
GET /api/data/v9.2/kbarticletemplates(<guid>)
POST /api/data/v9.2/kbarticletemplates
PATCH /api/data/v9.2/kbarticletemplates(<guid>)
DELETE /api/data/v9.2/kbarticletemplates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`Description`, `FormatXml`, `ImportSequenceNumber`, `IntroducedVersion`, `IsActive`, `IsCustomizable`, `KbArticleTemplateId`, `LanguageCode`, `OverriddenCreatedOn`, `StructureXml`, `Title`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `KbArticleTemplateIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_kbarticletemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_kbarticletemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_kbarticletemplatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_kbarticletemplatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_kb_article_templates` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `kb_article_template_kb_articles` | _n/a_ | `kbarticletemplateid` | _n/a_ |
| `KbArticleTemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticleTemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticleTemplate_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KbArticleTemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [kbarticletemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/kbarticletemplate.md) on 2026-05-06.