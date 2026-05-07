---
logical: "workqueue"
display: "Work Queue"
entitySetName: "workqueues"
primaryId: "workqueueid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Work Queue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workqueue` |
| Display name | Work Queue |
| Display (plural) | Work Queues |
| Schema name | `workqueue` |
| Entity set (Web API) | `workqueues` |
| Primary id attribute | `workqueueid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/workqueues?$select=name&$top=10
GET /api/data/v9.2/workqueues(<guid>)
POST /api/data/v9.2/workqueues
PATCH /api/data/v9.2/workqueues(<guid>)
DELETE /api/data/v9.2/workqueues(<guid>)
```

## Attributes

Writable: **24** · Read-only: **18**

### Writable

`allowupdateinputwhileprocessing`, `continueprocessingifslaviolated`, `defaultitemtimetoliveinminutes`, `description`, `ImportSequenceNumber`, `inputschema`, `inputschematype`, `IsCustomizable`, `itemmaxrequeuecount`, `itemmaxretrycount`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `prioritytype`, `slathresholdinpercentage`, `slathresholdmodifiedon`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `workqueueId`, `workqueuekey`, `WorkQueueType`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workqueue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_workqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_workqueue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_workqueue` | [team](team.md) | `owningteam` | `owningteam` |
| `user_workqueue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowevent_workqueue` | _n/a_ | `parentobjectid` | _n/a_ |
| `savingrule_workqueue` | _n/a_ | `workqueueid` | _n/a_ |
| `workqueue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueue_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `workqueue_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `workqueue_flowlog_parentobjectid` | _n/a_ | `parentobjectid` | _n/a_ |
| `workqueue_flowlog_workqueueid` | _n/a_ | `workqueueid` | _n/a_ |
| `workqueue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `workqueue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueue_workqueueitem` | _n/a_ | `workqueueid` | _n/a_ |


## Source

Generated from [workqueue.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workqueue.md) on 2026-05-06.