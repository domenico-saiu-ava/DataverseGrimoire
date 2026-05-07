---
logical: "msdyn_solutioncomponentdatasource"
display: "Solution Component Data Source"
entitySetName: "msdyn_solutioncomponentdatasources"
primaryId: "msdyn_solutioncomponentdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Solution Component Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutioncomponentdatasource` |
| Display name | Solution Component Data Source |
| Display (plural) | Solution Component Data Sources |
| Schema name | `msdyn_solutioncomponentdatasource` |
| Entity set (Web API) | `msdyn_solutioncomponentdatasources` |
| Primary id attribute | `msdyn_solutioncomponentdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutioncomponentdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutioncomponentdatasources(<guid>)
POST /api/data/v9.2/msdyn_solutioncomponentdatasources
PATCH /api/data/v9.2/msdyn_solutioncomponentdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_solutioncomponentdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **1**

### Writable

`msdyn_name`, `msdyn_solutioncomponentdatasourceid`

### Read-only

`organizationid`

## Relationships




## Source

Generated from [msdyn_solutioncomponentdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutioncomponentdatasource')) on 2026-05-07.