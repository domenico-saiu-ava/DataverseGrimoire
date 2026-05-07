---
logical: "msdyn_msdyn_warranty_account"
display: "msdyn_msdyn_warranty_account"
entitySetName: "msdyn_msdyn_warranty_accountset"
primaryId: "msdyn_msdyn_warranty_accountid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_warranty_account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_warranty_account` |
| Display name | msdyn_msdyn_warranty_account |
| Schema name | `msdyn_msdyn_warranty_account` |
| Entity set (Web API) | `msdyn_msdyn_warranty_accountset` |
| Primary id attribute | `msdyn_msdyn_warranty_accountid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_warranty_accountset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_warranty_accountset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_warranty_accountset
PATCH /api/data/v9.2/msdyn_msdyn_warranty_accountset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_warranty_accountset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`accountid`, `msdyn_msdyn_warranty_accountid`, `msdyn_warrantyid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_warranty_account` | [msdyn_warranty](msdyn_warranty.md) | _n/a_ | `msdyn_msdyn_warranty_account` |

## Source

Generated from [msdyn_msdyn_warranty_account (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_warranty_account')) on 2026-05-07.