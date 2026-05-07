---
logical: "timezonedefinition"
display: "Time Zone Definition"
entitySetName: "timezonedefinitions"
primaryId: "timezonedefinitionid"
primaryName: "userinterfacename"
tableType: "Standard"
ownership: "None"
---

# Time Zone Definition

Time zone definition, including name and time zone code.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `timezonedefinition` |
| Display name | Time Zone Definition |
| Display (plural) | Time Zone Definitions |
| Schema name | `TimeZoneDefinition` |
| Entity set (Web API) | `timezonedefinitions` |
| Primary id attribute | `timezonedefinitionid` |
| Primary name attribute | `userinterfacename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/timezonedefinitions?$select=userinterfacename&$top=10
GET /api/data/v9.2/timezonedefinitions(<guid>)
POST /api/data/v9.2/timezonedefinitions
PATCH /api/data/v9.2/timezonedefinitions(<guid>)
DELETE /api/data/v9.2/timezonedefinitions(<guid>)
```

## Attributes

Writable: **7** · Read-only: **8**

### Writable

`Bias`, `DaylightName`, `RetiredOrder`, `StandardName`, `TimeZoneCode`, `TimeZoneDefinitionId`, `UserInterfaceName`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_timezonedefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_timezonedefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_timezonedefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_timezonedefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_timezonelocalizedname_timezonedefinitionid` | _n/a_ | `timezonedefinitionid` | _n/a_ |
| `lk_timezonerule_timezonedefinitionid` | _n/a_ | `timezonedefinitionid` | _n/a_ |


## Source

Generated from [timezonedefinition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/timezonedefinition.md) on 2026-05-06.