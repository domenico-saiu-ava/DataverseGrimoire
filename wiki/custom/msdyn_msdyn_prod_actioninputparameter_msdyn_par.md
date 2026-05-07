---
logical: "msdyn_msdyn_prod_actioninputparameter_msdyn_par"
display: "msdyn_msdyn_prod_actioninputparameter_msdyn_par"
entitySetName: "msdyn_msdyn_prod_actioninputparameter_msdyn_parset"
primaryId: "msdyn_msdyn_prod_actioninputparameter_msdyn_parid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_prod_actioninputparameter_msdyn_par

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_prod_actioninputparameter_msdyn_par` |
| Display name | msdyn_msdyn_prod_actioninputparameter_msdyn_par |
| Schema name | `msdyn_msdyn_prod_actioninputparameter_msdyn_par` |
| Entity set (Web API) | `msdyn_msdyn_prod_actioninputparameter_msdyn_parset` |
| Primary id attribute | `msdyn_msdyn_prod_actioninputparameter_msdyn_parid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_prod_actioninputparameter_msdyn_parset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_prod_actioninputparameter_msdyn_parset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_prod_actioninputparameter_msdyn_parset
PATCH /api/data/v9.2/msdyn_msdyn_prod_actioninputparameter_msdyn_parset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_prod_actioninputparameter_msdyn_parset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_msdyn_prod_actioninputparameter_msdyn_parid`, `msdyn_productivityactioninputparameterid`, `msdyn_productivityparameterdefinitionid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_actioninputparameter_msdyn_par` | [msdyn_productivityactioninputparameter](msdyn_productivityactioninputparameter.md) | _n/a_ | `msdyn_msdyn_prod_actioninputparameter_msdyn_par` |

## Source

Generated from [msdyn_msdyn_prod_actioninputparameter_msdyn_par (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_prod_actioninputparameter_msdyn_par')) on 2026-05-07.