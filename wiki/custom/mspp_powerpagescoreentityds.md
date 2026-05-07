---
logical: "mspp_powerpagescoreentityds"
display: "DS entità principale Power Pages"
entitySetName: "mspp_powerpagescoreentitydses"
primaryId: "mspp_powerpagescoreentitydsid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DS entità principale Power Pages

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_powerpagescoreentityds` |
| Display name | DS entità principale Power Pages |
| Display (plural) | DS entità principale Power Pages |
| Schema name | `mspp_powerpagescoreentityds` |
| Entity set (Web API) | `mspp_powerpagescoreentitydses` |
| Primary id attribute | `mspp_powerpagescoreentitydsid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_powerpagescoreentitydses?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_powerpagescoreentitydses(<guid>)
POST /api/data/v9.2/mspp_powerpagescoreentitydses
PATCH /api/data/v9.2/mspp_powerpagescoreentitydses(<guid>)
DELETE /api/data/v9.2/mspp_powerpagescoreentitydses(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`mspp_name`, `mspp_powerpagescoreentitydsid`

## Relationships




## Source

Generated from [mspp_powerpagescoreentityds (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_powerpagescoreentityds')) on 2026-05-07.