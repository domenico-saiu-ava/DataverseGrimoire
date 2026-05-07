---
logical: "mspp_webpageaccesscontrolrule"
display: "Regola di controllo di accesso alla pagina Web"
entitySetName: "mspp_webpageaccesscontrolrules"
primaryId: "mspp_webpageaccesscontrolruleid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di controllo di accesso alla pagina Web

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webpageaccesscontrolrule` |
| Display name | Regola di controllo di accesso alla pagina Web |
| Display (plural) | Regole di controllo di accesso alla pagina Web |
| Schema name | `mspp_webpageaccesscontrolrule` |
| Entity set (Web API) | `mspp_webpageaccesscontrolrules` |
| Primary id attribute | `mspp_webpageaccesscontrolruleid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webpageaccesscontrolrules?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webpageaccesscontrolrules(<guid>)
POST /api/data/v9.2/mspp_webpageaccesscontrolrules
PATCH /api/data/v9.2/mspp_webpageaccesscontrolrules(<guid>)
DELETE /api/data/v9.2/mspp_webpageaccesscontrolrules(<guid>)
```

## Attributes

Writable: **13** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_right`, `mspp_scope`, `mspp_webpageaccesscontrolruleid`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_webpageaccesscontrolrule_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webpageaccesscontrolrule_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webpage_webpageaccesscontrolrule` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_webpageid` |
| `mspp_website_webpageaccesscontrolrule` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |


### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_accesscontrolrule_publishingstate` | [mspp_publishingstate](mspp_publishingstate.md) | _n/a_ | `mspp_accesscontrolrule_publishingstate` |
| `mspp_webpageaccesscontrolrule_webrole` | [mspp_webrole](mspp_webrole.md) | _n/a_ | `mspp_webpageaccesscontrolrule_webrole` |

## Source

Generated from [mspp_webpageaccesscontrolrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webpageaccesscontrolrule')) on 2026-05-07.