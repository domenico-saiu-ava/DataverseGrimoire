---
logical: "botcomponent_workflow"
display: "botcomponent_workflow"
entitySetName: "botcomponent_workflowset"
primaryId: "botcomponent_workflowid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`botcomponent_workflowId`, `botcomponentid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `workflowid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_workflow` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [botcomponent_workflow.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/botcomponent_workflow.md) on 2026-05-06.