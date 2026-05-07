---
logical: "reportcategory"
display: "Report Related Category"
entitySetName: "reportcategories"
primaryId: "reportcategoryid"
tableType: "Standard"
ownership: "None"
---

# Report Related Category

Categories related to a report. A report can be related to multiple categories.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `reportcategory` |
| Display name | Report Related Category |
| Display (plural) | Report Related Categories |
| Schema name | `ReportCategory` |
| Entity set (Web API) | `reportcategories` |
| Primary id attribute | `reportcategoryid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/reportcategories?$select=&$top=10
GET /api/data/v9.2/reportcategories(<guid>)
POST /api/data/v9.2/reportcategories
PATCH /api/data/v9.2/reportcategories(<guid>)
DELETE /api/data/v9.2/reportcategories(<guid>)
```

## Attributes

Writable: **8** · Read-only: **18**

### Writable

`CategoryCode`, `ImportSequenceNumber`, `IsCustomizable`, `ReportCategoryId`, `ReportId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `ReportCategoryIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_reportcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reportcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_reportcategorybase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reportcategorybase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `report_reportcategories` | [report](report.md) | `reportid` | `reportid` |
| `TransactionCurrency_ReportCategory` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reportcategory_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `ReportCategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [reportcategory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/reportcategory.md) on 2026-05-06.