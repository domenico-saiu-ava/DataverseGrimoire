---
logical: "mspp_sitemarker"
display: "Site Marker"
entitySetName: "mspp_sitemarkers"
primaryId: "mspp_sitemarkerid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Site Marker

Used by web page templates to locate a specific page of content.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_sitemarker` |
| Display name | Site Marker |
| Display (plural) | Site Markers |
| Schema name | `mspp_sitemarker` |
| Entity set (Web API) | `mspp_sitemarkers` |
| Primary id attribute | `mspp_sitemarkerid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_sitemarkers?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_sitemarkers(<guid>)
POST /api/data/v9.2/mspp_sitemarkers
PATCH /api/data/v9.2/mspp_sitemarkers(<guid>)
DELETE /api/data/v9.2/mspp_sitemarkers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_pageid`, `mspp_sitemarkerId`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_sitemarker_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_sitemarker_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webpage_sitemarker` | [mspp_webpage](mspp_webpage.md) | `mspp_pageid` | `mspp_pageid` |
| `mspp_website_sitemarker` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_sitemarker_redirect` | _n/a_ | `mspp_sitemarkerid` | _n/a_ |


## Source

Generated from [mspp_sitemarker.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_sitemarker.md) on 2026-05-06.