---
logical: "privilegecheckerlog"
display: "Privilege Checker Log"
entitySetName: "privilegecheckerlogs"
primaryId: "privilegecheckerlogid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **25**

### Read-only

`CheckedPrivilege`, `CheckedUser`, `CheckType`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImpersonatingUser`, `ImportSequenceNumber`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `PrivilegeCheckerLogId`, `PrivilegeDepth`, `Request`, `statecode`, `statuscode`, `SupportingCaller`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_privilegecheckerlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_privilegecheckerlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_privilegecheckerlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_privilegecheckerlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `privilegecheckerlog_CheckedPrivilege` | [privilege](privilege.md) | `checkedprivilege` | `CheckedPrivilege` |
| `privilegecheckerlog_CheckedUser_systemuser` | [systemuser](systemuser.md) | `checkeduser` | `CheckedUser` |
| `privilegecheckerlog_ImpersonatingUser_systemuser` | [systemuser](systemuser.md) | `impersonatinguser` | `ImpersonatingUser` |
| `privilegecheckerlog_SupportingCaller_systemuser` | [systemuser](systemuser.md) | `supportingcaller` | `SupportingCaller` |
| `privilegecheckerrun_privilegecheckerlog` | [privilegecheckerrun](privilegecheckerrun.md) | `privilegecheckerrunid` | `PrivilegeCheckerRunId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `privilegecheckerlog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerlog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerlog_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerlog_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `privilegecheckerlog_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerlog_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [privilegecheckerlog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/privilegecheckerlog.md) on 2026-05-06.