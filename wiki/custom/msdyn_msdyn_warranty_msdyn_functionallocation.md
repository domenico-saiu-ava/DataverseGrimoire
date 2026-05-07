---
logical: "msdyn_msdyn_warranty_msdyn_functionallocation"
display: "msdyn_msdyn_warranty_msdyn_functionallocation"
entitySetName: "msdyn_msdyn_warranty_msdyn_functionallocationset"
primaryId: "msdyn_msdyn_warranty_msdyn_functionallocationid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_warranty_msdyn_functionallocation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_warranty_msdyn_functionallocation` |
| Display name | msdyn_msdyn_warranty_msdyn_functionallocation |
| Schema name | `msdyn_msdyn_warranty_msdyn_functionallocation` |
| Entity set (Web API) | `msdyn_msdyn_warranty_msdyn_functionallocationset` |
| Primary id attribute | `msdyn_msdyn_warranty_msdyn_functionallocationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_warranty_msdyn_functionallocationset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_warranty_msdyn_functionallocationset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_warranty_msdyn_functionallocationset
PATCH /api/data/v9.2/msdyn_msdyn_warranty_msdyn_functionallocationset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_warranty_msdyn_functionallocationset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_functionallocationid`, `msdyn_msdyn_warranty_msdyn_functionallocationid`, `msdyn_warrantyid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_warranty_msdyn_functionallocation` | [msdyn_warranty](msdyn_warranty.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_functionallocation` |

## Source

Generated from [msdyn_msdyn_warranty_msdyn_functionallocation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_warranty_msdyn_functionallocation')) on 2026-05-07.