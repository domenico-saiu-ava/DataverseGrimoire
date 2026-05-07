---
logical: "mspp_pagetemplate"
display: "Modello di pagina"
entitySetName: "mspp_pagetemplates"
primaryId: "mspp_pagetemplateid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di pagina

URL della pagina ASPX usata per creare nuove pagine Web.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_pagetemplate` |
| Display name | Modello di pagina |
| Display (plural) | Modelli di pagina |
| Schema name | `mspp_pagetemplate` |
| Entity set (Web API) | `mspp_pagetemplates` |
| Primary id attribute | `mspp_pagetemplateid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_pagetemplates?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_pagetemplates(<guid>)
POST /api/data/v9.2/mspp_pagetemplates
PATCH /api/data/v9.2/mspp_pagetemplates(<guid>)
DELETE /api/data/v9.2/mspp_pagetemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_entityname`, `mspp_isdefault`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_pagetemplateid`, `mspp_rewriteurl`, `mspp_type`, `mspp_usewebsiteheaderandfooter`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_pagetemplate_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_pagetemplate_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_pagetemplate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_webtemplate_pagetemplate` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_pagetemplate_webpage` | [mspp_pagetemplate](mspp_pagetemplate.md) | `mspp_pagetemplateid` | `mspp_pagetemplateid` |


## Source

Generated from [mspp_pagetemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_pagetemplate')) on 2026-05-07.