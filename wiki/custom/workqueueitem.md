---
logical: "workqueueitem"
display: "Elemento coda di lavoro"
entitySetName: "workqueueitems"
primaryId: "workqueueitemid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento coda di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workqueueitem` |
| Display name | Elemento coda di lavoro |
| Display (plural) | Elementi coda di lavoro |
| Schema name | `workqueueitem` |
| Entity set (Web API) | `workqueueitems` |
| Primary id attribute | `workqueueitemid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/workqueueitems?$select=name&$top=10
GET /api/data/v9.2/workqueueitems(<guid>)
POST /api/data/v9.2/workqueueitems
PATCH /api/data/v9.2/workqueueitems(<guid>)
DELETE /api/data/v9.2/workqueueitems(<guid>)
```

## Attributes

Writable: **29** · Read-only: **16**

### Writable

`completedon`, `delayuntil`, `executioncontext`, `expirydate`, `importsequencenumber`, `input`, `iscustomizable`, `machineuser`, `name`, `overriddencreatedon`, `ownerid`, `priority`, `processingduration`, `processingresult`, `processingstarttime`, `processinguser`, `processorid`, `processortype`, `requeuecount`, `retrycount`, `slastatus`, `slathresholddate`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniqueidbyqueue`, `utcconversiontimezonecode`, `workqueueid`, `workqueueitemid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_workqueueitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workqueueitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workqueueitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workqueueitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_workqueueitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_workqueueitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_workqueueitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_workqueueitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `workqueueitem_processinguser` | [systemuser](systemuser.md) | `processinguser` | `processinguser` |
| `workqueue_workqueueitem` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workqueueitem_flowlog_workqueueitemid` | [workqueueitem](workqueueitem.md) | `workqueueitemid` | `workqueueitemid` |
| `workqueueitem_SyncErrors` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |
| `workqueueitem_DuplicateMatchingRecord` | [workqueueitem](workqueueitem.md) | `duplicaterecordid` | `duplicaterecordid_workqueueitem` |
| `workqueueitem_DuplicateBaseRecord` | [workqueueitem](workqueueitem.md) | `baserecordid` | `baserecordid_workqueueitem` |
| `workqueueitem_AsyncOperations` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |
| `workqueueitem_MailboxTrackingFolders` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |
| `workqueueitem_UserEntityInstanceDatas` | [workqueueitem](workqueueitem.md) | `objectid` | `objectid_workqueueitem` |
| `workqueueitem_ProcessSession` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |
| `workqueueitem_BulkDeleteFailures` | [workqueueitem](workqueueitem.md) | `regardingobjectid` | `regardingobjectid_workqueueitem` |
| `workqueueitem_PrincipalObjectAttributeAccesses` | [workqueueitem](workqueueitem.md) | `objectid` | `objectid_workqueueitem` |


## Source

Generated from [workqueueitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='workqueueitem')) on 2026-05-07.