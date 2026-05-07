---
logical: "workqueue"
display: "Coda di lavoro"
entitySetName: "workqueues"
primaryId: "workqueueid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Coda di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workqueue` |
| Display name | Coda di lavoro |
| Display (plural) | Code di lavoro |
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

Writable: **23** · Read-only: **16**

### Writable

`allowupdateinputwhileprocessing`, `continueprocessingifslaviolated`, `defaultitemtimetoliveinminutes`, `description`, `importsequencenumber`, `inputschema`, `inputschematype`, `iscustomizable`, `itemmaxrequeuecount`, `itemmaxretrycount`, `name`, `overriddencreatedon`, `ownerid`, `prioritytype`, `slathresholdinpercentage`, `slathresholdmodifiedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workqueueid`, `workqueuekey`, `workqueuetype`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_workqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_workqueue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_workqueue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_workqueue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_workqueue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workqueue_flowlog_workqueueid` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |
| `workqueue_flowlog_parentobjectid` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |
| `workqueue_SyncErrors` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueue_DuplicateMatchingRecord` | [workqueue](workqueue.md) | `duplicaterecordid` | `duplicaterecordid_workqueue` |
| `workqueue_DuplicateBaseRecord` | [workqueue](workqueue.md) | `baserecordid` | `baserecordid_workqueue` |
| `workqueue_AsyncOperations` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueue_MailboxTrackingFolders` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueue_UserEntityInstanceDatas` | [workqueue](workqueue.md) | `objectid` | `objectid_workqueue` |
| `workqueue_ProcessSession` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueue_BulkDeleteFailures` | [workqueue](workqueue.md) | `regardingobjectid` | `regardingobjectid_workqueue` |
| `workqueue_PrincipalObjectAttributeAccesses` | [workqueue](workqueue.md) | `objectid` | `objectid_workqueue` |
| `workqueue_workqueueitem` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |
| `flowevent_workqueue` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |
| `savingrule_workqueue` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid_workqueue` |


## Source

Generated from [workqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='workqueue')) on 2026-05-07.