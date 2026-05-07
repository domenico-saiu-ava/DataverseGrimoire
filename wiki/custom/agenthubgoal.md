---
logical: "agenthubgoal"
display: "Obiettivo hub agenti"
entitySetName: "agenthubgoals"
primaryId: "agenthubgoalid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Obiettivo hub agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agenthubgoal` |
| Display name | Obiettivo hub agenti |
| Display (plural) | Obiettivi hub agenti |
| Schema name | `agenthubgoal` |
| Entity set (Web API) | `agenthubgoals` |
| Primary id attribute | `agenthubgoalid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agenthubgoals?$select=name&$top=10
GET /api/data/v9.2/agenthubgoals(<guid>)
POST /api/data/v9.2/agenthubgoals
PATCH /api/data/v9.2/agenthubgoals(<guid>)
DELETE /api/data/v9.2/agenthubgoals(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`agenthubgoalid`, `description`, `importsequencenumber`, `metricid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `targetvalue`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agenthubgoal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agenthubgoal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agenthubgoal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agenthubgoal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agenthubgoal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agenthubgoal` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agenthubgoal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agenthubgoal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agenthubgoal_metricid_agenthubmetric` | [agenthubmetric](agenthubmetric.md) | `metricid` | `metricid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agenthubgoal_SyncErrors` | [agenthubgoal](agenthubgoal.md) | `regardingobjectid` | `regardingobjectid_agenthubgoal` |
| `agenthubgoal_DuplicateMatchingRecord` | [agenthubgoal](agenthubgoal.md) | `duplicaterecordid` | `duplicaterecordid_agenthubgoal` |
| `agenthubgoal_DuplicateBaseRecord` | [agenthubgoal](agenthubgoal.md) | `baserecordid` | `baserecordid_agenthubgoal` |
| `agenthubgoal_AsyncOperations` | [agenthubgoal](agenthubgoal.md) | `regardingobjectid` | `regardingobjectid_agenthubgoal` |
| `agenthubgoal_MailboxTrackingFolders` | [agenthubgoal](agenthubgoal.md) | `regardingobjectid` | `regardingobjectid_agenthubgoal` |
| `agenthubgoal_UserEntityInstanceDatas` | [agenthubgoal](agenthubgoal.md) | `objectid` | `objectid_agenthubgoal` |
| `agenthubgoal_ProcessSession` | [agenthubgoal](agenthubgoal.md) | `regardingobjectid` | `regardingobjectid_agenthubgoal` |
| `agenthubgoal_BulkDeleteFailures` | [agenthubgoal](agenthubgoal.md) | `regardingobjectid` | `regardingobjectid_agenthubgoal` |
| `agenthubgoal_PrincipalObjectAttributeAccesses` | [agenthubgoal](agenthubgoal.md) | `objectid` | `objectid_agenthubgoal` |
| `agenthubinsight_goalid_agenthubgoal` | [agenthubgoal](agenthubgoal.md) | `goalid` | `goalid` |


## Source

Generated from [agenthubgoal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agenthubgoal')) on 2026-05-07.