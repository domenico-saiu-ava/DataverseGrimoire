---
logical: "msdyn_componentlayerdatasource"
display: "Component Layer Data Source"
entitySetName: "msdyn_componentlayerdatasources"
primaryId: "msdyn_componentlayerdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Component Layer Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_componentlayerdatasource` |
| Display name | Component Layer Data Source |
| Display (plural) | Component Layer Data Sources |
| Schema name | `msdyn_componentlayerdatasource` |
| Entity set (Web API) | `msdyn_componentlayerdatasources` |
| Primary id attribute | `msdyn_componentlayerdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_componentlayerdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_componentlayerdatasources(<guid>)
POST /api/data/v9.2/msdyn_componentlayerdatasources
PATCH /api/data/v9.2/msdyn_componentlayerdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_componentlayerdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_componentlayerdatasourceId`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_componentlayerdatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_componentlayerdatasource.md) on 2026-05-06.