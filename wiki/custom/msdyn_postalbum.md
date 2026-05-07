---
logical: "msdyn_postalbum"
display: "Album del profilo"
entitySetName: "msdyn_postalbums"
primaryId: "msdyn_postalbumid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Album del profilo

Contiene immagini del profilo utente archiviate come allegati e visualizzate in post.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postalbum` |
| Display name | Album del profilo |
| Display (plural) | Album del profilo |
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

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_postalbumid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_postalbum_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postalbum_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postalbum_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postalbum_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_postalbum` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_postalbum` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_postalbum` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_postalbum` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postalbum_msdyn_bookingalerts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_bookingalert` |
| `msdyn_postalbum_msdyn_copilottranscripts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_copilottranscript` |
| `msdyn_postalbum_msdyn_ocliveworkitems` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem` |
| `msdyn_postalbum_ActivityPointers` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_adx_inviteredemptions` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_adx_inviteredemption` |
| `msdyn_postalbum_adx_portalcomments` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_adx_portalcomment` |
| `msdyn_postalbum_chats` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_chat` |
| `msdyn_postalbum_SyncErrors` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_DuplicateMatchingRecord` | [msdyn_postalbum](msdyn_postalbum.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_postalbum` |
| `msdyn_postalbum_DuplicateBaseRecord` | [msdyn_postalbum](msdyn_postalbum.md) | `baserecordid` | `baserecordid_msdyn_postalbum` |
| `msdyn_postalbum_AsyncOperations` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_MailboxTrackingFolders` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_UserEntityInstanceDatas` | [msdyn_postalbum](msdyn_postalbum.md) | `objectid` | `objectid_msdyn_postalbum` |
| `msdyn_postalbum_ProcessSession` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_BulkDeleteFailures` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum` |
| `msdyn_postalbum_PrincipalObjectAttributeAccesses` | [msdyn_postalbum](msdyn_postalbum.md) | `objectid` | `objectid_msdyn_postalbum` |
| `msdyn_postalbum_Appointments` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_appointment` |
| `msdyn_postalbum_Emails` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_email` |
| `msdyn_postalbum_Faxes` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_fax` |
| `msdyn_postalbum_Letters` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_letter` |
| `msdyn_postalbum_PhoneCalls` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_phonecall` |
| `msdyn_postalbum_Tasks` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_task` |
| `msdyn_postalbum_RecurringAppointmentMasters` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_recurringappointmentmaster` |
| `msdyn_postalbum_SocialActivities` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_socialactivity` |
| `msdyn_postalbum_connections1` | [msdyn_postalbum](msdyn_postalbum.md) | `record1id` | `record1id_msdyn_postalbum` |
| `msdyn_postalbum_connections2` | [msdyn_postalbum](msdyn_postalbum.md) | `record2id` | `record2id_msdyn_postalbum` |
| `msdyn_postalbum_Annotations` | [msdyn_postalbum](msdyn_postalbum.md) | `objectid` | `objectid_msdyn_postalbum` |
| `msdyn_postalbum_ServiceAppointments` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_serviceappointment` |
| `msdyn_postalbum_msdyn_ocsessions` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msdyn_ocsession` |
| `msdyn_postalbum_cai_genericcontacts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_cai_genericcontact` |
| `msdyn_postalbum_msfp_alerts` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_alert` |
| `msdyn_postalbum_msfp_surveyinvites` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyinvite` |
| `msdyn_postalbum_msfp_surveyresponses` | [msdyn_postalbum](msdyn_postalbum.md) | `regardingobjectid` | `regardingobjectid_msdyn_postalbum_msfp_surveyresponse` |


## Source

Generated from [msdyn_postalbum (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_postalbum')) on 2026-05-07.