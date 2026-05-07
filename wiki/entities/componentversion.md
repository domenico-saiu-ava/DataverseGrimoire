---
logical: "componentversion"
display: "Component Version"
entitySetName: "componentversions"
primaryId: "componentversionid"
primaryName: "componentversionname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Component Version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversion` |
| Display name | Component Version |
| Display (plural) | Component Versions |
| Schema name | `componentversion` |
| Entity set (Web API) | `componentversions` |
| Primary id attribute | `componentversionid` |
| Primary name attribute | `componentversionname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/componentversions?$select=componentversionname&$top=10
GET /api/data/v9.2/componentversions(<guid>)
POST /api/data/v9.2/componentversions
PATCH /api/data/v9.2/componentversions(<guid>)
DELETE /api/data/v9.2/componentversions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`ChangeSummary`, `Component`, `ComponentIdType`, `componentversionname`, `Operation`, `OverriddenCreatedOn`, `OwnerId`, `RestoredFromVersion`, `SystemChangeSummary`

### Read-only

`componentversionId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowbinary_componentversions` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `lk_componentversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `restoreversions` | [componentversion](componentversion.md) | `restoredfromversion` | `restoredfromversion` |
| `team_componentversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_componentversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_componentversions` | [workflow](workflow.md) | `component` | `component_workflow` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `restoreversions` | _n/a_ | `restoredfromversion` | _n/a_ |


## Source

Generated from [componentversion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/componentversion.md) on 2026-05-06.