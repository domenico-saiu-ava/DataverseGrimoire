---
logical: "backgroundoperation"
display: "Background Operation"
entitySetName: "backgroundoperations"
primaryId: "backgroundoperationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Background Operation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `backgroundoperation` |
| Display name | Background Operation |
| Display (plural) | Background Operations |
| Schema name | `backgroundoperation` |
| Entity set (Web API) | `backgroundoperations` |
| Primary id attribute | `backgroundoperationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/backgroundoperations?$select=name&$top=10
GET /api/data/v9.2/backgroundoperations(<guid>)
POST /api/data/v9.2/backgroundoperations
PATCH /api/data/v9.2/backgroundoperations(<guid>)
DELETE /api/data/v9.2/backgroundoperations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **7**

### Writable

`backgroundoperationId`, `DisplayName`, `EndTime`, `ErrorCode`, `ErrorMessage`, `ImportSequenceNumber`, `InputParameters`, `Name`, `OutputParameters`, `OverriddenCreatedOn`, `PartitionId`, `Priority`, `RetryCount`, `RunAs`, `StartTime`, `StateCode`, `StatusCode`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_backgroundoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_backgroundoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_backgroundoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_backgroundoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [backgroundoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/backgroundoperation.md) on 2026-05-06.