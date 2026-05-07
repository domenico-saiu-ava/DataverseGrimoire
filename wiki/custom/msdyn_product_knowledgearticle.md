---
logical: "msdyn_product_knowledgearticle"
display: "msdyn_product_knowledgearticle"
entitySetName: "msdyn_product_knowledgearticleset"
primaryId: "msdyn_product_knowledgearticleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_product_knowledgearticle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_product_knowledgearticle` |
| Display name | msdyn_product_knowledgearticle |
| Schema name | `msdyn_product_knowledgearticle` |
| Entity set (Web API) | `msdyn_product_knowledgearticleset` |
| Primary id attribute | `msdyn_product_knowledgearticleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_product_knowledgearticleset?$select=&$top=10
GET /api/data/v9.2/msdyn_product_knowledgearticleset(<guid>)
POST /api/data/v9.2/msdyn_product_knowledgearticleset
PATCH /api/data/v9.2/msdyn_product_knowledgearticleset(<guid>)
DELETE /api/data/v9.2/msdyn_product_knowledgearticleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgearticleid`, `msdyn_product_knowledgearticleid`, `productid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_product_knowledgearticle` | [product](product.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_product_knowledgearticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_product_knowledgearticle')) on 2026-05-07.