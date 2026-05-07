---
logical: "invaliddependency"
display: "Invalid Dependency"
entitySetName: "invaliddependencies"
primaryId: "invaliddependencyid"
tableType: "Standard"
ownership: "None"
---

# Invalid Dependency

An invalid dependency in the CRM system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `invaliddependency` |
| Display name | Invalid Dependency |
| Display (plural) | Invalid Dependencies |
| Schema name | `InvalidDependency` |
| Entity set (Web API) | `invaliddependencies` |
| Primary id attribute | `invaliddependencyid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/invaliddependencies?$select=&$top=10
GET /api/data/v9.2/invaliddependencies(<guid>)
POST /api/data/v9.2/invaliddependencies
PATCH /api/data/v9.2/invaliddependencies(<guid>)
DELETE /api/data/v9.2/invaliddependencies(<guid>)
```

## Attributes

Writable: **0** · Read-only: **8**

### Read-only

`ExistingComponentId`, `ExistingComponentType`, `ExistingDependencyType`, `InvalidDependencyId`, `IsExistingNodeRequiredComponent`, `MissingComponentInfo`, `MissingComponentLookupType`, `MissingComponentType`

## Relationships




## Source

Generated from [invaliddependency.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/invaliddependency.md) on 2026-05-06.