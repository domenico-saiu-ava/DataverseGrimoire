---
logical: "mspp_webtemplate"
display: "Modello Web"
entitySetName: "mspp_webtemplates"
primaryId: "mspp_webtemplateid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello Web

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webtemplate` |
| Display name | Modello Web |
| Display (plural) | Modelli Web |
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

`mspp_createdby`, `mspp_createdon`, `mspp_mimetype`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_source`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

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
| `mspp_webtemplate_adplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |
| `mspp_webtemplate_pagetemplate` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |
| `mspp_webtemplate_pollplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |
| `mspp_webtemplate_website_footer` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_footerwebtemplateid` | `mspp_footerwebtemplateid` |
| `mspp_webtemplate_website_header` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_headerwebtemplateid` | `mspp_headerwebtemplateid` |


## Source

Generated from [mspp_webtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webtemplate')) on 2026-05-07.