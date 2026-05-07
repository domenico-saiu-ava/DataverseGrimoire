---
logical: "bulkdeleteoperation"
display: "Bulk Delete Operation"
entitySetName: "bulkdeleteoperations"
primaryId: "bulkdeleteoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Bulk Delete Operation

User-submitted bulk deletion job.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkdeleteoperation` |
| Display name | Bulk Delete Operation |
| Display (plural) | Bulk Delete Operations |
| Schema name | `BulkDeleteOperation` |
| Entity set (Web API) | `bulkdeleteoperations` |
| Primary id attribute | `bulkdeleteoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/bulkdeleteoperations?$select=name&$top=10
GET /api/data/v9.2/bulkdeleteoperations(<guid>)
POST /api/data/v9.2/bulkdeleteoperations
PATCH /api/data/v9.2/bulkdeleteoperations(<guid>)
DELETE /api/data/v9.2/bulkdeleteoperations(<guid>)
```

## Attributes

Writable: **2** · Read-only: **21**

### Writable

`TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`AsyncOperationId`, `BulkDeleteOperationId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FailureCount`, `IsRecurring`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `NextRun`, `OrderedQuerySetXml`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `ProcessingQEIndex`, `StateCode`, `StatusCode`, `SuccessCount`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AsyncOperation_BulkDeleteOperation` | [asyncoperation](asyncoperation.md) | `asyncoperationid` | `asyncoperationid` |
| `BulkDeleteOperation_BusinessUnit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bulkdeleteoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bulkdeleteoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_bulkdeleteoperationbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bulkdeleteoperationbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BulkDeleteOperation_BulkDeleteFailure` | _n/a_ | `bulkdeleteoperationid` | _n/a_ |


## Source

Generated from [bulkdeleteoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/bulkdeleteoperation.md) on 2026-05-06.