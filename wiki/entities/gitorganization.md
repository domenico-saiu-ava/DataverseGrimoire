---
logical: "gitorganization"
display: "Git Organization"
entitySetName: "gitorganizations"
primaryId: "gitorganizationid"
primaryName: "organizationname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Git Organization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitorganization` |
| Display name | Git Organization |
| Display (plural) | Git Organizations |
| Schema name | `GitOrganization` |
| Entity set (Web API) | `gitorganizations` |
| Primary id attribute | `gitorganizationid` |
| Primary name attribute | `organizationname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/gitorganizations?$select=organizationname&$top=10
GET /api/data/v9.2/gitorganizations(<guid>)
POST /api/data/v9.2/gitorganizations
PATCH /api/data/v9.2/gitorganizations(<guid>)
DELETE /api/data/v9.2/gitorganizations(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`GitOrganizationId`, `OrganizationName`

## Relationships




## Source

Generated from [gitorganization.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/gitorganization.md) on 2026-05-06.