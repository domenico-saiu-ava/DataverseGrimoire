---
logical: "msdyn_bulkforcecloseapiprivilege"
display: "msdyn_bulkforcecloseapiprivilege"
entitySetName: "msdyn_bulkforcecloseapiprivileges"
primaryId: "msdyn_bulkforcecloseapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_bulkforcecloseapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bulkforcecloseapiprivilege` |
| Display name | msdyn_bulkforcecloseapiprivilege |
| Display (plural) | msdyn_bulkforcecloseapiprivileges |
| Schema name | `msdyn_bulkforcecloseapiprivilege` |
| Entity set (Web API) | `msdyn_bulkforcecloseapiprivileges` |
| Primary id attribute | `msdyn_bulkforcecloseapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bulkforcecloseapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_bulkforcecloseapiprivileges
PATCH /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_bulkforcecloseapiprivileges(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_bulkforcecloseapiprivilegeId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_bulkforcecloseapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_bulkforcecloseapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bulkforcecloseapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bulkforcecloseapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bulkforcecloseapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_bulkforcecloseapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_bulkforcecloseapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_bulkforcecloseapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkforcecloseapiprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkforcecloseapiprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkforcecloseapiprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkforcecloseapiprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_bulkforcecloseapiprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkforcecloseapiprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_bulkforcecloseapiprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_bulkforcecloseapiprivilege.md) on 2026-05-06.