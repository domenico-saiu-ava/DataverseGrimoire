---
logical: "monthlyfiscalcalendar"
display: "Monthly Fiscal Calendar"
entitySetName: "monthlyfiscalcalendars"
primaryId: "userfiscalcalendarid"
tableType: "Standard"
ownership: "None"
---

# Monthly Fiscal Calendar

Monthly fiscal calendar of an organization. A span of time during which the financial activities of an organization are calculated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `monthlyfiscalcalendar` |
| Display name | Monthly Fiscal Calendar |
| Display (plural) | Monthly Fiscal Calendars |
| Schema name | `MonthlyFiscalCalendar` |
| Entity set (Web API) | `monthlyfiscalcalendars` |
| Primary id attribute | `userfiscalcalendarid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/monthlyfiscalcalendars?$select=&$top=10
GET /api/data/v9.2/monthlyfiscalcalendars(<guid>)
POST /api/data/v9.2/monthlyfiscalcalendars
PATCH /api/data/v9.2/monthlyfiscalcalendars(<guid>)
DELETE /api/data/v9.2/monthlyfiscalcalendars(<guid>)
```

## Attributes

Writable: **18** · Read-only: **21**

### Writable

`EffectiveOn`, `Period1`, `Period10`, `Period11`, `Period12`, `Period2`, `Period3`, `Period4`, `Period5`, `Period6`, `Period7`, `Period8`, `Period9`, `SalesPersonId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserFiscalCalendarId`, `UTCConversionTimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FiscalPeriodType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Period1_Base`, `Period10_Base`, `Period11_Base`, `Period12_Base`, `Period2_Base`, `Period3_Base`, `Period4_Base`, `Period5_Base`, `Period6_Base`, `Period7_Base`, `Period8_Base`, `Period9_Base`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_monthlyfiscalcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_monthlyfiscalcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_monthlyfiscalcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_monthlyfiscalcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_monthlyfiscalcalendar_salespersonid` | [systemuser](systemuser.md) | `salespersonid` | `salespersonid` |
| `transactioncurrency_monthlyfiscalcalendar` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `MonthlyFiscalCalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `MonthlyFiscalCalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [monthlyfiscalcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/monthlyfiscalcalendar.md) on 2026-05-06.