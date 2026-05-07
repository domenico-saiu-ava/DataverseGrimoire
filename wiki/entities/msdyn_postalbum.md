---
logical: "msdyn_postalbum"
display: "Profile Album"
entitySetName: "msdyn_postalbums"
primaryId: "msdyn_postalbumid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Profile Album

Contains user profile images that are stored as attachments and displayed in posts.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postalbum` |
| Display name | Profile Album |
| Display (plural) | Profile Albums |
| Schema name | `msdyn_PostAlbum` |
| Entity set (Web API) | `msdyn_postalbums` |
| Primary id attribute | `msdyn_postalbumid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_postalbums?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_postalbums(<guid>)
POST /api/data/v9.2/msdyn_postalbums
PATCH /api/data/v9.2/msdyn_postalbums(<guid>)
DELETE /api/data/v9.2/msdyn_postalbums(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_PostAlbumId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_postalbum` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_postalbum_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postalbum_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postalbum_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postalbum_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_postalbum` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_postalbum` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_postalbum` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (30)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postalbum_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_postalbum_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_postalbum_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_postalbum_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_postalbum_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_postalbum_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_postalbum_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postalbum_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_postalbum.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_postalbum.md) on 2026-05-06.