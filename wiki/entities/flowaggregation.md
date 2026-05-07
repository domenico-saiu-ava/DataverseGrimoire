---
logical: "flowaggregation"
display: "Flow Aggregation"
entitySetName: "flowaggregations"
primaryId: "flowaggregationid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
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

Writable: **19** · Read-only: **12**

### Writable

`aggregationtype`, `aggregationvalue`, `errorcode`, `flowaggregationId`, `ImportSequenceNumber`, `IsTopLevelRun`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `status`, `timeend`, `timestart`, `triggertype`, `TTLInSeconds`, `value`, `WorkflowCategory`, `workflowid`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowaggregation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_flowaggregation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowaggregation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowaggregation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowaggregation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowaggregation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowaggregation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowaggregation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_flowaggregation_workflowid` | [workflow](workflow.md) | `workflowid` | `workflowid` |



## Source

Generated from [flowaggregation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowaggregation.md) on 2026-05-06.