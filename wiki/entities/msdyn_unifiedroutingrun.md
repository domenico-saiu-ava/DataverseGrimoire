---
logical: "msdyn_unifiedroutingrun"
display: "Routing diagnostic"
entitySetName: "msdyn_unifiedroutingruns"
primaryId: "msdyn_unifiedroutingrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Routing diagnostic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_unifiedroutingrun` |
| Display name | Routing diagnostic |
| Display (plural) | Routing diagnostics |
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

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_assignedagent`, `msdyn_diagnosticversion`, `msdyn_endtime`, `msdyn_liveworkitem`, `msdyn_name`, `msdyn_queue`, `msdyn_routingduration`, `msdyn_routingdurationinseconds`, `msdyn_routingstatus`, `msdyn_runnumber`, `msdyn_starttime`, `msdyn_targetobject`, `msdyn_targetobjectIdType`, `msdyn_unifiedroutingrunId`, `msdyn_workstream`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_unifiedroutingrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_unifiedroutingrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_unifiedroutingrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_unifiedroutingrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_unifiedroutingrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitem` | `msdyn_liveworkitem` |
| `msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_ocliveworkitem` |
| `msdyn_queue_msdyn_unifiedroutingrun_queue` | [queue](queue.md) | `msdyn_queue` | `msdyn_queue` |
| `msdyn_systemuser_msdyn_unifiedroutingrun_assignedagent` | [systemuser](systemuser.md) | `msdyn_assignedagent` | `msdyn_assignedagent` |
| `msdyn_unifiedroutingrun_queueitem_targetobject` | [queueitem](queueitem.md) | `msdyn_targetobject` | `msdyn_targetobject_queueitem` |
| `owner_msdyn_unifiedroutingrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_unifiedroutingrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_unifiedroutingrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_unifiedroutingrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingrun_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_unifiedroutingrun_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_unifiedroutingrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic` | _n/a_ | `msdyn_unifiedroutingrunid` | _n/a_ |
| `msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_unifiedroutingrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_unifiedroutingrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_unifiedroutingrun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_unifiedroutingrun.md) on 2026-05-06.