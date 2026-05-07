---
logical: "mspp_sitemarker"
display: "Marcatore sito"
entitySetName: "mspp_sitemarkers"
primaryId: "mspp_sitemarkerid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Marcatore sito

Usato dai modelli di pagina Web per individuare una specifica pagina di contenuto.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_sitemarker` |
| Display name | Marcatore sito |
| Display (plural) | Marcatori sito |
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

`mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_pageid`, `mspp_sitemarkerid`, `mspp_websiteid`, `statecode`, `statuscode`

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
| `mspp_sitemarker_redirect` | [mspp_sitemarker](mspp_sitemarker.md) | `mspp_sitemarkerid` | `mspp_sitemarkerid` |


## Source

Generated from [mspp_sitemarker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_sitemarker')) on 2026-05-07.