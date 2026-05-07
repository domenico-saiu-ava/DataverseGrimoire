---
logical: "mspp_webpageaccesscontrolrule"
display: "Web Page Access Control Rule"
entitySetName: "mspp_webpageaccesscontrolrules"
primaryId: "mspp_webpageaccesscontrolruleid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Web Page Access Control Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webpageaccesscontrolrule` |
| Display name | Web Page Access Control Rule |
| Display (plural) | Web Page Access Control Rules |
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

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_right`, `mspp_scope`, `mspp_webpageaccesscontrolruleId`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

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
| `mspp_accesscontrolrule_publishingstate` | [mspp_webpageaccesscontrolruleid](mspp_webpageaccesscontrolruleid.md) | _n/a_ | _n/a_ |
| `mspp_webpageaccesscontrolrule_webrole` | [mspp_webpageaccesscontrolruleid](mspp_webpageaccesscontrolruleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [mspp_webpageaccesscontrolrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_webpageaccesscontrolrule.md) on 2026-05-06.