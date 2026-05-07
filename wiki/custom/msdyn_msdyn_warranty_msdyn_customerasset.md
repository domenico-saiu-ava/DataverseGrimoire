---
logical: "msdyn_msdyn_warranty_msdyn_customerasset"
display: "msdyn_msdyn_warranty_msdyn_customerasset"
entitySetName: "msdyn_msdyn_warranty_msdyn_customerassetset"
primaryId: "msdyn_msdyn_warranty_msdyn_customerassetid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_warranty_msdyn_customerasset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_warranty_msdyn_customerasset` |
| Display name | msdyn_msdyn_warranty_msdyn_customerasset |
| Schema name | `msdyn_msdyn_warranty_msdyn_customerasset` |
| Entity set (Web API) | `msdyn_msdyn_warranty_msdyn_customerassetset` |
| Primary id attribute | `msdyn_msdyn_warranty_msdyn_customerassetid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_warranty_msdyn_customerassetset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_warranty_msdyn_customerassetset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_warranty_msdyn_customerassetset
PATCH /api/data/v9.2/msdyn_msdyn_warranty_msdyn_customerassetset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_warranty_msdyn_customerassetset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_customerassetid`, `msdyn_msdyn_warranty_msdyn_customerassetid`, `msdyn_warrantyid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_warranty_msdyn_customerasset` | [msdyn_warranty](msdyn_warranty.md) | _n/a_ | `msdyn_msdyn_warranty_msdyn_customerasset` |

## Source

Generated from [msdyn_msdyn_warranty_msdyn_customerasset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_warranty_msdyn_customerasset')) on 2026-05-07.