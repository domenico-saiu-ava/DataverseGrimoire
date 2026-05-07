---
logical: "workflowcardconnections"
display: "workflowcardconnections"
entitySetName: "workflowcardconnectionsset"
primaryId: "workflowcardconnectionsid"
tableType: "Standard"
ownership: "None"
---

# workflowcardconnections

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowcardconnections` |
| Display name | workflowcardconnections |
| Schema name | `workflowcardconnections` |
| Entity set (Web API) | `workflowcardconnectionsset` |
| Primary id attribute | `workflowcardconnectionsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/workflowcardconnectionsset?$select=&$top=10
GET /api/data/v9.2/workflowcardconnectionsset(<guid>)
POST /api/data/v9.2/workflowcardconnectionsset
PATCH /api/data/v9.2/workflowcardconnectionsset(<guid>)
DELETE /api/data/v9.2/workflowcardconnectionsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`cardid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `workflowcardconnectionsId`, `workflowid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflow_card_connections` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [workflowcardconnections.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workflowcardconnections.md) on 2026-05-06.