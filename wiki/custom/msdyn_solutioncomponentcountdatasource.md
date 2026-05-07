---
logical: "msdyn_solutioncomponentcountdatasource"
display: "Solution Component Count Data Source"
entitySetName: "msdyn_solutioncomponentcountdatasources"
primaryId: "msdyn_solutioncomponentcountdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Solution Component Count Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutioncomponentcountdatasource` |
| Display name | Solution Component Count Data Source |
| Display (plural) | Solution Component Count Data Sources |
| Schema name | `msdyn_solutioncomponentcountdatasource` |
| Entity set (Web API) | `msdyn_solutioncomponentcountdatasources` |
| Primary id attribute | `msdyn_solutioncomponentcountdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutioncomponentcountdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutioncomponentcountdatasources(<guid>)
POST /api/data/v9.2/msdyn_solutioncomponentcountdatasources
PATCH /api/data/v9.2/msdyn_solutioncomponentcountdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_solutioncomponentcountdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **1**

### Writable

`msdyn_name`, `msdyn_solutioncomponentcountdatasourceid`

### Read-only

`organizationid`

## Relationships




## Source

Generated from [msdyn_solutioncomponentcountdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutioncomponentcountdatasource')) on 2026-05-07.