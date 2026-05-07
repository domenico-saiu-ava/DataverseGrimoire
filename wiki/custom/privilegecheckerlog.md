---
logical: "privilegecheckerlog"
display: "Privilege Checker Log"
entitySetName: "privilegecheckerlogs"
primaryId: "privilegecheckerlogid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Privilege Checker Log

Holds information about privilege checks for the user who started (created) a privilege checker tool run (Privilege Checker Run's child entity)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `privilegecheckerlog` |
| Display name | Privilege Checker Log |
| Display (plural) | Privilege Checker Logs |
| Schema name | `PrivilegeCheckerLog` |
| Entity set (Web API) | `privilegecheckerlogs` |
| Primary id attribute | `privilegecheckerlogid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/privilegecheckerlogs?$select=name&$top=10
GET /api/data/v9.2/privilegecheckerlogs(<guid>)
POST /api/data/v9.2/privilegecheckerlogs
PATCH /api/data/v9.2/privilegecheckerlogs(<guid>)
DELETE /api/data/v9.2/privilegecheckerlogs(<guid>)
```

## Attributes

Writable: **1** · Read-only: **24**

### Writable

`privilegecheckerrunid`

### Read-only

`checkedprivilege`, `checkeduser`, `checktype`, `createdby`, `createdon`, `createdonbehalfby`, `impersonatinguser`, `importsequencenumber`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `name`, `overriddencreatedon`, `ownerid`, `owningbusinessunit`, `privilegecheckerlogid`, `privilegedepth`, `request`, `statecode`, `statuscode`, `supportingcaller`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_privilegecheckerlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_privilegecheckerlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_privilegecheckerlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_privilegecheckerlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `privilegecheckerlog_CheckedUser_systemuser` | [systemuser](systemuser.md) | `checkeduser` | `CheckedUser` |
| `privilegecheckerlog_CheckedPrivilege` | [privilege](privilege.md) | `checkedprivilege` | `CheckedPrivilege` |
| `privilegecheckerlog_ImpersonatingUser_systemuser` | [systemuser](systemuser.md) | `impersonatinguser` | `ImpersonatingUser` |
| `privilegecheckerlog_SupportingCaller_systemuser` | [systemuser](systemuser.md) | `supportingcaller` | `SupportingCaller` |
| `privilegecheckerrun_privilegecheckerlog` | [privilegecheckerrun](privilegecheckerrun.md) | `privilegecheckerrunid` | `PrivilegeCheckerRunId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `privilegecheckerlog_SyncErrors` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerlog_AsyncOperations` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerlog_MailboxTrackingFolders` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerlog_UserEntityInstanceDatas` | [privilegecheckerlog](privilegecheckerlog.md) | `objectid` | `objectid_privilegecheckerlog` |
| `privilegecheckerlog_ProcessSession` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerlog_BulkDeleteFailures` | [privilegecheckerlog](privilegecheckerlog.md) | `regardingobjectid` | `regardingobjectid_privilegecheckerlog` |
| `privilegecheckerlog_PrincipalObjectAttributeAccesses` | [privilegecheckerlog](privilegecheckerlog.md) | `objectid` | `objectid_privilegecheckerlog` |


## Source

Generated from [privilegecheckerlog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='privilegecheckerlog')) on 2026-05-07.