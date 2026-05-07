---
logical: "gitorganization"
display: "Organizzazione Git"
entitySetName: "gitorganizations"
primaryId: "gitorganizationid"
primaryName: "organizationname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Organizzazione Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitorganization` |
| Display name | Organizzazione Git |
| Display (plural) | Organizzazioni Git |
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

`gitorganizationid`, `organizationname`

## Relationships




## Source

Generated from [gitorganization (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitorganization')) on 2026-05-07.