---
logical: "fixedmonthlyfiscalcalendar"
display: "Fixed Monthly Fiscal Calendar"
entitySetName: "fixedmonthlyfiscalcalendars"
primaryId: "userfiscalcalendarid"
tableType: "Standard"
ownership: "None"
---

# Fixed Monthly Fiscal Calendar

Fixed monthly fiscal calendar of an organization. A span of time during which the financial activities of an organization are calculated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fixedmonthlyfiscalcalendar` |
| Display name | Fixed Monthly Fiscal Calendar |
| Display (plural) | Fixed Monthly Fiscal Calendars |
| Schema name | `FixedMonthlyFiscalCalendar` |
| Entity set (Web API) | `fixedmonthlyfiscalcalendars` |
| Primary id attribute | `userfiscalcalendarid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/fixedmonthlyfiscalcalendars?$select=&$top=10
GET /api/data/v9.2/fixedmonthlyfiscalcalendars(<guid>)
POST /api/data/v9.2/fixedmonthlyfiscalcalendars
PATCH /api/data/v9.2/fixedmonthlyfiscalcalendars(<guid>)
DELETE /api/data/v9.2/fixedmonthlyfiscalcalendars(<guid>)
```

## Attributes

Writable: **19** · Read-only: **22**

### Writable

`EffectiveOn`, `Period1`, `Period10`, `Period11`, `Period12`, `Period13`, `Period2`, `Period3`, `Period4`, `Period5`, `Period6`, `Period7`, `Period8`, `Period9`, `SalesPersonId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserFiscalCalendarId`, `UTCConversionTimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FiscalPeriodType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Period1_Base`, `Period10_Base`, `Period11_Base`, `Period12_Base`, `Period13_Base`, `Period2_Base`, `Period3_Base`, `Period4_Base`, `Period5_Base`, `Period6_Base`, `Period7_Base`, `Period8_Base`, `Period9_Base`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_fixedmonthlyfiscalcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fixedmonthlyfiscalcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fixedmonthlyfiscalcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fixedmonthlyfiscalcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_fixedmonthlyfiscalcalendar_salespersonid` | [systemuser](systemuser.md) | `salespersonid` | `salespersonid` |
| `transactioncurrency_fixedmonthlyfiscalcalendar` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FixedMonthlyFiscalCalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `FixedMonthlyFiscalCalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [fixedmonthlyfiscalcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fixedmonthlyfiscalcalendar.md) on 2026-05-06.