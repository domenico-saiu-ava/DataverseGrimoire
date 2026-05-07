---
logical: "msdyn_componentlayer"
display: "Livello di componente"
entitySetName: "msdyn_componentlayers"
primaryId: "msdyn_componentlayerid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Livello di componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_componentlayer` |
| Display name | Livello di componente |
| Display (plural) | Livelli di componente |
| Schema name | `msdyn_componentlayer` |
| Entity set (Web API) | `msdyn_componentlayers` |
| Primary id attribute | `msdyn_componentlayerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_componentlayers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_componentlayers(<guid>)
POST /api/data/v9.2/msdyn_componentlayers
PATCH /api/data/v9.2/msdyn_componentlayers(<guid>)
DELETE /api/data/v9.2/msdyn_componentlayers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **0**

### Writable

`msdyn_changes`, `msdyn_children`, `msdyn_componentid`, `msdyn_componentjson`, `msdyn_componentlayerid`, `msdyn_name`, `msdyn_order`, `msdyn_overwritetime`, `msdyn_publishername`, `msdyn_solutioncomponentname`, `msdyn_solutionname`

## Relationships




## Source

Generated from [msdyn_componentlayer (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_componentlayer')) on 2026-05-07.