---
logical: "mspp_contentsnippet"
display: "Frammento di contenuto"
entitySetName: "mspp_contentsnippets"
primaryId: "mspp_contentsnippetid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Frammento di contenuto

I frammenti di contenuto vengono inseriti nei modelli di pagina affinché ogni etichetta, stringa di testo o immagine nel modello possa essere gestita come contenuto.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_contentsnippet` |
| Display name | Frammento di contenuto |
| Display (plural) | Frammenti di contenuto |
| Schema name | `mspp_contentsnippet` |
| Entity set (Web API) | `mspp_contentsnippets` |
| Primary id attribute | `mspp_contentsnippetid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_contentsnippets?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_contentsnippets(<guid>)
POST /api/data/v9.2/mspp_contentsnippets
PATCH /api/data/v9.2/mspp_contentsnippets(<guid>)
DELETE /api/data/v9.2/mspp_contentsnippets(<guid>)
```

## Attributes

Writable: **17** · Read-only: **0**

### Writable

`mspp_contentsnippetid`, `mspp_contentsnippetlanguageid`, `mspp_createdby`, `mspp_createdbyipaddress`, `mspp_createdbyusername`, `mspp_createdon`, `mspp_display_name`, `mspp_modifiedby`, `mspp_modifiedbyipaddress`, `mspp_modifiedbyusername`, `mspp_modifiedon`, `mspp_name`, `mspp_type`, `mspp_value`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_contentsnippet_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_contentsnippet_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_contentsnippet` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_websitelanguage_contentsnippet_contentsnippetlanguageid` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_contentsnippetlanguageid` | `mspp_contentsnippetlanguageid` |



## Source

Generated from [mspp_contentsnippet (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_contentsnippet')) on 2026-05-07.