---
logical: "gitbranch"
display: "Git Branch"
entitySetName: "gitbranches"
primaryId: "gitbranchid"
primaryName: "branchname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Git Branch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitbranch` |
| Display name | Git Branch |
| Display (plural) | Git Branches |
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

`BranchName`, `GitBranchId`, `GitCommitId`, `OrganizationName`, `ProjectName`, `RepositoryName`, `UpstreamBranchName`

## Relationships




## Source

Generated from [gitbranch.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/gitbranch.md) on 2026-05-06.