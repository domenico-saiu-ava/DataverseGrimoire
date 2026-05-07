---
logical: "msdyn_flow_awaitallactionapprovalmodel_user"
display: "msdyn_flow_awaitallactionapprovalmodel_user"
entitySetName: "msdyn_flow_awaitallactionapprovalmodel_userset"
primaryId: "msdyn_flow_awaitallactionapprovalmodel_userid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_flow_awaitallactionapprovalmodel_user

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallactionapprovalmodel_user` |
| Display name | msdyn_flow_awaitallactionapprovalmodel_user |
| Schema name | `msdyn_flow_awaitallactionapprovalmodel_user` |
| Entity set (Web API) | `msdyn_flow_awaitallactionapprovalmodel_userset` |
| Primary id attribute | `msdyn_flow_awaitallactionapprovalmodel_userid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_userset?$select=&$top=10
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_userset(<guid>)
POST /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_userset
PATCH /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_userset(<guid>)
DELETE /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodel_userset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_flow_awaitallactionapprovalmodel_userid`, `msdyn_flow_awaitallactionapprovalmodelid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionmodelrelationship_user` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | _n/a_ | `msdyn_flow_awaitallactionmodelrelationship_user` |

## Source

Generated from [msdyn_flow_awaitallactionapprovalmodel_user (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_awaitallactionapprovalmodel_user')) on 2026-05-07.