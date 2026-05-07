---
logical: "msdyn_wallsavedqueryusersettings"
display: "Filter"
entitySetName: "msdyn_wallsavedqueryusersettingses"
primaryId: "msdyn_wallsavedqueryusersettingsid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "UserOwned"
---

# Filter

Contains user personalization information regarding which of the administrator’s selected views to display on a user’s personal wall.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wallsavedqueryusersettings` |
| Display name | Filter |
| Display (plural) | Filters |
| Schema name | `msdyn_wallsavedqueryusersettings` |
| Entity set (Web API) | `msdyn_wallsavedqueryusersettingses` |
| Primary id attribute | `msdyn_wallsavedqueryusersettingsid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wallsavedqueryusersettingses?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
POST /api/data/v9.2/msdyn_wallsavedqueryusersettingses
PATCH /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
DELETE /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_data`, `msdyn_default`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_includewallinresponse`, `msdyn_isfollowing`, `msdyn_IsVirtual`, `msdyn_isvisible`, `msdyn_isvisiblebit`, `msdyn_otc`, `msdyn_savedqueryname`, `msdyn_sortorder`, `msdyn_type`, `msdyn_userid`, `msdyn_wallsavedqueryid`, `msdyn_wallsavedqueryusersettingsId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_wallsavedqueryusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_wallsavedqueryusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wallsavedqueryusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wallsavedqueryusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_systemuser_wallsavedqueryusersettings_userid` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userid` |
| `msdyn_wallsavedquery_wallsavedqueryusersettings` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `msdyn_wallsavedqueryid` | `msdyn_wallsavedqueryid` |
| `owner_msdyn_wallsavedqueryusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_wallsavedqueryusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_wallsavedqueryusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wallsavedqueryusersettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedqueryusersettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedqueryusersettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_wallsavedqueryusersettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedqueryusersettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_wallsavedqueryusersettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_wallsavedqueryusersettings.md) on 2026-05-06.