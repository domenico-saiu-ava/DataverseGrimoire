---
logical: "calendar"
display: "Calendar"
entitySetName: "calendars"
primaryId: "calendarid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
---

# Calendar

Calendar used by the scheduling system to define when an appointment or activity is to occur.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `calendar` |
| Display name | Calendar |
| Display (plural) | Calendars |
| Schema name | `Calendar` |
| Entity set (Web API) | `calendars` |
| Primary id attribute | `calendarid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/calendars?$select=name&$top=10
GET /api/data/v9.2/calendars(<guid>)
POST /api/data/v9.2/calendars
PATCH /api/data/v9.2/calendars(<guid>)
DELETE /api/data/v9.2/calendars(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`BusinessUnitId`, `CalendarId`, `Description`, `HolidayScheduleCalendarId`, `IsShared`, `Name`, `PrimaryUserId`, `Type`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_calendars` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `calendar_customercalendar_holidaycalendar` | [calendar](calendar.md) | `holidayschedulecalendarid` | `holidayschedulecalendarid` |
| `lk_calendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_calendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_calendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_calendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_calendars` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_Calendar` | _n/a_ | `calendarid` | _n/a_ |
| `Calendar_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Calendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Calendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `calendar_calendar_rules` | _n/a_ | `calendarid` | _n/a_ |
| `calendar_customercalendar_holidaycalendar` | _n/a_ | `holidayschedulecalendarid` | _n/a_ |
| `calendar_organization` | _n/a_ | `businessclosurecalendarid` | _n/a_ |
| `calendar_slaitem` | _n/a_ | `businesshoursid` | _n/a_ |
| `calendar_system_users` | _n/a_ | `calendarid` | _n/a_ |
| `inner_calendar_calendar_rules` | _n/a_ | `innercalendarid` | _n/a_ |
| `slabase_businesshoursid` | _n/a_ | `businesshoursid` | _n/a_ |


## Source

Generated from [calendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/calendar.md) on 2026-05-06.