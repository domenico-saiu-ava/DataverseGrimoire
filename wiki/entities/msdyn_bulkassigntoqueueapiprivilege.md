---
logical: "msdyn_bulkassigntoqueueapiprivilege"
display: "msdyn_bulkassigntoqueueapiprivilege"
entitySetName: "msdyn_bulkassigntoqueueapiprivileges"
primaryId: "msdyn_bulkassigntoqueueapiprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_bulkassigntoqueueapiprivilege

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bulkassigntoqueueapiprivilege` |
| Display name | msdyn_bulkassigntoqueueapiprivilege |
| Display (plural) | msdyn_bulkassigntoqueueapiprivileges |
| Schema name | `msdyn_bulkassigntoqueueapiprivilege` |
| Entity set (Web API) | `msdyn_bulkassigntoqueueapiprivileges` |
| Primary id attribute | `msdyn_bulkassigntoqueueapiprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
POST /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges
PATCH /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_bulkassigntoqueueapiprivileges(<guid>)
```

## Attributes

Writable: **11** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_bulkassigntoqueueapiprivilegeId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_bulkassigntoqueueapiprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bulkassigntoqueueapiprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_bulkassigntoqueueapiprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_bulkassigntoqueueapiprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_bulkassigntoqueueapiprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkassigntoqueueapiprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkassigntoqueueapiprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkassigntoqueueapiprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkassigntoqueueapiprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_bulkassigntoqueueapiprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bulkassigntoqueueapiprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_bulkassigntoqueueapiprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_bulkassigntoqueueapiprivilege.md) on 2026-05-06.