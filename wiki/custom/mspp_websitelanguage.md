---
logical: "mspp_websitelanguage"
display: "Lingua sito Web"
entitySetName: "mspp_websitelanguages"
primaryId: "mspp_websitelanguageid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lingua sito Web

Lingue supportate e stato di pubblicazione per il portale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_websitelanguage` |
| Display name | Lingua sito Web |
| Display (plural) | Lingue sito Web |
| Schema name | `mspp_websitelanguage` |
| Entity set (Web API) | `mspp_websitelanguages` |
| Primary id attribute | `mspp_websitelanguageid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_websitelanguages?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_websitelanguages(<guid>)
POST /api/data/v9.2/mspp_websitelanguages
PATCH /api/data/v9.2/mspp_websitelanguages(<guid>)
DELETE /api/data/v9.2/mspp_websitelanguages(<guid>)
```

## Attributes

Writable: **16** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_displayname`, `mspp_languagecode`, `mspp_lcid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstate`, `mspp_systemlanguage`, `mspp_websiteid`, `mspp_websitelanguageid`, `mspp_websitelcid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_mspp_publishingstate_mspp_websitelanguage_PublishingState` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstate` | `mspp_PublishingState` |
| `mspp_mspp_website_mspp_websitelanguage` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |
| `mspp_systemuser_mspp_websitelanguage_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_websitelanguage_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_mspp_websitelanguage_mspp_website_DefaultLanguage` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_defaultlanguage` | `mspp_DefaultLanguage` |
| `mspp_websitelanguage_contentsnippet_contentsnippetlanguageid` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_contentsnippetlanguageid` | `mspp_contentsnippetlanguageid` |
| `mspp_websitelanguage_weblinkset` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_websitelanguageid` | `mspp_websitelanguageid` |
| `mspp_websitelanguage_webpage_webpagelanguageid` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_webpagelanguageid` | `mspp_webpagelanguageid` |


## Source

Generated from [mspp_websitelanguage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_websitelanguage')) on 2026-05-07.