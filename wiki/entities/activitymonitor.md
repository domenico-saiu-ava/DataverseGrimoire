---
logical: "activitymonitor"
display: "Activity monitor"
entitySetName: "activitymonitors"
primaryId: "activitymonitorid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Activity monitor

Entity that tracks ARC runtime information.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activitymonitor` |
| Display name | Activity monitor |
| Display (plural) | Activity monitors |
| Schema name | `activitymonitor` |
| Entity set (Web API) | `activitymonitors` |
| Primary id attribute | `activitymonitorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/activitymonitors?$select=name&$top=10
GET /api/data/v9.2/activitymonitors(<guid>)
POST /api/data/v9.2/activitymonitors
PATCH /api/data/v9.2/activitymonitors(<guid>)
DELETE /api/data/v9.2/activitymonitors(<guid>)
```

## Attributes

Writable: **20** · Read-only: **13**

### Writable

`activitymonitorId`, `AdvancedSettings`, `ConditionId`, `ContactCreatedByRule`, `CurrentState`, `EntitlementCheck`, `ImportSequenceNumber`, `MonitoredActivityItemId`, `MonitoredActivityItemIdType`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `queueid`, `Reason`, `RuleId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Recommendation`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_activitymonitor` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `email_activitymonitor` | [email](email.md) | `monitoredactivityitemid` | `monitoredactivityitemid_email` |
| `lk_activitymonitor_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_activitymonitor_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_activitymonitor_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_activitymonitor_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_activitymonitor` | [owner](owner.md) | `ownerid` | `ownerid` |
| `queue_activitymonitor_queueid` | [queue](queue.md) | `queueid` | `queueId` |
| `task_activitymonitor` | [task](task.md) | `monitoredactivityitemid` | `monitoredactivityitemid_task` |
| `team_activitymonitor` | [team](team.md) | `owningteam` | `owningteam` |
| `user_activitymonitor` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activitymonitor_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activitymonitor_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activitymonitor_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `activitymonitor_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `activitymonitor_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activitymonitor_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `activitymonitor_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activitymonitor_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [activitymonitor.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/activitymonitor.md) on 2026-05-06.