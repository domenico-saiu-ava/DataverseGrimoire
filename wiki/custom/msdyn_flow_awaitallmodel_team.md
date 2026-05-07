---
logical: "msdyn_flow_awaitallmodel_team"
display: "msdyn_flow_awaitallmodel_team"
entitySetName: "msdyn_flow_awaitallmodel_teamset"
primaryId: "msdyn_flow_awaitallmodel_teamid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_flow_awaitallmodel_team

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallmodel_team` |
| Display name | msdyn_flow_awaitallmodel_team |
| Schema name | `msdyn_flow_awaitallmodel_team` |
| Entity set (Web API) | `msdyn_flow_awaitallmodel_teamset` |
| Primary id attribute | `msdyn_flow_awaitallmodel_teamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_awaitallmodel_teamset?$select=&$top=10
GET /api/data/v9.2/msdyn_flow_awaitallmodel_teamset(<guid>)
POST /api/data/v9.2/msdyn_flow_awaitallmodel_teamset
PATCH /api/data/v9.2/msdyn_flow_awaitallmodel_teamset(<guid>)
DELETE /api/data/v9.2/msdyn_flow_awaitallmodel_teamset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_flow_awaitallapprovalmodelid`, `msdyn_flow_awaitallmodel_teamid`, `teamid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallmodelrelationship_team` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | _n/a_ | `msdyn_flow_awaitallmodelrelationship_team` |

## Source

Generated from [msdyn_flow_awaitallmodel_team (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_awaitallmodel_team')) on 2026-05-07.