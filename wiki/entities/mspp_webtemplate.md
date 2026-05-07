---
logical: "mspp_webtemplate"
display: "Web Template"
entitySetName: "mspp_webtemplates"
primaryId: "mspp_webtemplateid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Web Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webtemplate` |
| Display name | Web Template |
| Display (plural) | Web Templates |
| Schema name | `mspp_webtemplate` |
| Entity set (Web API) | `mspp_webtemplates` |
| Primary id attribute | `mspp_webtemplateid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webtemplates?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webtemplates(<guid>)
POST /api/data/v9.2/mspp_webtemplates
PATCH /api/data/v9.2/mspp_webtemplates(<guid>)
DELETE /api/data/v9.2/mspp_webtemplates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_mimetype`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_source`, `mspp_websiteid`, `mspp_webtemplateId`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_webtemplate_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webtemplate_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_mspp_webtemplate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webtemplate_adplacement` | _n/a_ | `mspp_webtemplateid` | _n/a_ |
| `mspp_webtemplate_pagetemplate` | _n/a_ | `mspp_webtemplateid` | _n/a_ |
| `mspp_webtemplate_pollplacement` | _n/a_ | `mspp_webtemplateid` | _n/a_ |
| `mspp_webtemplate_website_footer` | _n/a_ | `mspp_footerwebtemplateid` | _n/a_ |
| `mspp_webtemplate_website_header` | _n/a_ | `mspp_headerwebtemplateid` | _n/a_ |


## Source

Generated from [mspp_webtemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_webtemplate.md) on 2026-05-06.