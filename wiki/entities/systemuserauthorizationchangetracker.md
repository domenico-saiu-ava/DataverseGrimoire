---
logical: "systemuserauthorizationchangetracker"
display: "SystemUserAuthorizationChangeTracker"
entitySetName: "systemuserauthorizationchangetrackers"
primaryId: "systemuserid"
tableType: "Standard"
ownership: "None"
---

# SystemUserAuthorizationChangeTracker

Internal authorization table to track user authorization changes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `systemuserauthorizationchangetracker` |
| Display name | SystemUserAuthorizationChangeTracker |
| Display (plural) | SystemUserAuthorizationChangeTrackers |
| Schema name | `SystemUserAuthorizationChangeTracker` |
| Entity set (Web API) | `systemuserauthorizationchangetrackers` |
| Primary id attribute | `systemuserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/systemuserauthorizationchangetrackers?$select=&$top=10
GET /api/data/v9.2/systemuserauthorizationchangetrackers(<guid>)
POST /api/data/v9.2/systemuserauthorizationchangetrackers
PATCH /api/data/v9.2/systemuserauthorizationchangetrackers(<guid>)
DELETE /api/data/v9.2/systemuserauthorizationchangetrackers(<guid>)
```

## Attributes

Writable: **0** · Read-only: **6**

### Read-only

`ChangedOn`, `ChangedVersionNumber`, `ComputedOn`, `ComputedVersionNumber`, `SystemUserIdName`, `SystemUserIdYomiName`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `user_userauthztracker` | [systemuser](systemuser.md) | `systemuserid` | `systemuserid_userauthztracker` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `systemuserauthorizationchangetracker_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `systemuserauthorizationchangetracker_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `systemuserauthorizationchangetracker_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `systemuserauthorizationchangetracker_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `systemuserauthorizationchangetracker_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [systemuserauthorizationchangetracker.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/systemuserauthorizationchangetracker.md) on 2026-05-06.