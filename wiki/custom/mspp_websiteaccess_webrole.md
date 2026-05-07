---
logical: "mspp_websiteaccess_webrole"
display: "mspp_websiteaccess_webrole"
entitySetName: "mspp_websiteaccess_webroleset"
primaryId: "mspp_websiteaccess_webroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_websiteaccess_webrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_websiteaccess_webrole` |
| Display name | mspp_websiteaccess_webrole |
| Schema name | `mspp_websiteaccess_webrole` |
| Entity set (Web API) | `mspp_websiteaccess_webroleset` |
| Primary id attribute | `mspp_websiteaccess_webroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_websiteaccess_webroleset?$select=&$top=10
GET /api/data/v9.2/mspp_websiteaccess_webroleset(<guid>)
POST /api/data/v9.2/mspp_websiteaccess_webroleset
PATCH /api/data/v9.2/mspp_websiteaccess_webroleset(<guid>)
DELETE /api/data/v9.2/mspp_websiteaccess_webroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_webroleid`, `mspp_websiteaccess_webroleid`, `mspp_websiteaccessid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_websiteaccess_webrole` | [mspp_websiteaccess](mspp_websiteaccess.md) | _n/a_ | `mspp_websiteaccess_webrole` |

## Source

Generated from [mspp_websiteaccess_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_websiteaccess_webrole')) on 2026-05-07.