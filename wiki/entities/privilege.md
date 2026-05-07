---
logical: "privilege"
display: "Privilege"
entitySetName: "privileges"
primaryId: "privilegeid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Privilege

Permission to perform an action in Microsoft CRM. The platform checks for the privilege and rejects the attempt if the user does not hold the privilege.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `privilege` |
| Display name | Privilege |
| Display (plural) | Privileges |
| Schema name | `Privilege` |
| Entity set (Web API) | `privileges` |
| Primary id attribute | `privilegeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/privileges?$select=name&$top=10
GET /api/data/v9.2/privileges(<guid>)
POST /api/data/v9.2/privileges
PATCH /api/data/v9.2/privileges(<guid>)
DELETE /api/data/v9.2/privileges(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`AccessRight`, `CanBeBasic`, `CanBeDeep`, `CanBeEntityReference`, `CanBeGlobal`, `CanBeLocal`, `CanBeParentEntityReference`, `CanBeRecordFilter`, `IntroducedVersion`, `IsCustomizable`, `Name`, `PrivilegeId`, `PrivilegeRowId`

### Read-only

`ComponentState`, `IsDisabledWhenIntegrated`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solution_privilege` | [solution](solution.md) | `solutionid` | `solution_privilege` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Privilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Privilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerlog_CheckedPrivilege` | _n/a_ | `checkedprivilege` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roleprivileges_association` | [privilegeid](privilegeid.md) | _n/a_ | _n/a_ |
| `roletemplateprivileges_association` | [privilegeid](privilegeid.md) | _n/a_ | _n/a_ |

## Source

Generated from [privilege.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/privilege.md) on 2026-05-06.