---
logical: "msdyn_componentlayerdatasource"
display: "Origine dati livelli di componente"
entitySetName: "msdyn_componentlayerdatasources"
primaryId: "msdyn_componentlayerdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati livelli di componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_componentlayerdatasource` |
| Display name | Origine dati livelli di componente |
| Display (plural) | Origini dati livelli di componente |
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

`msdyn_componentlayerdatasourceid`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_componentlayerdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_componentlayerdatasource')) on 2026-05-07.