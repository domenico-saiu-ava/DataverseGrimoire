---
logical: "msdyn_personalsoundsetting"
display: "Personal sound setting"
entitySetName: "msdyn_personalsoundsettings"
primaryId: "msdyn_personalsoundsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Personal sound setting

Entity to store personalized sound records for the users.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personalsoundsetting` |
| Display name | Personal sound setting |
| Display (plural) | Personal sound settings |
| Schema name | `msdyn_Personalsoundsetting` |
| Entity set (Web API) | `msdyn_personalsoundsettings` |
| Primary id attribute | `msdyn_personalsoundsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personalsoundsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
POST /api/data/v9.2/msdyn_personalsoundsettings
PATCH /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
DELETE /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Enablesound`, `msdyn_isdefaultrecord`, `msdyn_linkchannel`, `msdyn_linksoundfile`, `msdyn_loopsound`, `msdyn_Name`, `msdyn_PersonalsoundsettingId`, `msdyn_volume`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_personalsoundsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_personalsoundsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personalsoundsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personalsoundsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personalsoundsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_Personalsoundsetting_msdyn_linksoun` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `owner_msdyn_personalsoundsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_personalsoundsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_personalsoundsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personalsoundsetting_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_personalsoundsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalsoundsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalsoundsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_personalsoundsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_personalsoundsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_personalsoundsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_personalsoundsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_personalsoundsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_personalsoundsetting.md) on 2026-05-06.