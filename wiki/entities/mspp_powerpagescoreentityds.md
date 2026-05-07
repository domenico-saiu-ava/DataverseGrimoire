---
logical: "mspp_powerpagescoreentityds"
display: "Power Pages Core Entity DS"
entitySetName: "mspp_powerpagescoreentitydses"
primaryId: "mspp_powerpagescoreentitydsid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Power Pages Core Entity DS

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_powerpagescoreentityds` |
| Display name | Power Pages Core Entity DS |
| Display (plural) | Power Pages Core Entity DSs |
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

`mspp_name`, `mspp_powerpagescoreentitydsId`

## Relationships




## Source

Generated from [mspp_powerpagescoreentityds.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_powerpagescoreentityds.md) on 2026-05-06.