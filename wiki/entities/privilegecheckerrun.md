---
logical: "privilegecheckerrun"
display: "Privilege Checker Run"
entitySetName: "privilegecheckerruns"
primaryId: "privilegecheckerrunid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PrivilegeCheckerRunId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_privilegecheckerrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_privilegecheckerrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_privilegecheckerrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_privilegecheckerrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_privilegecheckerrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_privilegecheckerrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_privilegecheckerrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_privilegecheckerrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `privilegecheckerrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `privilegecheckerrun_privilegecheckerlog` | _n/a_ | `privilegecheckerrunid` | _n/a_ |
| `privilegecheckerrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegecheckerrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [privilegecheckerrun.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/privilegecheckerrun.md) on 2026-05-06.