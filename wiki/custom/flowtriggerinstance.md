---
logical: "flowtriggerinstance"
display: "Flow Trigger Instance"
entitySetName: "flowtriggerinstances"
primaryId: "flowtriggerinstanceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Trigger Instance

This table contains records of flow trigger instances

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowtriggerinstance` |
| Display name | Flow Trigger Instance |
| Display (plural) | Flow Trigger Instances |
| Schema name | `flowtriggerinstance` |
| Entity set (Web API) | `flowtriggerinstances` |
| Primary id attribute | `flowtriggerinstanceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowtriggerinstances?$select=name&$top=10
GET /api/data/v9.2/flowtriggerinstances(<guid>)
POST /api/data/v9.2/flowtriggerinstances
PATCH /api/data/v9.2/flowtriggerinstances(<guid>)
DELETE /api/data/v9.2/flowtriggerinstances(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`flowtriggerid`, `flowtriggerinstanceid`, `importsequencenumber`, `inputs`, `name`, `overriddencreatedon`, `ownerid`, `runmode`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workflowid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowtriggerinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowtriggerinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowtriggerinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowtriggerinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowtriggerinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowtriggerinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowtriggerinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowtriggerinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowtriggerinstance_flowtriggerid_flowtrigger` | [flowtrigger](flowtrigger.md) | `flowtriggerid` | `flowtriggerid` |
| `flowtriggerinstance_workflowid_workflow` | [workflow](workflow.md) | `workflowid` | `workflowid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowtriggerinstance_SyncErrors` | [flowtriggerinstance](flowtriggerinstance.md) | `regardingobjectid` | `regardingobjectid_flowtriggerinstance` |
| `flowtriggerinstance_AsyncOperations` | [flowtriggerinstance](flowtriggerinstance.md) | `regardingobjectid` | `regardingobjectid_flowtriggerinstance` |
| `flowtriggerinstance_MailboxTrackingFolders` | [flowtriggerinstance](flowtriggerinstance.md) | `regardingobjectid` | `regardingobjectid_flowtriggerinstance` |
| `flowtriggerinstance_UserEntityInstanceDatas` | [flowtriggerinstance](flowtriggerinstance.md) | `objectid` | `objectid_flowtriggerinstance` |
| `flowtriggerinstance_ProcessSession` | [flowtriggerinstance](flowtriggerinstance.md) | `regardingobjectid` | `regardingobjectid_flowtriggerinstance` |
| `flowtriggerinstance_BulkDeleteFailures` | [flowtriggerinstance](flowtriggerinstance.md) | `regardingobjectid` | `regardingobjectid_flowtriggerinstance` |
| `flowtriggerinstance_PrincipalObjectAttributeAccesses` | [flowtriggerinstance](flowtriggerinstance.md) | `objectid` | `objectid_flowtriggerinstance` |


## Source

Generated from [flowtriggerinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowtriggerinstance')) on 2026-05-07.