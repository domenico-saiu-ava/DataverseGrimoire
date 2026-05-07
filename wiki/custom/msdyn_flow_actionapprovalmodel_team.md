---
logical: "msdyn_flow_actionapprovalmodel_team"
display: "msdyn_flow_actionapprovalmodel_team"
entitySetName: "msdyn_flow_actionapprovalmodel_teamset"
primaryId: "msdyn_flow_actionapprovalmodel_teamid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_flow_actionapprovalmodel_team

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_actionapprovalmodel_team` |
| Display name | msdyn_flow_actionapprovalmodel_team |
| Schema name | `msdyn_flow_actionapprovalmodel_team` |
| Entity set (Web API) | `msdyn_flow_actionapprovalmodel_teamset` |
| Primary id attribute | `msdyn_flow_actionapprovalmodel_teamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_actionapprovalmodel_teamset?$select=&$top=10
GET /api/data/v9.2/msdyn_flow_actionapprovalmodel_teamset(<guid>)
POST /api/data/v9.2/msdyn_flow_actionapprovalmodel_teamset
PATCH /api/data/v9.2/msdyn_flow_actionapprovalmodel_teamset(<guid>)
DELETE /api/data/v9.2/msdyn_flow_actionapprovalmodel_teamset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_flow_actionapprovalmodel_teamid`, `msdyn_flow_actionapprovalmodelid`, `teamid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodelrelationship_team` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | _n/a_ | `msdyn_flow_actionapprovalmodelrelationship_team` |

## Source

Generated from [msdyn_flow_actionapprovalmodel_team (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_actionapprovalmodel_team')) on 2026-05-07.