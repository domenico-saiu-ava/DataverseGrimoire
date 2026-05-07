---
logical: "privilegecheckerrun"
display: "Privilege Checker Run"
entitySetName: "privilegecheckerruns"
primaryId: "privilegecheckerrunid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Privilege Checker Run

Entity to keep track of privilege checker tool runs. Parent entity of privilege checker log.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `privilegecheckerrun` |
| Display name | Privilege Checker Run |
| Display (plural) | Privilege Checker Runs |
| Schema name | `PrivilegeCheckerRun` |
| Entity set (Web API) | `privilegecheckerruns` |
| Primary id attribute | `privilegecheckerrunid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/privilegecheckerruns?$select=name&$top=10
GET /api/data/v9.2/privilegecheckerruns(<guid>)
POST /api/data/v9.2/privilegecheckerruns
PATCH /api/data/v9.2/privilegecheckerruns(<guid>)
DELETE /api/data/v9.2/privilegecheckerruns(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `privilegecheckerrunid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_privilegecheckerrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_privilegecheckerrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_privilegecheckerrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_privilegecheckerrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_privilegecheckerrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_privilegecheckerrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_privilegecheckerrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_privilegecheckerrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `privilegecheckerrun_SyncErrors` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegecheckerrun_AsyncOperations` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegecheckerrun_MailboxTrackingFolders` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegecheckerrun_UserEntityInstanceDatas` | [privilegecheckerrun](privilegecheckerrun.md) | `objectid` | `objectid_privilegecheckerrun` |
| `privilegecheckerrun_ProcessSession` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegecheckerrun_BulkDeleteFailures` | [privilegecheckerrun](privilegecheckerrun.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerrun` |
| `privilegecheckerrun_PrincipalObjectAttributeAccesses` | [privilegecheckerrun](privilegecheckerrun.md) | `objectid` | `objectid_privilegecheckerrun` |
| `privilegecheckerrun_privilegecheckerlog` | [privilegecheckerrun](privilegecheckerrun.md) | `privilegecheckerrunid` | `PrivilegeCheckerRunId` |


## Source

Generated from [privilegecheckerrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='privilegecheckerrun')) on 2026-05-07.