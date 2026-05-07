---
logical: "msdyn_solutionhistorydatasource"
display: "Origine dati cronologia delle soluzioni"
entitySetName: "msdyn_solutionhistorydatasources"
primaryId: "msdyn_solutionhistorydatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati cronologia delle soluzioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhistorydatasource` |
| Display name | Origine dati cronologia delle soluzioni |
| Display (plural) | Origini dati cronologia delle soluzioni |
| Schema name | `msdyn_solutionhistorydatasource` |
| Entity set (Web API) | `msdyn_solutionhistorydatasources` |
| Primary id attribute | `msdyn_solutionhistorydatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhistorydatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhistorydatasources(<guid>)
POST /api/data/v9.2/msdyn_solutionhistorydatasources
PATCH /api/data/v9.2/msdyn_solutionhistorydatasources(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhistorydatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_solutionhistorydatasourceid`

## Relationships




## Source

Generated from [msdyn_solutionhistorydatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutionhistorydatasource')) on 2026-05-07.