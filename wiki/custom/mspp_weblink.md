---
logical: "mspp_weblink"
display: "Collegamento Web"
entitySetName: "mspp_weblinks"
primaryId: "mspp_weblinkid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Collegamento Web

Collegamento basato su testo o immagine a un URL interno o esterno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_weblink` |
| Display name | Collegamento Web |
| Display (plural) | Collegamenti Web |
| Schema name | `mspp_weblink` |
| Entity set (Web API) | `mspp_weblinks` |
| Primary id attribute | `mspp_weblinkid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_weblinks?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_weblinks(<guid>)
POST /api/data/v9.2/mspp_weblinks
PATCH /api/data/v9.2/mspp_weblinks(<guid>)
DELETE /api/data/v9.2/mspp_weblinks(<guid>)
```

## Attributes

Writable: **28** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdbyipaddress`, `mspp_createdbyusername`, `mspp_createdon`, `mspp_description`, `mspp_disablepagevalidation`, `mspp_displayimageonly`, `mspp_displayorder`, `mspp_displaypagechildlinks`, `mspp_externalurl`, `mspp_imagealttext`, `mspp_imageheight`, `mspp_imageurl`, `mspp_imagewidth`, `mspp_modifiedby`, `mspp_modifiedbyipaddress`, `mspp_modifiedbyusername`, `mspp_modifiedon`, `mspp_name`, `mspp_openinnewwindow`, `mspp_pageid`, `mspp_parentweblinkid`, `mspp_publishingstateid`, `mspp_robotsfollowlink`, `mspp_weblinkid`, `mspp_weblinksetid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstate_weblink` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_systemuser_mspp_weblink_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_weblink_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_weblink_weblink` | [mspp_weblink](mspp_weblink.md) | `mspp_parentweblinkid` | `mspp_parentweblinkid` |
| `mspp_weblinkset_weblink` | [mspp_weblinkset](mspp_weblinkset.md) | `mspp_weblinksetid` | `mspp_weblinksetid` |
| `mspp_webpage_weblink` | [mspp_webpage](mspp_webpage.md) | `mspp_pageid` | `mspp_pageid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_weblink_weblink` | [mspp_weblink](mspp_weblink.md) | `mspp_parentweblinkid` | `mspp_parentweblinkid` |


## Source

Generated from [mspp_weblink (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_weblink')) on 2026-05-07.