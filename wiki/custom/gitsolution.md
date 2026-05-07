---
logical: "gitsolution"
display: "Soluzione Git"
entitySetName: "GitSolutions"
primaryId: "gitsolutionid"
primaryName: "solutionname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Soluzione Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitsolution` |
| Display name | Soluzione Git |
| Display (plural) | Soluzioni Git |
| Schema name | `GitSolution` |
| Entity set (Web API) | `GitSolutions` |
| Primary id attribute | `gitsolutionid` |
| Primary name attribute | `solutionname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/GitSolutions?$select=solutionname&$top=10
GET /api/data/v9.2/GitSolutions(<guid>)
POST /api/data/v9.2/GitSolutions
PATCH /api/data/v9.2/GitSolutions(<guid>)
DELETE /api/data/v9.2/GitSolutions(<guid>)
```

## Attributes

Writable: **8** · Read-only: **0**

### Writable

`branchname`, `gitsolutionid`, `organizationname`, `projectname`, `repositoryname`, `rootfolderpath`, `solutionname`, `solutionversion`

## Relationships




## Source

Generated from [gitsolution (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitsolution')) on 2026-05-07.