---
logical: "msdyn_systemuserschedulersetting"
display: "Impostazione pianificazione utente di sistema"
entitySetName: "msdyn_systemuserschedulersettinges"
primaryId: "msdyn_systemuserschedulersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione pianificazione utente di sistema

Archivia le impostazioni specifiche dell'utente per la scheda di pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_systemuserschedulersetting` |
| Display name | Impostazione pianificazione utente di sistema |
| Display (plural) | Impostazione pianificazione utente di sistema |
| Schema name | `msdyn_systemuserschedulersetting` |
| Entity set (Web API) | `msdyn_systemuserschedulersettinges` |
| Primary id attribute | `msdyn_systemuserschedulersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_systemuserschedulersettinges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_systemuserschedulersettinges(<guid>)
POST /api/data/v9.2/msdyn_systemuserschedulersettinges
PATCH /api/data/v9.2/msdyn_systemuserschedulersettinges(<guid>)
DELETE /api/data/v9.2/msdyn_systemuserschedulersettinges(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_schedulesettings`, `msdyn_systemuserschedulersettingid`, `msdyn_user`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_systemuserschedulersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_systemuserschedulersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_systemuserschedulersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_systemuserschedulersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_systemuserschedulersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_systemuserschedulersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_systemuserschedulersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_systemuserschedulersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_msdyn_systemuserschedulersetting_User` | [systemuser](systemuser.md) | `msdyn_user` | `msdyn_user` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_systemuserschedulersetting_ActivityPointers` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_msfp_alerts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_alert` |
| `msdyn_systemuserschedulersetting_adx_inviteredemptions` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_adx_inviteredemption` |
| `msdyn_systemuserschedulersetting_msdyn_ocsessions` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocsession` |
| `msdyn_systemuserschedulersetting_msfp_surveyinvites` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyinvite` |
| `msdyn_systemuserschedulersetting_msdyn_ocliveworkitems` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem` |
| `msdyn_systemuserschedulersetting_msdyn_bookingalerts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_bookingalert` |
| `msdyn_systemuserschedulersetting_msfp_surveyresponses` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyresponse` |
| `msdyn_systemuserschedulersetting_adx_portalcomments` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_adx_portalcomment` |
| `msdyn_systemuserschedulersetting_chats` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_chat` |
| `msdyn_systemuserschedulersetting_msdyn_copilottranscripts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_msdyn_copilottranscript` |
| `msdyn_systemuserschedulersetting_SyncErrors` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_DuplicateMatchingRecord` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_DuplicateBaseRecord` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `baserecordid` | `baserecordid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_AsyncOperations` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_MailboxTrackingFolders` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_UserEntityInstanceDatas` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `objectid` | `objectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_ProcessSession` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_BulkDeleteFailures` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_PrincipalObjectAttributeAccesses` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `objectid` | `objectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_Appointments` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_appointment` |
| `msdyn_systemuserschedulersetting_Emails` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_email` |
| `msdyn_systemuserschedulersetting_Faxes` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_fax` |
| `msdyn_systemuserschedulersetting_Letters` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_letter` |
| `msdyn_systemuserschedulersetting_PhoneCalls` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_phonecall` |
| `msdyn_systemuserschedulersetting_Tasks` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_task` |
| `msdyn_systemuserschedulersetting_RecurringAppointmentMasters` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_recurringappointmentmaster` |
| `msdyn_systemuserschedulersetting_SocialActivities` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_socialactivity` |
| `msdyn_systemuserschedulersetting_connections1` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `record1id` | `record1id_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_connections2` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `record2id` | `record2id_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_Annotations` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `objectid` | `objectid_msdyn_systemuserschedulersetting` |
| `msdyn_systemuserschedulersetting_ServiceAppointments` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_serviceappointment` |
| `msdyn_systemuserschedulersetting_cai_genericcontacts` | [msdyn_systemuserschedulersetting](msdyn_systemuserschedulersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_systemuserschedulersetting_cai_genericcontact` |


## Source

Generated from [msdyn_systemuserschedulersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_systemuserschedulersetting')) on 2026-05-07.