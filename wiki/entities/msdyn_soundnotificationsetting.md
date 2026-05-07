---
logical: "msdyn_soundnotificationsetting"
display: "Sound notification setting"
entitySetName: "msdyn_soundnotificationsettings"
primaryId: "msdyn_soundnotificationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sound notification setting

Entity to store the sound notification setting records for channels and other scenarios.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_soundnotificationsetting` |
| Display name | Sound notification setting |
| Display (plural) | Sound notification settings |
| Schema name | `msdyn_soundnotificationsetting` |
| Entity set (Web API) | `msdyn_soundnotificationsettings` |
| Primary id attribute | `msdyn_soundnotificationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_soundnotificationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
POST /api/data/v9.2/msdyn_soundnotificationsettings
PATCH /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_enablesound`, `msdyn_isdefaultrecord`, `msdyn_linkchannel`, `msdyn_linksoundfile`, `msdyn_loopsound`, `msdyn_Name`, `msdyn_soundnotificationsettingId`, `msdyn_volume`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_soundnotificationsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_soundnotificationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_soundnotificationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_soundnotificationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_soundnotificationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_soundnotificationsetting_linksoundf` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `owner_msdyn_soundnotificationsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_soundnotificationsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_soundnotificationsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_soundnotificationsetting_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_soundnotificationsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundnotificationsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundnotificationsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_soundnotificationsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_soundnotificationsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_soundnotificationsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundnotificationsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_soundnotificationsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_soundnotificationsetting.md) on 2026-05-06.