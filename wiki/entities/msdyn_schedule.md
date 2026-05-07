---
logical: "msdyn_schedule"
display: "Schedule"
entitySetName: "msdyn_schedules"
primaryId: "msdyn_scheduleid"
primaryName: "msdyn_schedule"
tableType: "Standard"
ownership: "UserOwned"
---

# Schedule

Generic refresh schedule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_schedule` |
| Display name | Schedule |
| Display (plural) | Generic refresh schedule |
| Schema name | `msdyn_schedule` |
| Entity set (Web API) | `msdyn_schedules` |
| Primary id attribute | `msdyn_scheduleid` |
| Primary name attribute | `msdyn_schedule` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_schedules?$select=msdyn_schedule&$top=10
GET /api/data/v9.2/msdyn_schedules(<guid>)
POST /api/data/v9.2/msdyn_schedules
PATCH /api/data/v9.2/msdyn_schedules(<guid>)
DELETE /api/data/v9.2/msdyn_schedules(<guid>)
```

## Attributes

Writable: **23** · Read-only: **19**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_callbackurl`, `msdyn_isactive`, `msdyn_nextrefreshtime`, `msdyn_refentityname`, `msdyn_referenceid`, `msdyn_refreshpayload`, `msdyn_refreshperiod`, `msdyn_schedule`, `msdyn_scheduledisabledreason`, `msdyn_scheduleId`, `msdyn_schedulerefreshtype`, `msdyn_startdatetime`, `msdyn_timebasedrefreshperiod`, `msdyn_timezoneid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_scheduleidref`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_schedule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_schedule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_schedule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_schedule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_schedule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dataflow_dataflowschedule` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_scheduleidref` | `msdyn_scheduleidref` |
| `owner_msdyn_schedule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_schedule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_schedule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_schedule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_schedule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_schedule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_schedule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_schedule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_schedule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_schedule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_schedule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_schedule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_schedule.md) on 2026-05-06.