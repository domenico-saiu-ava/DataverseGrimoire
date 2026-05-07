---
logical: "gitbranch"
display: "Ramo Git"
entitySetName: "gitbranches"
primaryId: "gitbranchid"
primaryName: "branchname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ramo Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitbranch` |
| Display name | Ramo Git |
| Display (plural) | Rami Git |
| Schema name | `GitBranch` |
| Entity set (Web API) | `gitbranches` |
| Primary id attribute | `gitbranchid` |
| Primary name attribute | `branchname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/gitbranches?$select=branchname&$top=10
GET /api/data/v9.2/gitbranches(<guid>)
POST /api/data/v9.2/gitbranches
PATCH /api/data/v9.2/gitbranches(<guid>)
DELETE /api/data/v9.2/gitbranches(<guid>)
```

## Attributes

Writable: **7** · Read-only: **0**

### Writable

`branchname`, `gitbranchid`, `gitcommitid`, `organizationname`, `projectname`, `repositoryname`, `upstreambranchname`

## Relationships




## Source

Generated from [gitbranch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitbranch')) on 2026-05-07.