---
logical: "workqueueitem"
display: "Work Queue Item"
entitySetName: "workqueueitems"
primaryId: "workqueueitemid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Work Queue Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workqueueitem` |
| Display name | Work Queue Item |
| Display (plural) | Work Queue Items |
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

Writable: **30** · Read-only: **18**

### Writable

`completedon`, `delayuntil`, `executioncontext`, `expirydate`, `ImportSequenceNumber`, `input`, `IsCustomizable`, `machineuser`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `priority`, `processingduration`, `processingresult`, `processingstarttime`, `processinguser`, `processorid`, `processortype`, `requeuecount`, `retrycount`, `slastatus`, `slathresholddate`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `uniqueidbyqueue`, `UTCConversionTimeZoneCode`, `workqueueid`, `workqueueitemId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workqueueitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_workqueueitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workqueueitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workqueueitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workqueueitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_workqueueitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_workqueueitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_workqueueitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workqueue_workqueueitem` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |
| `workqueueitem_processinguser` | [systemuser](systemuser.md) | `processinguser` | `processinguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workqueueitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueueitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueueitem_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `workqueueitem_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `workqueueitem_flowlog_workqueueitemid` | _n/a_ | `workqueueitemid` | _n/a_ |
| `workqueueitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueueitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `workqueueitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workqueueitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [workqueueitem.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workqueueitem.md) on 2026-05-06.