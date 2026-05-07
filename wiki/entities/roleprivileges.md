---
logical: "roleprivileges"
display: "roleprivileges"
entitySetName: "roleprivilegescollection"
primaryId: "roleprivilegeid"
tableType: "Standard"
ownership: "None"
---

# roleprivileges

Group of privileges used to categorize users to provide appropriate access to entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `roleprivileges` |
| Display name | roleprivileges |
| Schema name | `RolePrivileges` |
| Entity set (Web API) | `roleprivilegescollection` |
| Primary id attribute | `roleprivilegeid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/roleprivilegescollection?$select=&$top=10
GET /api/data/v9.2/roleprivilegescollection(<guid>)
POST /api/data/v9.2/roleprivilegescollection
PATCH /api/data/v9.2/roleprivilegescollection(<guid>)
DELETE /api/data/v9.2/roleprivilegescollection(<guid>)
```

## Attributes

Writable: **4** · Read-only: **9**

### Writable

`CanBeDeleted`, `PrivilegeDepthMask`, `RecordFilterId`, `RolePrivilegeId`

### Read-only

`ComponentState`, `IsManaged`, `OverwriteTime`, `PrivilegeId`, `RoleId`, `RolePrivilegeIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recordfilter_roleprivileges` | [recordfilter](recordfilter.md) | `recordfilterid` | `RecordFilterId` |
| `solution_roleprivileges` | [solution](solution.md) | `solutionid` | `solutionid` |


### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roleprivileges_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [roleprivileges.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/roleprivileges.md) on 2026-05-06.