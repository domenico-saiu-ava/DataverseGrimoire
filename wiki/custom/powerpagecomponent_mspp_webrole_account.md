---
logical: "powerpagecomponent_mspp_webrole_account"
display: "powerpagecomponent_mspp_webrole_account"
entitySetName: "powerpagecomponent_mspp_webrole_accountset"
primaryId: "powerpagecomponent_mspp_webrole_accountid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerpagecomponent_mspp_webrole_account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent_mspp_webrole_account` |
| Display name | powerpagecomponent_mspp_webrole_account |
| Schema name | `powerpagecomponent_mspp_webrole_account` |
| Entity set (Web API) | `powerpagecomponent_mspp_webrole_accountset` |
| Primary id attribute | `powerpagecomponent_mspp_webrole_accountid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagecomponent_mspp_webrole_accountset?$select=&$top=10
GET /api/data/v9.2/powerpagecomponent_mspp_webrole_accountset(<guid>)
POST /api/data/v9.2/powerpagecomponent_mspp_webrole_accountset
PATCH /api/data/v9.2/powerpagecomponent_mspp_webrole_accountset(<guid>)
DELETE /api/data/v9.2/powerpagecomponent_mspp_webrole_accountset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`accountid`, `powerpagecomponent_mspp_webrole_accountid`, `powerpagecomponentid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_mspp_webrole_account` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `powerpagecomponent_mspp_webrole_account` |

## Source

Generated from [powerpagecomponent_mspp_webrole_account (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagecomponent_mspp_webrole_account')) on 2026-05-07.