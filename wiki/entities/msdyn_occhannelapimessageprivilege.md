---
logical: "msdyn_occhannelapimessageprivilege"
display: "Omnichannel channel api message privilege"
entitySetName: "msdyn_occhannelapimessageprivileges"
primaryId: "msdyn_occhannelapimessageprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel channel api message privilege

Entity for creating privilege for custom apis. The privileges for this entity will be used to restrict custom api access.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapimessageprivilege` |
| Display name | Omnichannel channel api message privilege |
| Display (plural) | Omnichannel channel api message privileges |
| Schema name | `msdyn_occhannelapimessageprivilege` |
| Entity set (Web API) | `msdyn_occhannelapimessageprivileges` |
| Primary id attribute | `msdyn_occhannelapimessageprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapimessageprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
POST /api/data/v9.2/msdyn_occhannelapimessageprivileges
PATCH /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapimessageprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_occhannelapimessageprivilegeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_occhannelapimessageprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_occhannelapimessageprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapimessageprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapimessageprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapimessageprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_occhannelapimessageprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_occhannelapimessageprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_occhannelapimessageprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapimessageprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapimessageprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_occhannelapimessageprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_occhannelapimessageprivilege.md) on 2026-05-06.