---
logical: "calendarrule"
display: "Calendar Rule"
entitySetName: "calendarrules"
primaryId: "calendarruleid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Calendar Rule

Defines free/busy times for a service and for resources or resource groups, such as working, non-working, vacation, and blocked.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `calendarrule` |
| Display name | Calendar Rule |
| Display (plural) | Calendar Rules |
| Schema name | `CalendarRule` |
| Entity set (Web API) | `calendarrules` |
| Primary id attribute | `calendarruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/calendarrules?$select=name&$top=10
GET /api/data/v9.2/calendarrules(<guid>)
POST /api/data/v9.2/calendarrules
PATCH /api/data/v9.2/calendarrules(<guid>)
DELETE /api/data/v9.2/calendarrules(<guid>)
```

## Attributes

Writable: **23** · Read-only: **9**

### Writable

`CalendarId`, `CalendarRuleId`, `Description`, `Duration`, `EffectiveIntervalEnd`, `EffectiveIntervalStart`, `Effort`, `EndTime`, `ExtentCode`, `GroupDesignator`, `InnerCalendarId`, `IsModified`, `IsSelected`, `IsSimple`, `IsVaried`, `Name`, `Offset`, `Pattern`, `Rank`, `StartTime`, `SubCode`, `TimeCode`, `TimeZoneCode`

### Read-only

`BusinessUnitId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `calendar_calendar_rules` | [calendar](calendar.md) | `calendarid` | `calendarid` |
| `inner_calendar_calendar_rules` | [calendar](calendar.md) | `innercalendarid` | `innercalendarid` |
| `lk_calendarrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_calendarrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_calendarrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_calendarrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [calendarrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/calendarrule.md) on 2026-05-06.