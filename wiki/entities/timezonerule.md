---
logical: "timezonerule"
display: "Time Zone Rule"
entitySetName: "timezonerules"
primaryId: "timezoneruleid"
primaryName: "timezoneruleversionnumber"
tableType: "Standard"
ownership: "None"
---

# Time Zone Rule

Definition for time conversion between local time and Coordinated Universal Time (UTC) for a particular time zone at a particular time period.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `timezonerule` |
| Display name | Time Zone Rule |
| Display (plural) | Time Zone Rules |
| Schema name | `TimeZoneRule` |
| Entity set (Web API) | `timezonerules` |
| Primary id attribute | `timezoneruleid` |
| Primary name attribute | `timezoneruleversionnumber` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/timezonerules?$select=timezoneruleversionnumber&$top=10
GET /api/data/v9.2/timezonerules(<guid>)
POST /api/data/v9.2/timezonerules
PATCH /api/data/v9.2/timezonerules(<guid>)
DELETE /api/data/v9.2/timezonerules(<guid>)
```

## Attributes

Writable: **21** · Read-only: **8**

### Writable

`Bias`, `DaylightBias`, `DaylightDay`, `DaylightDayOfWeek`, `DaylightHour`, `DaylightMinute`, `DaylightMonth`, `DaylightSecond`, `DaylightYear`, `EffectiveDateTime`, `StandardBias`, `StandardDay`, `StandardDayOfWeek`, `StandardHour`, `StandardMinute`, `StandardMonth`, `StandardSecond`, `StandardYear`, `TimeZoneDefinitionId`, `TimeZoneRuleId`, `TimeZoneRuleVersionNumber`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_timezonerule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_timezonerule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_timezonerule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_timezonerule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_timezonerule_timezonedefinitionid` | [timezonedefinition](timezonedefinition.md) | `timezonedefinitionid` | `timezonedefinitionid` |



## Source

Generated from [timezonerule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/timezonerule.md) on 2026-05-06.