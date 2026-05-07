---
logical: "gitproject"
display: "Progetto Git"
entitySetName: "gitprojects"
primaryId: "gitprojectid"
primaryName: "projectname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Progetto Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitproject` |
| Display name | Progetto Git |
| Display (plural) | Progetti Git |
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

`gitprojectid`, `organizationname`, `projectname`

## Relationships




## Source

Generated from [gitproject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitproject')) on 2026-05-07.