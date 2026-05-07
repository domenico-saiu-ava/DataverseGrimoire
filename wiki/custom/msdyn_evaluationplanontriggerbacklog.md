---
logical: "msdyn_evaluationplanontriggerbacklog"
display: "Backlog all'attivazione del piano di valutazione"
entitySetName: "msdyn_evaluationplanontriggerbacklogs"
primaryId: "msdyn_evaluationplanontriggerbacklogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Backlog all'attivazione del piano di valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanontriggerbacklog` |
| Display name | Backlog all'attivazione del piano di valutazione |
| Display (plural) | Backlog all'attivazione del piano di valutazione |
| Schema name | `msdyn_evaluationplanontriggerbacklog` |
| Entity set (Web API) | `msdyn_evaluationplanontriggerbacklogs` |
| Primary id attribute | `msdyn_evaluationplanontriggerbacklogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs
PATCH /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanontriggerbacklogs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_evaluationIds`, `msdyn_evaluationplanontriggerbacklogid`, `msdyn_name`, `msdyn_objectid`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_objectid` | `msdyn_ObjectId` |
| `lk_msdyn_evaluationplanontriggerbacklog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanontriggerbacklog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanontriggerbacklog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanontriggerbacklog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationplanontriggerbacklog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationplanontriggerbacklog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationplanontriggerbacklog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationplanontriggerbacklog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationplanontriggerbacklog_ObjectId_systemuser` | [systemuser](systemuser.md) | `msdyn_objectid` | `msdyn_ObjectId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanontriggerbacklog_SyncErrors` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_AsyncOperations` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_MailboxTrackingFolders` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_UserEntityInstanceDatas` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `objectid` | `objectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_ProcessSession` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_BulkDeleteFailures` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanontriggerbacklog` |
| `msdyn_evaluationplanontriggerbacklog_PrincipalObjectAttributeAccesses` | [msdyn_evaluationplanontriggerbacklog](msdyn_evaluationplanontriggerbacklog.md) | `objectid` | `objectid_msdyn_evaluationplanontriggerbacklog` |


## Source

Generated from [msdyn_evaluationplanontriggerbacklog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationplanontriggerbacklog')) on 2026-05-07.