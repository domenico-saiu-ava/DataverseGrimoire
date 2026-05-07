---
logical: "flowlog"
display: "Flow Log"
entitySetName: "flowlogs"
primaryId: "flowlogid"
primaryName: "name"
tableType: "Elastic"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **22** · Read-only: **11**

### Writable

`cloudflowid`, `cloudflowrunid`, `data`, `desktopflowid`, `duration`, `flowlogid`, `flowmachinegroupid`, `flowmachineid`, `flowsessionid`, `importsequencenumber`, `inputslocalizednames`, `level`, `logindex`, `name`, `outputslocalizednames`, `overriddencreatedon`, `parentobjectid`, `partitionid`, `ttlinseconds`, `type`, `workqueueid`, `workqueueitemid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `flowsession_flowlog_parentobjectid` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid` |
| `flowmachinegroup_flowlog_parentobjectid` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowsession_flowlog_flowsessionid` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |
| `workflow_flowlog_cloudflowid` | [workflow](workflow.md) | `cloudflowid` | `cloudflowid` |
| `flowrun_flowlog_cloudflowrunid` | [flowrun](flowrun.md) | `cloudflowrunid` | `cloudflowrunid` |
| `workflow_flowlog_desktopflowid` | [workflow](workflow.md) | `desktopflowid` | `desktopflowid` |
| `flowmachine_flowlog_flowmachineid` | [flowmachine](flowmachine.md) | `flowmachineid` | `flowmachineid` |
| `flowmachinegroup_flowlog_flowmachinegroupid` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |
| `workqueue_flowlog_workqueueid` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid` |
| `workqueue_flowlog_parentobjectid` | [workqueue](workqueue.md) | `parentobjectid` | `parentobjectid_workqueue` |
| `workqueueitem_flowlog_workqueueitemid` | [workqueueitem](workqueueitem.md) | `workqueueitemid` | `workqueueitemid` |



## Source

Generated from [flowlog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowlog')) on 2026-05-07.