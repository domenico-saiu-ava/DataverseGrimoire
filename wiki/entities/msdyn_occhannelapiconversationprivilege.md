---
logical: "msdyn_occhannelapiconversationprivilege"
display: "Omnichannel channel api conversation privilege"
entitySetName: "msdyn_occhannelapiconversationprivileges"
primaryId: "msdyn_occhannelapiconversationprivilegeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel channel api conversation privilege

Entity for creating privilege for custom apis. The privileges for this entity will be used to restrict custom api access.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapiconversationprivilege` |
| Display name | Omnichannel channel api conversation privilege |
| Display (plural) | Omnichannel channel api conversation privileges |
| Schema name | `msdyn_occhannelapiconversationprivilege` |
| Entity set (Web API) | `msdyn_occhannelapiconversationprivileges` |
| Primary id attribute | `msdyn_occhannelapiconversationprivilegeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapiconversationprivileges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
POST /api/data/v9.2/msdyn_occhannelapiconversationprivileges
PATCH /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapiconversationprivileges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_occhannelapiconversationprivilegeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_occhannelapiconversationprivilege` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_occhannelapiconversationprivilege_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapiconversationprivilege_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapiconversationprivilege_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapiconversationprivilege_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_occhannelapiconversationprivilege` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_occhannelapiconversationprivilege` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_occhannelapiconversationprivilege` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapiconversationprivilege_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelapiconversationprivilege_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_occhannelapiconversationprivilege.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_occhannelapiconversationprivilege.md) on 2026-05-06.