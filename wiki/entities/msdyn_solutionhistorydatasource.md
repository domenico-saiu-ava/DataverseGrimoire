---
logical: "msdyn_solutionhistorydatasource"
display: "Solution History Data Source"
entitySetName: "msdyn_solutionhistorydatasources"
primaryId: "msdyn_solutionhistorydatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Solution History Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhistorydatasource` |
| Display name | Solution History Data Source |
| Display (plural) | Solution History Data Sources |
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

`msdyn_name`, `msdyn_solutionhistorydatasourceId`

## Relationships




## Source

Generated from [msdyn_solutionhistorydatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_solutionhistorydatasource.md) on 2026-05-06.