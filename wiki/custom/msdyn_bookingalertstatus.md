---
logical: "msdyn_bookingalertstatus"
display: "Stato di avviso prenotazione"
entitySetName: "msdyn_bookingalertstatuses"
primaryId: "msdyn_bookingalertstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato di avviso prenotazione

Stato di un avviso di prenotazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookingalertstatus` |
| Display name | Stato di avviso prenotazione |
| Display (plural) | Stati di avviso prenotazione |
| Schema name | `msdyn_bookingalertstatus` |
| Entity set (Web API) | `msdyn_bookingalertstatuses` |
| Primary id attribute | `msdyn_bookingalertstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookingalertstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookingalertstatuses(<guid>)
POST /api/data/v9.2/msdyn_bookingalertstatuses
PATCH /api/data/v9.2/msdyn_bookingalertstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_bookingalertstatuses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookingalert`, `msdyn_bookingalertstatusid`, `msdyn_internalflags`, `msdyn_name`, `msdyn_nexttimetoshow`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bookingalertstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookingalertstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookingalertstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookingalertstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookingalertstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookingalertstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookingalertstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookingalertstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_bookingalert_msdyn_bookingalertstatus_BookingAlert` | [msdyn_bookingalert](msdyn_bookingalert.md) | `msdyn_bookingalert` | `msdyn_bookingalert` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingalertstatus_ActivityPointers` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_msfp_alerts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_alert` |
| `msdyn_bookingalertstatus_adx_inviteredemptions` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_adx_inviteredemption` |
| `msdyn_bookingalertstatus_msdyn_ocsessions` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_ocsession` |
| `msdyn_bookingalertstatus_msfp_surveyinvites` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_surveyinvite` |
| `msdyn_bookingalertstatus_msdyn_ocliveworkitems` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem` |
| `msdyn_bookingalertstatus_msdyn_bookingalerts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_bookingalert` |
| `msdyn_bookingalertstatus_msfp_surveyresponses` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msfp_surveyresponse` |
| `msdyn_bookingalertstatus_adx_portalcomments` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_adx_portalcomment` |
| `msdyn_bookingalertstatus_chats` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_chat` |
| `msdyn_bookingalertstatus_msdyn_copilottranscripts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_msdyn_copilottranscript` |
| `msdyn_bookingalertstatus_SyncErrors` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_DuplicateMatchingRecord` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_DuplicateBaseRecord` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `baserecordid` | `baserecordid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_AsyncOperations` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_MailboxTrackingFolders` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_UserEntityInstanceDatas` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `objectid` | `objectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_ProcessSession` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_BulkDeleteFailures` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_PrincipalObjectAttributeAccesses` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `objectid` | `objectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_Appointments` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_appointment` |
| `msdyn_bookingalertstatus_Emails` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_email` |
| `msdyn_bookingalertstatus_Faxes` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_fax` |
| `msdyn_bookingalertstatus_Letters` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_letter` |
| `msdyn_bookingalertstatus_PhoneCalls` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_phonecall` |
| `msdyn_bookingalertstatus_Tasks` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_task` |
| `msdyn_bookingalertstatus_RecurringAppointmentMasters` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_recurringappointmentmaster` |
| `msdyn_bookingalertstatus_SocialActivities` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_socialactivity` |
| `msdyn_bookingalertstatus_connections1` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `record1id` | `record1id_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_connections2` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `record2id` | `record2id_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_Annotations` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `objectid` | `objectid_msdyn_bookingalertstatus` |
| `msdyn_bookingalertstatus_ServiceAppointments` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_serviceappointment` |
| `msdyn_bookingalertstatus_cai_genericcontacts` | [msdyn_bookingalertstatus](msdyn_bookingalertstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingalertstatus_cai_genericcontact` |


## Source

Generated from [msdyn_bookingalertstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookingalertstatus')) on 2026-05-07.