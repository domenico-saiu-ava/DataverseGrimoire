---
logical: "gitproject"
display: "Git Project"
entitySetName: "gitprojects"
primaryId: "gitprojectid"
primaryName: "projectname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Git Project

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitproject` |
| Display name | Git Project |
| Display (plural) | Git Projects |
| Schema name | `GitProject` |
| Entity set (Web API) | `gitprojects` |
| Primary id attribute | `gitprojectid` |
| Primary name attribute | `projectname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/gitprojects?$select=projectname&$top=10
GET /api/data/v9.2/gitprojects(<guid>)
POST /api/data/v9.2/gitprojects
PATCH /api/data/v9.2/gitprojects(<guid>)
DELETE /api/data/v9.2/gitprojects(<guid>)
```

## Attributes

Writable: **3** · Read-only: **0**

### Writable

`GitProjectId`, `OrganizationName`, `ProjectName`

## Relationships




## Source

Generated from [gitproject.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/gitproject.md) on 2026-05-06.