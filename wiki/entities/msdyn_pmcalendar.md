---
logical: "msdyn_pmcalendar"
display: "PM Calendar"
entitySetName: "msdyn_pmcalendars"
primaryId: "msdyn_pmcalendarid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Calendar

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmcalendar` |
| Display name | PM Calendar |
| Display (plural) | PM Calendars |
| Schema name | `msdyn_pmcalendar` |
| Entity set (Web API) | `msdyn_pmcalendars` |
| Primary id attribute | `msdyn_pmcalendarid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmcalendars?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmcalendars(<guid>)
POST /api/data/v9.2/msdyn_pmcalendars
PATCH /api/data/v9.2/msdyn_pmcalendars(<guid>)
DELETE /api/data/v9.2/msdyn_pmcalendars(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_pmcalendarId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmcalendar` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_pmcalendar` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmcalendar` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmcalendar` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmcalendar_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendar_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendar_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmcalendar_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmcalendar_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendar_msdyn_pmcalendarversion` | _n/a_ | `msdyn_pmcalendarid` | _n/a_ |
| `msdyn_pmcalendar_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmcalendar_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendar_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmcalendar.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmcalendar.md) on 2026-05-06.