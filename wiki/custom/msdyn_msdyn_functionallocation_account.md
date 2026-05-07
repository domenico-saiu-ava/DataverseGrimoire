---
logical: "msdyn_msdyn_functionallocation_account"
display: "msdyn_msdyn_functionallocation_account"
entitySetName: "msdyn_msdyn_functionallocation_accountset"
primaryId: "msdyn_msdyn_functionallocation_accountid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_functionallocation_account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_functionallocation_account` |
| Display name | msdyn_msdyn_functionallocation_account |
| Schema name | `msdyn_msdyn_functionallocation_account` |
| Entity set (Web API) | `msdyn_msdyn_functionallocation_accountset` |
| Primary id attribute | `msdyn_msdyn_functionallocation_accountid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_functionallocation_accountset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_functionallocation_accountset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_functionallocation_accountset
PATCH /api/data/v9.2/msdyn_msdyn_functionallocation_accountset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_functionallocation_accountset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`accountid`, `msdyn_functionallocationid`, `msdyn_msdyn_functionallocation_accountid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_functionallocation_account` | [msdyn_functionallocation](msdyn_functionallocation.md) | _n/a_ | `msdyn_msdyn_functionallocation_account` |

## Source

Generated from [msdyn_msdyn_functionallocation_account (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_functionallocation_account')) on 2026-05-07.