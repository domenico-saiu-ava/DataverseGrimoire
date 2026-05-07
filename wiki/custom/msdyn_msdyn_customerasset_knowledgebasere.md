---
logical: "msdyn_msdyn_customerasset_knowledgebasere"
display: "msdyn_msdyn_customerasset_knowledgebasere"
entitySetName: "msdyn_msdyn_customerasset_knowledgebasereset"
primaryId: "msdyn_msdyn_customerasset_knowledgebasereid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_customerasset_knowledgebasere

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_customerasset_knowledgebasere` |
| Display name | msdyn_msdyn_customerasset_knowledgebasere |
| Schema name | `msdyn_msdyn_customerasset_knowledgebasere` |
| Entity set (Web API) | `msdyn_msdyn_customerasset_knowledgebasereset` |
| Primary id attribute | `msdyn_msdyn_customerasset_knowledgebasereid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_customerasset_knowledgebasereset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_customerasset_knowledgebasereset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_customerasset_knowledgebasereset
PATCH /api/data/v9.2/msdyn_msdyn_customerasset_knowledgebasereset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_customerasset_knowledgebasereset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgebaserecordid`, `msdyn_customerassetid`, `msdyn_msdyn_customerasset_knowledgebasereid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerasset_knowledgebaserecord` | [msdyn_customerasset](msdyn_customerasset.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_customerasset_knowledgebasere (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_customerasset_knowledgebasere')) on 2026-05-07.