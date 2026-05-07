---
logical: "mspp_publishingstatetransitionrule_webrole"
display: "mspp_publishingstatetransitionrule_webrole"
entitySetName: "mspp_publishingstatetransitionrule_webroleset"
primaryId: "mspp_publishingstatetransitionrule_webroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_publishingstatetransitionrule_webrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_publishingstatetransitionrule_webrole` |
| Display name | mspp_publishingstatetransitionrule_webrole |
| Schema name | `mspp_publishingstatetransitionrule_webrole` |
| Entity set (Web API) | `mspp_publishingstatetransitionrule_webroleset` |
| Primary id attribute | `mspp_publishingstatetransitionrule_webroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_publishingstatetransitionrule_webroleset?$select=&$top=10
GET /api/data/v9.2/mspp_publishingstatetransitionrule_webroleset(<guid>)
POST /api/data/v9.2/mspp_publishingstatetransitionrule_webroleset
PATCH /api/data/v9.2/mspp_publishingstatetransitionrule_webroleset(<guid>)
DELETE /api/data/v9.2/mspp_publishingstatetransitionrule_webroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_publishingstatetransitionrule_webroleid`, `mspp_publishingstatetransitionruleid`, `mspp_webroleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_publishingstatetransitionrule_webrole` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | _n/a_ | `mspp_publishingstatetransitionrule_webrole` |

## Source

Generated from [mspp_publishingstatetransitionrule_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_publishingstatetransitionrule_webrole')) on 2026-05-07.