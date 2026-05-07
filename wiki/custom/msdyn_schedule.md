---
logical: "msdyn_schedule"
display: "Pianificazione"
entitySetName: "msdyn_schedules"
primaryId: "msdyn_scheduleid"
primaryName: "msdyn_schedule"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Pianificazione

Pianificazione aggiornamento generica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_schedule` |
| Display name | Pianificazione |
| Display (plural) | Pianificazione aggiornamento generica |
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

Writable: **22** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_callbackurl`, `msdyn_isactive`, `msdyn_nextrefreshtime`, `msdyn_refentityname`, `msdyn_referenceid`, `msdyn_refreshpayload`, `msdyn_refreshperiod`, `msdyn_schedule`, `msdyn_scheduledisabledreason`, `msdyn_scheduleid`, `msdyn_schedulerefreshtype`, `msdyn_startdatetime`, `msdyn_timebasedrefreshperiod`, `msdyn_timezoneid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_scheduleidref`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_schedule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_schedule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_schedule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_schedule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_schedule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_schedule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_schedule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_schedule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataflow_dataflowschedule` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_scheduleidref` | `msdyn_scheduleidref` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_schedule_SyncErrors` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_schedule_DuplicateMatchingRecord` | [msdyn_schedule](msdyn_schedule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_schedule` |
| `msdyn_schedule_DuplicateBaseRecord` | [msdyn_schedule](msdyn_schedule.md) | `baserecordid` | `baserecordid_msdyn_schedule` |
| `msdyn_schedule_AsyncOperations` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_schedule_MailboxTrackingFolders` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_schedule_UserEntityInstanceDatas` | [msdyn_schedule](msdyn_schedule.md) | `objectid` | `objectid_msdyn_schedule` |
| `msdyn_schedule_ProcessSession` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_schedule_BulkDeleteFailures` | [msdyn_schedule](msdyn_schedule.md) | `regardingobjectid` | `regardingobjectid_msdyn_schedule` |
| `msdyn_schedule_PrincipalObjectAttributeAccesses` | [msdyn_schedule](msdyn_schedule.md) | `objectid` | `objectid_msdyn_schedule` |


## Source

Generated from [msdyn_schedule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_schedule')) on 2026-05-07.