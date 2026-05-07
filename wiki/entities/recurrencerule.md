---
logical: "recurrencerule"
display: "Recurrence Rule"
entitySetName: "recurrencerules"
primaryId: "ruleid"
tableType: "Standard"
ownership: "UserOwned"
---

# Recurrence Rule

Recurrence Rule represents the pattern of incidence of recurring entities.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recurrencerule` |
| Display name | Recurrence Rule |
| Display (plural) | Recurrence Rules |
| Schema name | `RecurrenceRule` |
| Entity set (Web API) | `recurrencerules` |
| Primary id attribute | `ruleid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/recurrencerules?$select=&$top=10
GET /api/data/v9.2/recurrencerules(<guid>)
POST /api/data/v9.2/recurrencerules
PATCH /api/data/v9.2/recurrencerules(<guid>)
DELETE /api/data/v9.2/recurrencerules(<guid>)
```

## Attributes

Writable: **25** · Read-only: **12**

### Writable

`DayOfMonth`, `DaysOfWeekMask`, `Duration`, `EffectiveEndDate`, `EffectiveStartDate`, `EndTime`, `FirstDayOfWeek`, `Instance`, `Interval`, `IsNthMonthly`, `IsNthYearly`, `IsRegenerate`, `IsWeekDayPattern`, `MonthOfYear`, `ObjectId`, `ObjectTypeCode`, `Occurrences`, `OwnerId`, `OwnerIdType`, `PatternEndDate`, `PatternEndType`, `PatternStartDate`, `RecurrencePatternType`, `RuleId`, `StartTime`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activity_pointer_recurrencerule` | [activitypointer](activitypointer.md) | `objectid` | `objectid` |
| `business_unit_recurrencerule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_recurrencerule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recurrencerule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recurrencerulebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recurrencerulebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_recurrencerules` | [owner](owner.md) | `ownerid` | `ownerid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recurrencerule_recurringappointmentmaster` | _n/a_ | `activityid` | _n/a_ |


## Source

Generated from [recurrencerule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recurrencerule.md) on 2026-05-06.