---
logical: "msdyn_msdyn_prod_agentscript_msdyn_sessiontempl"
display: "msdyn_msdyn_prod_agentscript_msdyn_sessiontempl"
entitySetName: "msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset"
primaryId: "msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_prod_agentscript_msdyn_sessiontempl

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_prod_agentscript_msdyn_sessiontempl` |
| Display name | msdyn_msdyn_prod_agentscript_msdyn_sessiontempl |
| Schema name | `msdyn_msdyn_prod_agentscript_msdyn_sessiontempl` |
| Entity set (Web API) | `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset` |
| Primary id attribute | `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset
PATCH /api/data/v9.2/msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid`, `msdyn_productivityagentscriptid`, `msdyn_sessiontemplateid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | _n/a_ | `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` |

## Source

Generated from [msdyn_msdyn_prod_agentscript_msdyn_sessiontempl (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_prod_agentscript_msdyn_sessiontempl')) on 2026-05-07.