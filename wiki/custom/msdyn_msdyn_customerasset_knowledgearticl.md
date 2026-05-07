---
logical: "msdyn_msdyn_customerasset_knowledgearticl"
display: "msdyn_msdyn_customerasset_knowledgearticl"
entitySetName: "msdyn_msdyn_customerasset_knowledgearticlset"
primaryId: "msdyn_msdyn_customerasset_knowledgearticlid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_customerasset_knowledgearticl

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_customerasset_knowledgearticl` |
| Display name | msdyn_msdyn_customerasset_knowledgearticl |
| Schema name | `msdyn_msdyn_customerasset_knowledgearticl` |
| Entity set (Web API) | `msdyn_msdyn_customerasset_knowledgearticlset` |
| Primary id attribute | `msdyn_msdyn_customerasset_knowledgearticlid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_customerasset_knowledgearticlset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_customerasset_knowledgearticlset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_customerasset_knowledgearticlset
PATCH /api/data/v9.2/msdyn_msdyn_customerasset_knowledgearticlset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_customerasset_knowledgearticlset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgearticleid`, `msdyn_customerassetid`, `msdyn_msdyn_customerasset_knowledgearticlid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_customerasset_knowledgearticle` | [msdyn_customerasset](msdyn_customerasset.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_customerasset_knowledgearticl (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_customerasset_knowledgearticl')) on 2026-05-07.