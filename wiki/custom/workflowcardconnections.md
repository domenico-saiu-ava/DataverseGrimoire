---
logical: "workflowcardconnections"
display: "workflowcardconnections"
entitySetName: "workflowcardconnectionsset"
primaryId: "workflowcardconnectionsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`cardid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`, `workflowcardconnectionsid`, `workflowid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflow_card_connections` | [workflow](workflow.md) | _n/a_ | `workflow_card_connections` |

## Source

Generated from [workflowcardconnections (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='workflowcardconnections')) on 2026-05-07.