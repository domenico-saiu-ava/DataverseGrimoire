---
logical: "msdyn_ocencryptedmessagesetting"
display: "Encrypted message setting"
entitySetName: "msdyn_ocencryptedmessagesettings"
primaryId: "msdyn_ocencryptedmessagesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Encrypted message setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocencryptedmessagesetting` |
| Display name | Encrypted message setting |
| Display (plural) | Encrypted message setting |
| Schema name | `msdyn_ocencryptedmessagesetting` |
| Entity set (Web API) | `msdyn_ocencryptedmessagesettings` |
| Primary id attribute | `msdyn_ocencryptedmessagesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocencryptedmessagesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
POST /api/data/v9.2/msdyn_ocencryptedmessagesettings
PATCH /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
DELETE /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_ocencryptedmessagesettingId`, `msdyn_publickeyid`, `msdyn_publickeyurl`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocencryptedmessagesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocencryptedmessagesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocencryptedmessagesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocencryptedmessagesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocencryptedmessagesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocencryptedmessagesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocencryptedmessagesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocencryptedmessagesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocencryptedmessagesetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocencryptedmessagesetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocencryptedmessagesetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocencryptedmessagesetting.md) on 2026-05-06.