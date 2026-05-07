---
logical: "flowaggregation"
display: "Flow Aggregation"
entitySetName: "flowaggregations"
primaryId: "flowaggregationid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Aggregation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowaggregation` |
| Display name | Flow Aggregation |
| Display (plural) | Flow Aggregations |
| Schema name | `flowaggregation` |
| Entity set (Web API) | `flowaggregations` |
| Primary id attribute | `flowaggregationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowaggregations?$select=name&$top=10
GET /api/data/v9.2/flowaggregations(<guid>)
POST /api/data/v9.2/flowaggregations
PATCH /api/data/v9.2/flowaggregations(<guid>)
DELETE /api/data/v9.2/flowaggregations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`aggregationtype`, `aggregationvalue`, `errorcode`, `flowaggregationid`, `importsequencenumber`, `istoplevelrun`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `status`, `timeend`, `timestart`, `triggertype`, `ttlinseconds`, `value`, `workflowcategory`, `workflowid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowaggregation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowaggregation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowaggregation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowaggregation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowaggregation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowaggregation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowaggregation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowaggregation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `workflow_flowaggregation_workflowid` | [workflow](workflow.md) | `workflowid` | `workflowid` |



## Source

Generated from [flowaggregation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowaggregation')) on 2026-05-07.