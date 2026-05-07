---
logical: "msdyn_rolloutplan"
display: "Rollout Plan"
entitySetName: "msdyn_rolloutplans"
primaryId: "msdyn_rolloutplanid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Rollout Plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rolloutplan` |
| Display name | Rollout Plan |
| Display (plural) | Rollout Plans |
| Schema name | `msdyn_rolloutplan` |
| Entity set (Web API) | `msdyn_rolloutplans` |
| Primary id attribute | `msdyn_rolloutplanid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rolloutplans?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rolloutplans(<guid>)
POST /api/data/v9.2/msdyn_rolloutplans
PATCH /api/data/v9.2/msdyn_rolloutplans(<guid>)
DELETE /api/data/v9.2/msdyn_rolloutplans(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_name`, `msdyn_rolloutplanid`, `msdyn_scheduledutc`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rolloutplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rolloutplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rolloutplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rolloutplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_rolloutplan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_rolloutplan` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_rolloutplan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_rolloutplan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rolloutplan_SyncErrors` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_DuplicateMatchingRecord` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_DuplicateBaseRecord` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `baserecordid` | `baserecordid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_AsyncOperations` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_MailboxTrackingFolders` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_UserEntityInstanceDatas` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `objectid` | `objectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_ProcessSession` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_BulkDeleteFailures` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_PrincipalObjectAttributeAccesses` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `objectid` | `objectid_msdyn_rolloutplan` |
| `msdyn_rolloutplan_msdyn_autonomousprofile` | [msdyn_rolloutplan](msdyn_rolloutplan.md) | `msdyn_rolloutplanid` | `msdyn_rolloutplanid` |


## Source

Generated from [msdyn_rolloutplan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rolloutplan')) on 2026-05-07.