---
logical: "quarterlyfiscalcalendar"
display: "Quarterly Fiscal Calendar"
entitySetName: "quarterlyfiscalcalendars"
primaryId: "userfiscalcalendarid"
tableType: "Standard"
ownership: "None"
---

# Quarterly Fiscal Calendar

Quarterly fiscal calendar of an organization. A span of time during which the financial activities of an organization are calculated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `quarterlyfiscalcalendar` |
| Display name | Quarterly Fiscal Calendar |
| Display (plural) | Quarterly Fiscal Calendars |
| Schema name | `QuarterlyFiscalCalendar` |
| Entity set (Web API) | `quarterlyfiscalcalendars` |
| Primary id attribute | `userfiscalcalendarid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/quarterlyfiscalcalendars?$select=&$top=10
GET /api/data/v9.2/quarterlyfiscalcalendars(<guid>)
POST /api/data/v9.2/quarterlyfiscalcalendars
PATCH /api/data/v9.2/quarterlyfiscalcalendars(<guid>)
DELETE /api/data/v9.2/quarterlyfiscalcalendars(<guid>)
```

## Attributes

Writable: **10** · Read-only: **13**

### Writable

`EffectiveOn`, `Period1`, `Period10`, `Period4`, `Period7`, `SalesPersonId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserFiscalCalendarId`, `UTCConversionTimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FiscalPeriodType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Period1_Base`, `Period10_Base`, `Period4_Base`, `Period7_Base`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_quarterlyfiscalcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_quarterlyfiscalcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_quarterlyfiscalcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_quarterlyfiscalcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_quarterlyfiscalcalendar_salespersonid` | [systemuser](systemuser.md) | `salespersonid` | `salespersonid` |
| `transactioncurrency_quarterlyfiscalcalendar` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `QuarterlyFiscalCalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QuarterlyFiscalCalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [quarterlyfiscalcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/quarterlyfiscalcalendar.md) on 2026-05-06.