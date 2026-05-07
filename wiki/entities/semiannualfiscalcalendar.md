---
logical: "semiannualfiscalcalendar"
display: "Semiannual Fiscal Calendar"
entitySetName: "semiannualfiscalcalendars"
primaryId: "userfiscalcalendarid"
tableType: "Standard"
ownership: "None"
---

# Semiannual Fiscal Calendar

Calendar representing the semi-annual span of time during which the financial activities of an organization are calculated.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `semiannualfiscalcalendar` |
| Display name | Semiannual Fiscal Calendar |
| Display (plural) | Semiannual Fiscal Calendars |
| Schema name | `SemiAnnualFiscalCalendar` |
| Entity set (Web API) | `semiannualfiscalcalendars` |
| Primary id attribute | `userfiscalcalendarid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/semiannualfiscalcalendars?$select=&$top=10
GET /api/data/v9.2/semiannualfiscalcalendars(<guid>)
POST /api/data/v9.2/semiannualfiscalcalendars
PATCH /api/data/v9.2/semiannualfiscalcalendars(<guid>)
DELETE /api/data/v9.2/semiannualfiscalcalendars(<guid>)
```

## Attributes

Writable: **9** · Read-only: **11**

### Writable

`EffectiveOn`, `ImportSequenceNumber`, `Period1`, `Period7`, `SalesPersonId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UserFiscalCalendarId`, `UTCConversionTimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FiscalPeriodType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Period1_Base`, `Period7_Base`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_semiannualfiscalcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_semiannualfiscalcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_semiannualfiscalcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_semiannualfiscalcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_semiannualfiscalcalendar_salespersonid` | [systemuser](systemuser.md) | `salespersonid` | `salespersonid` |
| `transactioncurrency_semiannualfiscalcalendar` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SemiAnnualFiscalCalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SemiAnnualFiscalCalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [semiannualfiscalcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/semiannualfiscalcalendar.md) on 2026-05-06.