---
logical: "appmoduleroles"
display: "App Module Roles"
entitySetName: "appmodulerolescollection"
primaryId: "appmoduleroleid"
tableType: "Standard"
ownership: "None"
---

# App Module Roles

Security roles that have access to a business app.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appmoduleroles` |
| Display name | App Module Roles |
| Display (plural) | App Module Roles |
| Schema name | `AppModuleRoles` |
| Entity set (Web API) | `appmodulerolescollection` |
| Primary id attribute | `appmoduleroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/appmodulerolescollection?$select=&$top=10
GET /api/data/v9.2/appmodulerolescollection(<guid>)
POST /api/data/v9.2/appmodulerolescollection
PATCH /api/data/v9.2/appmodulerolescollection(<guid>)
DELETE /api/data/v9.2/appmodulerolescollection(<guid>)
```

## Attributes

Writable: **3** · Read-only: **8**

### Writable

`AppModuleRoleId`, `AppModuleRoleIdUnique`, `IntroducedVersion`

### Read-only

`AppModuleId`, `ComponentState`, `IsManaged`, `OverwriteTime`, `RoleId`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmoduleroles_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [appmoduleroles.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appmoduleroles.md) on 2026-05-06.