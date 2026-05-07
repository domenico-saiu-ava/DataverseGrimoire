---
logical: "runtimedependency"
display: "RuntimeDependency"
entitySetName: "runtimedependencies"
primaryId: "dependencyid"
tableType: "Standard"
ownership: "None"
---

# RuntimeDependency

Form Level dependencies in CRM.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `runtimedependency` |
| Display name | RuntimeDependency |
| Display (plural) | RuntimeDependencies |
| Schema name | `RuntimeDependency` |
| Entity set (Web API) | `runtimedependencies` |
| Primary id attribute | `dependencyid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/runtimedependencies?$select=&$top=10
GET /api/data/v9.2/runtimedependencies(<guid>)
POST /api/data/v9.2/runtimedependencies
PATCH /api/data/v9.2/runtimedependencies(<guid>)
DELETE /api/data/v9.2/runtimedependencies(<guid>)
```

## Attributes

Writable: **5** · Read-only: **3**

### Writable

`DependentComponentNodeId`, `DependentComponentType`, `IsPublished`, `RequiredComponentNodeId`, `RequiredComponentType`

### Read-only

`CreatedTime`, `DependencyId`, `RequiredComponentModifiedTime`

## Relationships




## Source

Generated from [runtimedependency.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/runtimedependency.md) on 2026-05-06.