---
logical: "timezonelocalizedname"
display: "Time Zone Localized Name"
entitySetName: "timezonelocalizednames"
primaryId: "timezonelocalizednameid"
primaryName: "userinterfacename"
tableType: "Standard"
ownership: "None"
---

# Time Zone Localized Name

Localized name of the time zone.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `timezonelocalizedname` |
| Display name | Time Zone Localized Name |
| Display (plural) | Time Zone Localized Names |
| Schema name | `TimeZoneLocalizedName` |
| Entity set (Web API) | `timezonelocalizednames` |
| Primary id attribute | `timezonelocalizednameid` |
| Primary name attribute | `userinterfacename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/timezonelocalizednames?$select=userinterfacename&$top=10
GET /api/data/v9.2/timezonelocalizednames(<guid>)
POST /api/data/v9.2/timezonelocalizednames
PATCH /api/data/v9.2/timezonelocalizednames(<guid>)
DELETE /api/data/v9.2/timezonelocalizednames(<guid>)
```

## Attributes

Writable: **6** · Read-only: **8**

### Writable

`CultureId`, `DaylightName`, `StandardName`, `TimeZoneDefinitionId`, `TimeZoneLocalizedNameId`, `UserInterfaceName`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_timezonelocalizedname_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_timezonelocalizedname_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_timezonelocalizedname_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_timezonelocalizedname_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_timezonelocalizedname_timezonedefinitionid` | [timezonedefinition](timezonedefinition.md) | `timezonedefinitionid` | `timezonedefinitionid` |



## Source

Generated from [timezonelocalizedname.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/timezonelocalizedname.md) on 2026-05-06.