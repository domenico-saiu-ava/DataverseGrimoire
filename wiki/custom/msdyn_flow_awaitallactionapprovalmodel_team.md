---
logical: "msdyn_flow_awaitallactionapprovalmodel_team"
display: "msdyn_flow_awaitallactionapprovalmodel_team"
entitySetName: "msdyn_flow_awaitallactionapprovalmodel_teamset"
primaryId: "msdyn_flow_awaitallactionapprovalmodel_teamid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_flow_awaitallactionapprovalmodel_team

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallactionapprovalmodel_team` |
| Display name | msdyn_flow_awaitallactionapprovalmodel_team |
| Schema name | `msdyn_flow_awaitallactionapprovalmodel_team` |
| Entity set (Web API) | `msdyn_flow_awaitallactionapprovalmodel_teamset` |
| Primary id attribute | `msdyn_flow_awaitallactionapprovalmodel_teamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_teamset?$select=&$top=10
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_teamset(<guid>)
POST /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_teamset
PATCH /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_teamset(<guid>)
DELETE /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_teamset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_flow_awaitallactionapprovalmodel_teamid`, `msdyn_flow_awaitallactionapprovalmodelid`, `teamid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionmodelrelationship_team` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | _n/a_ | `msdyn_flow_awaitallactionmodelrelationship_team` |

## Source

Generated from [msdyn_flow_awaitallactionapprovalmodel_team (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_awaitallactionapprovalmodel_team')) on 2026-05-07.