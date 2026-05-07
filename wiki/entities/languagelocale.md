---
logical: "languagelocale"
display: "Language"
entitySetName: "languagelocale"
primaryId: "languagelocaleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Language

Language

## Identity

| Property | Value |
| --- | --- |
| Logical name | `languagelocale` |
| Display name | Language |
| Display (plural) | Languages |
| Schema name | `LanguageLocale` |
| Entity set (Web API) | `languagelocale` |
| Primary id attribute | `languagelocaleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/languagelocale?$select=name&$top=10
GET /api/data/v9.2/languagelocale(<guid>)
POST /api/data/v9.2/languagelocale
PATCH /api/data/v9.2/languagelocale(<guid>)
DELETE /api/data/v9.2/languagelocale(<guid>)
```

## Attributes

Writable: **4** · Read-only: **6**

### Writable

`LanguageLocaleId`, `LocaleId`, `statecode`, `statuscode`

### Read-only

`Code`, `Language`, `Name`, `OrganizationId`, `Region`, `VersionNumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `languagelocale_organization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticle_languagelocaleid` | _n/a_ | `languagelocaleid` | _n/a_ |


## Source

Generated from [languagelocale.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/languagelocale.md) on 2026-05-06.