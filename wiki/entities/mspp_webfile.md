---
logical: "mspp_webfile"
display: "Web File"
entitySetName: "mspp_webfiles"
primaryId: "mspp_webfileid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Web File

Storage of files used in the web Portals.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webfile` |
| Display name | Web File |
| Display (plural) | Web Files |
| Schema name | `mspp_webfile` |
| Entity set (Web API) | `mspp_webfiles` |
| Primary id attribute | `mspp_webfileid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webfiles?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webfiles(<guid>)
POST /api/data/v9.2/mspp_webfiles
PATCH /api/data/v9.2/mspp_webfiles(<guid>)
DELETE /api/data/v9.2/mspp_webfiles(<guid>)
```

## Attributes

Writable: **28** · Read-only: **0**

### Writable

`mspp_alloworigin`, `mspp_cloudblobaddress`, `mspp_contentdisposition`, `mspp_createdby`, `mspp_createdbyipaddress`, `mspp_createdbyusername`, `mspp_createdon`, `mspp_displaydate`, `mspp_displayorder`, `mspp_excludefromsearch`, `mspp_expirationdate`, `mspp_hiddenfromsitemap`, `mspp_masterwebfileid`, `mspp_modifiedby`, `mspp_modifiedbyipaddress`, `mspp_modifiedbyusername`, `mspp_modifiedon`, `mspp_name`, `mspp_parentpageid`, `mspp_partialurl`, `mspp_publishingstateid`, `mspp_releasedate`, `mspp_summary`, `mspp_title`, `mspp_webfileId`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstate_webfile` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_systemuser_mspp_webfile_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webfile_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webfile_masterwebfile` | [mspp_webfile](mspp_webfile.md) | `mspp_masterwebfileid` | `mspp_masterwebfileid` |
| `mspp_webpage_webfile` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpageid` | `mspp_parentpageid` |
| `mspp_website_webfile` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webfile_masterwebfile` | _n/a_ | `mspp_masterwebfileid` | _n/a_ |
| `mspp_webfile_shortcut` | _n/a_ | `mspp_webfileid` | _n/a_ |
| `mspp_webfile_webpage_image` | _n/a_ | `mspp_image` | _n/a_ |


## Source

Generated from [mspp_webfile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_webfile.md) on 2026-05-06.