---
logical: "mspp_webpage"
display: "Pagina Web"
entitySetName: "mspp_webpages"
primaryId: "mspp_webpageid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Pagina Web

Pagina Web

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webpage` |
| Display name | Pagina Web |
| Display (plural) | Pagine Web |
| Schema name | `mspp_webpage` |
| Entity set (Web API) | `mspp_webpages` |
| Primary id attribute | `mspp_webpageid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webpages?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webpages(<guid>)
POST /api/data/v9.2/mspp_webpages
PATCH /api/data/v9.2/mspp_webpages(<guid>)
DELETE /api/data/v9.2/mspp_webpages(<guid>)
```

## Attributes

Writable: **46** · Read-only: **0**

### Writable

`mspp_alloworigin`, `mspp_category`, `mspp_copy`, `mspp_createdby`, `mspp_createdbyipaddress`, `mspp_createdbyusername`, `mspp_createdon`, `mspp_customcss`, `mspp_customjavascript`, `mspp_displaydate`, `mspp_displayorder`, `mspp_editorialcomments`, `mspp_enablerating`, `mspp_entityform`, `mspp_entitylist`, `mspp_excludefromsearch`, `mspp_expirationdate`, `mspp_feedbackpolicy`, `mspp_hiddenfromsitemap`, `mspp_image`, `mspp_imageurl`, `mspp_isofflinecached`, `mspp_isroot`, `mspp_masterwebpageid`, `mspp_meta_description`, `mspp_modifiedby`, `mspp_modifiedbyipaddress`, `mspp_modifiedbyusername`, `mspp_modifiedon`, `mspp_name`, `mspp_navigation`, `mspp_pagetemplateid`, `mspp_parentpageid`, `mspp_partialurl`, `mspp_publishingstateid`, `mspp_releasedate`, `mspp_rootwebpageid`, `mspp_sharedpageconfiguration`, `mspp_summary`, `mspp_title`, `mspp_webform`, `mspp_webpageid`, `mspp_webpagelanguageid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_pagetemplate_webpage` | [mspp_pagetemplate](mspp_pagetemplate.md) | `mspp_pagetemplateid` | `mspp_pagetemplateid` |
| `mspp_publishingstate_webpage` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_systemuser_mspp_webpage_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webpage_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webfile_webpage_image` | [mspp_webfile](mspp_webfile.md) | `mspp_image` | `mspp_image` |
| `mspp_webpage_entityform` | [mspp_entityform](mspp_entityform.md) | `mspp_entityform` | `mspp_entityform` |
| `mspp_webpage_entitylist` | [mspp_entitylist](mspp_entitylist.md) | `mspp_entitylist` | `mspp_entitylist` |
| `mspp_webpage_masterwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_masterwebpageid` | `mspp_masterwebpageid` |
| `mspp_webpage_navigation_weblinkset` | [mspp_weblinkset](mspp_weblinkset.md) | `mspp_navigation` | `mspp_navigation` |
| `mspp_webpage_webform` | [mspp_webform](mspp_webform.md) | `mspp_webform` | `mspp_webform` |
| `mspp_webpage_webpage` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpageid` | `mspp_parentpageid` |
| `mspp_webpage_webpage_rootwebpageid` | [mspp_webpage](mspp_webpage.md) | `mspp_rootwebpageid` | `mspp_rootwebpageid` |
| `mspp_website_webpage` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_websitelanguage_webpage_webpagelanguageid` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_webpagelanguageid` | `mspp_webpagelanguageid` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entityform_redirectwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_redirectwebpage` | `mspp_redirectwebpage` |
| `mspp_entitylist_webpageforcreate` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageforcreate` | `mspp_webpageforcreate` |
| `mspp_entitylist_webpagefordetailsview` | [mspp_webpage](mspp_webpage.md) | `mspp_webpagefordetailsview` | `mspp_webpagefordetailsview` |
| `mspp_parentwebpage_shortcut` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpage_webpageid` | `mspp_ParentPage_webpageId` |
| `mspp_webformstep_redirectwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_redirectwebpage` | `mspp_redirectwebpage` |
| `mspp_webpage_masterwebpage` | [mspp_webpage](mspp_webpage.md) | `mspp_masterwebpageid` | `mspp_masterwebpageid` |
| `mspp_webpage_redirect` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_webpageid` |
| `mspp_webpage_shortcut` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_WebPageId` |
| `mspp_webpage_sitemarker` | [mspp_webpage](mspp_webpage.md) | `mspp_pageid` | `mspp_pageid` |
| `mspp_webpage_webfile` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpageid` | `mspp_parentpageid` |
| `mspp_webpage_weblink` | [mspp_webpage](mspp_webpage.md) | `mspp_pageid` | `mspp_pageid` |
| `mspp_webpage_webpage` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpageid` | `mspp_parentpageid` |
| `mspp_webpage_webpage_rootwebpageid` | [mspp_webpage](mspp_webpage.md) | `mspp_rootwebpageid` | `mspp_rootwebpageid` |
| `mspp_webpage_webpageaccesscontrolrule` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_webpageid` |


## Source

Generated from [mspp_webpage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webpage')) on 2026-05-07.