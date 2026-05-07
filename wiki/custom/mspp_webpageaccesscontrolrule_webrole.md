---
logical: "mspp_webpageaccesscontrolrule_webrole"
display: "mspp_webpageaccesscontrolrule_webrole"
entitySetName: "mspp_webpageaccesscontrolrule_webroleset"
primaryId: "mspp_webpageaccesscontrolrule_webroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_webpageaccesscontrolrule_webrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webpageaccesscontrolrule_webrole` |
| Display name | mspp_webpageaccesscontrolrule_webrole |
| Schema name | `mspp_webpageaccesscontrolrule_webrole` |
| Entity set (Web API) | `mspp_webpageaccesscontrolrule_webroleset` |
| Primary id attribute | `mspp_webpageaccesscontrolrule_webroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_webpageaccesscontrolrule_webroleset?$select=&$top=10
GET /api/data/v9.2/mspp_webpageaccesscontrolrule_webroleset(<guid>)
POST /api/data/v9.2/mspp_webpageaccesscontrolrule_webroleset
PATCH /api/data/v9.2/mspp_webpageaccesscontrolrule_webroleset(<guid>)
DELETE /api/data/v9.2/mspp_webpageaccesscontrolrule_webroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_webpageaccesscontrolrule_webroleid`, `mspp_webpageaccesscontrolruleid`, `mspp_webroleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webpageaccesscontrolrule_webrole` | [mspp_webpageaccesscontrolrule](mspp_webpageaccesscontrolrule.md) | _n/a_ | `mspp_webpageaccesscontrolrule_webrole` |

## Source

Generated from [mspp_webpageaccesscontrolrule_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_webpageaccesscontrolrule_webrole')) on 2026-05-07.