---
logical: "mspp_websitelanguage"
display: "Website Language"
entitySetName: "mspp_websitelanguages"
primaryId: "mspp_websitelanguageid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Website Language

Languages supported and publishing status for the portal

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_websitelanguage` |
| Display name | Website Language |
| Display (plural) | Website Languages |
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

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_displayname`, `mspp_languagecode`, `mspp_lcid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstate`, `mspp_systemlanguage`, `mspp_websiteid`, `mspp_websitelanguageId`, `mspp_websitelcid`, `statecode`, `statuscode`

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
| `mspp_mspp_websitelanguage_mspp_website_DefaultLanguage` | _n/a_ | `mspp_defaultlanguage` | _n/a_ |
| `mspp_websitelanguage_contentsnippet_contentsnippetlanguageid` | _n/a_ | `mspp_contentsnippetlanguageid` | _n/a_ |
| `mspp_websitelanguage_weblinkset` | _n/a_ | `mspp_websitelanguageid` | _n/a_ |
| `mspp_websitelanguage_webpage_webpagelanguageid` | _n/a_ | `mspp_webpagelanguageid` | _n/a_ |


## Source

Generated from [mspp_websitelanguage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_websitelanguage.md) on 2026-05-06.