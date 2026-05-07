---
logical: "dependency"
display: "Dependency"
entitySetName: "dependencies"
primaryId: "dependencyid"
tableType: "Standard"
ownership: "None"
---

# Dependency

A component dependency in CRM.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dependency` |
| Display name | Dependency |
| Display (plural) | Dependency |
| Schema name | `Dependency` |
| Entity set (Web API) | `dependencies` |
| Primary id attribute | `dependencyid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/dependencies?$select=&$top=10
GET /api/data/v9.2/dependencies(<guid>)
POST /api/data/v9.2/dependencies
PATCH /api/data/v9.2/dependencies(<guid>)
DELETE /api/data/v9.2/dependencies(<guid>)
```

## Attributes

Writable: **0** · Read-only: **14**

### Read-only

`DependencyId`, `DependencyType`, `DependentComponentBaseSolutionId`, `DependentComponentNodeId`, `DependentComponentObjectId`, `DependentComponentParentId`, `DependentComponentType`, `RequiredComponentBaseSolutionId`, `RequiredComponentIntroducedVersion`, `RequiredComponentNodeId`, `RequiredComponentObjectId`, `RequiredComponentParentId`, `RequiredComponentType`, `VersionNumber`

## Relationships




## Source

Generated from [dependency.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dependency.md) on 2026-05-06.