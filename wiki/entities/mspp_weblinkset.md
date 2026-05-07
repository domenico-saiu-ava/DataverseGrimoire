---
logical: "mspp_weblinkset"
display: "Web Link Set"
entitySetName: "mspp_weblinksets"
primaryId: "mspp_weblinksetid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Web Link Set

A grouping of web links.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_weblinkset` |
| Display name | Web Link Set |
| Display (plural) | Web Link Sets |
| Schema name | `mspp_weblinkset` |
| Entity set (Web API) | `mspp_weblinksets` |
| Primary id attribute | `mspp_weblinksetid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_weblinksets?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_weblinksets(<guid>)
POST /api/data/v9.2/mspp_weblinksets
PATCH /api/data/v9.2/mspp_weblinksets(<guid>)
DELETE /api/data/v9.2/mspp_weblinksets(<guid>)
```

## Attributes

Writable: **14** · Read-only: **0**

### Writable

`mspp_copy`, `mspp_createdby`, `mspp_createdon`, `mspp_display_name`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstateid`, `mspp_title`, `mspp_weblinksetId`, `mspp_websiteid`, `mspp_websitelanguageid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstate_weblinkset` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_systemuser_mspp_weblinkset_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_weblinkset_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_weblinkset` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_websitelanguage_weblinkset` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_websitelanguageid` | `mspp_websitelanguageid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_weblinkset_weblink` | _n/a_ | `mspp_weblinksetid` | _n/a_ |
| `mspp_webpage_navigation_weblinkset` | _n/a_ | `mspp_navigation` | _n/a_ |


## Source

Generated from [mspp_weblinkset.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_weblinkset.md) on 2026-05-06.