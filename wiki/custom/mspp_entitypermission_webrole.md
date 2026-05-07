---
logical: "mspp_entitypermission_webrole"
display: "mspp_entitypermission_webrole"
entitySetName: "mspp_entitypermission_webroleset"
primaryId: "mspp_entitypermission_webroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_entitypermission_webrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_entitypermission_webrole` |
| Display name | mspp_entitypermission_webrole |
| Schema name | `mspp_entitypermission_webrole` |
| Entity set (Web API) | `mspp_entitypermission_webroleset` |
| Primary id attribute | `mspp_entitypermission_webroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_entitypermission_webroleset?$select=&$top=10
GET /api/data/v9.2/mspp_entitypermission_webroleset(<guid>)
POST /api/data/v9.2/mspp_entitypermission_webroleset
PATCH /api/data/v9.2/mspp_entitypermission_webroleset(<guid>)
DELETE /api/data/v9.2/mspp_entitypermission_webroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_entitypermission_webroleid`, `mspp_entitypermissionid`, `mspp_webroleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_entitypermission_webrole` | [mspp_entitypermission](mspp_entitypermission.md) | _n/a_ | `mspp_entitypermission_webrole` |

## Source

Generated from [mspp_entitypermission_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_entitypermission_webrole')) on 2026-05-07.