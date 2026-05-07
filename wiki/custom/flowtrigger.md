---
logical: "flowtrigger"
display: "Flow Trigger"
entitySetName: "flowtriggers"
primaryId: "flowtriggerid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flow Trigger

This table contains records of flow triggers

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowtrigger` |
| Display name | Flow Trigger |
| Display (plural) | Flow Triggers |
| Schema name | `flowtrigger` |
| Entity set (Web API) | `flowtriggers` |
| Primary id attribute | `flowtriggerid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowtriggers?$select=name&$top=10
GET /api/data/v9.2/flowtriggers(<guid>)
POST /api/data/v9.2/flowtriggers
PATCH /api/data/v9.2/flowtriggers(<guid>)
DELETE /api/data/v9.2/flowtriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`description`, `flowtriggerid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `scheduledefinition`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `triggertype`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowtrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowtrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowtrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowtrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowtrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowtrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowtrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowtrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowtrigger_SyncErrors` | [flowtrigger](flowtrigger.md) | `regardingobjectid` | `regardingobjectid_flowtrigger` |
| `flowtrigger_AsyncOperations` | [flowtrigger](flowtrigger.md) | `regardingobjectid` | `regardingobjectid_flowtrigger` |
| `flowtrigger_MailboxTrackingFolders` | [flowtrigger](flowtrigger.md) | `regardingobjectid` | `regardingobjectid_flowtrigger` |
| `flowtrigger_UserEntityInstanceDatas` | [flowtrigger](flowtrigger.md) | `objectid` | `objectid_flowtrigger` |
| `flowtrigger_ProcessSession` | [flowtrigger](flowtrigger.md) | `regardingobjectid` | `regardingobjectid_flowtrigger` |
| `flowtrigger_BulkDeleteFailures` | [flowtrigger](flowtrigger.md) | `regardingobjectid` | `regardingobjectid_flowtrigger` |
| `flowtrigger_PrincipalObjectAttributeAccesses` | [flowtrigger](flowtrigger.md) | `objectid` | `objectid_flowtrigger` |
| `flowtrigger_flowsession_flowtriggerid` | [flowtrigger](flowtrigger.md) | `flowtriggerid` | `flowtriggerid` |
| `flowtriggerinstance_flowtriggerid_flowtrigger` | [flowtrigger](flowtrigger.md) | `flowtriggerid` | `flowtriggerid` |


## Source

Generated from [flowtrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowtrigger')) on 2026-05-07.