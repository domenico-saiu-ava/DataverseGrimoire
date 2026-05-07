---
logical: "gitrepository"
display: "Repository Git"
entitySetName: "gitrepositories"
primaryId: "gitrepositoryid"
primaryName: "repositoryname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Repository Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitrepository` |
| Display name | Repository Git |
| Display (plural) | Repository Git |
| Schema name | `GitRepository` |
| Entity set (Web API) | `gitrepositories` |
| Primary id attribute | `gitrepositoryid` |
| Primary name attribute | `repositoryname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/gitrepositories?$select=repositoryname&$top=10
GET /api/data/v9.2/gitrepositories(<guid>)
POST /api/data/v9.2/gitrepositories
PATCH /api/data/v9.2/gitrepositories(<guid>)
DELETE /api/data/v9.2/gitrepositories(<guid>)
```

## Attributes

Writable: **5** · Read-only: **0**

### Writable

`defaultbranch`, `gitrepositoryid`, `organizationname`, `projectname`, `repositoryname`

## Relationships




## Source

Generated from [gitrepository (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitrepository')) on 2026-05-07.