---
logical: "msdyn_product_knowledgebaserecord"
display: "msdyn_product_knowledgebaserecord"
entitySetName: "msdyn_product_knowledgebaserecordset"
primaryId: "msdyn_product_knowledgebaserecordid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_product_knowledgebaserecord

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_product_knowledgebaserecord` |
| Display name | msdyn_product_knowledgebaserecord |
| Schema name | `msdyn_product_knowledgebaserecord` |
| Entity set (Web API) | `msdyn_product_knowledgebaserecordset` |
| Primary id attribute | `msdyn_product_knowledgebaserecordid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_product_knowledgebaserecordset?$select=&$top=10
GET /api/data/v9.2/msdyn_product_knowledgebaserecordset(<guid>)
POST /api/data/v9.2/msdyn_product_knowledgebaserecordset
PATCH /api/data/v9.2/msdyn_product_knowledgebaserecordset(<guid>)
DELETE /api/data/v9.2/msdyn_product_knowledgebaserecordset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgebaserecordid`, `msdyn_product_knowledgebaserecordid`, `productid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `product_knowledgebaserecord` | [product](product.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_product_knowledgebaserecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_product_knowledgebaserecord')) on 2026-05-07.