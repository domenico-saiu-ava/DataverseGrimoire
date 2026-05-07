---
logical: "msdyn_nonrelationalds"
display: "NonRelational Data Source"
entitySetName: "msdyn_nonrelationaldses"
primaryId: "msdyn_nonrelationaldsid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# NonRelational Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_nonrelationalds` |
| Display name | NonRelational Data Source |
| Display (plural) | NonRelational Data Source |
| Schema name | `msdyn_nonrelationalds` |
| Entity set (Web API) | `msdyn_nonrelationaldses` |
| Primary id attribute | `msdyn_nonrelationaldsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_nonrelationaldses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_nonrelationaldses(<guid>)
POST /api/data/v9.2/msdyn_nonrelationaldses
PATCH /api/data/v9.2/msdyn_nonrelationaldses(<guid>)
DELETE /api/data/v9.2/msdyn_nonrelationaldses(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_nonrelationaldsid`

## Relationships




## Source

Generated from [msdyn_nonrelationalds (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_nonrelationalds')) on 2026-05-07.