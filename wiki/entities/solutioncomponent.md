---
logical: "solutioncomponent"
display: "Solution Component"
entitySetName: "solutioncomponents"
primaryId: "solutioncomponentid"
tableType: "Standard"
ownership: "None"
---

# Solution Component

A component of a CRM solution.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `solutioncomponent` |
| Display name | Solution Component |
| Display (plural) | Solution Components |
| Schema name | `SolutionComponent` |
| Entity set (Web API) | `solutioncomponents` |
| Primary id attribute | `solutioncomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/solutioncomponents?$select=&$top=10
GET /api/data/v9.2/solutioncomponents(<guid>)
POST /api/data/v9.2/solutioncomponents
PATCH /api/data/v9.2/solutioncomponents(<guid>)
DELETE /api/data/v9.2/solutioncomponents(<guid>)
```

## Attributes

Writable: **0** · Read-only: **14**

### Read-only

`ComponentType`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsMetadata`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `ObjectId`, `RootComponentBehavior`, `RootSolutionComponentId`, `SolutionComponentId`, `SolutionId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_solutioncomponentbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_solutioncomponentbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `solution_solutioncomponent` | [solution](solution.md) | `solutionid` | `solutionid` |
| `solutioncomponent_parent_solutioncomponent` | [solutioncomponent](solutioncomponent.md) | `rootsolutioncomponentid` | `rootsolutioncomponentid_solutioncomponent` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `solutioncomponent_parent_solutioncomponent` | _n/a_ | `rootsolutioncomponentid` | _n/a_ |


## Source

Generated from [solutioncomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/solutioncomponent.md) on 2026-05-06.