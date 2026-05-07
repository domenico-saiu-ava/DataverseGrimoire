---
logical: "botcomponent_workflow"
display: "botcomponent_workflow"
entitySetName: "botcomponent_workflowset"
primaryId: "botcomponent_workflowid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# botcomponent_workflow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_workflow` |
| Display name | botcomponent_workflow |
| Schema name | `botcomponent_workflow` |
| Entity set (Web API) | `botcomponent_workflowset` |
| Primary id attribute | `botcomponent_workflowid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_workflowset?$select=&$top=10
GET /api/data/v9.2/botcomponent_workflowset(<guid>)
POST /api/data/v9.2/botcomponent_workflowset
PATCH /api/data/v9.2/botcomponent_workflowset(<guid>)
DELETE /api/data/v9.2/botcomponent_workflowset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`botcomponent_workflowid`, `botcomponentid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`, `workflowid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_workflow` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_workflow` |

## Source

Generated from [botcomponent_workflow (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_workflow')) on 2026-05-07.