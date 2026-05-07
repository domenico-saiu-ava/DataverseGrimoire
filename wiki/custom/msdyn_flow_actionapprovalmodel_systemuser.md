---
logical: "msdyn_flow_actionapprovalmodel_systemuser"
display: "msdyn_flow_actionapprovalmodel_systemuser"
entitySetName: "msdyn_flow_actionapprovalmodel_systemuserset"
primaryId: "msdyn_flow_actionapprovalmodel_systemuserid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_flow_actionapprovalmodel_systemuser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_actionapprovalmodel_systemuser` |
| Display name | msdyn_flow_actionapprovalmodel_systemuser |
| Schema name | `msdyn_flow_actionapprovalmodel_systemuser` |
| Entity set (Web API) | `msdyn_flow_actionapprovalmodel_systemuserset` |
| Primary id attribute | `msdyn_flow_actionapprovalmodel_systemuserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_actionapprovalmodel_systemuserset?$select=&$top=10
GET /api/data/v9.2/msdyn_flow_actionapprovalmodel_systemuserset(<guid>)
POST /api/data/v9.2/msdyn_flow_actionapprovalmodel_systemuserset
PATCH /api/data/v9.2/msdyn_flow_actionapprovalmodel_systemuserset(<guid>)
DELETE /api/data/v9.2/msdyn_flow_actionapprovalmodel_systemuserset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_flow_actionapprovalmodel_systemuserid`, `msdyn_flow_actionapprovalmodelid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodelrelationship_systemuser` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | _n/a_ | `msdyn_flow_actionapprovalmodelrelationship_systemuser` |

## Source

Generated from [msdyn_flow_actionapprovalmodel_systemuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_actionapprovalmodel_systemuser')) on 2026-05-07.