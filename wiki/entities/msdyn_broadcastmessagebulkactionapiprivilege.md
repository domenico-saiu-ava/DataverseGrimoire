---
logical: "msdyn_broadcastmessagebulkactionapiprivilege"
display: "msdyn_broadcastmessagebulkactionapiprivilege"
entitySetName: "msdyn_broadcastmessagebulkactionapiprivileges"
primaryId: "msdyn_broadcastmessagebulkactionapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_broadcastmessagebulkactionapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_broadcastmessagebulkactionapiprivilege` |
| Display name | msdyn_broadcastmessagebulkactionapiprivilege |
| Display (plural) | msdyn_broadcastmessagebulkactionapiprivileges |
| Schema name | `msdyn_broadcastmessagebulkactionapiprivilege` |
| Entity set (Web API) | `msdyn_broadcastmessagebulkactionapiprivileges` |
| Primary id attribute | `msdyn_broadcastmessagebulkactionapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges
PATCH /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_broadcastmessagebulkactionapiprivileges(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_broadcastmessagebulkactionapiprivilegeId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_broadcastmessagebulkactionapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_broadcastmessagebulkactionapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_broadcastmessagebulkactionapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_broadcastmessagebulkactionapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_broadcastmessagebulkactionapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_broadcastmessagebulkactionapiprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_broadcastmessagebulkactionapiprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_broadcastmessagebulkactionapiprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_broadcastmessagebulkactionapiprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_broadcastmessagebulkactionapiprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_broadcastmessagebulkactionapiprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_broadcastmessagebulkactionapiprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_broadcastmessagebulkactionapiprivilege.md) on 2026-05-06.