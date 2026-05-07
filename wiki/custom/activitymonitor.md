---
logical: "activitymonitor"
display: "Monitoraggio impegno"
entitySetName: "activitymonitors"
primaryId: "activitymonitorid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Monitoraggio impegno

Entità che tiene traccia delle informazioni sull'esecuzione della creazione automatica record.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activitymonitor` |
| Display name | Monitoraggio impegno |
| Display (plural) | Monitoraggi impegno |
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

Writable: **18** · Read-only: **11**

### Writable

`activitymonitorid`, `advancedsettings`, `conditionid`, `contactcreatedbyrule`, `currentstate`, `entitlementcheck`, `importsequencenumber`, `monitoredactivityitemid`, `name`, `overriddencreatedon`, `ownerid`, `queueid`, `reason`, `ruleid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `recommendation`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_activitymonitor_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_activitymonitor_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_activitymonitor_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_activitymonitor_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_activitymonitor` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_activitymonitor` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_activitymonitor` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_activitymonitor` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `email_activitymonitor` | [email](email.md) | `monitoredactivityitemid` | `monitoredactivityitemid_email` |
| `task_activitymonitor` | [task](task.md) | `monitoredactivityitemid` | `monitoredactivityitemid_task` |
| `convertrule_activitymonitor` | [convertrule](convertrule.md) | `ruleid` | `ruleid` |
| `convertruleitem_activitymonitor` | [convertruleitem](convertruleitem.md) | `conditionid` | `conditionid` |
| `queue_activitymonitor_queueid` | [queue](queue.md) | `queueid` | `queueId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activitymonitor_SyncErrors` | [activitymonitor](activitymonitor.md) | `regardingobjectid` | `regardingobjectid_activitymonitor` |
| `activitymonitor_DuplicateMatchingRecord` | [activitymonitor](activitymonitor.md) | `duplicaterecordid` | `duplicaterecordid_activitymonitor` |
| `activitymonitor_DuplicateBaseRecord` | [activitymonitor](activitymonitor.md) | `baserecordid` | `baserecordid_activitymonitor` |
| `activitymonitor_AsyncOperations` | [activitymonitor](activitymonitor.md) | `regardingobjectid` | `regardingobjectid_activitymonitor` |
| `activitymonitor_MailboxTrackingFolders` | [activitymonitor](activitymonitor.md) | `regardingobjectid` | `regardingobjectid_activitymonitor` |
| `activitymonitor_UserEntityInstanceDatas` | [activitymonitor](activitymonitor.md) | `objectid` | `objectid_activitymonitor` |
| `activitymonitor_ProcessSession` | [activitymonitor](activitymonitor.md) | `regardingobjectid` | `regardingobjectid_activitymonitor` |
| `activitymonitor_BulkDeleteFailures` | [activitymonitor](activitymonitor.md) | `regardingobjectid` | `regardingobjectid_activitymonitor` |
| `activitymonitor_PrincipalObjectAttributeAccesses` | [activitymonitor](activitymonitor.md) | `objectid` | `objectid_activitymonitor` |


## Source

Generated from [activitymonitor (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='activitymonitor')) on 2026-05-07.