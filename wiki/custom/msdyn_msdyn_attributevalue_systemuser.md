---
logical: "msdyn_msdyn_attributevalue_systemuser"
display: "msdyn_msdyn_attributevalue_systemuser"
entitySetName: "msdyn_msdyn_attributevalue_systemuserset"
primaryId: "msdyn_msdyn_attributevalue_systemuserid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_attributevalue_systemuser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_attributevalue_systemuser` |
| Display name | msdyn_msdyn_attributevalue_systemuser |
| Schema name | `msdyn_msdyn_attributevalue_systemuser` |
| Entity set (Web API) | `msdyn_msdyn_attributevalue_systemuserset` |
| Primary id attribute | `msdyn_msdyn_attributevalue_systemuserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_attributevalue_systemuserset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_attributevalue_systemuserset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_attributevalue_systemuserset
PATCH /api/data/v9.2/msdyn_msdyn_attributevalue_systemuserset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_attributevalue_systemuserset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_attributevalueid`, `msdyn_msdyn_attributevalue_systemuserid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_attributevalue_systemuser` | [msdyn_attributevalue](msdyn_attributevalue.md) | _n/a_ | `msdyn_msdyn_attributevalue_systemuser` |

## Source

Generated from [msdyn_msdyn_attributevalue_systemuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_attributevalue_systemuser')) on 2026-05-07.