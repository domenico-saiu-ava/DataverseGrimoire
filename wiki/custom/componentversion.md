---
logical: "componentversion"
display: "Versione del componente"
entitySetName: "componentversions"
primaryId: "componentversionid"
primaryName: "componentversionname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione del componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversion` |
| Display name | Versione del componente |
| Display (plural) | Versioni del componente |
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

Writable: **8** · Read-only: **10**

### Writable

`changesummary`, `component`, `componentversionname`, `operation`, `overriddencreatedon`, `ownerid`, `restoredfromversion`, `systemchangesummary`

### Read-only

`componentversionid`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentproject_componentversions` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `desktopflowbinary_componentversions` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `uxagentprojectfile_componentversions` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `lk_componentversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `team_componentversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_componentversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `restoreversions` | [componentversion](componentversion.md) | `restoredfromversion` | `restoredfromversion` |
| `workflow_componentversions` | [workflow](workflow.md) | `component` | `component_workflow` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `restoreversions` | [componentversion](componentversion.md) | `restoredfromversion` | `restoredfromversion` |


## Source

Generated from [componentversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='componentversion')) on 2026-05-07.