---
logical: "flowlog"
display: "Flow Log"
entitySetName: "flowlogs"
primaryId: "flowlogid"
primaryName: "name"
tableType: "Elastic"
ownership: "None"
---

# Flow Log

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowlog` |
| Display name | Flow Log |
| Display (plural) | Flow Logs |
| Schema name | `flowlog` |
| Entity set (Web API) | `flowlogs` |
| Primary id attribute | `flowlogid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/flowlogs?$select=name&$top=10
GET /api/data/v9.2/flowlogs(<guid>)
POST /api/data/v9.2/flowlogs
PATCH /api/data/v9.2/flowlogs(<guid>)
DELETE /api/data/v9.2/flowlogs(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`cloudflowid`, `cloudflowrunid`, `cloudflowrunidPId`, `data`, `desktopflowid`, `Duration`, `flowlogId`, `flowmachinegroupid`, `flowmachineid`, `flowsessionid`, `ImportSequenceNumber`, `InputsLocalizedNames`, `level`, `LogIndex`, `Name`, `OutputsLocalizedNames`, `OverriddenCreatedOn`, `parentobjectid`, `parentobjectidIdType`, `PartitionId`, `TTLInSeconds`, `type`, `workqueueid`, `workqueueitemid`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachine_flowlog_flowmachineid` | [flowmachine](flowmachine.md) | `flowmachineid` | `flowmachineid` |
| `flowmachinegroup_flowlog_flowmachinegroupid` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |
| `flowmachinegroup_flowlog_parentobjectid` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowrun_flowlog_cloudflowrunid` | [flowrun](flowrun.md) | `cloudflowrunid` | `cloudflowrunid` |
| `flowsession_flowlog_flowsessionid` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |
| `flowsession_flowlog_parentobjectid` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid` |
| `lk_flowlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `workflow_flowlog_cloudflowid` | [workflow](workflow.md) | `cloudflowid` | `cloudflowid` |
| `workflow_flowlog_desktopflowid` | [workflow](workflow.md) | `desktopflowid` | `desktopflowid` |
| `workqueue_flowlog_parentobjectid` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |
| `workqueue_flowlog_workqueueid` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |
| `workqueueitem_flowlog_workqueueitemid` | [workqueueitem](workqueueitem.md) | `workqueueitemid` | `workqueueitemid` |



## Source

Generated from [flowlog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowlog.md) on 2026-05-06.