---
logical: "msdyn_nonrelationalds"
display: "NonRelational Data Source"
entitySetName: "msdyn_nonrelationaldses"
primaryId: "msdyn_nonrelationaldsid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
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

`msdyn_name`, `msdyn_nonrelationaldsId`

## Relationships




## Source

Generated from [msdyn_nonrelationalds.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_nonrelationalds.md) on 2026-05-06.