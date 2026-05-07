---
logical: "msdyn_msdyn_prod_actionoutputparameter_msdyn_pa"
display: "msdyn_msdyn_prod_actionoutputparameter_msdyn_pa"
entitySetName: "msdyn_msdyn_prod_actionoutputparameter_msdyn_paset"
primaryId: "msdyn_msdyn_prod_actionoutputparameter_msdyn_paid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_prod_actionoutputparameter_msdyn_pa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` |
| Display name | msdyn_msdyn_prod_actionoutputparameter_msdyn_pa |
| Schema name | `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` |
| Entity set (Web API) | `msdyn_msdyn_prod_actionoutputparameter_msdyn_paset` |
| Primary id attribute | `msdyn_msdyn_prod_actionoutputparameter_msdyn_paid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_prod_actionoutputparameter_msdyn_paset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_prod_actionoutputparameter_msdyn_paset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_prod_actionoutputparameter_msdyn_paset
PATCH /api/data/v9.2/msdyn_msdyn_prod_actionoutputparameter_msdyn_paset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_prod_actionoutputparameter_msdyn_paset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_msdyn_prod_actionoutputparameter_msdyn_paid`, `msdyn_productivityactionoutputparameterid`, `msdyn_productivityparameterdefinitionid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` | [msdyn_productivityactionoutputparameter](msdyn_productivityactionoutputparameter.md) | _n/a_ | `msdyn_msdyn_prod_actionoutputparameter_msdyn_pa` |

## Source

Generated from [msdyn_msdyn_prod_actionoutputparameter_msdyn_pa (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_prod_actionoutputparameter_msdyn_pa')) on 2026-05-07.