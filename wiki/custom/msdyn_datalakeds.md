---
logical: "msdyn_datalakeds"
display: "Insights Store Data Source"
entitySetName: "msdyn_datalakedses"
primaryId: "msdyn_datalakedsid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Insights Store Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_datalakeds` |
| Display name | Insights Store Data Source |
| Display (plural) | Insights Store Data Source |
| Schema name | `msdyn_datalakeds` |
| Entity set (Web API) | `msdyn_datalakedses` |
| Primary id attribute | `msdyn_datalakedsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_datalakedses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_datalakedses(<guid>)
POST /api/data/v9.2/msdyn_datalakedses
PATCH /api/data/v9.2/msdyn_datalakedses(<guid>)
DELETE /api/data/v9.2/msdyn_datalakedses(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_datalakedsid`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_datalakeds (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_datalakeds')) on 2026-05-07.