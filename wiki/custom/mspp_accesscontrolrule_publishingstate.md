---
logical: "mspp_accesscontrolrule_publishingstate"
display: "mspp_accesscontrolrule_publishingstate"
entitySetName: "mspp_accesscontrolrule_publishingstateset"
primaryId: "mspp_accesscontrolrule_publishingstateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_accesscontrolrule_publishingstate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_accesscontrolrule_publishingstate` |
| Display name | mspp_accesscontrolrule_publishingstate |
| Schema name | `mspp_accesscontrolrule_publishingstate` |
| Entity set (Web API) | `mspp_accesscontrolrule_publishingstateset` |
| Primary id attribute | `mspp_accesscontrolrule_publishingstateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_accesscontrolrule_publishingstateset?$select=&$top=10
GET /api/data/v9.2/mspp_accesscontrolrule_publishingstateset(<guid>)
POST /api/data/v9.2/mspp_accesscontrolrule_publishingstateset
PATCH /api/data/v9.2/mspp_accesscontrolrule_publishingstateset(<guid>)
DELETE /api/data/v9.2/mspp_accesscontrolrule_publishingstateset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_accesscontrolrule_publishingstateid`, `mspp_publishingstateid`, `mspp_webpageaccesscontrolruleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_accesscontrolrule_publishingstate` | [mspp_webpageaccesscontrolrule](mspp_webpageaccesscontrolrule.md) | _n/a_ | `mspp_accesscontrolrule_publishingstate` |

## Source

Generated from [mspp_accesscontrolrule_publishingstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_accesscontrolrule_publishingstate')) on 2026-05-07.