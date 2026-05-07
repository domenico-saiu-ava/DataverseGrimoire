---
logical: "gitrepository"
display: "Git Repository"
entitySetName: "gitrepositories"
primaryId: "gitrepositoryid"
primaryName: "repositoryname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Git Repository

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitrepository` |
| Display name | Git Repository |
| Display (plural) | Git Repositories |
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

`DefaultBranch`, `GitRepositoryId`, `OrganizationName`, `ProjectName`, `RepositoryName`

## Relationships




## Source

Generated from [gitrepository.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/gitrepository.md) on 2026-05-06.