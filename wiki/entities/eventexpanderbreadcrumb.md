---
logical: "eventexpanderbreadcrumb"
display: "Event Expander Breadcrumb"
entitySetName: "eventexpanderbreadcrumbs"
primaryId: "eventexpanderbreadcrumbid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Event Expander Breadcrumb

Table to store breadcrumb records of Event Expander pipeline.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `eventexpanderbreadcrumb` |
| Display name | Event Expander Breadcrumb |
| Display (plural) | Event Expander Breadcrumbs |
| Schema name | `EventExpanderBreadcrumb` |
| Entity set (Web API) | `eventexpanderbreadcrumbs` |
| Primary id attribute | `eventexpanderbreadcrumbid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/eventexpanderbreadcrumbs?$select=name&$top=10
GET /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
POST /api/data/v9.2/eventexpanderbreadcrumbs
PATCH /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
DELETE /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
```

## Attributes

Writable: **24** · Read-only: **3**

### Writable

`CompletedOn`, `CorrelationId`, `CreatedBy`, `CreatedOn`, `Data`, `DataBlobId`, `ErrorCode`, `EventExpanderBreadcrumbId`, `ExpanderStartTime`, `FriendlyMessage`, `ImportSequenceNumber`, `ModifiedBy`, `ModifiedOn`, `Name`, `OperationType`, `OverriddenCreatedOn`, `PartitionId`, `PostponeUntil`, `RetryCount`, `StartedOn`, `StateCode`, `StatusCode`, `TTLInSeconds`, `Workload`

### Read-only

`CreatedOnBehalfBy`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_eventexpanderbreadcrumb_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_eventexpanderbreadcrumb_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_eventexpanderbreadcrumb_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_eventexpanderbreadcrumb_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [eventexpanderbreadcrumb.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/eventexpanderbreadcrumb.md) on 2026-05-06.