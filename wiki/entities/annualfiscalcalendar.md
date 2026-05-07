---
logical: "annualfiscalcalendar"
display: "Annual Fiscal Calendar"
entitySetName: "annualfiscalcalendars"
primaryId: "userfiscalcalendarid"
tableType: "Standard"
ownership: "None"
---

# Annual Fiscal Calendar

Year long fiscal calendar of an organization. A span of time during which the financial activities of an organization are calculated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `annualfiscalcalendar` |
| Display name | Annual Fiscal Calendar |
| Display (plural) | Annual Fiscal Calendars |
| Schema name | `AnnualFiscalCalendar` |
| Entity set (Web API) | `annualfiscalcalendars` |
| Primary id attribute | `userfiscalcalendarid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/annualfiscalcalendars?$select=&$top=10
GET /api/data/v9.2/annualfiscalcalendars(<guid>)
POST /api/data/v9.2/annualfiscalcalendars
PATCH /api/data/v9.2/annualfiscalcalendars(<guid>)
DELETE /api/data/v9.2/annualfiscalcalendars(<guid>)
```

## Attributes

Writable: **7** · Read-only: **10**

### Writable

`EffectiveOn`, `Period1`, `SalesPersonId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserFiscalCalendarId`, `UTCConversionTimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FiscalPeriodType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Period1_Base`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_annualfiscalcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_annualfiscalcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_annualfiscalcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_annualfiscalcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_annualfiscalcalendar_salespersonid` | [systemuser](systemuser.md) | `salespersonid` | `salespersonid` |
| `transactioncurrency_annualfiscalcalendar` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AnnualFiscalCalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `AnnualFiscalCalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [annualfiscalcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/annualfiscalcalendar.md) on 2026-05-06.