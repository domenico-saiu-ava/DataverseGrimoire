---
logical: "msdyn_notifyagentbulkactionapiprivilege"
display: "msdyn_notifyagentbulkactionapiprivilege"
entitySetName: "msdyn_notifyagentbulkactionapiprivileges"
primaryId: "msdyn_notifyagentbulkactionapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_notifyagentbulkactionapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notifyagentbulkactionapiprivilege` |
| Display name | msdyn_notifyagentbulkactionapiprivilege |
| Display (plural) | msdyn_notifyagentbulkactionapiprivileges |
| Schema name | `msdyn_notifyagentbulkactionapiprivilege` |
| Entity set (Web API) | `msdyn_notifyagentbulkactionapiprivileges` |
| Primary id attribute | `msdyn_notifyagentbulkactionapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges
PATCH /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_notifyagentbulkactionapiprivileges(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_notifyagentbulkactionapiprivilegeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_notifyagentbulkactionapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notifyagentbulkactionapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_notifyagentbulkactionapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_notifyagentbulkactionapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_notifyagentbulkactionapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notifyagentbulkactionapiprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notifyagentbulkactionapiprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notifyagentbulkactionapiprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notifyagentbulkactionapiprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_notifyagentbulkactionapiprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_notifyagentbulkactionapiprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_notifyagentbulkactionapiprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_notifyagentbulkactionapiprivilege.md) on 2026-05-06.