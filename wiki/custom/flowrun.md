---
logical: "flowrun"
display: "Flow Run"
entitySetName: "flowruns"
primaryId: "flowrunid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowrun` |
| Display name | Flow Run |
| Display (plural) | Flow Runs |
| Schema name | `flowrun` |
| Entity set (Web API) | `flowruns` |
| Primary id attribute | `flowrunid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowruns?$select=name&$top=10
GET /api/data/v9.2/flowruns(<guid>)
POST /api/data/v9.2/flowruns
PATCH /api/data/v9.2/flowruns(<guid>)
DELETE /api/data/v9.2/flowruns(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`callingproductresourceid`, `callingproductrunid`, `callingproducttype`, `clienttrackingid`, `conversationid`, `duration`, `endtime`, `errorcode`, `errormessage`, `flowrunid`, `importsequencenumber`, `isprimary`, `modernflowtype`, `name`, `overriddencreatedon`, `ownerid`, `parentrunid`, `partitionid`, `resourceid`, `starttime`, `status`, `timezoneruleversionnumber`, `triggertype`, `ttlinseconds`, `utcconversiontimezonecode`, `workflow`, `workflowid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `workflow_flowrun_Workflow` | [workflow](workflow.md) | `workflow` | `Workflow` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowrun_flowlog_cloudflowrunid` | [flowrun](flowrun.md) | `cloudflowrunid` | `cloudflowrunid` |


## Source

Generated from [flowrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowrun')) on 2026-05-07.