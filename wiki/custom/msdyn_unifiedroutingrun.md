---
logical: "msdyn_unifiedroutingrun"
display: "Diagnostica distribuzione"
entitySetName: "msdyn_unifiedroutingruns"
primaryId: "msdyn_unifiedroutingrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Diagnostica distribuzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingrun` |
| Display name | Diagnostica distribuzione |
| Display (plural) | Diagnostica distribuzione |
| Schema name | `msdyn_unifiedroutingrun` |
| Entity set (Web API) | `msdyn_unifiedroutingruns` |
| Primary id attribute | `msdyn_unifiedroutingrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_unifiedroutingruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_unifiedroutingruns(<guid>)
POST /api/data/v9.2/msdyn_unifiedroutingruns
PATCH /api/data/v9.2/msdyn_unifiedroutingruns(<guid>)
DELETE /api/data/v9.2/msdyn_unifiedroutingruns(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assignedagent`, `msdyn_diagnosticversion`, `msdyn_endtime`, `msdyn_liveworkitem`, `msdyn_name`, `msdyn_queue`, `msdyn_routingduration`, `msdyn_routingdurationinseconds`, `msdyn_routingstatus`, `msdyn_runnumber`, `msdyn_starttime`, `msdyn_targetobject`, `msdyn_unifiedroutingrunid`, `msdyn_workstream`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitem` | `msdyn_liveworkitem` |
| `msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `lk_msdyn_unifiedroutingrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_unifiedroutingrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_unifiedroutingrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_unifiedroutingrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_unifiedroutingrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_unifiedroutingrun_assignedagent` | [systemuser](systemuser.md) | `msdyn_assignedagent` | `msdyn_assignedagent` |
| `msdyn_queue_msdyn_unifiedroutingrun_queue` | [queue](queue.md) | `msdyn_queue` | `msdyn_queue` |
| `msdyn_unifiedroutingrun_queueitem_targetobject` | [queueitem](queueitem.md) | `msdyn_targetobject` | `msdyn_targetobject_queueitem` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingrun_SyncErrors` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_DuplicateMatchingRecord` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_DuplicateBaseRecord` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `baserecordid` | `baserecordid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_AsyncOperations` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_MailboxTrackingFolders` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_UserEntityInstanceDatas` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `objectid` | `objectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_ProcessSession` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_BulkDeleteFailures` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `objectid` | `objectid_msdyn_unifiedroutingrun` |
| `msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic` | [msdyn_unifiedroutingrun](msdyn_unifiedroutingrun.md) | `msdyn_unifiedroutingrunid` | `msdyn_unifiedroutingrunid` |


## Source

Generated from [msdyn_unifiedroutingrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_unifiedroutingrun')) on 2026-05-07.